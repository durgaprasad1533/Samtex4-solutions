// Update Date and Time
function updateDateTime() {
  try {
    const now = new Date();
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', options);
    const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    const dateElement = document.getElementById('current-date');
    const timeElement = document.getElementById('current-time');

    if (dateElement && timeElement) {
      dateElement.textContent = dateString;
      timeElement.textContent = timeString;
    } else {
      throw new Error('Date or time element not found');
    }
  } catch (error) {
    console.error('Error updating date and time:', error);
  }
}

let timeInterval = setInterval(updateDateTime, 1000);
updateDateTime();
window.addEventListener('unload', () => {
  clearInterval(timeInterval);
});

// -------------------------------------------

// Handle screen resize and toggle sidebar
let sidebarToggledManually = false;

function handleScreenResize() {
  try {
    const screenWidth = window.innerWidth;
    const sidebar = document.getElementById("sidebar");
    const footer = document.querySelector('footer');

    if (sidebar) {
      if (!sidebarToggledManually) {
        if (screenWidth < 568) {
          sidebar.classList.add("active"); // Collapse the sidebar
          toggleFooter(true); // hide footer when sidebar is collapsed
        } else {
          sidebar.classList.remove("active"); // Expand the sidebar
          toggleFooter(false); // show footer when sidebar is expanded
        }
      }
    } else {
      throw new Error('Sidebar element not found');
    }
  } catch (error) {
    console.error('Error handling screen resize:', error);
  }
}

// Debounce screen resize
let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(handleScreenResize, 200);
});
window.addEventListener("load", handleScreenResize);

// Toggle Dropdown
function toggleDropdown() {
  try {
    const dropdown = document.getElementById('user-dropdown');
    if (dropdown) {
      dropdown.classList.toggle('show');
    } else {
      throw new Error('Dropdown element not found');
    }
  } catch (error) {
    console.error('Error toggling dropdown:', error);
  }
}

// Event listener for clicks outside the dropdown
document.addEventListener('click', function(event) {
  try {
    const dropdown = document.getElementById('user-dropdown');
    const icon = document.getElementById('user-icon');

    if (dropdown && icon) {
      if (!dropdown.contains(event.target) && !icon.contains(event.target)) {
        dropdown.classList.remove('show');
      }
    } else {
      throw new Error('Dropdown or icon element not found');
    }
  } catch (error) {
    console.error('Error handling click outside dropdown:', error);
  }
});

// Consolidated event listener for sidebar toggle and mobile menu toggle
function toggleSidebarAndMobileMenu() {
  try {
    sidebarToggledManually = true; // Set manual toggle to true when button is clicked
    const container = document.querySelector('.containerbg');
    const sidebar = document.getElementById("sidebar");
    const footer = document.querySelector('footer');
    const sidebarIcons = document.getElementById('sidebar-icons0');

    if (container && sidebar && sidebarIcons) {
      container.classList.toggle('sidebar-open');
      container.classList.toggle('sidebar-closed');
      sidebar.classList.toggle("active");
      sidebarIcons.classList.toggle('active');

      if (container.classList.contains('sidebar-open')) {
        footer.classList.remove('d-none');
      } else {
        footer.classList.add('d-none');
      }
    } else {
      throw new Error('Container, sidebar, or sidebar icons element not found');
    }
  } catch (error) {
    console.error('Error toggling sidebar and mobile menu:', error);
  }
}

// Assign the consolidated event listener to the buttons
const sidebarToggle = document.getElementById('sidebarToggle');
const mobileMenuBtn = document.getElementById('mobile-menu-btn0');

sidebarToggle.addEventListener('click', toggleSidebarAndMobileMenu);
mobileMenuBtn.addEventListener('click', toggleSidebarAndMobileMenu);

// Sidebar hover effect for icons dropdown (Optional)
const sideIconsHover = document.getElementById('sidebar-icons0');
const dropdownMenu = document.querySelector('.dropdown-menuk');

sideIconsHover.addEventListener('mouseover', () => {
  if (sideIconsHover.offsetWidth <= 60) {
    dropdownMenu.style.display = 'block';
  }
});

sideIconsHover.addEventListener('mouseout', () => {
  dropdownMenu.style.display = 'none';
});
// to display neo-images and move toggle button acording to..
document.getElementById('sidebarToggle').addEventListener('click', function() {
  document.getElementById('neo-image').classList.toggle('d-none');
  document.getElementById('l-logo').classList.toggle('d-none');
  this.classList.toggle('toggled');
});
// ------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const sidebar = document.getElementById('sidebar');

  // Check for saved theme in localStorage
  let isDarkMode = localStorage.getItem('darkMode') === 'true';

  // Apply the saved theme on page load
  if (isDarkMode) {
      document.body.classList.add('dark-theme');
      themeToggleBtn.textContent = '\u2600'; // Sun symbol for light theme
      sidebar.style.background = "linear-gradient(to right,#0f2027, black, black)";
      sidebar.style.color = "white";
  } else {
      themeToggleBtn.textContent = '\u263E'; // Moon symbol for dark theme
      sidebar.style.backgroundColor = "yellow";
  }

  // Event listener for theme toggle button
  themeToggleBtn.addEventListener('click', () => {
      isDarkMode = !isDarkMode;  // Toggle the mode
      document.body.classList.toggle('dark-theme', isDarkMode);

      // Update button text based on mode
      themeToggleBtn.textContent = isDarkMode ? '\u2600' : '\u263E';

      // Change sidebar background and color
      if (isDarkMode) {
          sidebar.style.background = "linear-gradient(to right,#0f2027, black, black)";
          sidebar.style.color = "white";
      } else {
          sidebar.style.backgroundColor = "yellow";
      }

      // Store the preference in localStorage
      localStorage.setItem('darkMode', isDarkMode);
  });
});
// ------------------------------------------------------------------------------