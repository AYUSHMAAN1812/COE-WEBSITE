class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="blockquote-footer text-center mb-0" style="background-color: #0c1a2b; color: #ffffff; width: 100vw; position: relative; left: 50%; right: 50%; margin-left: -50vw; margin-right: -50vw; padding: 40px 20px;margin-top:30px;">
            <div class="wholefooter" style="display: flex; justify-content: center; align-items: center; gap: 40px; max-width: 1200px; margin: 0 auto; flex-wrap: wrap;">
                <div class="video-section" style="flex: 1; min-width: 300px; max-width: 550px;">
                    <div class="player" style="margin-top:30px;">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/WotHf4J8kiQ?mute=1&loop=1&playlist=WotHf4J8kiQ" title="YouTube video player"></iframe>
                    </div>
                </div>
                <div class="links" style="flex: 1; min-width: 200px; display: flex; flex-direction: column; gap: 15px; align-items: center;">
                    <a href="https://www.iith.ac.in/" style="color: #F8C1A5; text-decoration: none; font-size: 16px;"><u>IIT Hyderabad</u></a>
                    <a href="./assets/files/IITH-Academic_Calendar_Jan-Apr-2025.pdf" style="color: #F8C1A5; text-decoration: none; font-size: 16px;"><u>Academic Calendar</u></a>
                </div>
            </div>
            <div style="margin-top: 40px;">
                <p>© COE Programme, IIT Hyderabad. All rights reserved.</p>
                <p>Last Updated: <span id="lastUpdated"></span></p>
            </div>
        </div>
        `;
        this.querySelector("#lastUpdated").textContent = document.lastModified;
    }
}

customElements.define('my-footer', Footer);