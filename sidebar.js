const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

const sidebarItems = [
    {
        name: "HOME",
        href: "./index.html",
        page: "index.html",
        icon: `
            <svg viewBox="0 0 24 24">
                <path d="M3 11.5L12 4l9 7.5"/>
                <path d="M5.5 10v10h13V10"/>
            </svg>
        `
    },
    {
        name: "MY PROFILE",
        href: "./profile.html",
        page: "profile.html",
        icon: `
            <svg viewBox="0 0 24 24">
                <circle cx="12" cy="8" r="4"/>
                <path d="M5 21c.7-4.2 3-6.5 7-6.5s6.3 2.3 7 6.5"/>
            </svg>
        `
    },
    {
        name: "MY DINOSAURS",
        href: "./dinosaurs.html",
        page: "dinosaurs.html",
        icon: `
            <svg viewBox="0 0 24 24">
                <path d="M6 4L3 14"/>
                <path d="M12 3L9 15"/>
                <path d="M18 5L14 17"/>
                <path d="M4 17c4 3 9 4 15 1"/>
            </svg>
        `
    },
    {
        name: "DINO MARKET",
        href: "./market.html",
        page: "market.html",
        icon: `
            <svg viewBox="0 0 24 24">
                <path d="M3 5h2l2.2 10h10.6l2-7H7"/>
                <circle cx="9" cy="19" r="1.5"/>
                <circle cx="18" cy="19" r="1.5"/>
            </svg>
        `
    },
    {
        name: "SKIN CREATOR",
        href: "./skin-creator.html",
        page: "skin-creator.html",
        extraClass: "skin-creator-link",
        extra: `<span class="patreon-lock">♛</span>`,
        icon: `
            <svg viewBox="0 0 24 24">
                <path d="M12 3a9 9 0 1 0 0 18h2a2 2 0 0 0 0-4h-1"/>
                <circle cx="7.5" cy="10" r="1"/>
                <circle cx="10" cy="6.5" r="1"/>
                <circle cx="15" cy="7" r="1"/>
                <circle cx="17" cy="11" r="1"/>
            </svg>
        `
    },
    {
        name: "FRIENDS",
        href: "./friends.html",
        page: "friends.html",
        extra: `<span class="friends-online-dot"></span>`,
        icon: `
            <svg viewBox="0 0 24 24">
                <circle cx="8" cy="8" r="3"/>
                <circle cx="16" cy="9" r="2.5"/>
                <path d="M2.5 20c.6-4 2.5-6 5.5-6s5 2 5.5 6"/>
                <path d="M13 15c1-.9 2.1-1.3 3.5-1.3 2.8 0 4.4 1.9 5 5.3"/>
            </svg>
        `
    },
    {
        name: "SERVER RULES",
        href: "./rules.html",
        page: "rules.html",
        icon: `
            <svg viewBox="0 0 24 24">
                <path d="M6 3h12v18H6z"/>
                <path d="M9 8h6"/>
                <path d="M9 12h6"/>
                <path d="M9 16h4"/>
            </svg>
        `
    }
];

const navHTML = sidebarItems.map(item => {

    const active =
        currentPage === item.page ? "active" : "";

    const extraClass =
        item.extraClass || "";

    return `
        <a href="${item.href}"
           class="sidebar-link ${extraClass} ${active}">

            <span class="sidebar-icon">
                ${item.icon}
            </span>

            <span>${item.name}</span>

            ${item.extra || ""}

        </a>
    `;

}).join("");

document.getElementById("site-sidebar").innerHTML = `

<aside class="sidebar">

    <div class="logo">
        <div class="logo-carnivore">CARNIVORE</div>
        <div class="logo-chaos">CHAOS</div>
        <div class="logo-evrima">EVRIMA</div>
    </div>

    <nav class="sidebar-nav">

        ${navHTML}

        <a href="#"
           class="sidebar-link discord-link">

            <span class="sidebar-icon">
                <svg viewBox="0 0 24 24">
                    <path d="M5 6c4-2 10-2 14 0l2 11c-2 2-4 3-6 3l-1-2"/>
                    <path d="M19 6l-2 11c-3 1-7 1-10 0L5 6"/>
                    <circle cx="9" cy="12" r="1"/>
                    <circle cx="15" cy="12" r="1"/>
                </svg>
            </span>

            <span>DISCORD</span>

        </a>

    </nav>

</aside>
`;
