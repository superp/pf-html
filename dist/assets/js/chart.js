(function() {
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
        inverted: true,
        height: 250
      },
      title: {
        text: ''
      },
      xAxis: {
        visible: false
      },
      yAxis: {},
      legend: {
        enabled: false
      },
      tooltip: {
        enabled: false
      },
      plotOptions: {
        series: {
          pointWidth: 24,
          dataLabels: {
            enabled: true,
            format: '{point.name}'
          }
        }
      },
      series: [
        {
          colorByPoint: true,
          data: [
            {
              name: "UA",
              y: 62.8,
              drilldown: "UA"
            },
            {
              name: "RU",
              y: 22,
              drilldown: "RU"
            },
            {
              name: "BY",
              y: 12.2,
              drilldown: "BY"
            },
            {
              name: "PL",
              y: 15,
              drilldown: "PL"
            },
            {
              name: "KZ",
              y: 9.2,
              drilldown: "KZ"
            },
            {
              name: "Other",
              y: 8,
              drilldown: null
            }
          ]
        }
      ],
      drilldown: {
        activeDataLabelStyle: {
          color: "#828282",
          fontWeight: "bold",
          textDecoration: "underline",
          textOutline: "none"
        },
        series: [
          {
            name: "Ukraine",
            id: "UA",
            data: [["Kiev",
          1.1],
          ["Kharkiv",
          4.1],
          ["Odessa",
          2],
          ["Chernigov",
          1.5]]
          },
          {
            name: "Russia",
            id: "RU",
            data: [["Kiev",
          1.1]]
          },
          {
            name: "Belorussia",
            id: "BY",
            data: [["v65.0",
          0.1]]
          },
          {
            name: "Poland",
            id: "PL",
            data: [["v65.0",
          0.1]]
          },
          {
            name: "Kazakhstan",
            id: "KZ",
            data: [["v65.0",
          0.1]]
          }
        ]
      }
    });
  });

  // Influecers popup charts END

}).call(this);
