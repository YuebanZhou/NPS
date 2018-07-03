var curWwwPath=window.document.location.href;
var pathName=window.document.location.pathname;
var pos=curWwwPath.indexOf(pathName);
var localhostPaht=curWwwPath.substring(0,pos);
var projectName=pathName.substring(0,pathName.substr(1).indexOf('/')+1);



const ajaxBaseURL = localhostPaht+projectName;
console.log(ajaxBaseURL);

var yearq=localStorage.getItem("yearq")
var SYS_ID=localStorage.getItem("SYS_ID",SYS_ID);
var SYS_VALUE=localStorage.getItem("SYS_VALUE",SYS_VALUE);
var DEPT_ID=localStorage.getItem("DEPT_ID",DEPT_ID);
var DEPT_NAME=localStorage.getItem("DEPT_NAME",DEPT_NAME);
var provinceName=localStorage.getItem("provinceName",provinceName);

var chart1 = [];
var chart2 = [];
var chart3 = [];
var chart4 = [];
// chart1
var uv1 = [];
var mv1 = [];
var tv1 = [];
var uv2 = [];
var mv2 = [];
var tv2 = [];

// chart2
// chart3
var q4 = [];
var q1 = [];
var girl = [];
var boy = [];

// chart4
var s1 = []
var s2 = []
var s3 = []
var s4 = []
var s5 = []
var s6 = []
var skd1 = []
var skd2 = []
var skd3 = []
var skd4 = []


// 模拟获取部门名称
var apartment = DEPT_NAME;
$(".toptitle .apartment").html(apartment);

// 切换移网和宽带
$(".btnzu1 .btn1").click(function () {
  // 移网
  if ($(".btnzu1 .btn2").hasClass("active")) {
    $(".btnzu1 .btn1").addClass("active");
    $(".btnzu1 .btn2").removeClass("active");
  }
  var str1 = $(".hrtitle1 span").text()
  var str2 = $(".hrtitle2 span").text()
  str1 = str1.substring(2);
  str2 = str2.substring(2);
  $(".hrtitle1 span").text("移网" + str1)
  $(".hrtitle2 span").text("移网" + str2)
  getMessage(yearq);
})
$(".btnzu1 .btn2").click(function () {
  // 宽带
  if ($(".btnzu1 .btn1").hasClass("active")) {
    $(".btnzu1 .btn2").addClass("active");
    $(".btnzu1 .btn1").removeClass("active");
  }
  var str1 = $(".hrtitle1 span").text()
  var str2 = $(".hrtitle2 span").text()
  str1 = str1.substring(2);
  str2 = str2.substring(2);
  $(".hrtitle1 span").text("宽带" + str1)
  $(".hrtitle2 span").text("宽带" + str2)
  getMessage(yearq);
})
// 切换季度
$(".btnzu2 .btn1").click(function () {
  // 17Q1
  $(".btnzu2 .btn1").addClass("active");
  $(".btnzu2 .btn2").removeClass("active");
  $(".btnzu2 .btn3").removeClass("active");
  $(".btnzu2 .btn4").removeClass("active");
  $(".btnzu2 .btn5").removeClass("active");
  $(".top .age").html("2017年第一季度");
  yearq="2017Q1";
  localStorage.setItem("yearq",yearq)
  getMessage(yearq);
})
$(".btnzu2 .btn2").click(function () {
  // 17Q2
  $(".btnzu2 .btn1").removeClass("active");
  $(".btnzu2 .btn2").addClass("active");
  $(".btnzu2 .btn3").removeClass("active");
  $(".btnzu2 .btn4").removeClass("active");
  $(".btnzu2 .btn5").removeClass("active");
  $(".top .age").html("2017年第二季度");
  yearq="2017Q2";
  localStorage.setItem("yearq",yearq)
  getMessage(yearq);
})
$(".btnzu2 .btn3").click(function () {
  // 17Q3
  $(".btnzu2 .btn1").removeClass("active");
  $(".btnzu2 .btn2").removeClass("active");
  $(".btnzu2 .btn3").addClass("active");
  $(".btnzu2 .btn4").removeClass("active");
  $(".btnzu2 .btn5").removeClass("active");
  $(".top .age").html("2017年第三季度");
  yearq="2017Q3";
  localStorage.setItem("yearq",yearq)
  getMessage(yearq);
})
$(".btnzu2 .btn4").click(function () {
  // 17Q4
  $(".btnzu2 .btn1").removeClass("active");
  $(".btnzu2 .btn2").removeClass("active");
  $(".btnzu2 .btn3").removeClass("active");
  $(".btnzu2 .btn4").addClass("active");
  $(".btnzu2 .btn5").removeClass("active");
  $(".top .age").html("2017年第四季度");
  yearq="2017Q4";
  localStorage.setItem("yearq",yearq)
  getMessage(yearq);
})
$(".btnzu2 .btn5").click(function () {
  // 18Q1
  $(".btnzu2 .btn1").removeClass("active");
  $(".btnzu2 .btn2").removeClass("active");
  $(".btnzu2 .btn3").removeClass("active");
  $(".btnzu2 .btn4").removeClass("active");
  $(".btnzu2 .btn5").addClass("active");
  $(".top .age").html("2018年第一季度");
  yearq="2018Q1";
  localStorage.setItem("yearq",yearq)
  getMessage(yearq);
})

// 切换季度年度
$(".btnzu3 .btn1").click(function () {
  // 季度
  $(".btnzu3 .btn1").addClass("active");
  $(".btnzu3 .btn2").removeClass("active");
})
$(".btnzu3 .btn2").click(function () {
  // 年度
  $(".btnzu3 .btn1").removeClass("active");
  $(".btnzu3 .btn2").addClass("active");
})
$(".enter1").click(function () {
  window.location.href = "index.html"
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
        color: "#000",
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
              color: '#fff'
            }, {
              offset: 1,
              color: '#fff'
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
    color: ["#DBB924", "#F48057", "#F1B599", "#95ABB9", "#85BCBF", "#DED262", "#D1CAB8", "#A686D1", "#A5525C"],
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient: "vertical",
      bottom: 20,
      // data: ["18-24 ", "25-34 ", "35-39 ", "40-44 ", "45-55 ", "55岁以上"],
      data: age,
      right: 'right'
    },
    series: [
      {
        name: "用户群年龄占比",
        type: "pie",
        radius: "55%",
        center: ["30%", "50%"],
        selectedMode: "single",
        label: {
          normal: {
            // position: 'inner',
            formatter(params) {
              if (params.percent) {
                return params.name + params.percent + "%";
              } else {
                return "";
              }
            }
          }
        },
        itemStyle: {
          emphasis: {
            shadowBlur: 20,
            shadowOffsetX: 5,
            shadowColor: "rgba(0, 0, 0, 0.5)"
          }
        },
        // data: [
        //   { value: 19.2, name: "18-24 " },
        //   { value: 36.2, name: "25-34 " },
        //   { value: 9.5, name: "35-39 " },
        //   { value: 8.6, name: "40-44 " },
        //   { value: 12.3, name: "45-55 " },
        //   { value: 6.6, name: "55岁以上" }
        // ]
        data: agedata
      }
    ]
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
        color: "#000"
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
          color: "#000",
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
          color: "#000",
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
          color: "#000",
          width: 1,
          type: "solid"
        },
      },
      splitLine: {
        lineStyle: {
          color: "#000",
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
function drawchart3r(girl, boy) {
  var chart3r = echarts.init(document.getElementById("chart3r"));
  var option3r = {
    color: ["#8DBC92", "#FFFAC2", "#F6BEAD", "#B884AA", "#0B59A1", "#90A41A"],

    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    legend: {
      data: ["女", "男"],
      align: 'right',
      right: 10,
      textStyle: {
        color: "#000"
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
        formatter: '{value} '
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: "#000",
          width: 1,
          type: "solid"
        },
      },
      splitLine: {
        lineStyle: {
          color: "#000",
        }
      }
    },
    xAxis: {
      type: "category",
      data: ["中国联通", "中国移动", "中国电信"],
      axisLine: {
        show: true,
        lineStyle: {
          color: "#000",
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
          color: "#000",
        },
        // rotate: 10,
        interval: 0,
      },
    },
    series: [
      {
        name: "女",
        type: "bar",
        stack: "总量",
        label: {
          normal: {
            show: true,
            position: "insideRight"
          }
        },
        // data: [20.5, 33.5],
        data: girl,
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
        name: "男",
        type: "bar",
        stack: "总量",
        label: {
          normal: {
            show: true,
            position: "insideRight"
          }
        },
        // data: [29.1, 33.6],
        data: boy,
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
  chart3r.setOption(option3r)
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
        color: "#000"
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
        formatter: '{value} '
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: "#000",
          width: 1,
          type: "solid"
        },
      },
      splitLine: {
        lineStyle: {
          color: "#000",
        }
      }
    },
    xAxis: {
      type: "category",
      data: ["联通各类用户\n数量实际占比", "调研样本\n量占比"],
      axisLine: {
        show: true,
        lineStyle: {
          color: "#000",
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
          color: "#000",
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
function drawchart4r(skd1, skd2, skd3) {
  var chart4r = echarts.init(document.getElementById("chart4r"));
  var option4r = {
    color: ["#8DBC92", "#FFFAC2", "#F6BEAD", "#B884AA", "#0B59A1", "#90A41A"],

    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    legend: {
      data: ["FTTH", "LAN", "XDSL"],
      align: 'right',
      right: 10,
      textStyle: {
        color: "#000"
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
        formatter: '{value} '
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: "#000",
          width: 1,
          type: "solid"
        },
      },
      splitLine: {
        lineStyle: {
          color: "#000",
        }
      }
    },
    xAxis: {
      type: "category",
      data: ["联通用户", "调研样本"],
      axisLine: {
        show: true,
        lineStyle: {
          color: "#000",
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
          color: "#000",
        },
        // rotate: 10,
        interval: 0,
      },
    },
    series: [
      {
        name: "FTTH",
        type: "bar",
        stack: "总量",
        label: {
          normal: {
            show: true,
            position: "insideRight"
          }
        },
        // data: [20.5, 33.5],
        data: skd1,
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
        name: "LAN",
        type: "bar",
        stack: "总量",
        label: {
          normal: {
            show: true,
            position: "insideRight"
          }
        },
        // data: [11.3, 17.0],
        data: skd2,
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
        name: "XDSL",
        type: "bar",
        stack: "总量",
        label: {
          normal: {
            show: true,
            position: "insideRight"
          }
        },
        // data: [7.6, 13.7],
        data: skd3,
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
  chart4r.setOption(option4r)
}

getMessage(yearq);
// 获取数据
function getMessage(yearq) {
  $.ajax({
    type: "post",
    dataType: "json",
    url: "json/index2.json",
    data: {
      yearq: yearq
    },
    success: function (result) {
      console.log(yearq);

      console.log("请求成功");
      // console.log(result);
      /* ***** chart部分 start ***** */
      // chart1
      function chart1yw() {
        if (result.deptOPERATORYW) {
          uv1 = result.deptOPERATORYW[0].COUNT
          mv1 = result.deptOPERATORYW[1].COUNT
          tv1 = result.deptOPERATORYW[2].COUNT
          drawchart1(uv1, mv1, tv1);
        } else {
          $("#chart1").hide()
          $("#chart1r").hide()
        }
      }
      function chart1kd() {
        if (result.deptOPERATORKD) {
          uv2 = result.deptOPERATORKD[0].COUNT
          mv2 = result.deptOPERATORKD[1].COUNT
          tv2 = result.deptOPERATORKD[2].COUNT
          drawchart1r(uv2, mv2, tv2);
        } else {
          $("#chart1").hide()
          $("#chart1r").hide()
        }
      }
      chart1yw()
      // 切换移网
      $(".btnzu1box .btn1").click(function () {
        chart1yw();
        $("#chart1").show()
        $("#chart1r").hide()
      })
      // 切换宽带
      $(".btnzu1box .btn2").click(function () {
        chart1kd();
        $("#chart1").hide()
        $("#chart1r").show()

      })

      // chart2
      function chart2yw() {
        if (result.quotaDeptAGEYW) {
          var age1 = [];
          var agedata1 = [];
          var sum1 = 0;
          var avg1 = 0;

          for (var i = 0; i < result.quotaDeptAGEYW.length; i++) {
            age1.push(result.quotaDeptAGEYW[i].AGE_GROUP + " ");
            agedata1.push({
              value: result.quotaDeptAGEYW[i].COUNT,
              name: result.quotaDeptAGEYW[i].AGE_GROUP + " "
            })
          }
          drawchart2(age1, agedata1);
        } else {
          $("#chart2").hide()
          $("#chart2r").hide()

        }
      }
      function chart2kd() {
        if (result.quotaDeptAGEKD) {
          var age2 = [];
          var agedata2 = [];
          var sum2 = 0;
          var avg2 = 0;
          for (var i = 0; i < result.quotaDeptAGEKD.length; i++) {
            age2.push(result.quotaDeptAGEKD[i].AGE_GROUP + " ");
            agedata2.push({
              value: result.quotaDeptAGEKD[i].COUNT,
              name: result.quotaDeptAGEKD[i].AGE_GROUP + " "
            })
          }
          drawchart2r(age2, agedata2);
        } else {
          $("#chart2").hide()
          $("#chart2r").hide()

        }
      }
      chart2yw()
      // 切换移网
      $(".btnzu1box .btn1").click(function () {
        chart2yw();
        $("#chart2").show()
        $("#chart2r").hide()

      })
      // 切换宽带
      $(".btnzu1box .btn2").click(function () {
        chart2kd();
        $("#chart2").hide()
        $("#chart2r").show()

      })


      // cahrt3
      function chart3yw() {
        if (result.quotaDeptTypeYW) {
          q4[0] = result.quotaDeptTypeYW[2].COUNT
          q4[1] = result.quotaDeptTypeYW[0].COUNT
          q4[2] = result.quotaDeptTypeYW[1].COUNT
          q1[0] = result.quotaDeptTypeYW[2].COUNT
          q1[1] = result.quotaDeptTypeYW[0].COUNT
          q1[2] = result.quotaDeptTypeYW[1].COUNT
          drawchart3(q4, q1);
        } else {
          $("#chart3").hide()
          $("#chart3r").hide()
        }
      }
      function chart3kd() {
        if (result.quotaDeptSexKD) {
          for (var i = 0; i < result.quotaDeptSexKD.length; i++) {
            if (result.quotaDeptSexKD[i].SEX == "女" && result.quotaDeptSexKD[i].OPERATOR_TYPE == "中国联通") {
              s1[0] = result.quotaDeptSexKD[i].COUNT
            }
            if (result.quotaDeptSexKD[i].SEX == "女" && result.quotaDeptSexKD[i].OPERATOR_TYPE == "中国移动") {
              s1[1] = result.quotaDeptSexKD[i].COUNT
            }
            if (result.quotaDeptSexKD[i].SEX == "女" && result.quotaDeptSexKD[i].OPERATOR_TYPE == "中国电信") {
              s1[2] = result.quotaDeptSexKD[i].COUNT
            }
            if (result.quotaDeptSexKD[i].SEX == "男" && result.quotaDeptSexKD[i].OPERATOR_TYPE == "中国联通") {
              s2[0] = result.quotaDeptSexKD[i].COUNT
            }
            if (result.quotaDeptSexKD[i].SEX == "男" && result.quotaDeptSexKD[i].OPERATOR_TYPE == "中国移动") {
              s2[1] = result.quotaDeptSexKD[i].COUNT
            }
            if (result.quotaDeptSexKD[i].SEX == "男" && result.quotaDeptSexKD[i].OPERATOR_TYPE == "中国电信") {
              s2[2] = result.quotaDeptSexKD[i].COUNT
            }
          }
          drawchart3r(q4, q1);
        } else {
          $("#chart3").hide()
          $("#chart3r").hide()

        }
      }
      chart3yw()
      // 切换移网
      $(".btnzu1box .btn1").click(function () {
        chart3yw();
        $("#chart3").show()
        $("#chart3r").hide()
      })
      // 切换宽带
      $(".btnzu1box .btn2").click(function () {
        chart3kd();
        $("#chart3").hide()
        $("#chart3r").show()

      })

      // chart4
      function chart4yw() {
        if (result.quotaDeptStarYW) {
          for (var i = 0; i < result.quotaDeptStarYW.length; i++) {
            if (result.quotaDeptStarYW[i].USER_LEVEL == "1") {
              s1[1] = result.quotaDeptStarYW[i].COUNT
            }
            if (result.quotaDeptStarYW[i].USER_LEVEL == "2") {
              s2[1] = result.quotaDeptStarYW[i].COUNT
            }
            if (result.quotaDeptStarYW[i].USER_LEVEL == "3") {
              s3[1] = result.quotaDeptStarYW[i].COUNT
            }
            if (result.quotaDeptStarYW[i].USER_LEVEL == "4") {
              s4[1] = result.quotaDeptStarYW[i].COUNT
            }
            if (result.quotaDeptStarYW[i].USER_LEVEL == "5") {
              s5[1] = result.quotaDeptStarYW[i].COUNT
            }
            if (result.quotaDeptStarYW[i].USER_LEVEL == "未评级") {
              s6[1] = result.quotaDeptStarYW[i].COUNT
            }
          }
          var sum = s1[1] + s2[1] + s3[1] + s4[1] + s5[1] + s6[1]
          s1[1] = parseFloat(s1[1] / sum * 100).toFixed(2)
          s2[1] = parseFloat(s2[1] / sum * 100).toFixed(2)
          s3[1] = parseFloat(s3[1] / sum * 100).toFixed(2)
          s4[1] = parseFloat(s4[1] / sum * 100).toFixed(2)
          s5[1] = parseFloat(s5[1] / sum * 100).toFixed(2)
          s6[1] = parseFloat(s6[1] / sum * 100).toFixed(2)
          for (var i = 0; i < result.allDeptStarYW.length; i++) {
            if (result.allDeptStarYW[i].USER_STAR_LEVEL == "1") {
              s1[0] = result.allDeptStarYW[i].YW_NUM_PERCENT
            }
            if (result.allDeptStarYW[i].USER_STAR_LEVEL == "2") {
              s2[0] = result.allDeptStarYW[i].YW_NUM_PERCENT
            }
            if (result.allDeptStarYW[i].USER_STAR_LEVEL == "3") {
              s3[0] = result.allDeptStarYW[i].YW_NUM_PERCENT
            }
            if (result.allDeptStarYW[i].USER_STAR_LEVEL == "4") {
              s4[0] = result.allDeptStarYW[i].YW_NUM_PERCENT
            }
            if (result.allDeptStarYW[i].USER_STAR_LEVEL == "5") {
              s5[0] = result.allDeptStarYW[i].YW_NUM_PERCENT
            }
            if (result.allDeptStarYW[i].USER_STAR_LEVEL == "未评级") {
              s6[0] = result.allDeptStarYW[i].YW_NUM_PERCENT
            }
          }
          console.log(s1);

          drawchart4(s1, s2, s3, s4, s5, s6);

        } else {
          $("#chart4").hide()
          $("#chart4r").hide()
        }
      }
      function chart4kd() {
        if (result.allDeptTypeKD) {
          for (var i = 0; i < result.allDeptTypeKD.length; i++) {
            if (result.allDeptTypeKD[i].USER_TYPE == "FTTH") {
              skd1[0] = result.allDeptTypeKD[i].KD_NUM_PERCENT
            }
            if (result.allDeptTypeKD[i].USER_TYPE == "LAN") {
              skd2[0] = result.allDeptTypeKD[i].KD_NUM_PERCENT
            }
            if (result.allDeptTypeKD[i].USER_TYPE == "XDSL") {
              skd3[0] = result.allDeptTypeKD[i].KD_NUM_PERCENT
            }

          }
          for (var i = 0; i < result.quotaDeptTypeKD.length; i++) {
            if (result.quotaDeptTypeKD[i].USER_TYPE == "FTTH且安装IPTV") {
              skd1[1] = result.quotaDeptTypeKD[i].COUNT
            }
            if (result.quotaDeptTypeKD[i].USER_TYPE == "FTTH且未安装IPTV") {
              skd1[1] += result.quotaDeptTypeKD[i].COUNT
            }
            if (result.quotaDeptTypeKD[i].USER_TYPE == "LAN") {
              skd2[1] = result.quotaDeptTypeKD[i].COUNT
            }
            if (result.quotaDeptTypeKD[i].USER_TYPE == "XDSL") {
              skd3[1] = result.quotaDeptTypeKD[i].COUNT
            }
            if (result.quotaDeptTypeKD[i].USER_TYPE == "xDSL") {
              skd3[1] = result.quotaDeptTypeKD[i].COUNT
            }

          }
          console.log(skd1[1]);
          console.log(skd2[1]);
          console.log(skd3[1]);

          var sum = skd1[1] + skd2[1] + skd3[1]
          skd1[1] = parseFloat(skd1[1] / sum * 100).toFixed(2)
          skd2[1] = parseFloat(skd2[1] / sum * 100).toFixed(2)
          skd3[1] = parseFloat(skd3[1] / sum * 100).toFixed(2)


          drawchart4r(skd1, skd2, skd3);

        }else {
          $("#chart4").hide()
          $("#chart4r").hide()
  
        }
      }

      chart4yw()
      // 切换移网
      $(".btnzu1box .btn1").click(function () {
        chart4yw();
        $("#chart4").show()
        $("#chart4r").hide()
      })
      // 切换宽带
      $(".btnzu1box .btn2").click(function () {
        chart4kd()
        $("#chart4").hide()
        $("#chart4r").show()
      })

      /* ***** chart部分 end ***** */

      /* ***** fivebox start ***** */
      function fiveboxyw() {
        $(".five .num1").html(parseFloat(result.pieYWDept[0].YEAR_NPS).toFixed(2))
        $(".five .num2").html(parseFloat(result.pieYWDept[0].YEAR_LIFT).toFixed(2))
        $(".five .num3").html(parseFloat(result.pieYWDept[0].YEAR_FINISH).toFixed(2))
        $(".five .num4").html(parseFloat(result.pieYWDept[0].QUARTER_NPS).toFixed(2))
        $(".five .num5").html(parseFloat(result.pieYWDept[0].QUARTER_LIFT).toFixed(2))
      }
      function fiveboxkd() {
        $(".five .num1").html(parseFloat(result.pieKDDept[0].YEAR_NPS).toFixed(2))
        $(".five .num2").html(parseFloat(result.pieKDDept[0].YEAR_LIFT).toFixed(2))
        $(".five .num3").html(parseFloat(result.pieKDDept[0].YEAR_FINISH).toFixed(2))
        $(".five .num4").html(parseFloat(result.pieKDDept[0].QUARTER_NPS).toFixed(2))
        $(".five .num5").html(parseFloat(result.pieKDDept[0].QUARTER_LIFT).toFixed(2))

      }
      fiveboxyw()
      // 切换移网
      $(".btnzu1box .btn1").click(function () {
        fiveboxyw()
      })
      // 切换宽带
      $(".btnzu1box .btn2").click(function () {
        fiveboxkd()
      })

      /* ***** fivebox end ***** */

      /* ***** table1 start ***** */
      function table1yw() {
        var strtable1 = '';
        var table1 = [];

        for (var i = 0; i < result.quarterYWNPS.length; i++) {
          table1.push({
            rank: result.quarterYWNPS[i].rank,
            name: result.quarterYWNPS[i].DEPT_NAME,
            finish: (parseFloat(result.quarterYWNPS[i].QUARTER_FINISH) * 100).toFixed(2),
            lift: parseFloat(result.quarterYWNPS[i].QUARTER_LIFT).toFixed(2)
          })
        }
        table1.sort(sortBy('rank', true));
        for (var i = 0; i < table1.length; i++) {
          if (table1[i].finish > 100) {
            table1[i].finish = 100
          }
          if (table1[i].finish < 0) {
            table1[i].finish = 0
          }

          strtable1 += `
          <tr>
            <td width="10%" align="canter">`+ table1[i].rank + `</td>
            <td width="25%" align="canter">`+ table1[i].name + `</td>
            <td width="40%" align="canter">`+ table1[i].finish + `%</td>
            <td width="25%" align="canter">`+ table1[i].lift + `</td>
          </tr>
          `
        }
        $(".tablemx #tplWrapper_TemplateZ").html(strtable1)
      }
      function table1kd() {
        var strtable1 = '';
        var table1 = [];

        for (var i = 0; i < result.quarterKDNPS.length; i++) {
          table1.push({
            rank: result.quarterKDNPS[i].rank,
            name: result.quarterKDNPS[i].DEPT_NAME,
            finish: (parseFloat(result.quarterKDNPS[i].QUARTER_FINISH) * 100).toFixed(2),
            lift: parseFloat(result.quarterKDNPS[i].QUARTER_LIFT).toFixed(2)
          })
        }
        table1.sort(sortBy('rank', true));
        for (var i = 0; i < table1.length; i++) {
          if (table1[i].finish > 100) {
            table1[i].finish = 100
          }
          if (table1[i].finish < 0) {
            table1[i].finish = 0
          }
          strtable1 += `
          <tr>
            <td width="10%" align="canter">`+ table1[i].rank + `</td>
            <td width="25%" align="canter">`+ table1[i].name + `</td>
            <td width="40%" align="canter">`+ table1[i].finish + `%</td>
            <td width="25%" align="canter">`+ table1[i].lift + `</td>
          </tr>
          `
        }
        $(".tablemx #tplWrapper_TemplateZ").html(strtable1)
      }
      table1yw()
      // 切换移网
      $(".btnzu1box .btn1").click(function () {
        table1yw()
      })
      // 切换宽带
      $(".btnzu1box .btn2").click(function () {
        table1kd()
      })

      /* ***** table1 end ***** */

      /* ***** table2 start ***** */
      function table2yw() {
        var strtable2 = '';
        var table2 = [];
        for (var i = 0; i < result.deptNPSYW.length; i++) {
          table2.push({
            num: i + 1,
            name: result.deptNPSYW[i].L_NAME,
            unps: parseFloat(result.deptNPSYW[i].U_NPS).toFixed(2),
            // uuser: parseFloat(result.deptNPSYW[i].U_NPS).toFixed(2),
            // ulift: parseFloat(result.deptNPSYW[i].U_NPS).toFixed(2),
            // same: parseFloat(result.deptNPSYW[i].U_NPS).toFixed(2),
            // circle: parseFloat(result.deptNPSYW[i].U_NPS).toFixed(2),
            mnps: parseFloat(result.deptNPSYW[i].M_NPS).toFixed(2),
            mm: parseFloat(result.deptNPSYW[i].COMPARE_M).toFixed(2),
            tnps: parseFloat(result.deptNPSYW[i].T_NPS).toFixed(2),
            mt: parseFloat(result.deptNPSYW[i].COMPARE_T).toFixed(2),
            match: parseFloat(result.deptNPSYW[i].COMPETITION_GAP).toFixed(2)
          })
        }
        for (var i = 0; i < table2.length; i++) {
          strtable2 += `
          <tr>
            <td width="7%" align="center">`+ table2[i].num + `</td>
            <td width="13%" align="center">`+ table2[i].name + `</td>
            <td width="8%" align="center">`+ table2[i].unps + `</td>
            <td width="8%" align="center">—</td>
            <td width="8%" align="center">—</td>
            <td width="8%" align="center">—</td>
            <td width="8%" align="center">—</td>
            <td width="8%" align="center">`+ table2[i].mnps + `</td>
            <td width="8%" align="center">`+ table2[i].mm + `</td>
            <td width="8%" align="center">`+ table2[i].tnps + `</td>
            <td width="8%" align="center">`+ table2[i].mt + `</td>
            <td width="8%" align="center">`+ table2[i].match + `</td>
          </tr>
          `
        }
        $(".talezbmx #tplWrapper_TemplateZ").html(strtable2)


      }
      function table2kd() {
        var strtable2 = '';
        var table2 = [];
        for (var i = 0; i < result.deptNPSKD.length; i++) {
          table2.push({
            num: i + 1,
            name: result.deptNPSKD[i].L_NAME,
            unps: parseFloat(result.deptNPSKD[i].U_NPS).toFixed(2),
            uuser: parseFloat(result.deptNPSKD[i].U_NPS).toFixed(2),
            ulift: parseFloat(result.deptNPSKD[i].U_NPS).toFixed(2),
            same: parseFloat(result.deptNPSKD[i].U_NPS).toFixed(2),
            circle: parseFloat(result.deptNPSKD[i].U_NPS).toFixed(2),
            mnps: parseFloat(result.deptNPSKD[i].M_NPS).toFixed(2),
            mm: parseFloat(result.deptNPSKD[i].COMPARE_M).toFixed(2),
            tnps: parseFloat(result.deptNPSKD[i].T_NPS).toFixed(2),
            mt: parseFloat(result.deptNPSKD[i].COMPARE_T).toFixed(2),
            match: parseFloat(result.deptNPSKD[i].COMPETITION_GAP).toFixed(2)
          })
        }
        for (var i = 0; i < table2.length; i++) {
          strtable2 += `
          <tr>
            <td width="7%" align="center">`+ table2[i].num + `</td>
            <td width="13%" align="center">`+ table2[i].name + `</td>
            <td width="8%" align="center">`+ table2[i].unps + `</td>
            <td width="8%" align="center">`+ table2[i].uuser + `</td>
            <td width="8%" align="center">`+ table2[i].ulift + `</td>
            <td width="8%" align="center">`+ table2[i].same + `</td>
            <td width="8%" align="center">`+ table2[i].circle + `</td>
            <td width="8%" align="center">`+ table2[i].mnps + `</td>
            <td width="8%" align="center">`+ table2[i].mm + `</td>
            <td width="8%" align="center">`+ table2[i].tnps + `</td>
            <td width="8%" align="center">`+ table2[i].mt + `</td>
            <td width="8%" align="center">`+ table2[i].match + `</td>
          </tr>
          `
        }
        $(".talezbmx #tplWrapper_TemplateZ").html(strtable2)

      }
      table2yw()
      // 切换移网
      $(".btnzu1box .btn1").click(function () {
        table2yw()
      })
      // 切换宽带
      $(".btnzu1box .btn2").click(function () {
        table2kd()
      })
      /* ***** table2 end ***** */


      /* ***** rank strat ***** */
      console.log(apartment);
      function rankyw() {
        for (var i = 0; i < result.quarterYWNPS.length; i++) {
          if (result.quarterYWNPS[i].DEPT_NAME == apartment) {
            $(".nor .num").html(result.quarterYWNPS[i].rank)
          }
        }
        for (var i = 0; i < result.yearYWNPS.length; i++) {
          if (result.yearYWNPS[i].DEPT_NAME == apartment) {
            $(".glo .num").html(result.yearYWNPS[i].rank)
          }
        }
      }
      function rankkd() {
        for (var i = 0; i < result.quarterKDNPS.length; i++) {
          if (result.quarterKDNPS[i].DEPT_NAME == apartment) {
            $(".nor .num").html(result.quarterKDNPS[i].rank)
          }
        }
        for (var i = 0; i < result.yearKDNPS.length; i++) {
          if (result.yearKDNPS[i].DEPT_NAME == apartment) {
            $(".glo .num").html(result.yearKDNPS[i].rank)
          }
        }
      }
      rankyw()
      // 切换移网
      $(".btnzu1box .btn1").click(function () {
        rankyw()
      })
      // 切换宽带
      $(".btnzu1box .btn2").click(function () {
        rankkd()
      })

      /* ***** rank end ***** */
      delnan()
      $(".btnzu1box .btn1").click(function () {
        delnan()
      })
      // 切换宽带
      $(".btnzu1box .btn2").click(function () {
        delnan()
      })


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
function delnan() {
  $('.tablemx tbody tr').each(function (i) {
    $(this).children('td').each(function (j) {
      if ($(this).text() == "NaN") {
        $(this).text("—")
      }
    });
  });
  $('.tablemx tbody tr').each(function (i) {
    $(this).children('td').each(function (j) {
      if ($(this).text() == "NaN%") {
        $(this).text("—")
      }
    });
  });
  $('.talezbmx tbody tr').each(function (i) {
    $(this).children('td').each(function (j) {
      if ($(this).text() == "NaN") {
        $(this).text("—")
      }
    });
  });
  $('.five ul li').each(function (i) {
    $(this).children('.num').each(function (j) {
      if ($(this).text() == "NaN") {
        $(this).text("—")
      }
    });
  });

}



