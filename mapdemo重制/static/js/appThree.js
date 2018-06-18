var ywchart = [];
var kdchart = [];
var ywxa = []
var ywuv = []
var ywmv = []
var ywtv = []
var kdxa = []
var kduv = []
var kdmv = []
var kdtv = []

var lineCacheData = {
  "LT": {
    nomalColor: "rgba(55, 130, 193",
    activeColor: "rgba(246, 179, 127"
  },
  "YD": {
    nomalColor: "rgba(55, 130, 193",
    activeColor: "rgba(42, 215, 237"
  },
  "DX": {
    nomalColor: "rgba(55, 130, 193",
    activeColor: "rgba(34, 172, 56"
  },
}
//绘制index页面上静态的折线图
function drawchart1(ywfin) {
  var chart1 = echarts.init(document.getElementById("chart1"));
  var option1 = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} %'
    },
    series: [
      {
        name: '仪表盘',
        type: 'gauge',

        data: [{ value: ywfin, name: '年度完成率' }],
        radius: '80%',
        center: ['30%', '50%'],
        min: 0,
        max: 100,
        splitNumber: 5,
        axisLine: {            // 坐标轴线
          lineStyle: {       // 属性lineStyle控制线条样式
            width: 2,
            color: [[0.2, '#f15755'], [0.8, '#5d9cec'], [1, '#62c87f']]
          },
        },
        axisTick: {            // 坐标轴小标记
          length: 13,        // 属性length控制线长
          lineStyle: {       // 属性lineStyle控制线条样式
            color: 'auto'
          }
        },
        splitLine: {           // 分隔线
          length: 18,        // 属性length控制线长
          lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
            color: 'auto'
          }
        },
        axisLabel: {
          textStyle: {
            color: '#fff',
          }

        },
        detail: {
          formatter: '{value}%',
          fontSize: 24,
          offsetCenter: [0, '85%']
        },
        title: {
          fontSize: 12,
          textStyle: {
            color: '#fff'
          },

          offsetCenter: [0, '20%']
        },
        pointer: {
          width: 3            // 指针大小
        }
      }
    ],
  };
  chart1.setOption(option1);
}
function drawchart2(ywxa, ywuv, ywmv, ywtv) {
  var chart2 = echarts.init(document.getElementById("chart2"));
  var option2 = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        lineStyle: {
          color: '#57617B'
        }
      }
    },
    legend: {
      icon: 'rect',
      itemWidth: 14,
      itemHeight: 5,
      itemGap: 13,
      data: ['中国联通', '中国移动', '中国电信'],
      right: '4%',
      textStyle: {
        fontSize: 12,
        color: '#fff'
      }
    },
    grid: {
      left: '3%',
      right: '3%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      boundaryGap: false,
      axisLine: {
        lineStyle: {
          color: '#57617B'
        }
      },
      axisLabel: {
        margin: 10,
        textStyle: {
          fontSize: 14,
          color: '#fff'
        },
        interval: 0
      },
      // data: ['17Q1', '17Q2', '17Q3', '17Q4', '18Q1']
      data: ywxa
    }],
    yAxis: [{
      type: 'value',
      axisTick: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: '#57617B'
        }
      },
      axisLabel: {
        margin: 10,
        textStyle: {
          fontSize: 14,
          color: '#fff'
        }
      },
      splitLine: {
        show: false
      }
    }],
    series: [
      {
        name: '中国联通',
        type: 'line',
        smooth: false,
        lineStyle: {
          normal: {
            width: 1
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: lineCacheData.LT.nomalColor + ',0.3)'
            }, {
              offset: 0.8,
              color: lineCacheData.LT.nomalColor + ', 0)'
            }], false),
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            shadowBlur: 10
          },
        },
        itemStyle: {
          normal: {
            color: lineCacheData.LT.activeColor + ')'
          },
        },
        // data: [-1.2, -0.5, 0.6, 5, 5]
        data: ywuv
      }, {
        name: '中国移动',
        type: 'line',
        smooth: false,
        lineStyle: {
          normal: {
            width: 1
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: lineCacheData.YD.nomalColor + ', 0.3)'
            }, {
              offset: 0.8,
              color: lineCacheData.YD.nomalColor + ', 0)'
            }], false),
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            shadowBlur: 10
          }
        },
        itemStyle: {
          normal: {
            color: lineCacheData.YD.activeColor + ')'
          }
        },
        // data: [28.4, 23.4, 24.2, 26.9, 23.8]
        data: ywmv
      }, {
        name: '中国电信',
        type: 'line',
        smooth: false,
        lineStyle: {
          normal: {
            width: 1
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: lineCacheData.DX.nomalColor + ',0.3)'
            }, {
              offset: 0.8,
              color: lineCacheData.DX.nomalColor + ', 0)'
            }], false),
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            shadowBlur: 10
          }
        },
        itemStyle: {
          normal: {
            color: lineCacheData.DX.activeColor + ')'
          }
        },
        // data: [14.1, 13.9, 14.4, 17.9, 16.5]
        data: ywtv
      },
    ]
  };
  chart2.setOption(option2);
  redraw(chart2, option2, t2);
}

var chart3 = echarts.init(document.getElementById("chart3"));
var option3 = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      lineStyle: {
        color: '#57617B'
      }
    }
  },
  legend: {
    icon: 'rect',
    itemWidth: 14,
    itemHeight: 5,
    itemGap: 13,
    data: ['纯语音用户', '有流量4G用户', '有流量非4G用户'],
    right: '4%',
    textStyle: {
      fontSize: 12,
      color: '#fff'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [{
    type: 'category',
    boundaryGap: false,
    axisLine: {
      lineStyle: {
        color: '#57617B'
      }
    },
    axisLabel: {
      margin: 10,
      textStyle: {
        fontSize: 14,
        color: '#fff'
      }
    },
    //data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    data: ['17Q1', '17Q2', '17Q3', '17Q4', '18Q1']
  }],
  yAxis: [{
    type: 'value',
    axisTick: {
      show: false
    },
    axisLine: {
      lineStyle: {
        color: '#57617B'
      }
    },
    axisLabel: {
      margin: 10,
      textStyle: {
        fontSize: 14,
        color: '#fff'
      }
    },
    splitLine: {
      show: false
    }
  }],
  series: [
    {
      name: '纯语音用户',
      type: 'line',
      smooth: false,
      lineStyle: {
        normal: {
          width: 1
        }
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: lineCacheData.LT.nomalColor + ',0.3)'
          }, {
            offset: 0.8,
            color: lineCacheData.LT.nomalColor + ', 0)'
          }], false),
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowBlur: 10
        },
      },
      itemStyle: {
        normal: {
          color: lineCacheData.LT.activeColor + ')'
        },
      },
      data: [11.2, 17.2, 17.4, 23.2, 17.1]
    }, {
      name: '有流量4G用户',
      type: 'line',
      smooth: false,
      lineStyle: {
        normal: {
          width: 1
        }
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: lineCacheData.YD.nomalColor + ', 0.3)'
          }, {
            offset: 0.8,
            color: lineCacheData.YD.nomalColor + ', 0)'
          }], false),
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowBlur: 10
        }
      },
      itemStyle: {
        normal: {
          color: lineCacheData.YD.activeColor + ')'
        }
      },
      data: [-6.4, -2.9, -1.8, 2.1, 3.6]
    }, {
      name: '有流量非4G用户',
      type: 'line',
      smooth: false,
      lineStyle: {
        normal: {
          width: 1
        }
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: lineCacheData.DX.nomalColor + ',0.3)'
          }, {
            offset: 0.8,
            color: lineCacheData.DX.nomalColor + ', 0)'
          }], false),
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowBlur: 10
        }
      },
      itemStyle: {
        normal: {
          color: lineCacheData.DX.activeColor + ')'
        }
      },
      data: [-4.5, -2.9, 0.0, 8.1, 5.5]
    },
  ]
};
chart3.setOption(option3);

var chart3r = echarts.init(document.getElementById("chart3r"));
var option3r = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      lineStyle: {
        color: '#57617B'
      }
    }
  },
  legend: {
    icon: 'rect',
    itemWidth: 14,
    itemHeight: 5,
    itemGap: 13,
    data: ['2I2C', '非2I2C'],
    right: '4%',
    textStyle: {
      fontSize: 12,
      color: '#fff'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [{
    type: 'category',
    boundaryGap: false,
    axisLine: {
      lineStyle: {
        color: '#57617B'
      }
    },
    axisLabel: {
      margin: 10,
      textStyle: {
        fontSize: 14,
        color: '#fff'
      }
    },
    //data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    data: ['17Q1', '17Q2', '17Q3', '17Q4', '18Q1']
  }],
  yAxis: [{
    type: 'value',
    axisTick: {
      show: false
    },
    axisLine: {
      lineStyle: {
        color: '#57617B'
      }
    },
    axisLabel: {
      margin: 10,
      textStyle: {
        fontSize: 14,
        color: '#fff'
      }
    },
    splitLine: {
      show: false
    }
  }],
  series: [
    {
      name: '2I2C',
      type: 'line',
      smooth: false,
      lineStyle: {
        normal: {
          width: 1
        }
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: lineCacheData.LT.nomalColor + ',0.3)'
          }, {
            offset: 0.8,
            color: lineCacheData.LT.nomalColor + ', 0)'
          }], false),
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowBlur: 10
        },
      },
      itemStyle: {
        normal: {
          color: lineCacheData.LT.activeColor + ')'
        },
      },
      data: [31.8, 11.9, 9.8, 9.9, 6.5]
    }, {
      name: '非2I2C',
      type: 'line',
      smooth: false,
      lineStyle: {
        normal: {
          width: 1
        }
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: lineCacheData.YD.nomalColor + ', 0.3)'
          }, {
            offset: 0.8,
            color: lineCacheData.YD.nomalColor + ', 0)'
          }], false),
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowBlur: 10
        }
      },
      itemStyle: {
        normal: {
          color: lineCacheData.YD.activeColor + ')'
        }
      },
      data: [, -1.0, -0.6, 4.0, 4.6]
    }
  ]
};
chart3r.setOption(option3r);

function drawchart4(kdfin) {
  var chart4 = echarts.init(document.getElementById("chart4"));
  var option4 = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} %'
    },
    series: [
      {
        name: '仪表盘',
        type: 'gauge',

        data: [{ value: kdfin, name: '年度完成率' }],
        radius: '80%',
        center: ['30%', '50%'],
        min: 0,
        max: 100,
        splitNumber: 5,
        axisLine: {            // 坐标轴线
          lineStyle: {       // 属性lineStyle控制线条样式
            width: 2,
            color: [[0.2, '#f15755'], [0.8, '#5d9cec'], [1, '#62c87f']]
          },
        },
        axisTick: {            // 坐标轴小标记
          length: 13,        // 属性length控制线长
          lineStyle: {       // 属性lineStyle控制线条样式
            color: 'auto'
          }
        },
        splitLine: {           // 分隔线
          length: 18,        // 属性length控制线长
          lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
            color: 'auto'
          }
        },
        axisLabel: {
          textStyle: {
            color: '#fff',
          }

        },
        detail: {
          formatter: '{value}%',
          fontSize: 24,
          offsetCenter: [0, '85%']
        },
        title: {
          fontSize: 12,
          textStyle: {
            color: '#fff'
          },

          offsetCenter: [0, '20%']
        },
        pointer: {
          width: 3            // 指针大小
        }
      }
    ],
  };
  chart4.setOption(option4);
}
function drawchart5(kdxa, kduv, kdmv, kdtv) {
  var chart5 = echarts.init(document.getElementById("chart5"));
  var option5 = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        lineStyle: {
          color: '#57617B'
        }
      }
    },
    legend: {
      icon: 'rect',
      itemWidth: 14,
      itemHeight: 5,
      itemGap: 13,
      data: ['中国联通', '中国移动', '中国电信'],
      right: '4%',
      textStyle: {
        fontSize: 12,
        color: '#fff'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      boundaryGap: false,
      axisLine: {
        lineStyle: {
          color: '#57617B'
        }
      },
      axisLabel: {
        margin: 10,
        textStyle: {
          fontSize: 14,
          color: '#fff'
        },
        interval: 0
      },
      //data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
      // data: ['17Q1', '17Q2', '17Q3', '17Q4', '18Q1']
      data: kdxa
    }],
    yAxis: [{
      type: 'value',
      axisTick: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: '#57617B'
        }
      },
      axisLabel: {
        margin: 10,
        textStyle: {
          fontSize: 14,
          color: '#fff'
        }
      },
      splitLine: {
        show: false
      }
    }],
    series: [
      {
        name: '中国联通',
        type: 'line',
        smooth: false,
        lineStyle: {
          normal: {
            width: 1
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: lineCacheData.LT.nomalColor + ',0.3)'
            }, {
              offset: 0.8,
              color: lineCacheData.LT.nomalColor + ', 0)'
            }], false),
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            shadowBlur: 10
          },
        },
        itemStyle: {
          normal: {
            color: lineCacheData.LT.activeColor + ')'
          },
        },
        // data: [-0.1, -1.1, 0.8, 4.2, 7.5]
        data: kduv
      }, {
        name: '中国移动',
        type: 'line',
        smooth: false,
        lineStyle: {
          normal: {
            width: 1
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: lineCacheData.YD.nomalColor + ', 0.3)'
            }, {
              offset: 0.8,
              color: lineCacheData.YD.nomalColor + ', 0)'
            }], false),
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            shadowBlur: 10
          }
        },
        itemStyle: {
          normal: {
            color: lineCacheData.YD.activeColor + ')'
          }
        },
        // data: [, , , , 6.9]
        data: kdmv
      }, {
        name: '中国电信',
        type: 'line',
        smooth: false,
        lineStyle: {
          normal: {
            width: 1
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: lineCacheData.DX.nomalColor + ',0.3)'
            }, {
              offset: 0.8,
              color: lineCacheData.DX.nomalColor + ', 0)'
            }], false),
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            shadowBlur: 10
          }
        },
        itemStyle: {
          normal: {
            color: lineCacheData.DX.activeColor + ')'
          }
        },
        // data: [, , , , -0.7]
        data: kdmv
      },
    ]
  };
  chart5.setOption(option5);
  redraw(chart5, option5, t5);
}

var chart6 = echarts.init(document.getElementById("chart6"));
var option6 = {
  tooltip: {
    trigger: 'axis',
  },
  legend: {
    data: ['联通北方', '移动北方', '电信北方', '联通南方', '移动南方', '电信南方'],
    textStyle: {
      color: "#fff",
      fontSize: 12
    }
  },
  grid: {
    left: '3%',
    right: '5%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['17Q1', '17Q2', '17Q3', '17Q4', '18Q1'],
      axisLabel: {
        show: true,
        textStyle: {
          color: "#fff"
        },
        //数据全部展示，不隐藏
        interval: 0
      },
      axisLine: {
        // show:true,
        lineStyle: {
          color: "#333"
        }
      },
      splitLine: {
        lineStyle: {
          color: "#333"
        }
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      scale: true,
      show: true,
      splitLine: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: "#fff"
        }
      },
      axisLabel: {
        color: "#fff"
      },
    }
  ],
  series: [
    {
      name: '联通北方',
      type: 'line',
      itemStyle: {
        normal: {
          color: "#299ae7",
          label: {
            show: true
          }
        }
      },
      areaStyle: {
        normal: {
          color: '#299ae7'
        }
      },
      data: [12.1, 13.3, 13.4, 13.7, 16.0]
    },
    {
      name: '移动北方',
      type: 'line',
      itemStyle: {
        normal: {
          color: "#627f41",
          label: {
            show: true
          }
        }
      },
      areaStyle: {
        normal: {
          color: '#25D8ED'
        }
      },
      data: [, , , , 5.5]
    },
    {
      name: '电信北方',
      type: 'line',
      itemStyle: {
        normal: {
          color: "#5a5ade",
          label: {
            show: true
          }
        }
      },
      areaStyle: {
        normal: {
          color: '#21A838'
        }
      },
      data: [, , , , -0.8]
    },
    {
      name: '联通南方',
      type: 'line',
      itemStyle: {
        normal: {
          color: "#277f7e",
          label: {
            show: true
          }
        }
      },
      areaStyle: {
        normal: {
          color: '#277f7e'
        }
      },
      data: [-7.2, -9.5, -6.7, -1.3, -0.8]
    },
    {
      name: '移动南方',
      type: 'line',
      itemStyle: {
        normal: {
          color: "#627f41",
          label: {
            show: true
          }
        }
      },
      areaStyle: {
        normal: {
          color: '#25D8ED'
        }
      },
      data: [, , , , 7.7]
    },
    {
      name: '电信南方',
      type: 'line',
      itemStyle: {
        normal: {
          color: "#5a5ade",
          label: {
            show: true
          }
        }
      },
      areaStyle: {
        normal: {
          color: '#21A838'
        }
      },
      data: [, , , , -0.6]
    }
  ]
};
chart6.setOption(option6);

$(".enter1").click(function () {
  window.location.href = "index1.html"
})
$(".enter2").click(function () {
  window.location.href = "indexx.html"
})
$(".enter3").click(function () {
  window.location.href = "indexx.html"
})
$("#btn1").click(function () {
  $("#chart3").show();
  $("#chart3r").hide();
})
$("#btn2").click(function () {
  $("#chart3").hide();
  $("#chart3r").show();
})
function redraw(chart, option, t) {
  if (option && typeof option === "object") {
    chart.setOption(option, true);
    chart.on("click", function (e) {
      var tName = e.seriesName;
      //console.log(this);

      for (var i = 0; i < option.series.length; i++) {
        if (option.series[i].name == tName) {
          option.series[i].areaStyle.normal.color =
            new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: lineCacheData[t[tName]].activeColor + ', 1)'
            }, {
              offset: 0.8,
              color: lineCacheData[t[tName]].activeColor + ',0.5 )'
            }], false)
        } else {
          option.series[i].areaStyle.normal.color =
            new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: lineCacheData[t[option.series[i].name]].nomalColor + ',0.3)'
            }, {
              offset: 0.8,
              color: lineCacheData[t[option.series[i].name]].nomalColor + ',0)'
            }], false)
        }
      }

      chart.clear();
      chart.setOption(option, true);

      e.color = "#005aa0";
    });
  }


}
t2 = { "中国联通": "LT", "中国移动": "YD", "中国电信": "DX" };
t3 = { "纯语音用户": "LT", "有流量4G用户": "YD", "有流量非4G用户": "DX" };
t3r = { "2I2C": "LT", "非2I2C": "YD" };
t5 = { "中国联通": "LT", "中国移动": "YD", "中国电信": "DX" };
t6 = { "联通北方": "LT", "联通南方": "YD" };
redraw(chart3, option3, t3);

redraw(chart6, option6, t6);
redraw(chart3r, option3r, t3r);
//请求折线图数据


$.ajax({
  type: "post",
  dataType: "json",
  url: "json/index.json",
  success: function (result) {
    console.log("请求成功");

    //年度提升值，季度提升值
    $(".ywy").html(parseFloat(result.ywAIM[0].YEAE_LIFT).toFixed(1))
    $(".ywj").html(parseFloat(result.ywAIM[0].QUARTER_LIFT).toFixed(1))
    $(".kdy").html(parseFloat(result.kdAIM[0].YEAE_LIFT).toFixed(1))
    $(".kdj").html(parseFloat(result.kdAIM[0].QUARTER_LIFT).toFixed(1))
    //年度完成率
    var ywfin = parseFloat(result.ywAIM[0].YEAR_FINISH).toFixed(2) * 100
    drawchart1(ywfin)
    var kdfin = parseFloat(result.kdAIM[0].YEAR_FINISH).toFixed(2) * 100
    drawchart4(kdfin)


    for (var i = 0; i < result.ywNPS.length; i++) {
      ywchart.push({
        age: result.ywNPS[i].YEAR_Q,
        uval: parseFloat(result.ywNPS[i].U_NPS).toFixed(2),
        mval: parseFloat(result.ywNPS[i].M_NPS).toFixed(2),
        tval: parseFloat(result.ywNPS[i].T_NPS).toFixed(2)
      })
    }
    for (var i = 0; i < result.kdNPS.length; i++) {
      kdchart.push({
        age: result.kdNPS[i].YEAR_Q,
        uval: parseFloat(result.kdNPS[i].U_K_NPS).toFixed(2),
        mval: parseFloat(result.kdNPS[i].M_K_NPS).toFixed(2),
        tval: parseFloat(result.kdNPS[i].T_K_NPS).toFixed(2)
      })
    }
    for (var i = 0; i < ywchart.length; i++) {
      ywxa.push(ywchart[i].age)
      ywuv.push(ywchart[i].uval)
      ywmv.push(ywchart[i].mval)
      ywtv.push(ywchart[i].tval)
      kdxa.push(kdchart[i].age)
      kduv.push(kdchart[i].uval)
      kdmv.push(kdchart[i].mval)
      kdtv.push(kdchart[i].tval)
    }
    drawchart2(ywxa, ywuv, ywmv, ywtv)
    drawchart5(kdxa, kduv, kdmv, kdtv)
  },
  error: function () {
    console.log("请求失败");
  }
})

