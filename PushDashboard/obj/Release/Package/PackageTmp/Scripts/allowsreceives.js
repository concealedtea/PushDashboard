$(document).ready(function () {
    var b = document.getElementById("rca_a_d"),
        z = new Chart(b, {
            type: "bar",
            data: {},
            options: {
                title: {
                    display: true,
                    fontSize: 15,
                    text: 'Allows (Today/Yesterday/Last Week Desktop)(Bar + Lines)'
                },
                maintainAspectRatio: !1,
                fill: !1,
                scales: {
                    xAxes: [{
                        labels: "00:00 00:15 00:30 00:45 01:00 01:15 01:30 01:45 02:00 02:15 02:30 02:45 03:00 03:15 03:30 03:45 04:00 04:15 04:30 04:45 05:00 05:15 05:30 05:45 06:00 06:15 06:30 06:45 07:00 07:15 07:30 07:45 08:00 08:15 08:30 08:45 09:00 09:15 09:30 09:45 10:00 10:15 10:30 10:45 11:00 11:15 11:30 11:45 12:00 12:15 12:30 12:45 13:00 13:15 13:30 13:45 14:00 14:15 14:30 14:45 15:00 15:15 15:30 15:45 16:00 16:15 16:30 16:45 17:00 17:15 17:30 17:45 18:00 18:15 18:30 18:45 19:00 19:15 19:30 19:45 20:00 20:15 20:30 20:45 21:00 21:15 21:30 21:45 22:00 22:15 22:30 22:45 23:00 23:15 23:30 23:45".split(" "),
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
    var b = document.getElementById("rca_a_m"),
        y = new Chart(b, {
            type: "bar",
            data: {},
            options: {
                title: {
                    display: true,
                    fontSize: 15,
                    text: 'Allows (Today/Yesterday/Last Week Mobile)(Bar + Lines)'
                },
                maintainAspectRatio: !1,
                fill: !1,
                scales: {
                    xAxes: [{
                        labels: "00:00 00:15 00:30 00:45 01:00 01:15 01:30 01:45 02:00 02:15 02:30 02:45 03:00 03:15 03:30 03:45 04:00 04:15 04:30 04:45 05:00 05:15 05:30 05:45 06:00 06:15 06:30 06:45 07:00 07:15 07:30 07:45 08:00 08:15 08:30 08:45 09:00 09:15 09:30 09:45 10:00 10:15 10:30 10:45 11:00 11:15 11:30 11:45 12:00 12:15 12:30 12:45 13:00 13:15 13:30 13:45 14:00 14:15 14:30 14:45 15:00 15:15 15:30 15:45 16:00 16:15 16:30 16:45 17:00 17:15 17:30 17:45 18:00 18:15 18:30 18:45 19:00 19:15 19:30 19:45 20:00 20:15 20:30 20:45 21:00 21:15 21:30 21:45 22:00 22:15 22:30 22:45 23:00 23:15 23:30 23:45".split(" "),
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
    var b = document.getElementById("rca_r_d"),
       x = new Chart(b, {
           type: "bar",
           data: {},
           options: {
               title: {
                   display: true,
                   fontSize: 15,
                   text: 'Receives (Today/Yesterday/Last Week Desktop)(Bar + Lines)'
               },
               maintainAspectRatio: !1,
               fill: !1,
               scales: {
                   xAxes: [{
                       labels: "00:00 00:15 00:30 00:45 01:00 01:15 01:30 01:45 02:00 02:15 02:30 02:45 03:00 03:15 03:30 03:45 04:00 04:15 04:30 04:45 05:00 05:15 05:30 05:45 06:00 06:15 06:30 06:45 07:00 07:15 07:30 07:45 08:00 08:15 08:30 08:45 09:00 09:15 09:30 09:45 10:00 10:15 10:30 10:45 11:00 11:15 11:30 11:45 12:00 12:15 12:30 12:45 13:00 13:15 13:30 13:45 14:00 14:15 14:30 14:45 15:00 15:15 15:30 15:45 16:00 16:15 16:30 16:45 17:00 17:15 17:30 17:45 18:00 18:15 18:30 18:45 19:00 19:15 19:30 19:45 20:00 20:15 20:30 20:45 21:00 21:15 21:30 21:45 22:00 22:15 22:30 22:45 23:00 23:15 23:30 23:45".split(" "),
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
    var b = document.getElementById("rca_r_m"),
       w = new Chart(b, {
           type: "bar",
           data: {},
           options: {
               title: {
                   display: true,
                   fontSize: 15,
                   text: 'Receives (Today/Yesterday/Last Week Mobile)(Bar + Lines)'
               },
               maintainAspectRatio: !1,
               fill: !1,
               scales: {
                   xAxes: [{
                       labels: "00:00 00:15 00:30 00:45 01:00 01:15 01:30 01:45 02:00 02:15 02:30 02:45 03:00 03:15 03:30 03:45 04:00 04:15 04:30 04:45 05:00 05:15 05:30 05:45 06:00 06:15 06:30 06:45 07:00 07:15 07:30 07:45 08:00 08:15 08:30 08:45 09:00 09:15 09:30 09:45 10:00 10:15 10:30 10:45 11:00 11:15 11:30 11:45 12:00 12:15 12:30 12:45 13:00 13:15 13:30 13:45 14:00 14:15 14:30 14:45 15:00 15:15 15:30 15:45 16:00 16:15 16:30 16:45 17:00 17:15 17:30 17:45 18:00 18:15 18:30 18:45 19:00 19:15 19:30 19:45 20:00 20:15 20:30 20:45 21:00 21:15 21:30 21:45 22:00 22:15 22:30 22:45 23:00 23:15 23:30 23:45".split(" "),
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
    (function sendRequest() {
        $.ajax({
            url: "/Dashboard/AllowReceive15",
            type: "get",
            dataType: "json",
            success: function (b) {
                ajaxData = b;
                // Allows Desktop
                for (var h = [], k = [], l = [], c, d, e, a = e = d = c = 0; a < b.Date.length; a++) {
                    if (ajaxData.Platform[a] == "Desktop") {
                        "Today" == ajaxData.DayOfWeek[a] && (h[c] = ajaxData.Allows[a], c++), "Yesterday" == ajaxData.DayOfWeek[a] && (k[d] = ajaxData.Allows[a], d++), "Last Week" == ajaxData.DayOfWeek[a] && (l[e] = ajaxData.Allows[a], e++);
                    }
                }
                z.data.datasets[2] = {
                    label: ["Today"],
                    fillColor: "blue",
                    backgroundColor: "rgb(51, 204, 255)",
                    data: h,
                    type: "bar"
                };
                z.data.datasets[1] = {
                    label: ["Yesterday"],
                    backgroundColor: "transparent",
                    borderColor: "grey",
                    data: k,
                    type: "line",
                    radius: 0
                };
                z.data.datasets[0] = {
                    label: ["Last Week"],
                    backgroundColor: "transparent",
                    borderColor: "red",
                    data: l,
                    type: "line",
                    radius: 0
                };
                z.update();
                // Allows Mobile
                for (var h = [], k = [], l = [], c, d, e, a = e = d = c = 0; a < b.Date.length; a++) {
                    if (ajaxData.Platform[a] == "Mobile") {
                        "Today" == ajaxData.DayOfWeek[a] && (h[c] = ajaxData.Allows[a], c++), "Yesterday" == ajaxData.DayOfWeek[a] && (k[d] = ajaxData.Allows[a], d++), "Last Week" == ajaxData.DayOfWeek[a] && (l[e] = ajaxData.Allows[a], e++);
                    }
                }
                y.data.datasets[2] = {
                    label: ["Today"],
                    fillColor: "blue",
                    backgroundColor: "rgb(51, 204, 255)",
                    data: h,
                    type: "bar"
                };
                y.data.datasets[1] = {
                    label: ["Yesterday"],
                    backgroundColor: "transparent",
                    borderColor: "grey",
                    data: k,
                    type: "line",
                    radius: 0
                };
                y.data.datasets[0] = {
                    label: ["Last Week"],
                    backgroundColor: "transparent",
                    borderColor: "red",
                    data: l,
                    type: "line",
                    radius: 0
                };
                y.update();
                // Receives Desktop
                for (var h = [], k = [], l = [], c, d, e, a = e = d = c = 0; a < b.Date.length; a++) {
                    if (ajaxData.Platform[a] == "Desktop") {
                        "Today" == ajaxData.DayOfWeek[a] && (h[c] = ajaxData.Receives[a], c++), "Yesterday" == ajaxData.DayOfWeek[a] && (k[d] = ajaxData.Receives[a], d++), "Last Week" == ajaxData.DayOfWeek[a] && (l[e] = ajaxData.Receives[a], e++);
                    }
                }
                x.data.datasets[2] = {
                    label: ["Today"],
                    fillColor: "blue",
                    backgroundColor: "rgb(51, 204, 255)",
                    data: h,
                    type: "bar"
                };
                x.data.datasets[1] = {
                    label: ["Yesterday"],
                    backgroundColor: "transparent",
                    borderColor: "grey",
                    data: k,
                    type: "line",
                    radius: 0
                };
                x.data.datasets[0] = {
                    label: ["Last Week"],
                    backgroundColor: "transparent",
                    borderColor: "red",
                    data: l,
                    type: "line",
                    radius: 0
                };
                x.update();
                // Receives Mobile
                for (var h = [], k = [], l = [], c, d, e, a = e = d = c = 0; a < b.Date.length; a++) {
                    if (ajaxData.Platform[a] == "Mobile") {
                        "Today" == ajaxData.DayOfWeek[a] && (h[c] = ajaxData.Receives[a], c++), "Yesterday" == ajaxData.DayOfWeek[a] && (k[d] = ajaxData.Receives[a], d++), "Last Week" == ajaxData.DayOfWeek[a] && (l[e] = ajaxData.Receives[a], e++);
                    }
                }
                w.data.datasets[2] = {
                    label: ["Today"],
                    fillColor: "blue",
                    backgroundColor: "rgb(51, 204, 255)",
                    data: h,
                    type: "bar"
                };
                w.data.datasets[1] = {
                    label: ["Yesterday"],
                    backgroundColor: "transparent",
                    borderColor: "grey",
                    data: k,
                    type: "line",
                    radius: 0
                };
                w.data.datasets[0] = {
                    label: ["Last Week"],
                    backgroundColor: "transparent",
                    borderColor: "red",
                    data: l,
                    type: "line",
                    radius: 0
                };
                w.update();
            },
            complete: function(){
                setInterval(sendRequest, 1800000);
            },
            error: function () {
                console.log("Error")
            }
        })
    })()
}

);