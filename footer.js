class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="blockquote-footer text-center mb-0" style="background-color: #0c1a2b; color: #ffffff; width: 100vw; position: relative; left: 50%; right: 50%; margin-left: -50vw; margin-right: -50vw; padding: 20px 0;">
            <p>© Department of COE, IIT Hyderabad. All rights reserved.</p>
            <p>Last Updated: <span id="lastUpdated"></span></p>
        </div>
        `;
        this.querySelector("#lastUpdated").textContent = document.lastModified;
    }
}

customElements.define('my-footer', Footer);
