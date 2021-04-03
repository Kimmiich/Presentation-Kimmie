import {printNav, printProfile, printEducation, printPortfolio, printFooter } from "./modules/printFunctions.mjs";
import {printRepo} from "./modules/portfolio.mjs";

const main = document.querySelector("main");

printNav(main);
printProfile(main);
printPortfolio(main);

//Hämta json fil
fetch("https://api.github.com/users/kimmiich/repos")
.then( response => response.json())
.then(data => {
    console.log(data);
    printRepo(data);

});

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