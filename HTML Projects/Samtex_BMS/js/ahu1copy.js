function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const dateTimeString = now.toLocaleDateString('en-US', options);
    
    document.getElementById('current-date-time').textContent = dateTimeString;
}

// Update the date and time every second
setInterval(updateDateTime, 1000);

// Initial call to display the date and time immediately on load
updateDateTime();

const nav = document.querySelector('nav');
const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.querySelector('#toggle-background');
const toggleIcon = document.querySelector('#toggle-icon');

let isDarkMode = false;

toggleBtn.addEventListener('click', () => {
  isDarkMode = !isDarkMode;
  if (isDarkMode) {
    nav.style.background = '#333';
    nav.style.color = '#fff';
    sidebar.style.background = '#444';
    sidebar.style.color = '#fff';
    toggleIcon.classList.replace('fa-sun', 'fa-moon');
  } else {
    nav.style.background = '#677D6A';
    nav.style.color = 'white';
    sidebar.style.background = '#3C3D37';
    sidebar.style.color = '#333';
    toggleIcon.classList.replace('fa-moon', 'fa-sun');
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const dashboardLink = document.getElementById("dashboard-link");
  dashboardLink.addEventListener("click", function(event) {
      event.preventDefault();
      window.location.href = "dashboard.html";
  });
});

const sidebarLinks = document.querySelectorAll('.sidebar a');

sidebarLinks.forEach(link => {
  link.addEventListener('click', () => {
    sidebarLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});