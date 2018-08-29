$(document).ready(function () {
    var d = document.getElementById("revenue-bars"), a = new Chart(d, {
        type: "bar", data: {}
        , options: {
            title: {
                display: true,
                fontSize: 25,
                text: 'Revenue (Trailing 60 days), Seperated by Advertiser (Stacked Bars)'
               },
            autoSkip: !1, responsive: !0, maintainAspectRatio: !0, scales: {
                xAxes: [{
                    label: "date", stacked: !0, ticks: {
                        autoSkip: false
                    }
                }
                ], yAxes: [{
                    label: "revenue", stacked: !0, position: "left", id: "A", ticks: {
                        beginAtZero: !0, stepSize: 1E3
                    }
                }
                ]
            },
            legend:{display:true},
            tooltips: {
                mode: 'label',
                callbacks: {
                    label: function (tooltipItem, data) {
                        var advertiser = data.datasets[tooltipItem.datasetIndex].label;
                        var valor = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                        // Loop through all datasets to get the actual total of the index
                        var total = 0;
                        for (var i = 0; i < data.datasets.length; i++)
                            total += data.datasets[i].data[tooltipItem.index];
                        // If it is not the last dataset, you display it as you usually do
                        if (tooltipItem.datasetIndex == data.datasets.length - 2) {
                            return ["Total : $" + total.toFixed(2).toString().replace(/(\d)(?=(\d{3})+\.)/g, '$1,')];
                        } else { // .. else, you display the dataset and the total, using an array
                            if (valor.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') != "0.00") {
                                return advertiser + " : $" + valor.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
                            }
                        }
                    }
                }
            }
        }
    }
    );
    (function () {
        $.ajax({
            url: "/Dashboard/RevByAdvertiser", type: "get", dataType: "json", success: function (c) {
                ajaxData = c;
                var uniqueDates = [];
                for (i = 0; i < ajaxData.length; i++) {
                    if (uniqueDates.indexOf(ajaxData[i].Date) === -1) {
                        uniqueDates.push(ajaxData[i].Date);
                    }
                }
                a.data.labels = uniqueDates[0];
                for (var b = 0; b < ajaxData.length; b++) {
                    a.data.datasets[b] = {
                        label: ajaxData[b].Advertiser, backgroundColor: "rgb(" + Math.floor(256 * Math.random()) + "," + Math.floor(256 * Math.random()) + "," + Math.floor(256 * Math.random()) + ")", data: ajaxData[b].Revenue, yAxisID: "A"
                    };
                }
                // a.data.datasets[a.data.datasets.length] = {label:"Dummy",backgroundColor:"Black",data:[0] * 59}
                a.update()
            },
            complete: function () {
                setInterval(sendRequest, 86400000);
            },
            error: function () {
                console.log("Error")
            }
        }
        )
    }
    )();
    window.matchMedia("@media (min-width: 600px)").matches ? a.options.legend.display = !0 : a.options.legend.display = !1;
    a.update()
}

);