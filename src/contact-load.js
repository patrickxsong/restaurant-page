const loadContact = () => {
    const main = document.createElement("h3");
    main.classList.add("main");
    main.textContent = "Contact goes here";
    return main;
};

export { loadContact };