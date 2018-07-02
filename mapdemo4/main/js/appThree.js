
var flag = ''
// 折线图数组
var ywchart = [];
var kdchart = [];
var icchart = [];
var ftchart = [];
var kdNchart = [];
var kdSchart = [];
// 移网折线图数据
var ywxa = [];
var ywuv = [];
var ywmv = [];
var ywtv = [];
// 宽带折线图数据
var kdxa = [];
var kduv = [];
var kdmv = [];
var kdtv = [];
// 2I2C折线图数据
var icxa = [];
var icy = [];
var icn = [];
// ft折线图数据
var ftxa = [];
var fty = [];
var ftn = [];
var fts = [];
// 宽带北方
var kdnxa = [];
var kdnuv = [];
var kdnmv = [];
var kdntv = [];
// 宽带南方
var kdsxa = [];
var kdsuv = [];
var kdsmv = [];
var kdstv = [];
// 弱化效果颜色控制
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
var dataStyle = {
  normal: {
    label: {
      show: false
    },
    labelLine: {
      show: false
    },
    shadowBlur: 40,
    shadowColor: 'rgba(40, 40, 40, 0.5)',
  }
};

var placeHolderStyle = {
  normal: {
    color: 'rgba(44,59,70,1)', // 未完成的圆环的颜色
    label: {
      show: false
    },
    labelLine: {
      show: false
    }
  },
  emphasis: {
    color: 'rgba(44,59,70,1)' // 未完成的圆环的颜色
  }
};
//绘制index页面上静态的折线图
function drawchart1(ywfin) {
  var chart1 = echarts.init(document.getElementById("chart1"));
  var option1 = {
    tooltip: {
      // formatter: "{a} <br/>{c} {b}"
      formatter: "{c}%"
    },
    toolbox: {
      show: false,
      feature: {
        mark: { show: true },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: '年度完成率_外表盘',
        type: 'gauge',
        min: 0,
        max: 100,
        startAngle: 210,
        endAngle: -30,
        splitNumber: 5,
        radius: '80%',
        axisLine: {            // 坐标轴线
          lineStyle: {       // 属性lineStyle控制线条样式
            //color: [[0.3, 'lime'],[0.85, '#1e90ff'],[0.95, '#ff4500'],[1, '#999999']],
            // color: [
            //   [0.1, '#6d0d8b'],
            //   [0.2, '#9713c5'],
            //   [0.3, '#bc1fff'],
            //   [0.4, '#9742fd'],
            //   [0.5, '#a4def4'],
            //   [0.6, '#63c8ed'],
            //   [0.7, '#22aaf5'],
            //   [0.8, '#5287f8'],
            //   [0.9, '#4949fc'],
            //   [1, '#2124ea'],
            // ],

            color: [
              [0.1, 'rgba(109,13,139,0.5)'],
              [0.2, 'rgba(151,19,197,0.5)'],
              [0.3, 'rgba(188,31,255,0.5)'],
              [0.4, 'rgba(151,66,253,0.5)'],
              [0.5, 'rgba(164,222,244,0.5)'],
              [0.6, 'rgba(99,200,237,0.5)'],
              [0.7, 'rgba(34,170,245,0.5)'],
              [0.8, 'rgba(83,135,248,0.5)'],
              [0.9, 'rgba(73,73,252,0.5)'],
              [1.0, 'rgba(33,36,234,0.5)'],
            ],
            width: 0,
            shadowColor: '#fff', //默认透明
            shadowBlur: 10
          }
        },
        axisLabel: {            // 坐标轴小标记
          //margin : 80,
          offsetCenter: [25, '20%'],
          textStyle: {       // 属性lineStyle控制线条样式
            // fontWeight: 'bolder',
            color: '#84eafe',
            shadowColor: 'rgba(132,234,254,0.5)', //默认透明
            shadowBlur: 10,
            fontSize: 8
          }
        },
        axisTick: {            // 坐标轴小标记
          //offsetCenter: [25, '20%'],
          length: -5,        // 属性length控制线长
          splitNumber: 9,     //属性splitNumber控制每份split细分多少段
          lineStyle: {       // 属性lineStyle控制线条样式
            color: 'auto',
            shadowColor: '#fff', //默认透明
            shadowBlur: 10
          }
        },
        splitLine: {           // 分隔线
          //type: 'solid',   // dotted  solid  dashed
          length: -25,         // 属性length控制线长
          lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
            width: 3,
            color: 'rgba(0,0,0,0)',
            shadowColor: 'rgba(0,0,0,0)', //默认透明
            shadowBlur: 10
          }
        },
        pointer: {           // 分隔线
          shadowColor: '#fff', //默认透明
          shadowBlur: 5,
          width: 0,
        },
        title: {
          textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
            // fontWeight: 'bolder',
            fontSize: 10,
            // fontStyle: 'italic',
            color: '#84eafe',
            shadowColor: '#fff', //默认透明
            shadowBlur: 10
          }
        },
        detail: {
          //backgroundColor: 'rgba(30,144,255,0.8)',
          borderWidth: 0,
          borderColor: '#fff',
          shadowColor: '#fff', //默认透明
          shadowBlur: 5,
          offsetCenter: [0, 0],       // x, y，单位px
          textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
            // fontWeight: 'bolder',
            color: '#84eafe',
            fontSize: 38
          },
          formatter: '{value}%',
        },
        data: [{ value: ywfin, name: '年度完成率' }]
        //data:[{value: 40, name: 'km/h'}]
      },

      {
        name: '年度完成率_内表盘',
        type: 'gauge',
        center: ['50%', '50%'],    // 默认全局居中
        radius: '75%',
        min: 0,
        max: 7,
        startAngle: 210,
        endAngle: -30,
        //endAngle:45,
        //splitNumber:7,
        axisLine: {            // 坐标轴线
          lineStyle: {       // 属性lineStyle控制线条样式
            //color: [[0.3, 'lime'],[0.85, '#1e90ff'],[0.95, '#ff4500'],[1, '#bababa']],
            color: [
              [0.1, '#6d0d8b'],
              [0.2, '#9713c5'],
              [0.3, '#bc1fff'],
              [0.4, '#9742fd'],
              [0.5, '#a4def4'],
              [0.6, '#63c8ed'],
              [0.7, '#22aaf5'],
              [0.8, '#5287f8'],
              [0.9, '#4949fc'],
              [1, '#2124ea']
            ],
            width: 4,
            shadowColor: '#fff', //默认透明
            shadowBlur: 10
          }
        },
        axisLabel: {            // 坐标轴小标记
          textStyle: {       // 属性lineStyle控制线条样式
            fontWeight: 'bolder',
            color: 'rgba(0,0,0,0)',
            shadowColor: '#fff', //默认透明
            shadowBlur: 10,
          }
        },
        axisTick: {            // 坐标轴小标记
          length: 0,        // 属性length控制线长
          lineStyle: {       // 属性lineStyle控制线条样式
            color: 'auto',
            shadowColor: '#fff', //默认透明
            shadowBlur: 10
          }
        },
        splitLine: {           // 分隔线
          length: 0,         // 属性length控制线长
          lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
            width: 3,
            color: '#fff',
            shadowColor: '#fff', //默认透明
            shadowBlur: 10
          }
        },
        pointer: {
          width: 0,
          shadowColor: '#fff', //默认透明
          shadowBlur: 5
        },
        title: {
          offsetCenter: [0, '-30%'],       // x, y，单位px
          textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
            // fontWeight: 'bolder',
            fontStyle: 'italic',
            color: '#fff',
            shadowColor: '#fff', //默认透明
            shadowBlur: 10
          }
        },
        detail: {

          show: false,
          //backgroundColor: 'rgba(30,144,255,0.8)',
          borderWidth: 1,
          borderColor: '#fff',
          shadowColor: '#fff', //默认透明
          shadowBlur: 5,
          width: 80,
          height: 30,
          offsetCenter: [25, '20%'],       // x, y，单位px
          textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
            fontWeight: 'bolder',
            color: '#e4393c'
            //color: '#fff'
          }
        },
        data: [{
          value: 1.5,
          //name: 'x1000 r/min'
        }]
      },
    ]
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
      right: '9%',
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
function drawchart3(ftxa, fty, ftn, fts) {
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
      right: '9%',
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
      data: ftxa
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
        // data: [11.2, 17.2, 17.4, 23.2, 17.1]
        data: fts
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
        // data: [-6.4, -2.9, -1.8, 2.1, 3.6]
        data: fty
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
        // data: [-4.5, -2.9, 0.0, 8.1, 5.5]
        data: ftn
      },
    ]
  };
  chart3.setOption(option3);
  redraw(chart3, option3, t3);
}
function drawchart3r(icxa, icy, icn) {
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
      right: '9%',
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
      data: icxa
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
        // data: [31.8, 11.9, 9.8, 9.9, 6.5]
        data: icy
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
        // data: [, -1.0, -0.6, 4.0, 4.6]
        data: icn
      }
    ]
  };
  chart3r.setOption(option3r);
  redraw(chart3r, option3r, t3r);

}

function drawchart4(kdfin) {
  var chart4 = echarts.init(document.getElementById("chart4"));
  var option4 = {
    tooltip: {
      // formatter: "{a} <br/>{c} {b}"
      formatter: "{c}%"
    },
    toolbox: {
      show: false,
      feature: {
        mark: { show: true },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: '年度完成率_外表盘',
        type: 'gauge',
        min: 0,
        max: 100,
        startAngle: 210,
        endAngle: -30,
        splitNumber: 5,
        radius: '80%',
        axisLine: {            // 坐标轴线
          lineStyle: {       // 属性lineStyle控制线条样式
            //color: [[0.3, 'lime'],[0.85, '#1e90ff'],[0.95, '#ff4500'],[1, '#999999']],
            // color: [
            //   [0.1, '#6d0d8b'],
            //   [0.2, '#9713c5'],
            //   [0.3, '#bc1fff'],
            //   [0.4, '#9742fd'],
            //   [0.5, '#a4def4'],
            //   [0.6, '#63c8ed'],
            //   [0.7, '#22aaf5'],
            //   [0.8, '#5287f8'],
            //   [0.9, '#4949fc'],
            //   [1, '#2124ea']
            // ],
            color: [
              [0.1, 'rgba(109,13,139,0.5)'],
              [0.2, 'rgba(151,19,197,0.5)'],
              [0.3, 'rgba(188,31,255,0.5)'],
              [0.4, 'rgba(151,66,253,0.5)'],
              [0.5, 'rgba(164,222,244,0.5)'],
              [0.6, 'rgba(99,200,237,0.5)'],
              [0.7, 'rgba(34,170,245,0.5)'],
              [0.8, 'rgba(83,135,248,0.5)'],
              [0.9, 'rgba(73,73,252,0.5)'],
              [1.0, 'rgba(33,36,234,0.5)'],
            ],

            width: 0,
            shadowColor: '#fff', //默认透明
            shadowBlur: 10
          }
        },
        axisLabel: {            // 坐标轴小标记
          //margin : 80,
          offsetCenter: [25, '20%'],
          textStyle: {       // 属性lineStyle控制线条样式
            // fontWeight: 'bolder',
            color: '#84eafe',
            shadowColor: '#fff', //默认透明
            shadowBlur: 10,
            fontSize: 8
          }
        },
        axisTick: {            // 坐标轴小标记
          //offsetCenter: [25, '20%'],
          length: -5,        // 属性length控制线长
          splitNumber: 9,     //属性splitNumber控制每份split细分多少段
          lineStyle: {       // 属性lineStyle控制线条样式
            color: 'auto',
            shadowColor: '#fff', //默认透明
            shadowBlur: 10
          }
        },
        splitLine: {           // 分隔线
          //type: 'solid',   // dotted  solid  dashed
          length: -25,         // 属性length控制线长
          lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
            width: 3,
            color: 'rgba(0,0,0,0)',
            shadowColor: 'rgba(0,0,0,0)', //默认透明
            shadowBlur: 10
          }
        },
        pointer: {           // 分隔线
          shadowColor: '#fff', //默认透明
          shadowBlur: 5,
          width: 0,
        },
        title: {
          textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
            // fontWeight: 'bolder',
            fontSize: 10,
            // fontStyle: 'italic',
            color: '#84eafe',
            shadowColor: '#fff', //默认透明
            shadowBlur: 10
          }
        },
        detail: {
          //backgroundColor: 'rgba(30,144,255,0.8)',
          borderWidth: 0,
          borderColor: '#fff',
          shadowColor: '#fff', //默认透明
          shadowBlur: 5,
          offsetCenter: [0, 0],       // x, y，单位px
          textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
            // fontWeight: 'bolder',
            color: '#84eafe',
            fontSize: 38
          },
          formatter: '{value}%',
        },
        data: [{ value: kdfin, name: '年度完成率' }]
        //data:[{value: 40, name: 'km/h'}]
      },

      {
        name: '年度完成率_内表盘',
        type: 'gauge',
        center: ['50%', '50%'],    // 默认全局居中
        radius: '75%',
        min: 0,
        max: 7,
        startAngle: 210,
        endAngle: -30,
        //endAngle:45,
        //splitNumber:7,
        axisLine: {            // 坐标轴线
          lineStyle: {       // 属性lineStyle控制线条样式
            //color: [[0.3, 'lime'],[0.85, '#1e90ff'],[0.95, '#ff4500'],[1, '#bababa']],
            color: [
              [0.1, '#6d0d8b'],
              [0.2, '#9713c5'],
              [0.3, '#bc1fff'],
              [0.4, '#9742fd'],
              [0.5, '#a4def4'],
              [0.6, '#63c8ed'],
              [0.7, '#22aaf5'],
              [0.8, '#5287f8'],
              [0.9, '#4949fc'],
              [1, '#2124ea']
            ],
            width: 4,
            shadowColor: '#fff', //默认透明
            shadowBlur: 10
          }
        },
        axisLabel: {            // 坐标轴小标记
          textStyle: {       // 属性lineStyle控制线条样式
            fontWeight: 'bolder',
            color: 'rgba(0,0,0,0)',
            shadowColor: '#fff', //默认透明
            shadowBlur: 10,
          }
        },
        axisTick: {            // 坐标轴小标记
          length: 0,        // 属性length控制线长
          lineStyle: {       // 属性lineStyle控制线条样式
            color: 'auto',
            shadowColor: '#fff', //默认透明
            shadowBlur: 10
          }
        },
        splitLine: {           // 分隔线
          length: 0,         // 属性length控制线长
          lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
            width: 3,
            color: '#fff',
            shadowColor: '#fff', //默认透明
            shadowBlur: 10
          }
        },
        pointer: {
          width: 0,
          shadowColor: '#fff', //默认透明
          shadowBlur: 5
        },
        title: {
          offsetCenter: [0, '-30%'],       // x, y，单位px
          textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
            // fontWeight: 'bolder',
            fontStyle: 'italic',
            color: '#fff',
            shadowColor: '#fff', //默认透明
            shadowBlur: 10
          }
        },
        detail: {

          show: false,
          //backgroundColor: 'rgba(30,144,255,0.8)',
          borderWidth: 1,
          borderColor: '#fff',
          shadowColor: '#fff', //默认透明
          shadowBlur: 5,
          width: 80,
          height: 30,
          offsetCenter: [25, '20%'],       // x, y，单位px
          textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
            fontWeight: 'bolder',
            color: '#e4393c'
            //color: '#fff'
          }
        },
        data: [{
          value: 1.5,
          //name: 'x1000 r/min'
        }]
      },
    ]
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
      right: '9%',
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
function drawchart6(kdnxa, kdnuv, kdnmv, kdntv) {
  var chart6 = echarts.init(document.getElementById("chart6"));
  var option6 = {
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
      right: '9%',
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
      data: kdnxa
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
        data: kdnuv
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
        data: kdnmv
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
        data: kdntv
      },
    ]
  };
  chart6.setOption(option6);
  redraw(chart6, option6, t6);

}
function drawchart6r(kdsxa, kdsuv, kdsmv, kdstv) {
  var chart6r = echarts.init(document.getElementById("chart6r"));
  var option6r = {
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
      right: '9%',
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
      data: kdsxa
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
        data: kdsuv
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
        data: kdsmv
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
        data: kdstv
      },

    ]
  };
  chart6r.setOption(option6r);
  redraw(chart6r, option6r, t6r);

}

// 按钮的切换效果
$(".enter1").click(function () {
  window.location.href = "index1.html"
})
$(".enter2").click(function () {
  flag = "移网";
  localStorage.setItem("type", flag)
  window.location.href = "indexx.html";
})
$(".enter3").click(function () {
  flag = "宽带";
  localStorage.setItem("type", flag)
  window.location.href = "indexx.html";
})

$("#btn1").click(function () {
  $("#chart3").show();
  $("#chart3r").hide();

})
$("#btn2").click(function () {
  $("#chart3").hide();
  $("#chart3r").show();

})
$("#btn3").click(function () {
  $("#chart6").show();
  $(".con2 .dec").html("北方持续稳步提升，领先电信10.5分，领先移动16.8分。")
  $("#chart6r").hide();
})
$("#btn4").click(function () {
  $("#chart6").hide();
  $(".con2 .dec").html("南方与移动基本持平，落后电信8.5分。")
  $("#chart6r").show();
  $("#chart6r").width($("#chart6").width())
})
// 弱化效果函数
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
t6 = { "中国联通": "LT", "中国移动": "YD", "中国电信": "DX" };
t6r = { "中国联通": "LT", "中国移动": "YD", "中国电信": "DX" };
//请求折线图数据
$.ajax({
  type: "post",
  dataType: "json",
  url: "json/index.json",
  data:{
    yearq:yearq
  },
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

    // 移网折线图
    for (var i = 0; i < result.ywNPS.length; i++) {
      ywchart.push({
        age: result.ywNPS[i].YEAR_Q,
        uval: parseFloat(result.ywNPS[i].U_NPS).toFixed(2),
        mval: parseFloat(result.ywNPS[i].M_NPS).toFixed(2),
        tval: parseFloat(result.ywNPS[i].T_NPS).toFixed(2)
      })
    }
    var ywmm = ywchart[4].uval - ywchart[4].mval;
    var ywmt = ywchart[4].uval - ywchart[4].tval;
    if (ywmm >= 0) {
      $(".dec1 .mmd").text("领先")
      $(".dec1 .mmn").text(parseFloat(ywmm).toFixed(1))
    } else {
      $(".dec1 .mmd").text("落后")
      $(".dec1 .mmn").text(parseFloat(-ywmm).toFixed(1))
    }
    if (ywmt >= 0) {
      $(".dec1 .mtd").text("领先")
      $(".dec1 .mtn").text(parseFloat(ywmt).toFixed(1))
    } else {
      $(".dec1 .mtd").text("落后")
      $(".dec1 .mtn").text(parseFloat(-ywmt).toFixed(1))
    }
    // 宽带折线图
    for (var i = 0; i < result.kdNPS.length; i++) {
      kdchart.push({
        age: result.kdNPS[i].YEAR_Q,
        uval: parseFloat(result.kdNPS[i].U_K_NPS).toFixed(2),
        mval: parseFloat(result.kdNPS[i].M_K_NPS).toFixed(2),
        tval: parseFloat(result.kdNPS[i].T_K_NPS).toFixed(2)
      })
    }
    var kdmm = kdchart[4].uval - kdchart[4].mval;
    var kdmt = kdchart[4].uval - kdchart[4].tval;
    console.log(kdmt);
    
    if (kdmm >= 0) {
      $(".dec2 .mmd").text("领先")
      $(".dec2 .mmn").text(parseFloat(kdmm).toFixed(1))
    } else {
      $(".dec2 .mmd").text("落后")
      $(".dec2 .mmn").text(parseFloat(-kdmm).toFixed(1))
    }
    if (kdmt >= 0) {
      $(".dec2 .mtd").text("领先")
      $(".dec2 .mtn").text(parseFloat(kdmt).toFixed(1))
    } else {
      $(".dec2 .mtd").text("落后")
      $(".dec2 .mtn").text(parseFloat(-kdmt).toFixed(1))
    }

    // 2I2C折线图
    for (var i = 0; i < result.user2I2C.length; i++) {
      icchart.push({
        age: result.user2I2C[i].YEAR_Q,
        yval: parseFloat(result.user2I2C[i].YES_2I2C).toFixed(2),
        nval: parseFloat(result.user2I2C[i].NO_2I2C).toFixed(2),
      })
    }
    // ft折线图
    for (var i = 0; i < result.flowType.length; i++) {
      ftchart.push({
        age: result.flowType[i].YEAR_Q,
        yval: parseFloat(result.flowType[i].YES_4G_NPS).toFixed(2),
        nval: parseFloat(result.flowType[i].NO_4G_NPS).toFixed(2),
        sval: parseFloat(result.flowType[i].SOUND_NPS).toFixed(2)
      })
    }
    // 宽带北方折线图
    for (var i = 0; i < result.kdN.length; i++) {
      kdNchart.push({
        age: result.kdN[i].YEAR_Q,
        uval: parseFloat(result.kdN[i].U_K_NPS).toFixed(2),
        mval: parseFloat(result.kdN[i].M_K_NPS).toFixed(2),
        tval: parseFloat(result.kdN[i].T_K_NPS).toFixed(2)
      })
    }
    // 宽带南方折线图
    for (var i = 0; i < result.kdS.length; i++) {
      kdSchart.push({
        age: result.kdS[i].YEAR_Q,
        uval: parseFloat(result.kdS[i].U_K_NPS).toFixed(2),
        mval: parseFloat(result.kdS[i].M_K_NPS).toFixed(2),
        tval: parseFloat(result.kdS[i].T_K_NPS).toFixed(2)
      })
    }
    for (var i = 0; i < 5; i++) {
      ywxa.push(ywchart[i].age)
      ywuv.push(ywchart[i].uval)
      ywmv.push(ywchart[i].mval)
      ywtv.push(ywchart[i].tval)

      kdxa.push(kdchart[i].age)
      kduv.push(kdchart[i].uval)
      kdmv.push(kdchart[i].mval)
      kdtv.push(kdchart[i].tval)

      icxa.push(icchart[i].age)
      icy.push(icchart[i].yval)
      icn.push(icchart[i].nval)

      ftxa.push(ftchart[i].age)
      fty.push(ftchart[i].yval)
      ftn.push(ftchart[i].nval)
      fts.push(ftchart[i].sval)

      kdnxa.push(kdNchart[i].age)
      kdnuv.push(kdNchart[i].uval)
      kdnmv.push(kdNchart[i].mval)
      kdntv.push(kdNchart[i].tval)

      kdsxa.push(kdSchart[i].age)
      kdsuv.push(kdSchart[i].uval)
      kdsmv.push(kdSchart[i].mval)
      kdstv.push(kdSchart[i].tval)
    }
    drawchart2(ywxa, ywuv, ywmv, ywtv)
    drawchart5(kdxa, kduv, kdmv, kdtv)
    drawchart3(ftxa, fty, ftn, fts)
    drawchart3r(icxa, icy, icn)
    drawchart6(kdnxa, kdnuv, kdnmv, kdntv)
    drawchart6r(kdsxa, kdsuv, kdsmv, kdstv)
  },
  error: function () {
    console.log("请求失败");
  }
})
