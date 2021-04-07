function printNav(main) {
  main.insertAdjacentHTML(
    "afterbegin",
    `
<nav>
    <ul>
        <li id="portfolioLi">Portfolio</li>
        <li id="titleLi">Kimmie Lundgren</li>
        <li id="aboutMeLi">Education</li>
    </ul>
</nav>`
  );
}

function printProfile(main) {
  main.insertAdjacentHTML(
    "beforeend",
    `
    <section id="startPage">
      <p class="aboutMe"> Hi, My name is Kimmie. I love to explore and learn new things in life and at work. I've always been really good at problem solving and love having structure in everything I do. Follow me on my journey to become a Front-end developer!</p>
      <div class="soMe">
        <a href="https://linkedin.com/in/kimmie-lundgren-620401201/"><i class="fab fa-linkedin"></i></a>
        <a href="https://github.com/Kimmiich"><i class="fab fa-github"></i></a>
        <a href="mailto:kimmielundgren@live.se"><i class="fas fa-envelope"></i></a>
        </div>
    </section>`
  );
}

function printEducation(main) {
  main.insertAdjacentHTML(
    "beforeend",
    `
    <section id="educationPage">
    <article class="contentBox">
        <h2 class="secondTitles">Education</h2> 
          <h4>Medieinstitutet - Front-End Developer, <br>2020-2022</h4> 
          <p>Ongoing education.</p>
          <h4>Rodengymnasiet - Handel & Administration, <br> 2009-2012</h4>
          <p>Focus on service, business and turism.</p> 
    </article>
    <article class="contentBox">
    <h2 class="thirdTitles">Skills</h2>
        <ul class="skills">
            <li><i class="fab fa-html5"></i> <br> Html</li>
            <li><i class="fab fa-sass"></i></li>
            <li><i class="fab fa-css3-alt"></i> <br> Css</li>
            <li><i class="fab fa-js-square"></i> <br> Javascript</li>
            <li><i class="fab fa-github"></i> <br> Git & Github</li>
        </ul>
    </article>
    <article class="contentBox">
        <h2 class="thirdTitles">Experience</h2> 
          <h4>Lekia Norrtälje, <br>2010-</h4> 
          <p>Worked with sales and purchase. Also gained a lot of knowledge in communication and visual presentation.</p> 
    </article>
    </section>`
  );
}

function printPortfolio(main) {
  main.insertAdjacentHTML(
    "beforeend",
    `
    <section id="portfolioPage">
        <h2 class="secondTitles">Projects of mine</h2>
        <p class="portfolioText"> Some of my projects, both ongoing and finished. You can find even more code on my <a target='_blank' class="extraGitLink" href= "https://github.com/Kimmiich">github profile!</a></p>
    </section>`
  );
}

function printFooter(main) {
  main.insertAdjacentHTML(
    "beforeend",
    `
    <footer><a target='_blank' class="toTop" href= "#"><i class="fas fa-chevron-circle-up"></i></a></footer>`
  );
}

export { printNav, printProfile, printEducation, printPortfolio, printFooter };
