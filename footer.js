class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
            `
        <p class="footer d-flex align-items-center">&copy; Department of COE, IIT Hyderabad. All rights reserved.</p>
        <p>Last Updated: <span id="lastUpdated"></span></p>
        `;
        // this.querySelector("#lastUpdated").textContent = document.lastModified;
    }
}
customElements.define('my-footer', Footer);