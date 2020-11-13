$(document).ready(function() {
  return Highcharts.chart('analitics-chart', {
    title: {
      text: ''
    },
    tooltip: {
      enabled: false
    },
    colors: ["#FD8324"],
    legend: {
      enabled: false
    },
    chart: {
      style: {
        "fontFamily": "helvetica"
      }
    },
    yAxis: {
      visible: false
    },
    xAxis: {},
    plotOptions: {
      area: {
        lineWidth: 1
      }
    },
    series: [
      {
        name: '',
        type: 'area',
        fillColor: {
          linearGradient: [0,
      0,
      0,
      400],
          stops: [[0,
      'rgba(253, 131, 36, 1)'],
      [1,
      'rgba(255, 255, 255, 0)']]
        },
        label: {
          connectorAllowed: false
        },
        marker: {
          enabled: false,
          states: {
            hover: {
              enabled: false
            }
          }
        },
        pointStart: 2010,
        data: [43934,
      52503,
      57177,
      69658,
      97031,
      119931,
      137133,
      154175]
      }
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500
          },
          chartOptions: {}
        }
      ]
    }
  });
});
