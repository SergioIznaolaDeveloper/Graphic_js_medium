let arrFilms = [];
let arrYears = [];

async function getVariables() {
  try {
    let response =
      await fetch("https://api.openweathermap.org/data/2.5/weather?lat=40.6351322&lon=-4.0238843&lang=sp=London&units=metric&appid=7818e0095b4d970ab1a8b719788d5ca2");
    let data = await response.json();
    let temperatura = data.main.temp;
    let max = data.main.temp_max
    let min = data.main.temp_min
    let sens = data.main.feels_like
    var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Temperatura", "Sensación", "T.Máxima", "T.Mínima"],
    datasets: [
      {
        label: "temperaturas",
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
  } catch (error) {
    console.log(`ERROR Error: ${error.stack}`);
  }
}
getVariables();


