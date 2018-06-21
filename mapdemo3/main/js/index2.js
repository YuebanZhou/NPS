var chart1 = [];
var chart2 = [];
var chart3 = [];
var chart4 = [];
// chart1
var uv = [];
var mv = [];
var tv = [];
// chart2
var age = [];
var agedata = [];
var sum = 0;
var avg = 0;
// chart3
var q4 = [];
var q1 = [];
// chart4
var s1 = []
var s2 = []
var s3 = []
var s4 = []
var s5 = []
var s6 = []



// 切换移网和宽带
$(".btnzu").click(function (ev) {
  var ofx = $(".btnzu").offset().left;
  var oEvent = ev || event;
  var xx = oEvent.clientX;
  if (xx <= (100 + ofx)) {
    //移网
    $(".ywpng").show();
    $(".kdpng").hide();

  } else if (xx > (100 + ofx) && xx <= (200 + ofx)) {
    //宽带
    $(".ywpng").hide();
    $(".kdpng").show();
  }
})

$(".enter1").click(function () {
  window.location.href = "index.html"
})
$("select").on("cluck", )
$("select").change(function () {
  var option = $(".sel option:selected");
  var temp = option.val().split("Q");
  if (temp[1] == 1) {
    temp[1] = "一"
  }
  if (temp[1] == 2) {
    temp[1] = "二"
  }
  if (temp[1] == 3) {
    temp[1] = "三"
  }
  if (temp[1] == 4) {
    temp[1] = "四"
  }
  var str = "20" + temp[0] + "年第" + temp[1] + "季度"
  $(".age").html(str)
})

function drawchart1(uv, mv, tv) {
  /* chart1配置内容 start */
  val1 = (uv / (uv + mv + tv) * 100).toFixed(1)
  val2 = (mv / (uv + mv + tv) * 100).toFixed(1)
  val3 = (tv / (uv + mv + tv) * 100).toFixed(1)
  var data = [
    { "value": val1, "name": "中国联通", "val": uv },
    { "value": val2, "name": "中国移动", "val": mv },
    { "value": val3, "name": "中国电信", "val": tv }
  ];
  data_name = [];
  for (var n in data) {
    data[n]['name'] = data[n]['name'] + ' ' + data[n]['value'] + '%';
    data_name.push(data[n]['name'])
  }
  /* chart1配置内容 end */
  var chart1 = echarts.init(document.getElementById("chart1"));
  var option1 = {
    // title: {
    //   text: '中国联通\n20%',
    //   x: 'center',
    //   y: 'center',
    //   textStyle: {
    //     fontWeight: 'normal',
    //     color: '#0580f2',
    //     fontSize: '40'
    //   }
    // },
    tooltip: {
      trigger: 'item',
      formatter: "{b}"
    },
    legend: {
      orient: 'vertical',
      top: 'top',
      left: 'left',
      right: 60,
      data: data_name,
      textStyle: {
        color: "#fff",
        fontWeight: 'normal',
        fontFamily: '宋体'
      }
    },
    grid: {
      top: '3%',
      bottom: '3%',
      left: '6%',
      right: '6%'
    },
    series: [

      {
        name: '',
        type: 'pie',
        radius: ['40%', '55%'],
        data: data,
        itemStyle: {
          normal: {
            borderWidth: 5,
            // shadowBlur: 30,
            borderColor: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
              offset: 0,
              color: '#0A0A2D'
            }, {
              offset: 1,
              color: '#0A0A2D'
            }]),
            shadowColor: 'rgba(142, 152, 241, 0.6)'
          }
        },
      }
    ]
  };
  chart1.setOption(option1);
  $(".chart1val").html(uv + mv + tv)
}
function drawchart2(age, agedata) {
  var chart2 = echarts.init(document.getElementById("chart2"));
  var option2 = {
    color: ["#00C7FF"],
    // title: {
    //   text: '各年龄段占比',
    //   textStyle: {
    //       color: '#ccc'
    //   }
    // },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      formatter: "{b} <br> 占比: {c}%"
    },
    /*legend: {
        data: [date]
    },*/
    grid: {
      left: '4%',
      right: '4%',
      bottom: '2%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value} %'
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: "#00c7ff",
          width: 1,
          type: "solid"
        },
      },
      splitLine: {
        lineStyle: {
          color: "#063374",
        }
      }
    },
    yAxis: {
      type: 'category',
      // data: ['18-24', '25-34', '35-39', '40-44', '45-55', '55岁以上'],
      data: age,
      axisLabel: {
        show: true,
        margin: 10,
        inside: false,
        textStyle: {
          color: '#00c7ff',
          fontWeight: '50'
        },
        interval: 0,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "#063374",
          width: 1,
          type: "solid"
        }
      },
      axisTick: {
        show: false,
      },
    },
    series: [{
      type: 'bar',
      label: {
        normal: {
          show: true,
          // formatter: '{c}',
          formatter: function (v) {
            var val = v.data;
            if (val == 0) {
              return '';
            }
            return val;
          },
          color: '#fff'
        }
      },
      // data: [20.78, 39.18, 10.28, 9.31, 13.31, 7.41]
      data: agedata
    }]
  }
  chart2.setOption(option2)
}
function drawchart3(q4, q1) {
  var chart3 = echarts.init(document.getElementById("chart3"));
  var option3 = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['17Q4', '18Q1'],
      align: 'right',
      right: 10,
      textStyle: {
        color: "#fff"
      },
      itemWidth: 10,
      itemHeight: 10,
      itemGap: 35
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '8%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      data: ['纯语音\n用户',
        '有流量\n4G用户',
        '有流量\n非4G用户',
      ],
      axisLine: {
        show: true,
        lineStyle: {
          color: "#063374",
          width: 1,
          type: "solid"
        }
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: "#00c7ff",
        },
        // rotate: 10,
        interval: 0,
      },
    }],
    yAxis: [{
      type: 'value',
      axisLabel: {
        formatter: '{value} '
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: "#00c7ff",
          width: 1,
          type: "solid"
        },
      },
      splitLine: {
        lineStyle: {
          color: "#063374",
        }
      }
    }],
    series: [{
      name: '17Q4',
      type: 'bar',
      // data: [9.5, 15.6, 74.9],
      data: q4,
      barWidth: 10, //柱子宽度
      barGap: 1, //柱子之间间距
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#008cff'
          }, {
            offset: 1,
            color: '#005193'
          }]),
          opacity: 1,
        }
      }
    }, {
      name: '18Q1',
      type: 'bar',
      // data: [8.8, 12.1, 79.1],
      data: q1,
      barWidth: 10,
      barGap: 1,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#00da9c'
          }, {
            offset: 1,
            color: '#007a55'
          }]),
          opacity: 1,
        }
      }
    },]
  }
  chart3.setOption(option3)
}
function drawchart4(s1, s2, s3, s4, s5, s6) {
  var chart4 = echarts.init(document.getElementById("chart4"));
  var option4 = {
    color: ["#8DBC92", "#FFFAC2", "#F6BEAD", "#B884AA", "#0B59A1", "#90A41A"],

    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    legend: {
      data: ["1星", "2星", "3星", "4星", "5星", "未评级"],
      align: 'right',
      right: 10,
      textStyle: {
        color: "#fff"
      },
      itemWidth: 10,
      itemHeight: 10,
      itemGap: 5
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "8%",
      containLabel: true
    },
    yAxis: {
      type: "value",
      axisLabel: {
        formatter: '{value} %'
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: "#00c7ff",
          width: 1,
          type: "solid"
        },
      },
      splitLine: {
        lineStyle: {
          color: "#063374",
        }
      }
    },
    xAxis: {
      type: "category",
      data: ["联通各类用户\n数量实际占比", "调研样本\n量占比"],
      axisLine: {
        show: true,
        lineStyle: {
          color: "#063374",
          width: 1,
          type: "solid"
        }
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: "#00c7ff",
        },
        // rotate: 10,
        interval: 0,
      },
    },
    series: [
      {
        name: "1星",
        type: "bar",
        stack: "总量",
        label: {
          normal: {
            show: true,
            position: "insideRight"
          }
        },
        // data: [20.5, 33.5],
        data: s1,
        label: {
          normal: {
            show: true,
            textStyle: {
              color: "#000"
            }
          }
        },
      },
      {
        name: "2星",
        type: "bar",
        stack: "总量",
        label: {
          normal: {
            show: true,
            position: "insideRight"
          }
        },
        // data: [29.1, 33.6],
        data: s2,
        label: {
          normal: {
            show: true,
            textStyle: {
              color: "#000"
            }
          }
        },
      },
      {
        name: "3星",
        type: "bar",
        stack: "总量",
        label: {
          normal: {
            show: true,
            position: "insideRight"
          }
        },
        // data: [11.3, 17.0],
        data: s3,
        label: {
          normal: {
            show: true,
            textStyle: {
              color: "#000"
            }
          }
        },
      },
      {
        name: "4星",
        type: "bar",
        stack: "总量",
        label: {
          normal: {
            show: true,
            position: "insideRight"
          }
        },
        // data: [7.6, 13.7],
        data: s4,
        label: {
          normal: {
            show: true,
            textStyle: {
              color: "#000"
            }
          }
        },
      },
      {
        name: "5星",
        type: "bar",
        stack: "总量",
        label: {
          normal: {
            show: true,
            position: "insideRight"
          }
        },
        // data: [3.0, 3.0],
        data: s5,
        label: {
          normal: {
            show: true,
            textStyle: {
              color: "#000"
            }
          }
        },
      },
      {
        name: "未评级",
        type: "bar",
        stack: "总量",
        label: {
          normal: {
            show: true,
            position: "insideRight"
          }
        },
        // data: [11.3, 17.0],
        data: s6,
        label: {
          normal: {
            show: true,
            textStyle: {
              color: "#000"
            }
          }
        },
      },
    ]

  }
  chart4.setOption(option4)
}


// 获取数据
$.ajax({
  type: "post",
  dataType: "json",
  url: "json/index1.json",
  success: function (result) {
    console.log("请求成功");
    // console.log(result);
    /* ***** chart部分 start ***** */
    // chart1
    for (var i = 0; i < result.quotaOPERATORYW.length; i++) {
      if (result.quotaOPERATORYW[i].OPERATOR_TYPE == "中国联通") {
        uv = result.quotaOPERATORYW[i].N
      }
      if (result.quotaOPERATORYW[i].OPERATOR_TYPE == "中国移动") {
        mv = result.quotaOPERATORYW[i].N
      }
      if (result.quotaOPERATORYW[i].OPERATOR_TYPE == "中国电信") {
        tv = result.quotaOPERATORYW[i].N
      }
    }
    // chart2
    for (var i = 0; i < result.quotaAGEYW.length; i++) {
      age.push(result.quotaAGEYW[i].AGE_GROUP);
      sum += result.quotaAGEYW[i].count;
    }
    // chart2
    for (var i = 0; i < result.quotaAGEYW.length; i++) {
      agedata.push(((result.quotaAGEYW[i].count / sum) * 100).toFixed(2));
    }
    // cahrt3
    for (var i = 0; i < result.quotaUserTypeYW.length; i++) {
      if (result.quotaUserTypeYW[i].YEAR_Q == "2017Q4") {
        if (result.quotaUserTypeYW[i].USER_TYPE == "纯语音用户") {
          q4[0] = result.quotaUserTypeYW[i].count
        }
        if (result.quotaUserTypeYW[i].USER_TYPE == "有流量4G用户") {
          q4[1] = result.quotaUserTypeYW[i].count
        }
        if (result.quotaUserTypeYW[i].USER_TYPE == "有流量非4G用户") {
          q4[2] = result.quotaUserTypeYW[i].count
        }
      }
      if (result.quotaUserTypeYW[i].YEAR_Q == "2018Q1") {
        if (result.quotaUserTypeYW[i].USER_TYPE == "纯语音用户") {
          q1[0] = result.quotaUserTypeYW[i].count
        }
        if (result.quotaUserTypeYW[i].USER_TYPE == "有流量4G用户") {
          q1[1] = result.quotaUserTypeYW[i].count
        }
        if (result.quotaUserTypeYW[i].USER_TYPE == "有流量非4G用户") {
          q1[2] = result.quotaUserTypeYW[i].count
        }
      }

    }
    // chart4
    for (var i = 0; i < result.quotaStarYW.length; i++) {
      if (result.quotaStarYW[i].USER_LEVEL == "1") {
        s1 = [1092, result.quotaStarYW[i].count]
      }
      if (result.quotaStarYW[i].USER_LEVEL == "2") {
        s2 = [1381, result.quotaStarYW[i].count]
      }
      if (result.quotaStarYW[i].USER_LEVEL == "3") {
        s3 = [718, result.quotaStarYW[i].count]
      }
      if (result.quotaStarYW[i].USER_LEVEL == "4") {
        s4 = [385, result.quotaStarYW[i].count]
      }
      if (result.quotaStarYW[i].USER_LEVEL == "5") {
        s5 = [99, result.quotaStarYW[i].count]
      }
      if (result.quotaStarYW[i].USER_LEVEL == "未评级") {
        s6 = [425, result.quotaStarYW[i].count]
      }
    }
    drawchart1(uv, mv, tv);
    drawchart2(age, agedata);
    drawchart3(q4, q1);
    drawchart4(s1, s2, s3, s4, s5, s6);
    /* ***** chart部分 end ***** */


  },
  error: function () {
    console.log("请求失败");
  }
})




