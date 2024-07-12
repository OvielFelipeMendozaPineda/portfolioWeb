class sidebarNav extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode: 'open'})
    }
    
    connectedCallback() {
        this.shadowRoot.innerHTML =  `
        <style rel="stylesheet">
            @import "./Components/sidebarNav/style.css"; 
        </style>
        <aside class="aside-menu">
            <div class="aside-pic">
                <img src="storage/img/aside-profile-pic.jpg" alt="No img.">
            </div>
            <nav class="aside-links">
                <ul>
                    <li class="circle" id="start"></li>
                    <li class="links-line"></li>
                    <li class="link"><a href="#"> HOME </a></li>
                    <li class="links-line"></li>
                    <li class="link"><a href="#"> ABOUT ME </a></li>
                    <li class="links-line"></li>
                    <li class="link"><a href="#"> RESUME </a></li>
                    <li class="links-line"></li>
                    <li class="link"><a href="#"> PORTFOLIO </a></li>
                    <li class="links-line"></li>
                    <li class="link"><a href="#"> CONTACT </a></li>
                    <li class="links-line"></li>
                    <li class="circle" id="end"></li>
                </ul>
            </nav>
        </aside>
        `;
    }
}
customElements.define('sidebar-nav', sidebarNav )