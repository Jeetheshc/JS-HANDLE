const fetchPosts = async () => {
  try {
    const response = await fetch('post.json');
    const posts = await response.json();
    post1(posts);
  } catch (error) {
    console.error('Fetching error:', error);

  }
};

const post1 = (posts) => {
  const postsContainer = document.getElementById('posts');
  postsContainer.innerHTML = posts.map(post => `
      
        <div class="card mb-4">
          <div class="card-body">
          <h6 class="card-title">${post.id}</h6>
          <h6 class="card-title">${post.userId}</h6>
            <h5 class="card-title">${post.title}</h5>
            <p class="card-text">${post.body}</p>
          </div>
            </div>
    `)
};

const displayError = (message) => {
  const postsContainer = document.getElementById('posts');
  postsContainer.innerHTML = `
      <div class="alert alert-danger" role="alert">
        ${message}
      </div>
    `;
};

document.addEventListener('DOMContentLoaded', fetchPosts);
