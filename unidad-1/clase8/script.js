

const input = document.querySelector('#buscador')

input.addEventListener("keydown", function(evento){   let valor = evento.target.value
    if(evento.key == "Enter"){
        // alert("Buscando: "+ valor)
        // alert(`La busqueda de ${valor} no arrojo resultado`)
        saludar()
    }
})

var contador = 1
function saludar(){
    if(input.value.length < 4 ){
        alert('El texto es muy corto')
        return
    }




    const contenedor = document.querySelector("#contenedor")
    let valor = input.value
    const p = document.createElement("p")
    const img = document.createElement("img")
    img.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Big_Floppa_and_Justin_2_%28cropped%29.jpg/528px-Big_Floppa_and_Justin_2_%28cropped%29.jpg")

    img.style.height="100px"
    img.style.width="100px"
    img.style.border ="1px red solid"
    p.setAttribute("id", `parrafo-${contador}`)


    p.classList.add("ps")
    p.textContent = valor
    p.style.marginLeft="10px"

    const div = document.createElement("div")
    div.style.marginTop="20px"
    div.style.display="flex"
    div.appendChild(img)
    div.appendChild(p)

    contenedor.appendChild(div)
    input.value = ''
    contador++
}