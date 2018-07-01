// 网络

// 业务

// 服务
var fwchart = [];
var fwyear = [];
var fwunps = [];
var fwmnps = [];
var fwtnps = [];
var fwtable = [];
$(".block1").click(function () {
  //网络
  $(".btn1").show();
  $(".btn2").hide();
  $(".btn3").hide();
  $("#con1").show();
  $("#con2").hide();
  $("#con3").hide();
});
$(".block2").click(function () {
  //业务
  $(".btn1").hide();
  $(".btn2").show();
  $(".btn3").hide();
  $("#con1").hide();
  $("#con2").show();
  $("#con3").hide();
});
$(".block3").click(function () {
  //服务
  $(".btn1").hide();
  $(".btn2").hide();
  $(".btn3").show();
  $("#con1").hide();
  $("#con2").hide();
  $("#con3").show();
})
var type = "移网"
if (localStorage.getItem("type")) {
  type = localStorage.getItem("type");
}

$(".toptitle .age").text(type)
$(".enter1").click(function () {
  window.location.href = "index.html";
});
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
//网络
function drawchart1() {
  var chart1 = echarts.init(document.getElementById("chart1"));
  var option1 = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        lineStyle: {
          color: '#2897E4'
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
        color: '#2897E4'
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
          color: '#2897E4'
        }
      },
      axisLabel: {
        margin: 10,
        textStyle: {
          fontSize: 14,
          color: '#2897E4'
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
          color: '#2897E4'
        }
      },
      axisLabel: {
        margin: 10,
        textStyle: {
          fontSize: 14,
          color: '#2897E4'
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
        data: [-1.2, -0.5, 0.6, 5, 5],
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
        data: [28.4, 23.4, 24.2, 26.9, 23.8],
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
        data: [14.1, 13.9, 14.4, 17.9, 16.5],
      },
    ]

  };
  chart1.setOption(option1);
  redraw(chart1, option1, t1);

}

//业务
function drawchart3() {
  var chart3 = echarts.init(document.getElementById("chart3"));
  var option3 = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        lineStyle: {
          color: '#2897E4'
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
        color: '#2897E4'
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
          color: '#2897E4'
        }
      },
      axisLabel: {
        margin: 10,
        textStyle: {
          fontSize: 14,
          color: '#2897E4'
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
          color: '#2897E4'
        }
      },
      axisLabel: {
        margin: 10,
        textStyle: {
          fontSize: 14,
          color: '#2897E4'
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
        data: [4.6, 3.4, 9.8, 12.3, 19.6],
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
        data: [4.6, -9.2, -4.7, -3, -4.9],
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
        data: [9.5, 6.6, 9.8, 7.9, 25.2],
      },
    ]
  };
  chart3.setOption(option3);
  redraw(chart3, option3, t3);
}

//服务
function drawchart5(fwyear, fwunps, fwmnps, fwtnps) {
  var chart5 = echarts.init(document.getElementById("chart5"));
  var option5 = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        lineStyle: {
          color: '#2897E4'
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
        color: '#2897E4'
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
          color: '#2897E4'
        }
      },
      axisLabel: {
        margin: 10,
        textStyle: {
          fontSize: 14,
          color: '#2897E4'
        }
      },
      //data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
      // data: ['17Q1', '17Q2', '17Q3', '17Q4', '18Q1']
      data: fwyear
    }],
    yAxis: [{
      type: 'value',
      axisTick: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: '#2897E4'
        }
      },
      axisLabel: {
        margin: 10,
        textStyle: {
          fontSize: 14,
          color: '#2897E4'
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
        // data: [23.6, 21.2, 26.1, 27.1, 25.1],
        data: fwunps
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
        // data: [54.6, 51, 54.5, 58, 50.7],
        data: fwmnps
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
        // data: [30, 28, 26.3, 32.1, 27.5],
        data: fwtnps
      },
    ]
  };
  chart5.setOption(option5);
  redraw(chart5, option5, t5);
}

function redraw(chart, option, t) {
  if (option && typeof option === "object") {
    chart.setOption(option, true);
    chart.on("click", function (e) {
      var tName = e.seriesName;

      console.log(e);
      console.log(e.seriesId);
      console.log(e.seriesName);
      //console.log(this);

      for (var i = 0; i < option.series.length; i++) {
        console.log("#########");
        console.log(option.series[i].name);
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
t1 = { "中国联通": "LT", "中国移动": "YD", "中国电信": "DX" };
t3 = { "中国联通": "LT", "中国移动": "YD", "中国电信": "DX" };
t5 = { "中国联通": "LT", "中国移动": "YD", "中国电信": "DX" };
drawchart1()
drawchart3()
if (type == "移网") {
  $.ajax({
    type: "post",
    dataType: "json",
    url: "json/indexxyw.json",
    success: function (result) {
      console.log("请求成功");
      // 网络
      // 业务
      // 服务
      for (var i = 0; i < result.typeYW.length; i++) {
        fwchart.push({
          year: result.typeYW[i].YEAR_Q,
          unps: parseFloat(result.typeYW[i].U_NPS).toFixed(2),
          mnps: parseFloat(result.typeYW[i].M_NPS).toFixed(2),
          tnps: parseFloat(result.typeYW[i].T_NPS).toFixed(2)
        })
      }

      for (var i = 0; i < fwchart.length; i++) {
        if (fwchart[i].year == "2017Q1") {
          fwyear[0] = fwchart[i].year;
          fwunps[0] = fwchart[i].unps;
          fwmnps[0] = fwchart[i].mnps;
          fwtnps[0] = fwchart[i].tnps;
        }
        if (fwchart[i].year == "2017Q2") {
          fwyear[1] = fwchart[i].year;
          fwunps[1] = fwchart[i].unps;
          fwmnps[1] = fwchart[i].mnps;
          fwtnps[1] = fwchart[i].tnps;
        }
        if (fwchart[i].year == "2017Q3") {
          fwyear[2] = fwchart[i].year;
          fwunps[2] = fwchart[i].unps;
          fwmnps[2] = fwchart[i].mnps;
          fwtnps[2] = fwchart[i].tnps;
        }
        if (fwchart[i].year == "2017Q4") {
          fwyear[3] = fwchart[i].year;
          fwunps[3] = fwchart[i].unps;
          fwmnps[3] = fwchart[i].mnps;
          fwtnps[3] = fwchart[i].tnps;
        }
        if (fwchart[i].year == "2018Q1") {
          fwyear[4] = fwchart[i].year;
          fwunps[4] = fwchart[i].unps;
          fwmnps[4] = fwchart[i].mnps;
          fwtnps[4] = fwchart[i].tnps;
        }
      }
      drawchart5(fwyear, fwunps, fwmnps, fwtnps)
      for (var i = 0; i < result.typeYWNPS.length; i++) {
        fwtable.push({
          name: result.typeYWNPS[i].L_NAME,
          seme: parseFloat(result.typeYWNPS[i].TB).toFixed(2),
          circle: parseFloat(result.typeYWNPS[i].HB).toFixed(2),
          lift: parseFloat(result.typeYWNPS[i].U_REFERENCE_RATE)
        })
      }
      fwtable.sort(sortBy('lift', false));
      var fwstr = '';
      for (var i = 0; i < fwtable.length; i++) {
        fwstr += `
        <tr>
          <td width="10%" align="canter">`+ (i + 1) + `</td>
          <td width="60%" align="canter">`+ fwtable[i].name + `</td>
          <td width="10%" align="canter">`+ fwtable[i].seme + `</td>
          <td width="10%" align="canter">`+ fwtable[i].circle + `</td>
          <td width="10%" align="canter">`+ (fwtable[i].lift).toFixed(2) + `</td>
        </tr>
    
        `
      }
      $("#con3 #tplWrapper_TemplateZ").html(fwstr)


    },
    error: function () {
      console.log("请求失败");
    }
  })
}
if (type == "宽带") {
  $.ajax({
    type: "post",
    dataType: "json",
    url: "json/indexxkd.json",
    success: function (result) {
      console.log("请求成功");
      // 网络
      // 业务
      // 服务
      for (var i = 0; i < result.typeKD.length; i++) {
        fwchart.push({
          year: result.typeKD[i].YEAR_Q,
          unps: parseFloat(result.typeKD[i].U_K_NPS).toFixed(2),
          mnps: parseFloat(result.typeKD[i].M_K_NPS).toFixed(2),
          tnps: parseFloat(result.typeKD[i].T_K_NPS).toFixed(2)
        })
      }
      for (var i = 0; i < fwchart.length; i++) {
        if (fwchart[i].year == "2017Q1") {
          fwyear[0] = fwchart[i].year;
          fwunps[0] = fwchart[i].unps;
          fwmnps[0] = fwchart[i].mnps;
          fwtnps[0] = fwchart[i].tnps;
        }
        if (fwchart[i].year == "2017Q2") {
          fwyear[1] = fwchart[i].year;
          fwunps[1] = fwchart[i].unps;
          fwmnps[1] = fwchart[i].mnps;
          fwtnps[1] = fwchart[i].tnps;
        }
        if (fwchart[i].year == "2017Q3") {
          fwyear[2] = fwchart[i].year;
          fwunps[2] = fwchart[i].unps;
          fwmnps[2] = fwchart[i].mnps;
          fwtnps[2] = fwchart[i].tnps;
        }
        if (fwchart[i].year == "2017Q4") {
          fwyear[3] = fwchart[i].year;
          fwunps[3] = fwchart[i].unps;
          fwmnps[3] = fwchart[i].mnps;
          fwtnps[3] = fwchart[i].tnps;
        }
        if (fwchart[i].year == "2018Q1") {
          fwyear[4] = fwchart[i].year;
          fwunps[4] = fwchart[i].unps;
          fwmnps[4] = fwchart[i].mnps;
          fwtnps[4] = fwchart[i].tnps;
        }
      }
      drawchart5(fwyear, fwunps, fwmnps, fwtnps)
      for (var i = 0; i < result.typeKDNPS.length; i++) {
        fwtable.push({
          name: result.typeKDNPS[i].L_NAME,
          seme: parseFloat(result.typeKDNPS[i].TB).toFixed(2),
          circle: parseFloat(result.typeKDNPS[i].HB).toFixed(2),
          lift: parseFloat(result.typeKDNPS[i].U_K_REFERENCE_RATE)
        })
      }
      fwtable.sort(sortBy('lift', false));
      var fwstr = '';
      for (var i = 0; i < fwtable.length; i++) {
        fwstr += `
        <tr>
          <td width="10%" align="canter">`+ (i + 1) + `</td>
          <td width="60%" align="canter">`+ fwtable[i].name + `</td>
          <td width="10%" align="canter">`+ fwtable[i].seme + `</td>
          <td width="10%" align="canter">`+ fwtable[i].circle + `</td>
          <td width="10%" align="canter">`+ (fwtable[i].lift).toFixed(2) + `</td>
        </tr>
    
        `
      }
      $("#con3 #tplWrapper_TemplateZ").html(fwstr)


    },
    error: function () {
      console.log("请求失败");
    }
  })
}
var sortBy = function (attr, rev) {
  //第二个参数没有传递 默认升序排列
  if (rev == undefined) {
    rev = 1;
  } else {
    rev = (rev) ? 1 : -1;
  }
  return function (a, b) {
    a = a[attr];
    b = b[attr];
    if (a < b) {
      return rev * -1;
    }
    if (a > b) {
      return rev * 1;
    }
    return 0;
  }
}


