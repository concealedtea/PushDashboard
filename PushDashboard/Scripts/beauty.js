new Chart(document.getElementById("radar"), {
    type: 'radar',
    data: {
        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
        datasets: [
          {
              label: "1950",
              fill: true,
              backgroundColor: "rgba(179,181,198,0.2)",
              borderColor: "rgba(179,181,198,1)",
              pointBorderColor: "#fff",
              pointBackgroundColor: "rgba(179,181,198,1)",
              data: [8.77, 55.61, 21.69, 6.62, 6.82]
          }, {
              label: "2050",
              fill: true,
              backgroundColor: "rgba(255,99,132,0.2)",
              borderColor: "rgba(255,99,132,1)",
              pointBorderColor: "#fff",
              pointBackgroundColor: "rgba(255,99,132,1)",
              pointBorderColor: "#fff",
              data: [25.48, 54.16, 7.61, 8.06, 4.45]
          }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Distribution in % of world population'
        }
    }
});
new Chart(document.getElementById("doughnut"), {
    type: 'doughnut',
    data: {
        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
        datasets: [
          {
              label: "Population (millions)",
              backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
              data: [2478, 5267, 734, 784, 433]
          }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Predicted world population (millions) in 2050'
        }
    }
});
new Chart(document.getElementById("bubble"), {
    type: 'bubble',
    data: {
        labels: "Africa",
        datasets: [
          {
              label: ["China"],
              backgroundColor: "rgba(255,221,50,0.2)",
              borderColor: "rgba(255,221,50,1)",
              data: [{
                  x: 21269017,
                  y: 5.245,
                  r: 15
              }]
          }, {
              label: ["Denmark"],
              backgroundColor: "rgba(60,186,159,0.2)",
              borderColor: "rgba(60,186,159,1)",
              data: [{
                  x: 258702,
                  y: 7.526,
                  r: 10
              }]
          }, {
              label: ["Germany"],
              backgroundColor: "rgba(0,0,0,0.2)",
              borderColor: "#000",
              data: [{
                  x: 3979083,
                  y: 6.994,
                  r: 15
              }]
          }, {
              label: ["Japan"],
              backgroundColor: "rgba(193,46,12,0.2)",
              borderColor: "rgba(193,46,12,1)",
              data: [{
                  x: 4931877,
                  y: 5.921,
                  r: 15
              }]
          }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Predicted world population (millions) in 2050'
        }, scales: {
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: "Happiness"
                }
            }],
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: "GDP (PPP)"
                }
            }]
        }
    }
});