

function printRepo(data) {
    document.getElementById("portfolioPage").insertAdjacentHTML("beforeend", `
    <a target='_blank' class='github' href= ${data[4].html_url}>
            <article class="githubBox">
                <figure class="imageBox">
                    <img src="./imgs/repo_firstresume.png" alt="My first resume">
                    <figcaption>My very first code and online resume</figcaption>
                </figure>    
            </article>
    </a>
    <a target='_blank' class='github' href= ${data[1].html_url}>
    <article class="githubBox">
        <figure class="imageBox">
            <img src="./imgs/repo_finalCountdown.png" alt="A countdown for school">
            <figcaption>A countdown and checklist for important milestones</figcaption>
        </figure>    
    </article>
    </a>
    <a target='_blank' class='github' href= ${data[5].html_url}>
    <article class="githubBox">
        <figure class="imageBox">
            <img src="./imgs/repo_myDiary.png" alt="A digital diary">
            <figcaption>This diary uses localstorage to save text</figcaption>
        </figure>    
    </article>
    </a>
    <a target='_blank' class='github' href= ${data[10].html_url}>
    <article class="githubBox">
        <figure class="imageBox">
            <img src="./imgs/repo_tictactoe.png" alt="A simpla Tic tac toe">
            <figcaption>This is a simple game of tic-tac-toe</figcaption>
        </figure>    
    </article>
    </a>`
    );
};

export {printRepo};
