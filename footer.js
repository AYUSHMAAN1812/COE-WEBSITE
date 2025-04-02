class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="blockquote-footer text-center mb-0">
        <p>&copy; Department of COE, IIT Hyderabad. All rights reserved.</p>
        <p>Last Updated: <span id="lastUpdated"></span></p>
        </div>
        `;
        this.querySelector("#lastUpdated").textContent = document.lastModified;
    }
}

customElements.define('my-footer', Footer);
