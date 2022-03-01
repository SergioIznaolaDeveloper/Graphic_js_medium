
async function getVariables() {
  try {
    let response =
      await fetch("https://api.openweathermap.org/data/2.5/weather?lat=40.6351322&lon=-4.0238843&lang=sp=London&units=metric&appid=7818e0095b4d970ab1a8b719788d5ca2");
    let data = await response.json();
    let temperatura = data.main.temp;
    let max = data.main.temp_max
    let min = data.main.temp_min
    let sens = data.main.feels_like
    let hum = data.main.humidity
    let sea = data.main.sea_level
    let ground = data.main.grnd_level
    var ctx = document.getElementById("myChart");
    var ctx2 = document.getElementById("myChart2");
    var ctx3 = document.getElementById("myChart3");

var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Temperatura", "Sensación", "T.Máxima", "T.Mínima"],
    datasets: [
      {
        label: "Temperatura en grados celsius",
        data: [temperatura, sens, max, min],
        backgroundColor: [
          "rgb(56,163,165, 0.8)",
          "rgb(87,204,153, 0.8)",
          "rgb(128,237,153, 0.8)",
          "rgb(34,87,122, 0.8)",
        ],
      },
    ],
  },
});
var myChart2 = new Chart(ctx2, {
  type: "bar",
  data: {
    labels: ["humedad"],
    datasets: [
      {
        label: "% de Humedad",
        data: [hum],
        backgroundColor: [
          "rgb(34,87,122, 0.8)",
        ],
      },
    ],
  },
})
var myChart3 = new Chart(ctx3, {
  type: "polarArea",
  data: {
    labels: ["Sea", "Ground"],
    datasets: [
      {
        label: "Altura en metros",
        data: [sea, ground],
        backgroundColor: [
          "rgb(56,163,165, 0.8)",
          "rgb(87,204,153, 0.8)",
          "rgb(128,237,153, 0.8)",
          "rgb(34,87,122, 0.8)",
        ],
      },
    ],
  },
})
  } catch (error) {
    console.log(`ERROR Error: ${error.stack}`);
  }
}
getVariables();


