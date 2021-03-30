import {printNav, printProfile, printEducation, printPortfolio, printFooter } from "./modules/printFunctions.mjs";

const main = document.querySelector("main");

printNav(main);
printProfile(main);
printPortfolio(main);
printEducation(main);
printFooter(main);

document.addEventListener("click", (evt)=> {
    console.log(evt.target);
    console.log(location.hash);
    switch (evt.target.id) {
        case "titleLi":
            console.log("Till startsida");
            location.hash = "startPage";
        break;
        case "portfolioLi":
            console.log("Till portfolio");
            location.hash = "portfolioPage";
        break;
        case "aboutMeLi":
            console.log("Till education");
            location.hash = "educationPage";

        break;
        case "footerArrow":
            console.log("Tillbaka upp");
        break;
    
    }
    
});

document.addEventListener("scroll", ()=> location.hash = "none")