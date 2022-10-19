const socialNetwork = {
  user: [
    { username: 'Luiquecruz' }
  ],
  posts: [
    {
      id: Date.now(),
      author: 'Luiquecruz',
      content: 'Meu primeiro post'
    }
  ],
  createPost(data) {
    const innerId = Date.now()

    // pushes data to post arr
    socialNetwork.posts.push({
      id: data.id || innerId,
      author: data.author,
      content: data.content
    })

    // render post in view
    const postList = document.querySelector('#postList')

    postList.insertAdjacentHTML('afterbegin', `
      <li data-id="${innerId}" class="relative flex items-center justify-start justify-between bg-slate-200 rounded p-2 mb-2">
        <span class="text-zinc-700 p-2" contenteditable>${data.content}</span>
        <button type="button" class="btn-delete block relative z-40 ml-auto rounded border border-transparent p-2">
          <svg fill="#e11d48" class="pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
            <path d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z" />
          </svg>
        </button>
      </li>
    `)
  },
  readPost() {
    socialNetwork.posts.forEach(({ id, author, content }) => {
      socialNetwork.createPost({
        id,
        author: author,
        content: content
      })
    })
  },
  updatePost(id, updatedData) {
    const toBeUpdated = socialNetwork.posts.find((post) => {
      return post.id === Number(id)
    })

    toBeUpdated.content = updatedData
  },
  deletePost(id) {
    socialNetwork.posts = socialNetwork.posts.filter((currentPost) => {
      return currentPost.id !== Number(id)
    })
  }
}

// Form data
const formData = document.querySelector('#createPostForm')

// CREATE
formData.addEventListener('submit', (e) => {
  e.preventDefault()
  const creatPostField = document.querySelector('#createPost')

  socialNetwork.createPost({
    author: 'Luiquecruz',
    content: creatPostField.value
  })

  // clear field after post data
  creatPostField.value = ''
})

// READ
socialNetwork.readPost()

// UPDATE
document.querySelector('#postList').addEventListener('input', (e) => {
  const currentPost = e.target
  const id = currentPost.parentNode.getAttribute('data-id')

  socialNetwork.updatePost(id, currentPost.innerText)
})

// DELETE
document.querySelector('#postList').addEventListener('click', (e) => {
  const currentPost = e.target
  const triggerDelete = e.target.classList.contains('btn-delete')

  if (triggerDelete) {
    const id = currentPost.parentNode.getAttribute('data-id')

    socialNetwork.deletePost(id)

    currentPost.parentNode.remove()
  }
})
