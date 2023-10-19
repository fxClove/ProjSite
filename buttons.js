// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Attach a click event listener to the body
    document.body.addEventListener('click', function(event) {
        // Check if the clicked element or its parent has the class 'nav-button'
        let targetElement = event.target;
        while (targetElement !== null) {
            if (targetElement.classList.contains('nav-button')) {
                // Get the target URL from the data-target attribute and navigate to it
                const targetPage = targetElement.getAttribute('data-target');
                window.location.href = targetPage;
                return;
            }
            targetElement = targetElement.parentElement;
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-link');
    
    // This fetches everything after the last slash in the URL path,
    // assuming file names are unique this should be sufficient
    const currentPath = window.location.pathname.split('/').pop().toLowerCase();
  
    links.forEach(function(link) {
      // Get the href attribute and split it, then get the part after the last slash
      const linkPath = link.getAttribute('href').split('/').pop().toLowerCase();
  
      // Compare the path from the window location to the path from the link
      if (linkPath === currentPath) {
        link.classList.add('active');
      }
    });
  });


  document.addEventListener("DOMContentLoaded", function() {
    var toggleButton = document.getElementById("toggle-button");
    var navContainer = document.getElementById("nav-container");
    
    var isHidden = false; // Flag to keep track of the current state
  
    toggleButton.addEventListener("click", function() {
      if (isHidden) {
        navContainer.style.left = "0px";
      } else {
        navContainer.style.left = "-195px";
      }
      isHidden = !isHidden;
    });
  });

  window.addEventListener("scroll", function() {
    var scrollTop = window.scrollY;
    var navContainer = document.getElementById("nav-container");
    
    // Update margin-top gradually
    if (scrollTop < 118) {
      navContainer.style.marginTop = -scrollTop + "px";
    } else {
      navContainer.style.marginTop = "-118.5px";
    }
  });