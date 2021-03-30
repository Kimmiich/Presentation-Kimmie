
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
      <h1 class="secondTitle">Front-end Developer 2022</h1>
      <p id="aboutMe"> Hi, I'm Kimmie and I've always had a passion for problem solving and structure. With a positive and including attitude a love taking on new challenges in programming and life.</p>
      <div id="soMe"></div>
    </section>`
)};

function printEducation(main) { 
    main.insertAdjacentHTML("beforeend", `
    <section class="educationPage" id="educationPage">
    <article>
        <h2>Education</h2> 
          <h4>Medieinstitutet - Front-End Developer, <br>2020-2022</h4> 
          <p>Ongoing education  inom Front-End. Kurserna innefattar bl.a. JavaScript.</p>
          <h4>Rodengymnasiet - Handel & Administration, <br> 2009-2012</h4>
          <p>Education with focus on service and how to run a business</p> 
    </article>
    <article>
    <h2>Skills</h2>
        <ul>
            <li>Html & Css</li>
            <li>Sass</li>
            <li>Javascript</li>
            <li>Git & Github</li>
        </ul>
    </article>
    <article>
        <h2>Employments</h2> 
          <h4>Lekia Norrtälje, <br>2010-</h4> 
          <p>On this job I have learned service, economics, structure and so much more.</p> 
    </article>
    </section>`
)};

function printPortfolio(main) { 
    main.insertAdjacentHTML("beforeend", `
    <section id="portfolioPage"></section>`);
 
};

//Hämta json fil
fetch("https://api.github.com/users/kimmiich/repos")
.then( response => response.json())
.then(data => {
console.log(data);
printRepos(data);
});

function printRepos(data) {

    let portfolioBox = document.getElementById("portfolioPage");
        for (let repo in data) {
            portfolioBox.insertAdjacentHTML("beforeend", `<p><a href="${data[repo].clone_url}">${data[repo].name}</a></p>`);
        };
};



function printFooter(main) { 
    main.insertAdjacentHTML("beforeend", `
    <footer> Hej då!</footer>`
)};

export { printNav, printProfile, printEducation, printPortfolio, printFooter};