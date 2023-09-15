const url = "https://mindicador.cl/api/";



const consulta = async () => {
  try {
    const monedaElegida = document.getElementById("moneda").value;
    const respuesta = await fetch(url+monedaElegida)
    const data = await respuesta.json()
    if (!respuesta.ok) {
      throw new Error("Error en la peticion");
    }
    const dataArray = Object.values(data)
    const filterData = dataArray.filter((card) => card.imageUrl !== undefined);
    renderGrafica();
  }

  catch (error) {
    console.log(error);
  }
}


async function renderGrafica() {
  const data = await consulta();
  const config = {
    type: "line",
    data
  };
  const myChart = document.getElementById("myChart");
  myChart.style.backgroundColor = "white";
  new Chart(myChart, config);
}

