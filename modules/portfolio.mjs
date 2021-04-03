

function printRepo(data) {
    document.getElementById("portfolioPage").insertAdjacentHTML("beforeend", `
    <a target='_blank' class='github' href= ${data[4].html_url}>
            <article class="githubBox">
                <div class="imageBox">
                    <img src="./imgs/repo_firstresume.png" alt="My first resume">
                </div>    
                <div class="repoText">
                    <p class="repoTextContent">My very first code and online resume</p>
                </div>
            </article>
    </a>
    <a target='_blank' class='github' href= ${data[1].html_url}>
    <article class="githubBox">
        <div class="imageBox">
            <img src="./imgs/repo_finalCountdown.png" alt="A countdown for school">
        </div>    
        <div class="repoText">
            <p class="repoTextContent">A countdown and checklist for important milestones</p>
        </div>
    </article>
    </a>
    <a target='_blank' class='github' href= ${data[5].html_url}>
    <article class="githubBox">
        <div class="imageBox">
        <img src="./imgs/repo_myDiary.png" alt="A digital diary">
        </div>    
        <div class="repoText">
            <p class="repoTextContent">With this diary we used localstorage to save text</p>
        </div>
    </article>
    </a>
    <a target='_blank' class='github' href= ${data[10].html_url}>
    <article class="githubBox">
        <div class="imageBox">
        <img src="./imgs/repo_tictactoe.png" alt="A simpla Tic tac toe">
        </div>    
        <div class="repoText">
            <p class="repoTextContent">This is a simple game of tic-tac-toe</p>
        </div>
    </article>
    </a>`
    );
};

export {printRepo};
