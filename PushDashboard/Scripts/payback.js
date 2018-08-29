var list = [];
for (var i = 0; i <= 120; i++) {
    list.push(i);
}
(function () {
    $.ajax({
        url: "/Dashboard/Paybacks", type: "get", dataType: "json", success: function (c) {
            ajaxData = c;
            benchmarkData = [];
            uniques = Array.from(new Set(ajaxData.UCWeek));
            ucData = [];
            for (var i = 0; i < ajaxData.Age.length; i++) {
                if (ajaxData.UCWeek[i] == 'benchmark') {
                    benchmarkData.push(ajaxData.RevPercent[i]);
                } else {
                    for (var j = 0; j < uniques.length; j++) {
                        temp = [];
                        if (ajaxData.UCWeek[i] == uniques[j]) {
                            ucData.push(ajaxData.RevPercent[i]);
                        }
                    }
                }
            }
            console.log(ucData);
            q.data.datasets[0] = {
                label: ["Benchmark"],
                backgroundColor: "transparent",
                borderColor: "green",
                data: benchmarkData,
                type: "line",
                radius: 0
            };
            q.data.datasets[1] = {
                label: ["Desktop"],
                backgroundColor: "transparent",
                borderColor: "red",
                data: ucData,
                type: "line",
                radius: 0
            };
            q.data.datasets[2] = {
                label: ["Mobile"],
                backgroundColor: "transparent",
                borderColor: "blue",
                data: mobileData,
                type: "line",
                radius: 0
            };
            //q.data.labels = ajaxData.Age.slice(0, 120);
            //q.data.datasets = [{
            //    data: ajaxData.RevPercent.slice(0,120),
            //    label: "Payback % (Out of 100)",
            //    borderColor: "#3e95cd",
            //    fill: false
            //}]
            q.update();
        },
        error: function () {
            console.log("Error")
        }
    }
    )
})();
var q = new Chart(document.getElementById("paybackCurve"), {
    type: 'line',
    labels: list,
    data: {},
    options: {
        title: {
            display: true,
            fontSize: 25,
            text: 'Payback'
        },
        fill: !1,
        scales: {
            xAxes: [{
                labels: list,
                ticks: {
                    autoSkip: !0,
                    axTicksLimit: 24
                }
            }],
            yAxes: [{
                label: [],
                id: "A",
                ticks: {
                    beginAtZero: !0
                }
            }]
        }
    }
});