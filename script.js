import {printNav, printProfile, printAboutMe, printPortfolio, printContact } from "./modules/printFunctions.mjs";

const main = document.querySelector("main");

printNav(main);
printProfile(main);
printAboutMe(main);
printPortfolio(main);
printContact(main);