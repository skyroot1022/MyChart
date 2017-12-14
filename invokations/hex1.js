
// first
var chart1 = renderChartGauge();
var chart2 = renderChartGauge();
var chart3 = renderChartGauge();
var chart4 = renderChartGauge();
var chart5 = renderChartGauge();

[chart1, chart2, chart3, chart4, chart5].forEach(function (chart) {
  chart.svgHeight(500)
    .svgWidth(500)
    .data({ value: 66 })
})



d3.select(".gauge1").call(chart1);
d3.select(".gauge2").call(chart2);
d3.select(".gauge3").call(chart3);
d3.select(".gauge4").call(chart4);
d3.select(".gauge5").call(chart5);

// this simulates progresses
var values = [0, 100, 65, 32, 100, 0, 76, 10, 90]
var i = 0;

setTimeout(d => {
  window.interval = setInterval(d => {
    var index = i++ % values.length;

    [chart1, chart2, chart3, chart4, chart5].forEach(function (chart) {
      chart.data({ value: values[index] })
    })


  }, 2000)
}, 3000)