class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="blockquote-footer text-center mb-0" style="background-color: #0c1a2b; color: #ffffff; width: 100vw; position: relative; left: 50%; right: 50%; margin-left: -50vw; margin-right: -50vw; padding: 40px 20px;margin-top:30px;">
            <div class="wholefooter" style="display: flex; justify-content: center; align-items: flex-start; gap: 40px; max-width: 1200px; margin: 0 auto; flex-wrap: wrap;">
                <div class="video-section" style="flex: 1 1 300px; max-width: 550px;">
                    <div class="player" style="margin-top:30px;">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/WotHf4J8kiQ?mute=1&loop=1&playlist=WotHf4J8kiQ" title="YouTube video player"></iframe>
                    </div>
                </div>
                <div class="links" style="flex: 1 1 200px; display: flex; flex-direction: column; gap: 15px; align-items: center;margin-top:80px;">
                    <h4 style="color: #F8C1A5; font-size: 18px;">Quick Links</h4>
                    <a href="https://www.iith.ac.in/" style="color: #ffffff; text-decoration: none; font-size: 16px;"><u>IIT Hyderabad</u></a>
                    <a href="./assets/files/IITH-Academic_Calendar_Jan-Apr-2025.pdf" style="color: #ffffff; text-decoration: none; font-size: 16px;"><u>Academic Calendar</u></a>
                    
                    <a href="./curriculum.html" style="color: #ffffff; text-decoration: none; font-size: 16px;"><u>Curriculum</u></a>
                </div>
                <div class="contact" style="flex: 1 1 200px; display: flex; flex-direction: column; gap: 5px; align-items:center;margin-top:80px;">
                    <h4 style="color: #F8C1A5; font-size: 18px;">Contact Us</h4>
                    <p style="color: #ffffff; font-size: 16px;">For inquiries, please contact:</p>
                    <p style="color: #ffffff; font-size: 16px;">Email: head@co.iith.ac.in</p>
                    <p style="color: #ffffff; font-size: 16px;">Phone: 040-2301-6359</p>
                    <p style="color: #ffffff;font-size:16px;">Near NH-65, Sangareddy, Kandi Telangana,India - 502285</p>
                </div>
            </div>
            <div style="margin-top: 40px;">
                <p>© CO Programme, IIT Hyderabad. All rights reserved.</p>
                <p>Last Updated: <span id="lastUpdated"></span></p>
            </div>
        </div>
        `;
        this.querySelector("#lastUpdated").textContent = document.lastModified;
    }
}

customElements.define('my-footer', Footer);
