
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
      <p class="secondTitle">Front-end Developer 2022</p>
    </section>`
)};

function printAboutMe(main) { 
    main.insertAdjacentHTML("beforeend", `
    <aside id="sideLine"></aside>
    <section id="aboutMePage">
    <article>
        <h2>About me</h2>
        <p>I´m 28 years old and live in Norrtälje. Right now I am studying to become a Front-End development with an expected exam in 2022. My goal with the education is to gain new knowledge in a new industry and hopefully find a new career. Something I value in programming is that you get to challenge yourself in every project and that you are constantly learning new things. What I add at work is excellent structure, curiosity and positive energy.</p>
    </article>
    <article>
        <h2>Education</h2> 
          <h4>Medieinstitutet - Front-End Developer, <br>2020-2022</h4> 
          <p>Ongoing education  inom Front-End. Kurserna innefattar bl.a. JavaScript.</p>
          <h4>Rodengymnasiet - Handel & Administration, <br> 2009-2012</h4>
          <p>Education with focus on service and how to run a business</p> 
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