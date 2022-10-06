

let contSectionFive = document.querySelector("#contSectionFive")
let templateFive = document.querySelector("#templateFive").content
let fragmentFive = document.createDocumentFragment()


document.addEventListener("DOMContentLoaded", ()=>{
    dataFechFive()
})


const dataFechFive = async ()=>{
    try{
        const resFive = await fetch("sectionFive.json")
        const dataFive = await resFive.json()
        //console.log(dataFive)
        pintarBloqueFive(dataFive)
    }catch(error){
        console.log(" error en dataFechFive ")
    }
}


const pintarBloqueFive = (dataFive)=>{
    //console.log(dataFive)
    dataFive.forEach(element => {
        templateFive.querySelector("#templateFiveTitle").textContent = element.title
        templateFive.querySelector("#templateFiveDesc").textContent = element.description
        templateFive.querySelector("img").setAttribute("src", element.img)
        templateFive.querySelector("img").setAttribute("alt", element.title)
        templateFive.querySelector("#templateFiveButton").dataset.id = element.id

        
        let clone = templateFive.cloneNode(true)
        fragmentFive.appendChild(clone)
    });
    contSectionFive.appendChild(fragmentFive)


    //DELEGACION DE EVENTOS
    document.addEventListener("click", (e)=>{
        if(e.target.dataset.id === "1"){
            window.open("https://zelda.com/")
        }else if(e.target.dataset.id === "2"){
            window.open("https://starcraft2.com/es-es/")
        }else if(e.target.dataset.id === "3"){
            window.open("https://www.ea.com/es-es/games/need-for-speed/need-for-speed-underground")
        }else if(e.target.dataset.id === "4"){
            window.open("https://mario.nintendo.com/es/")
        }else if(e.target.dataset.id === "5"){
            window.open("https://cupheadgame.com/")
        }else if(e.target.dataset.id === "6"){
            window.open("https://mariokart64.com/")
        }
    })
}