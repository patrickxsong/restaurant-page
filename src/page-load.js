import Icon from './odin-lined.png';

// const content = document.querySelector("#content");

const loadHeader = () => {
    const header = document.createElement("div");
    const home = document.createElement("button");
    const menu = document.createElement("button");
    const contact = document.createElement("button")

    header.classList.add("header");

    home.textContent = "Home";
    home.classList.add("open-tab");
    menu.textContent = "Menu";
    contact.textContent = "Contact";

    header.appendChild(home);
    header.appendChild(menu);
    header.appendChild(contact);

    return header;
}

const loadPage = () => {
    const myIcon = new Image();
    myIcon.src = Icon;
    
    const main = document.createElement("div");
    const name = document.createElement("h3");
    const copy = document.createElement("div");
    
    main.classList.add("main");

    name.classList.add("title");
    name.textContent = "APT 536";

    copy.classList.add("copy");
    copy.textContent = "Patrick's recipes from YT"

    main.appendChild(name);
    main.appendChild(myIcon);
    main.appendChild(copy);
    
    return main;
}

export {
    loadHeader,
    loadPage
};