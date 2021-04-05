
function printNav(main) { 
main.insertAdjacentHTML("afterbegin", `
<nav>
    <ul>
        <li id="portfolioLi">Portfolio</li>
        <li id="titleLi">Kimmie Lundgren</li>
        <li id="aboutMeLi">Education</li>
    </ul>
</nav>`
)};

function printProfile(main) { 
    main.insertAdjacentHTML("beforeend", `
    <section id="startPage">
      <p class="aboutMe"> Hi, My name is Kimmie. I love to explore and learn new things in life and at work. I've always been really good at problem solving and love having structure in everything I do. Follow me on my journey to become a Front-end developer!</p>
      <div class="soMe">
        <a href="https://linkedin.com/in/kimmie-lundgren-620401201/"><i class="fab fa-linkedin"></i></a>
        <a href="https://github.com/Kimmiich"><i class="fab fa-github"></i></a>
        <a href="mailto:kimmielundgren@live.se"><i class="fas fa-envelope"></i></a>
        </div>
    </section>`
)};

function printEducation(main) { 
    main.insertAdjacentHTML("beforeend", `
    <section id="educationPage">
    <article>
        <h2 class="secondTitles">Education</h2> 
          <h4>Medieinstitutet - Front-End Developer, <br>2020-2022</h4> 
          <p>Ongoing education  inom Front-End. Kurserna innefattar bl.a. JavaScript.</p>
          <h4>Rodengymnasiet - Handel & Administration, <br> 2009-2012</h4>
          <p>Education with focus on service and how to run a business</p> 
    </article>
    <article>
    <h2 class="thirdTitles">Skills</h2>
        <ul>
            <li>Html & Css</li>
            <li>Sass</li>
            <li>Javascript</li>
            <li>Git & Github</li>
        </ul>
    </article>
    <article>
        <h2 class="thirdTitles">Employments</h2> 
          <h4>Lekia Norrtälje, <br>2010-</h4> 
          <p>On this job I have learned service, economics, structure and so much more.</p> 
    </article>
    </section>`
)};

function printPortfolio(main) { 
    main.insertAdjacentHTML("beforeend", `
    <section id="portfolioPage">
        <h2 class="secondTitles">Projects of mine</h2>
        <p> Here are some of my projects, both ongoing and finished.</p>
    </section>`);
 
};

function printFooter(main) { 
    main.insertAdjacentHTML("beforeend", `
    <footer><i class="fas fa-chevron-circle-up"></i></footer>`
)};

export { printNav, printProfile, printEducation, printPortfolio, printFooter};