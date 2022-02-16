import { loadHeader, loadPage } from "./page-load";
import { loadMenu } from "./menu-load";
import { loadContact } from "./contact-load";
import './style.css';

loadHeader();
loadPage();

const homeBtn = document.querySelector(".header :nth-child(1)");
const menuBtn = document.querySelector(".header :nth-child(2)");
const contactBtn = document.querySelector(".header :nth-child(3)");

const add = btn => btn.classList.add("open-tab");
const rm = btn => btn.classList.remove("open-tab");


homeBtn.addEventListener("click", e => {
    const main = document.querySelector(".main");
    if (main) content.removeChild(main);
    loadPage();
    rm(menuBtn);
    rm(contactBtn);
    add(homeBtn);
});

menuBtn.addEventListener("click", e => {
    loadMenu();
    rm(homeBtn);
    rm(contactBtn);
    add(menuBtn);
});

contactBtn.addEventListener("click", e => {
    loadContact();
    rm(homeBtn);
    rm(menuBtn);
    add(contactBtn);
});

