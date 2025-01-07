// Elements
const loader = document.getElementById('loader');
const postsContainer = document.getElementById('posts');
const searchInput = document.getElementById('search');
const paginationContainer = document.getElementById('pagination');

// Data Storage
let allPosts = [];
let filteredPosts = [];
const postsPerPage = 5;
let currentPage = 1;

// Fetch posts from API
async function fetchPosts() {
  loader.style.display = 'block';
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    allPosts = await response.json();
    filteredPosts = allPosts; // Initialize filtered posts
    renderPosts();
    renderPagination();
  } catch (error) {
    console.error('Error fetching posts:', error);
    showError('Failed to load posts. Please try again later.');
  } finally {
    loader.style.display = 'none';
  }
}

// Render posts based on the current page
function renderPosts() {
  postsContainer.innerHTML = '';
  const start = (currentPage - 1) * postsPerPage;
  const end = start + postsPerPage;

  const postsToDisplay = filteredPosts.slice(start, end);

  if (postsToDisplay.length === 0) {
    postsContainer.innerHTML = `<p>No posts found.</p>`;
    return;
  }

  postsToDisplay.forEach((post) => {
    const highlightedTitle = highlightMatch(post.title, searchInput.value);
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.innerHTML = `
      <h2>${highlightedTitle}</h2>
      <p>${post.body}</p>
    `;
    postsContainer.appendChild(postElement);
  });
}

// Render pagination controls
function renderPagination() {
  paginationContainer.innerHTML = '';
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement('button');
    button.textContent = i;
    button.classList.toggle('disabled', i === currentPage);
    button.disabled = i === currentPage;

    button.addEventListener('click', () => {
      currentPage = i;
      renderPosts();
      renderPagination();
    });

    paginationContainer.appendChild(button);
  }
}

// Highlight matching text
function highlightMatch(text, query) {
  if (!query) return text;
  const regex = new RegExp(`(${query})`, 'gi');
  return text.replace(regex, '<span class="highlight">$1</span>');
}

// Filter posts based on search input
function filterPosts() {
  const query = searchInput.value.toLowerCase();
  filteredPosts = allPosts.filter((post) =>
    post.title.toLowerCase().includes(query)
  );
  currentPage = 1; // Reset to first page
  renderPosts();
  renderPagination();
}

// Event listener for search
searchInput.addEventListener('input', debounce(filterPosts, 300));

// Debounce function to optimize search
function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

// Display error message
function showError(message) {
  postsContainer.innerHTML = `<p style="color: red;">${message}</p>`;
}

// Fetch posts on page load
fetchPosts();
