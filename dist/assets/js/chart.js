$(function() {
  // ANALITICS CHARt
  $('#analitics-chart').highcharts({
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
  // ANALITICS CHARt END

  // Influecers popup charts
  $('.growth-graph').highcharts({
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
      title: {
        text: ''
      },
      labels: {
        align: 'center',
        y: -22
      }
    },
    xAxis: {
      visible: false,
      gridLineWidth: 1
    },
    plotOptions: {
      area: {
        lineWidth: 2
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
        pointStart: 0,
        data: [0,
      43934,
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
  $('.age-graph').highcharts({
    chart: {
      type: 'column',
      styleMode: true,
      colorCount: 4,
      height: 300
    },
    title: {
      text: ''
    },
    xAxis: {
      type: 'category',
      labels: {
        style: {
          fontFamily: "helvetica",
          fontSize: "14px"
        }
      }
    },
    yAxis: {
      visible: false
    },
    legend: {
      enabled: false
    },
    tooltip: {
      enabled: false
    },
    plotOptions: {
      series: {
        pointWidth: 72,
        dataLabels: {
          format: '{point.y:.1f}%'
        }
      }
    },
    series: [
      {
        colorByPoint: true,
        data: [['13-17',
      12.8],
      ['18-24',
      72],
      ['25-35',
      12.2],
      ['36-60',
      1.6]],
        dataLabels: {
          enabled: true,
          align: 'center',
          style: {
            fontFamily: "helvetica",
            fontWeight: "bold",
            fontSize: "14px"
          }
        }
      }
    ]
  });
  $('.language-graph').highcharts({
    chart: {
      type: 'column',
      styleMode: true,
      colorCount: 4
    },
    title: {
      text: ''
    },
    xAxis: {
      type: 'category',
      labels: {
        style: {
          fontFamily: "helvetica",
          fontSize: "14px"
        }
      }
    },
    yAxis: {
      visible: false
    },
    legend: {
      enabled: false
    },
    tooltip: {
      enabled: false
    },
    plotOptions: {
      series: {
        pointWidth: 72,
        dataLabels: {
          format: '{point.y:.1f}%'
        }
      }
    },
    series: [
      {
        colorByPoint: true,
        data: [['English',
      62.8],
      ['Ukrainian',
      22],
      ['Chinese',
      12.2]],
        dataLabels: {
          enabled: true,
          align: 'center',
          style: {
            fontFamily: "helvetica",
            fontWeight: "bold",
            fontSize: "14px"
          }
        }
      }
    ]
  });
  return $('.location-graph').highcharts({
    chart: {
      type: 'column',
      styleMode: true,
      colorCount: 6,
      inverted: true,
      height: 250
    },
    title: {
      text: ''
    },
    xAxis: {
      type: 'category',
      labels: {
        x: -7,
        style: {
          fontFamily: "helvetica",
          fontSize: "12px"
        }
      }
    },
    yAxis: {
      lineWidth: 1,
      title: {
        text: ''
      }
    },
    legend: {
      enabled: false
    },
    tooltip: {
      enabled: false
    },
    plotOptions: {
      series: {
        pointWidth: 24
      }
    },
    series: [
      {
        data: [['UA',
      62.8],
      ['RU',
      22],
      ['BY',
      12.2],
      ['PL',
      15],
      ['KZ',
      9.2],
      ['Other',
      8]],
        dataLabels: {
          enabled: false
        }
      }
    ]
  });
});


// Influecers popup charts END
