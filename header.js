class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      `
    <div id="header" class="header d-flex align-items-center sticky-top">
    <div class="container-fluid container-xl position-relative d-flex align-items-center">

      <a href="index.html" class="logo d-flex align-items-center me-auto">
         <img src="assets/images/iithlogo.png" class="logo-img"/>
         <div class="logo-text">
            <h1>Computational Engineering</h1>
            <h2>Indian Institute of Technology, Hyderabad</h2>
         </div>
      </a>

      <nav id="navmenu" class="navmenu">
        <ul>
          <li><a href="index.html">Home</a></li>
          <li class="dropdown has-dropdown"><a href=""><span>About Us</span><img src="assets/svg/chevron-down.svg" class="bi bi-chevron-down" width="12.5px"/></a>
          <ul>
              <li><a href="index.html#aboutiith">About IITH</a></li>
              <li><a href="aboutcoe.html">About CO</a></li>
              <li><a href="index.html#announcements">Announcements</a></li>
              <li><a href="hod.html">Message from HOD</a></li>
          </ul>
          <li class="dropdown has-dropdown"><a href=""><span>Academics</span> <img src="assets/svg/chevron-down.svg" class="bi bi-chevron-down" width="12.5px"/></a>
            <ul>
              <li><a href="academic_calender.html">Academic Calender</a></li>
              <li><a href="curriculum.html">Curriculum</a></li>
            </ul>
          </li>

          <li class="dropdown has-dropdown"><a href="#"><span>People</span> <img src="assets/svg/chevron-down.svg" class="bi bi-chevron-down" width="12.5px"/></a>
            <ul>
              <li><a href="faculty.html">Faculty</a></li>
              <li><a href="students.html">Students</a></li>
              <li><a href="alumni.html">Alumni</a></li>
            </ul>
          </li>
          <li><a href="internships_placements.html">Internships & Placements</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
        <button id="menuToggle" type="button" onclick="" class="menu-toggle" ><img src="assets/svg/list.svg"  height="30px"/></button>
      </nav>

    </div>
</div>
    `;
    document.addEventListener('DOMContentLoaded', function () {
      const menuToggle = document.querySelector('.menu-toggle');
      const navmenu = document.getElementById("navmenu");
      const list = navmenu.querySelector('ul');
      const mediaQuery1199 = window.matchMedia("(max-width: 1199px)");

      // Ensure the menu is initially hidden when page loads on small screens
      if (mediaQuery1199.matches) {
        list.style.display = 'none';
      }

      // Toggle the menu when the toggle button is clicked
      menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();  // Prevent click from bubbling up
        if (list.style.display === 'none') {
          list.style.display = 'block';
        } else {
          list.style.display = 'none';
        }
      });

      // Hide the menu when clicking anywhere outside
      document.addEventListener('click', (e) => {
        // Only hide if the menu is currently visible
        if (list.style.display === 'block') {
          if (!navmenu.contains(e.target) && !menuToggle.contains(e.target)) {
            list.style.display = 'none';
          }
        }
      });

      // Hide the menu when pressing Escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          if (list.style.display === 'block') {
            list.style.display = 'none';
          }
        }
      });

      // Dropdown toggle logic
      const dropdowns = document.querySelectorAll(".dropdown");
      dropdowns.forEach((dropdown) => {
        const button = dropdown.querySelector('a');
        button.addEventListener('click', (event) => {
          event.preventDefault();
          event.stopPropagation(); // Prevent click from closing the menu
          dropdowns.forEach((d) => {
            if (d !== dropdown) d.classList.remove('active');
          });
          dropdown.classList.toggle('active');
        });
      });
    });

  }
}

customElements.define('my-header', Header);