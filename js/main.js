
const buttonCardViewTile = document.querySelector(".tile_view_button");
const buttonCardViewLines = document.querySelector(".lines_view_button");

const courses = document.querySelector(".cards");

const buttonCardViewTileHandler = () => {
    courses.classList.remove('cards_lines');    
    courses.classList.add('cards_tile');
    buttonCardViewTile.style.opacity="1";
    buttonCardViewLines.style.opacity="0.5";
}
const buttonCardViewLinestHandler = () => {
    courses.classList.remove('cards_tile');
    courses.classList.add('cards_lines');
    buttonCardViewTile.style.opacity="0.5";
    buttonCardViewLines.style.opacity="1";
}


const init = () => {
   
    buttonCardViewLines.addEventListener("click", buttonCardViewLinestHandler);
    buttonCardViewTile.addEventListener("click", buttonCardViewTileHandler);
}
init();

// font sett

function set(){
    //colors
    let titl = document.querySelectorAll("h1, h2, h3")
    for (const item of titl) {
        item.style.cssText=`
            color: ${titlec.value};
            font-size ${titlef.value};
        `
    }

    let par = document.querySelectorAll("p");
    for (const item of par) {
        item.style.cssText=`
            color: ${textc.value};
            font-size ${textf.value};
        `
    }
    if(font.value == "oswald"){
        document.body.style="font-family: 'Oswald', sans-serif";
    }else if(font.value == "roboto"){
        document.body.style="font-family: 'Roboto Slab', serif";
    }else if(font.value == "kanit"){
        document.body.style="font-family: 'Kanit', sans-serif";
    }
}