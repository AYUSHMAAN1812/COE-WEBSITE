class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="blockquote-footer text-center mb-0" style="background-color: #0c1a2b; color: #ffffff; width: 100vw; position: relative; left: 50%; right: 50%; margin-left: -50vw; margin-right: -50vw; padding: 20px 0;">
            <p style="font-size:30px;">Check out the Video</p>
            <div style="max-width: 560px; margin: 20px auto;">
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/WotHf4J8kiQ?mute=1&loop=1&playlist=WotHf4J8kiQ" title="YouTube video player"></iframe>
            </div>
            <p>© Department of COE, IIT Hyderabad. All rights reserved.</p>
            <p>Last Updated: <span id="lastUpdated"></span></p>
        </div>
        `;
        this.querySelector("#lastUpdated").textContent = document.lastModified;
    }
}

customElements.define('my-footer', Footer);
