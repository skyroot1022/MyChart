
// first
var blu1 = renderBlueGaugeChart();
var blu2 = renderBlueGaugeChart();
var blu3 = renderBlueGaugeChart();


[blu1, blu2, blu3].forEach(function (chart, i) {
  chart
    .data({ value: 100 })

  particlesJS("blueGaugeDiv" + (i + 1), {
    "particles": {
      "number": {
        "value": 300,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      }
    },
  });
})



d3.select(".blue1").call(blu1);
d3.select(".blue2").call(blu2);
d3.select(".blue3").call(blu3);

// this simulates progresses
var values = [0, 100, 65, 32, 100, 0, 76, 10, 90]
var i = 0;

setTimeout(d => {
  window.interval = setInterval(d => {
    var index = i++ % values.length;

    [blu1, blu2, blu3].forEach(function (chart) {
      chart.data({ value: values[index] })
    })


  }, 2000)
}, 3000)




