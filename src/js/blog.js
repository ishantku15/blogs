// Blog search and filter functionality
document.addEventListener('DOMContentLoaded', () => {
  initializeSearch();
});

function initializeSearch() {
  const searchInput = document.getElementById('search-input');
  const tagButtons = document.querySelectorAll('.tag-filter');
  const blogPosts = document.querySelectorAll('.blog-post');
  
  if (!searchInput || !tagButtons.length || !blogPosts.length) return;
  
  // Search functionality
  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase().trim();
    filterPosts(searchTerm, getCurrentTag());
  });
  
  // Tag filtering
  tagButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Toggle active class
      tagButtons.forEach(btn => btn.classList.remove('bg-primary-500', 'text-white'));
      button.classList.add('bg-primary-500', 'text-white');
      
      const tag = button.dataset.tag || '';
      filterPosts(searchInput.value.toLowerCase().trim(), tag);
    });
  });
}

function getCurrentTag() {
  const activeButton = document.querySelector('.tag-filter.bg-primary-500');
  return activeButton ? activeButton.dataset.tag || '' : '';
}

function filterPosts(searchTerm, tag) {
  const blogPosts = document.querySelectorAll('.blog-post');
  let hasResults = false;
  
  blogPosts.forEach(post => {
    const postTitle = post.dataset.title.toLowerCase();
    const postExcerpt = post.dataset.excerpt.toLowerCase();
    const postTags = post.dataset.tags.toLowerCase();
    
    // Check if post matches search term and selected tag
    const matchesSearch = !searchTerm || postTitle.includes(searchTerm) || postExcerpt.includes(searchTerm);
    const matchesTag = !tag || postTags.includes(tag);
    
    if (matchesSearch && matchesTag) {
      post.style.display = 'block';
      hasResults = true;
      
      // Add animation
      post.classList.add('animate-fade-in');
      setTimeout(() => {
        post.classList.remove('animate-fade-in');
      }, 500);
    } else {
      post.style.display = 'none';
    }
  });
  
  // Show/hide no results message
  const noResults = document.getElementById('no-results');
  if (noResults) {
    noResults.style.display = hasResults ? 'none' : 'block';
  }
}