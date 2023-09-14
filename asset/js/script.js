async function consulta () {

const respuesta = await fetch ("https://mindicador.cl/api/")
const data = await respuesta.json()
console.log(data)  
}

getRandomUser()
