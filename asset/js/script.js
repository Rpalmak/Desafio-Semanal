const url = "https://mindicador.cl/api/";

async function consulta() {
  try {
    const valorCLP = document.getElementById("monto").value
    const monedaElegida = document.getElementById("moneda").value;
    const parrafoResultado = document.getElementsByTagName("p")[1]
    const respuesta = await fetch(url + monedaElegida);
    if (!respuesta.ok) {
      throw new Error("Error en la petición");
    }
    const data = await respuesta.json();
    const valorMoneda = data.serie[0].valor
    const calculo = valorCLP/valorMoneda
    const calculoRedondeado = calculo.toFixed(2)
    parrafoResultado.innerHTML = "<p id='resultado'>Resultado: "+calculoRedondeado+"</p>"
    
    return data;
  } catch (error) {
    alert(error);
    throw error;
  }
}

async function renderGrafica() {
  try {
    const data = await consulta();
    const labels = data.serie.map(entry => formatDate(entry.fecha)).slice(0, 10);
    const values = data.serie.map(entry => entry.valor).slice(0, 10);
    const myChart = document.getElementById("myChart");

    if (myChart.chart) {
      myChart.chart.destroy();
    }

    const config = {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Valores',
            data: values,
            borderColor: 'rgb(75, 192, 192)',
            borderWidth: 1,
            fill: false,
          },
        ],
      },
    };

    myChart.style.backgroundColor = "white";
    myChart.chart = new Chart(myChart, config);
  } catch (error) {
    console.log(error);
  }
}


function formatDate(dateString) {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return new Date(dateString).toLocaleDateString('es-CL', options);
}