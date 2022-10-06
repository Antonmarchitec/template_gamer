
let contHeader = document.querySelector("#contHeader")

document.addEventListener("scroll", ()=>{
    const posicionElement = contHeader.offsetTop
    //console.log(posicionElement)

    const positionScrolling = document.documentElement.scrollTop 
    //console.log(positionScrolling)


    if(positionScrolling > 0 && positionScrolling < 1000){
        //console.log("ya verde")
        contHeader.style.boxShadow = "0px 3px 20px green"
        contHeader.style.transition = "1s"
    }else if(positionScrolling > 1000 && positionScrolling < 2000){
        //console.log("ya amarillo")
        contHeader.style.boxShadow = "0px 3px 20px yellow"
        contHeader.style.transition = "1s"
    }else if(positionScrolling > 2000 && positionScrolling < 4000){
        //console.log("ya rojo")
        contHeader.style.boxShadow = "0px 3px 20px red"
        contHeader.style.transition = "1s"
    }else if(positionScrolling > 4000 && positionScrolling < 6000){
        //console.log("ya violeta")
        contHeader.style.boxShadow = "0px 3px 20px rgb(14, 223, 255)"
        contHeader.style.transition = "1s"
    }
})
