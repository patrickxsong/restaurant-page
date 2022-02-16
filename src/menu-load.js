const loadMenu = () => {
    const main = document.createElement("h3");
    main.classList.add("main");
    main.textContent = "Menu goes here";
    return main;
};

export { loadMenu };