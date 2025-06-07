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
          
          <li class="dropdown has-dropdown"><a href=""><span>Academics</span> <img src="assets/svg/chevron-down.svg" class="bi bi-chevron-down" width="12.5px"/></a>
            <ul>
              <li><a href="academic_calender.html">Academic Calender</a></li>
              <li><a href="courses.html">Courses</a></li>
              <li><a href="curriculum.html">Curriculum</a></li>
              <li><a href="time_tables.html">Time Tables</a></li>
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
          <li><a href="hod.html">Message from HOD</a></li>
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
      const mediaQuery450 = window.matchMedia("(max-width: 450px)");

      // Ensure the menu is initially hidden when page loads
      if(mediaQuery1199.matches) list.style.display = 'none';
      menuToggle.addEventListener('click', () => {
        if (list.style.display == 'none') {
          list.style.display = 'block';
        }
        else list.style.display = 'none';
      });
      
    });
    document.addEventListener("DOMContentLoaded", function () {
      const dropdowns = document.querySelectorAll(".dropdown");

      dropdowns.forEach((dropdown) => {
        const button = dropdown.querySelector('a');
        const chevron = dropdown.querySelector('.bi-chevron');

        button.addEventListener('click', (event) => {
          event.preventDefault();

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