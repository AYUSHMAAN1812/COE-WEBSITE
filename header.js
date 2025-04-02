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
              <li><a href="staff.html">Staff</a></li>
              <li><a href="students.html">Students</a></li>
              <li><a href="alumni.html">Alumni</a></li>
            </ul>
          </li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
        <img src="assets/svg/list.svg" class="mobile-nav-toggle d-xl-none bi bi-list" height="30px"/>
      </nav>

    </div>
</div>
    `;
    this.querySelector('mobile-nav-toggle').addEventListener("click", ()=>{
      this.querySelector(".nav-links").classList.toggle("active");
    });
  }
}

customElements.define('my-header', Header);