import { loadHeader, loadPage } from "./page-load";
import { loadMenu } from "./menu-load";
import { loadContact } from "./contact-load";
import './style.css';

const restaurant = (() => {
    const content = document.querySelector("#content");

    const render = fun => content.appendChild(fun);

    render(loadHeader());
    render(loadPage());

    const homeBtn = document.querySelector(".header :nth-child(1)");
    const menuBtn = document.querySelector(".header :nth-child(2)");
    const contactBtn = document.querySelector(".header :nth-child(3)");

    const add = btn => btn.classList.add("open-tab");
    const rm = btn => btn.classList.remove("open-tab");

    const rmMain = () => {
        const main = document.querySelector(".main");
        if (main) content.removeChild(main);
    };

    homeBtn.addEventListener("click", e => {
        rmMain();
        render(loadPage());
        rm(menuBtn);
        rm(contactBtn);
        add(homeBtn);
    });
    
    menuBtn.addEventListener("click", e => {
        rmMain();
        render(loadMenu());
        rm(homeBtn);
        rm(contactBtn);
        add(menuBtn);
    });
    
    contactBtn.addEventListener("click", e => {
        rmMain();
        render(loadContact());
        rm(homeBtn);
        rm(menuBtn);
        add(contactBtn);
    });
    
})();


