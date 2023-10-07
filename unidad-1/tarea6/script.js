const inputNombre = document.querySelector('#nombre')
const inputMat = document.querySelector('#matricula')
const success = document.querySelector('#texto')
const fail = document.querySelector("#texto2")
const boton = document.querySelector('#validar')

boton.addEventListener("click", () => {
    console.log(inputNombre.value, inputMat.value);


    if (inputNombre.value == 'Osvaldo Ismael Martinez Aguilar' && inputMat.value == '14185180'){
        fail.innerHTML = ''
        success.innerHTML = "Has ingresado con exito";
        console.log('Si ta bien')
    }
    else if(inputNombre.value == '' || inputMat.value == ''){
        success.innerHTML = ''
        fail.innerHTML = "No te salio bien... bobo"
        alert('Favor de llenar los datos')
    }
    else{
        success.innerHTML = ''
        fail.innerHTML = "No te salio bien... bobo"
        alert('Uno de los datos es incorrecto, favor de revisar')
    }
})

