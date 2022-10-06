let contFour = document.querySelector("#contFour")
let templateFour = document.querySelector("#templateFour").content
let fragmentFour = document.createDocumentFragment()


document.addEventListener("DOMContentLoaded", ()=>{
    dataFechFour()
})

const dataFechFour = async ()=>{
    try{
        const resFour = await fetch("sectionFour.json")
        const dataFour = await resFour.json()
        pintarFiguras(dataFour)    
    
    }
    catch(error){
        console.log(" ERROR EN dataFechFour")
    }
}


const pintarFiguras = (dataFour)=>{
    dataFour.forEach( element => {
        //console.log(element)
        templateFour.querySelector("#imgFondo").setAttribute("src", element.image)
        templateFour.querySelector("#imgFondo").setAttribute("alt", element.title)
        templateFour.querySelector("#imgCuadro").setAttribute("src", element.imageCuadro)
        templateFour.querySelector("#imgFondo").setAttribute("alt", element.title)
        templateFour.querySelector("#fourTitle").textContent = element.title
        templateFour.querySelector("#fourParrafo").textContent = element.description

        let cloneFour = templateFour.cloneNode(true)
        fragmentFour.appendChild(cloneFour)
    });
    contFour.appendChild(fragmentFour)
}