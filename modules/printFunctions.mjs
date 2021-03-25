
function printNav(main) { 
main.insertAdjacentHTML("afterbegin", `
<nav>
    <ul>
        <li id="contactLi">Contact</li>
        <li id="portfolioLi">Portfolio</li>
        <li id="aboutMeLi">About Me</li>
    </ul>
</nav>`
)};

function printProfile(main) { 
    main.insertAdjacentHTML("beforeend", `
    <section id="startPage">
      <h1>Kimmie Lundgren</h1>
      <p>Front-end Developer 2022</p>
      <i class="fas fa-arrow-down"></i>
</section>`
)};

function printAboutMe(main) { 
    main.insertAdjacentHTML("beforeend", `
    <aside id="sideLine"></aside>
    <section id="aboutMePage">
    <article>
        <h2>About me</h2>
        <p>antingen text eller li</p>/<li></li>
    </article>
    </section>`
)};

function printPortfolio(main) { 
    main.insertAdjacentHTML("beforeend", `
    <section id="portfolioPage">
      <article>
        <h2>Projects</h2>
        <img src="" alt="bild repo">
        <p>beskrivande text för repon, 4 repon på mobilvyn, tanke: en mer knapp?</p>
      </article>
    </section>`
)};

function printContact(main) { 
    main.insertAdjacentHTML("beforeend", `
    <section id="contactPage">
    <article id="some">
    </article>
    <div id="lineBreak"></div>
    <article>
        <h2>Contact me</h2>
        <input id="name" type="text" placeholder="Enter your name"><br>
        <input id="email" type="email" placeholder="E-mail"><br>
        <textarea id="message" rows="10" cols="30" placeholder="Write your message here..."></textarea><br>
        <button id="btn">Send</button>
    </article> 
</section>`
)};

export { printNav, printProfile, printAboutMe, printPortfolio, printContact };