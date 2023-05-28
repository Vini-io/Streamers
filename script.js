
document.addEventListener("DOMContentLoaded", () => {

    let time = 0;
    selectPost1();
    setInterval(() => {
        if(time === 0){
            selectPost2();
            time++;
        }else if(time === 1){
            selectPost3();
            time++;
        }else{
            selectPost1();
            time=0;
        }
        
        console.log("teste")
    }, 10000);

})


function clickPost(key){
    console.log("KEU")
    if(key == 1){
        selectPost1();
    }else if(key == 2){
        selectPost2();
    }else{
        selectPost3();
    }

}


function selectPost1() {
    
    document.querySelector(".action_post").innerHTML = `

            <div class="action_carousel">
                <div class="select_carousel select1" onclick="clickPost('1')"></div>
                <div class="select_carousel select2" onclick="clickPost('2')"></div>
                <div class="select_carousel select3" onclick="clickPost('3')"></div>
            </div>

    <div class="foco_post"></div>
    <img class="post_mandalorian" src="./assets/main/action_post/action_mandalorian/background/Mandalorian.png">
    <div class="post_description">
        <span>Season 3</span>
        <h2>The Mandalorian</h2>
        <h4>2h40m - 2022 - Fantasy - Actions</h4>
        <p>
            The third season of the American television series The Mandalorian stars Pedro Pascal as the title
            character, a bounty hunter traveling to Mandalore to redeem his past transgressions with his adopted
            son Grogu and being aided on their journey by fellow Mandalorian Bo-Katan Kryze.
        </p>
        <div class="post_btn">
            <div class="post_btn_playNow">
                <img src="./assets/main/action_post/btn/playNow.png">
                <span>Pay Now</span>
            </div>
            <div class="post_btn_watchTrailer">
                <img src="./assets/main/action_post/btn/watchTrailer.png">
                <span>Watch Trailer</span>
            </div>
            <div class="post_btn_addWatchlist">
                <img src="./assets/main/action_post/btn/add.png">
                <span>Add Watchlist</span>
            </div>
        </div>
    </div>
    `;
    document.querySelector(".select1").classList.add("select_post")
}



function selectPost2(){
    document.querySelector(".action_post").innerHTML = `

            <div class="action_carousel">
                <div class="select_carousel select1" onclick="clickPost('1')"></div>
                <div class="select_carousel select2" onclick="clickPost('2')"></div>
                <div class="select_carousel select3" onclick="clickPost('3')"></div>
            </div>

    <div class="foco_post"></div>
    <img class="post_mandalorian" src="./assets/main/action_post/theLastOfUs.png">
    <div class="post_description">
        <span>Season 1</span>
        <h2>The Last Of Us</h2>
        <h4>9 Episodes • 2022 • Fantasy • Actions</h4>
        <p>
        The Last of Us is an American post-apocalyptic drama television series created by Craig Mazin and Neil Druckmann for HBO. Based on the 2013 video game developed by Naughty Dog, the series is set in 2023, twenty years into a pandemic caused by a mass fungal infection, which causes its hosts to transform into zombie-like creatures and collapses society. The series follows Joel (Pedro Pascal), a smuggler tasked with escorting the immune teenager Ellie (Bella Ramsey) across a post-apocalyptic United States.... More
        </p>
        <div class="post_btn">
            <div class="post_btn_playNow">
                <img src="./assets/main/action_post/btn/playNow.png">
                <span>Pay Now</span>
            </div>
            <div class="post_btn_watchTrailer">
                <img src="./assets/main/action_post/btn/watchTrailer.png">
                <span>Watch Trailer</span>
            </div>
            <div class="post_btn_addWatchlist">
                <img src="./assets/main/action_post/btn/add.png">
                <span>Add Watchlist</span>
            </div>
        </div>
    </div>
    `;
    document.querySelector(".select2").classList.add("select_post")
}

function selectPost3(){
    document.querySelector(".action_post").innerHTML = `

            <div class="action_carousel">
                <div class="select_carousel select1" onclick="clickPost('1')"></div>
                <div class="select_carousel select2" onclick="clickPost('2')"></div>
                <div class="select_carousel select3" onclick="clickPost('3')"></div>
            </div>

    <div class="foco_post"></div>
    <img class="post_mandalorian" src="./assets/main/action_post/BlackPant.png">
    <div class="post_description">
        <span>Film</span>
        <h2>Black Panther: Wakanda Forever</h2>
        <h4>2022 ‧ Ação/Aventura ‧ 2h 41m</h4>
        <p>
        Pantera Negra: Wakanda Para Sempre é a continuação do longa Pantera Negra, da Marvel, dirigido por Ryan Coogler e produzido por Kevin Feige. No filme, o mundo de Wakanda se expande. Após a morte do ator de T'Challa (Chadwick Boseman) o foco de Wakanda Para Sempre são os personagens em volta do Pantera Negra.
        </p>
        <div class="post_btn">
            <div class="post_btn_playNow">
                <img src="./assets/main/action_post/btn/playNow.png">
                <span>Pay Now</span>
            </div>
            <div class="post_btn_watchTrailer">
                <img src="./assets/main/action_post/btn/watchTrailer.png">
                <span>Watch Trailer</span>
            </div>
            <div class="post_btn_addWatchlist">
                <img src="./assets/main/action_post/btn/add.png">
                <span>Add Watchlist</span>
            </div>
        </div>
    </div>
    `;
    document.querySelector(".select3").classList.add("select_post")
}


document.querySelector(".next_platform").addEventListener("click", () => {
    let platform = document.querySelector(".platform").classList;
    let next = document.querySelector(".next_platform").classList

    next.toggle("rotate_next");

    platform.toggle("move_platform")
    console.log(platform)

})


