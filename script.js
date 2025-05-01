// Select elements
const openMenu = document.querySelector('.open_menu');
const closeMenu = document.querySelector('.close_menu');
const sidebar = document.querySelector('.sidebar');

// Show sidebar and toggle icons
openMenu.addEventListener('click', (event) => {
  sidebar.classList.add('active');
  openMenu.style.display = 'none';    // Hide open icon
  closeMenu.style.display = 'block';  // Show close icon
  event.stopPropagation(); // Prevent click event from propagating to the document
});

// Hide sidebar and toggle icons
closeMenu.addEventListener('click', (event) => {
  sidebar.classList.remove('active');
  closeMenu.style.display = 'none';   // Hide close icon
  openMenu.style.display = 'block';   // Show open icon
  event.stopPropagation(); // Prevent click event from propagating to the document
});

// Hide sidebar when clicking outside of it (for mobile)
document.addEventListener('click', (event) => {
  if (sidebar.classList.contains('active') && !sidebar.contains(event.target)) {
    sidebar.classList.remove('active');
    closeMenu.style.display = 'none';   // Hide close icon
    openMenu.style.display = 'block';   // Show open icon
  }
});
