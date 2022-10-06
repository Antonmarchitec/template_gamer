
let btnTop = document.getElementById("iconTop");

window.addEventListener("scroll", () =>{
    let positionScroll = document.documentElement.scrollTop;
    //console.log(positionScroll)
    let positionElement = btnTop.offsetTop;
    //console.log(positionElement);      //453

    if(positionScroll > positionElement - 100){     //753
        btnTop.classList.add("iconTopJS")
    }else{
        btnTop.classList.remove("iconTopJS");
    }
})