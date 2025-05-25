// Admin authentication
let isAuthenticated = false;
const ADMIN_PASSWORD = "ishant2025"; // In a real app, this would be handled securely

// Get DOM elements
const loginForm = document.getElementById('loginForm');
const adminPanel = document.getElementById('adminPanel');
const loginError = document.getElementById('loginError');
const postsList = document.getElementById('postsList');
const postForm = document.getElementById('postForm');
const newPostBtn = document.getElementById('newPostBtn');
const editPostForm = document.getElementById('editPostForm');
const deleteConfirmDialog = document.getElementById('deleteConfirmDialog');

// Import posts from data file
import { posts } from '../data/posts.js';

let globalPosts = [...posts];
let currentEditId = null;

// Authentication
function authenticate(password) {
  if (password === ADMIN_PASSWORD) {
    isAuthenticated = true;
    loginForm.style.display = 'none';
    adminPanel.style.display = 'block';
    renderPosts();
    return true;
  }
  return false;
}

// Render posts in admin panel
function renderPosts() {
  if (!postsList) return;
  
  postsList.innerHTML = '';
  globalPosts.forEach(post => {
    const postEl = document.createElement('div');
    postEl.className = 'border border-slate-200 rounded-lg p-4 mb-4 hover:shadow-sm transition-shadow';
    postEl.innerHTML = `
      <div class="flex justify-between items-center">
        <h3 class="font-semibold text-slate-800">${post.title}</h3>
        <div class="space-x-2">
          <button class="edit-post-btn px-3 py-1 bg-primary-100 text-primary-700 rounded hover:bg-primary-200 transition-colors" data-id="${post.id}">
            Edit
          </button>
          <button class="delete-post-btn px-3 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors" data-id="${post.id}">
            Delete
          </button>
        </div>
      </div>
      <p class="text-sm text-slate-500 mt-1">Published: ${new Date(post.date).toLocaleDateString()}</p>
    `;
    
    // Add event listeners
    const editBtn = postEl.querySelector('.edit-post-btn');
    const deleteBtn = postEl.querySelector('.delete-post-btn');
    
    editBtn.addEventListener('click', () => editPost(post.id));
    deleteBtn.addEventListener('click', () => confirmDelete(post.id));
    
    postsList.appendChild(postEl);
  });
}

// Create new post
function createPost(postData) {
  // Generate a new ID
  const newId = Math.max(0, ...globalPosts.map(p => p.id)) + 1;
  const slug = generateSlug(postData.title);
  
  const newPost = {
    id: newId,
    slug,
    ...postData,
    date: new Date().toISOString().split('T')[0] // Format: YYYY-MM-DD
  };
  
  globalPosts.push(newPost);
  saveChanges();
  return newPost;
}

// Edit post
function editPost(id) {
  const post = globalPosts.find(p => p.id === id);
  if (!post) return;
  
  currentEditId = id;
  
  // Fill form fields
  document.getElementById('edit-title').value = post.title;
  document.getElementById('edit-excerpt').value = post.excerpt;
  document.getElementById('edit-content').value = post.content;
  document.getElementById('edit-tags').value = post.tags.join(', ');
  document.getElementById('edit-thumbnail').value = post.thumbnail;
  document.getElementById('edit-featured').checked = post.featured;
  
  // Show edit form
  document.getElementById('postsList').style.display = 'none';
  document.getElementById('newPostBtn').style.display = 'none';
  document.getElementById('editPostForm').style.display = 'block';
}

// Update post
function updatePost(id, postData) {
  const index = globalPosts.findIndex(p => p.id === id);
  if (index === -1) return false;
  
  // Preserve id, slug, date, and author
  const updatedPost = {
    ...globalPosts[index],
    title: postData.title,
    excerpt: postData.excerpt,
    content: postData.content,
    tags: postData.tags,
    thumbnail: postData.thumbnail,
    featured: postData.featured
  };
  
  globalPosts[index] = updatedPost;
  saveChanges();
  return true;
}

// Delete post
function deletePost(id) {
  const index = globalPosts.findIndex(p => p.id === id);
  if (index === -1) return false;
  
  globalPosts.splice(index, 1);
  saveChanges();
  renderPosts();
  return true;
}

// Confirm delete
function confirmDelete(id) {
  const post = globalPosts.find(p => p.id === id);
  if (!post) return;
  
  document.getElementById('deletePostTitle').textContent = post.title;
  document.getElementById('confirmDeleteBtn').setAttribute('data-id', id);
  deleteConfirmDialog.showModal();
}

// Generate slug from title
function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

// Save changes
function saveChanges() {
  // Update the global posts array
  window.globalPosts = globalPosts;
  
  // Create a downloadable file with the updated posts data
  const postsContent = `export const posts = ${JSON.stringify(globalPosts, null, 2)};`;
  const blob = new Blob([postsContent], { type: 'text/javascript' });
  const url = URL.createObjectURL(blob);
  
  // Create download link
  const a = document.createElement('a');
  a.href = url;
  a.download = 'posts.js';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  
  // Show success message
  const notification = document.createElement('div');
  notification.className = 'fixed bottom-4 right-4 bg-green-100 text-green-800 px-4 py-2 rounded shadow-md';
  notification.innerHTML = `
    <p class="mb-2">Changes saved! To update the website:</p>
    <ol class="list-decimal list-inside text-sm">
      <li>Download the new posts.js file</li>
      <li>Replace the existing src/data/posts.js with the new file</li>
      <li>Commit and push the changes to your repository</li>
    </ol>
  `;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
  }, 10000);
}

// Initialize admin panel
function initAdminPanel() {
  // Login form submission
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const password = document.getElementById('password').value;
      if (!authenticate(password)) {
        loginError.textContent = 'Incorrect password!';
        loginError.style.display = 'block';
      }
    });
  }
  
  // New post form
  if (postForm) {
    postForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const formData = new FormData(e.target);
      
      const newPost = {
        title: formData.get('title'),
        excerpt: formData.get('excerpt'),
        content: formData.get('content'),
        tags: formData.get('tags').split(',').map(tag => tag.trim()),
        thumbnail: formData.get('thumbnail'),
        author: 'Ishant Sharma',
        featured: formData.get('featured') === 'on'
      };
      
      createPost(newPost);
      e.target.reset();
      document.getElementById('postForm').style.display = 'none';
      document.getElementById('postsList').style.display = 'block';
      document.getElementById('newPostBtn').style.display = 'block';
    });
  }
  
  // Edit post form
  if (editPostForm) {
    editPostForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const updatedPost = {
        title: document.getElementById('edit-title').value,
        excerpt: document.getElementById('edit-excerpt').value,
        content: document.getElementById('edit-content').value,
        tags: document.getElementById('edit-tags').value.split(',').map(tag => tag.trim()),
        thumbnail: document.getElementById('edit-thumbnail').value,
        featured: document.getElementById('edit-featured').checked
      };
      
      if (updatePost(currentEditId, updatedPost)) {
        document.getElementById('editPostForm').style.display = 'none';
        document.getElementById('postsList').style.display = 'block';
        document.getElementById('newPostBtn').style.display = 'block';
        renderPosts();
      }
    });
    
    // Cancel edit
    document.getElementById('cancelEditBtn').addEventListener('click', function(e) {
      e.preventDefault();
      document.getElementById('editPostForm').style.display = 'none';
      document.getElementById('postsList').style.display = 'block';
      document.getElementById('newPostBtn').style.display = 'block';
    });
  }
  
  // New post button
  if (newPostBtn) {
    newPostBtn.addEventListener('click', function() {
      document.getElementById('postForm').style.display = 'block';
      document.getElementById('postsList').style.display = 'none';
      document.getElementById('newPostBtn').style.display = 'none';
    });
  }
  
  // Cancel new post
  document.getElementById('cancelPostBtn')?.addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('postForm').style.display = 'none';
    document.getElementById('postsList').style.display = 'block';
    document.getElementById('newPostBtn').style.display = 'block';
  });
  
  // Delete confirmation
  if (deleteConfirmDialog) {
    document.getElementById('confirmDeleteBtn').addEventListener('click', function() {
      const id = parseInt(this.getAttribute('data-id'), 10);
      deletePost(id);
      deleteConfirmDialog.close();
    });
    
    document.getElementById('cancelDeleteBtn').addEventListener('click', function() {
      deleteConfirmDialog.close();
    });
  }
  
  // If authenticated, render posts
  if (isAuthenticated) {
    renderPosts();
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initAdminPanel);