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
var yearq = "2018Q1"
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
// table
var prorank = []
var str = ''
// fourbtn
var npsZT = []
var npsYW = []
var npsWL = []
var npsFW = []
var strfour = ''
// detail
var deZT = []
var deWL = []
var deYW = []
var deFW = []
var destrall = ''
var destrZT = ''
var destrWLf = ''
var destrWLc = ''
var destrYWf = ''
var destrYWc = ''
var destrFWf = ''
var destrFWc = ''
// rank
var area = ''
var rankarea = ''
var rankall = ''

// 模拟获取省份名称
var proname = provinceName;
// var proname = "海南"

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
  getMessage(yearq);
})

// 整体网络业务服务
// 切换季度
$(".btnzu3 .btn1").click(function () {
  // 整体
  $(".btnzu3 .btn1").addClass("active");
  $(".btnzu3 .btn2").removeClass("active");
  $(".btnzu3 .btn3").removeClass("active");
  $(".btnzu3 .btn4").removeClass("active");
  var strZT = '';
  for (var i = 0; i < npsZT.length; i++) {
    strZT += `
    <tr>
        <td>`+ npsZT[i].name + `</td>
        <td>`+ npsZT[i].unps + `</td>
        <td>`+ npsZT[i].uyb + `</td>
        <td>`+ npsZT[i].same + `</td>
        <td>`+ npsZT[i].clrcle + `</td>
        <td>`+ npsZT[i].mnps + `</td>
        <td>`+ npsZT[i].myb + `</td>
        <td>`+ npsZT[i].mm + `</td>
        <td>`+ npsZT[i].tnps + `</td>
        <td>`+ npsZT[i].tyb + `</td>
        <td>`+ npsZT[i].mt + `</td>
        <td>`+ npsZT[i].del + `</td>
    </tr>
    `
  }
  $(".talezbmx tbody").html(strZT)

})
$(".btnzu3 .btn2").click(function () {
  // 网络
  $(".btnzu3 .btn1").removeClass("active");
  $(".btnzu3 .btn2").addClass("active");
  $(".btnzu3 .btn3").removeClass("active");
  $(".btnzu3 .btn4").removeClass("active");
  var strWL = '';
  for (var i = 0; i < npsWL.length; i++) {
    strWL += `
    <tr>
        <td>`+ npsWL[i].name + `</td>
        <td>`+ npsWL[i].unps + `</td>
        <td>`+ npsWL[i].uyb + `</td>
        <td>`+ npsWL[i].same + `</td>
        <td>`+ npsWL[i].clrcle + `</td>
        <td>`+ npsWL[i].mnps + `</td>
        <td>`+ npsWL[i].myb + `</td>
        <td>`+ npsWL[i].mm + `</td>
        <td>`+ npsWL[i].tnps + `</td>
        <td>`+ npsWL[i].tyb + `</td>
        <td>`+ npsWL[i].mt + `</td>
        <td>`+ npsWL[i].del + `</td>
    </tr>
    `
  }
  $(".talezbmx tbody").html(strWL)

})
$(".btnzu3 .btn3").click(function () {
  // 业务
  $(".btnzu3 .btn1").removeClass("active");
  $(".btnzu3 .btn2").removeClass("active");
  $(".btnzu3 .btn3").addClass("active");
  $(".btnzu3 .btn4").removeClass("active");
  var strYW = '';
  for (var i = 0; i < npsYW.length; i++) {
    strYW += `
    <tr>
        <td>`+ npsYW[i].name + `</td>
        <td>`+ npsYW[i].unps + `</td>
        <td>`+ npsYW[i].uyb + `</td>
        <td>`+ npsYW[i].same + `</td>
        <td>`+ npsYW[i].clrcle + `</td>
        <td>`+ npsYW[i].mnps + `</td>
        <td>`+ npsYW[i].myb + `</td>
        <td>`+ npsYW[i].mm + `</td>
        <td>`+ npsYW[i].tnps + `</td>
        <td>`+ npsYW[i].tyb + `</td>
        <td>`+ npsYW[i].mt + `</td>
        <td>`+ npsYW[i].del + `</td>
    </tr>
    `
  }
  $(".talezbmx tbody").html(strYW)

})
$(".btnzu3 .btn4").click(function () {
  // 服务
  $(".btnzu3 .btn1").removeClass("active");
  $(".btnzu3 .btn2").removeClass("active");
  $(".btnzu3 .btn3").removeClass("active");
  $(".btnzu3 .btn4").addClass("active");
  var strFW = '';
  for (var i = 0; i < npsFW.length; i++) {
    strFW += `
    <tr>
        <td>`+ npsFW[i].name + `</td>
        <td>`+ npsFW[i].unps + `</td>
        <td>`+ npsFW[i].uyb + `</td>
        <td>`+ npsFW[i].same + `</td>
        <td>`+ npsFW[i].clrcle + `</td>
        <td>`+ npsFW[i].mnps + `</td>
        <td>`+ npsFW[i].myb + `</td>
        <td>`+ npsFW[i].mm + `</td>
        <td>`+ npsFW[i].tnps + `</td>
        <td>`+ npsFW[i].tyb + `</td>
        <td>`+ npsFW[i].mt + `</td>
        <td>`+ npsFW[i].del + `</td>
    </tr>
    `
  }
  $(".talezbmx tbody").html(strFW)
})
$(".enter1").click(function () {
  window.location.href = ajaxBaseURL+"/show/showReportPage"
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
function drawchart1r(uv, mv, tv) {
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
  var chart1r = echarts.init(document.getElementById("chart1r"));
  var option1r = {
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
  chart1r.setOption(option1r);
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
function drawchart2r(age, agedata) {
  var chart2r = echarts.init(document.getElementById("chart2r"));
  var option2r = {
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
  chart2r.setOption(option2r)
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
function getMessage(yearq){
  $.ajax({
    type: "get",
    dataType: "json",
    url: "../reportPage/json/index1.json",
    //url: ajaxBaseURL+"/show/showProvicne/"+provinceName+"/"+yearq,
    success: function (result) {
      console.log("请求成功");
      // console.log(result);
      /* ***** chart部分 start ***** */
      // chart1
      function chart1yw() {
        $("#chart1").show()
        $("#chart1r").hide()

        if (result.quotaOPERATORYW) {
          for (var i = 0; i < result.quotaOPERATORYW.length; i++) {
            if (result.quotaOPERATORYW[i].OPERATOR_TYPE == "中国联通") {
              uv1 = result.quotaOPERATORYW[i].N
            }
            if (result.quotaOPERATORYW[i].OPERATOR_TYPE == "中国移动") {
              mv1 = result.quotaOPERATORYW[i].N
            }
            if (result.quotaOPERATORYW[i].OPERATOR_TYPE == "中国电信") {
              tv1 = result.quotaOPERATORYW[i].N
            }
          }
          drawchart1(uv1, mv1, tv1);
          $(".part1 h4").show()
        } else {
          $("#chart1").hide()
          $(".part1 h4").hide()
        }
      }
      function chart1kd() {
        $("#chart1").hide()
        $("#chart1r").show()

        if (result.quotaOPERATORKD) {
          for (var i = 0; i < result.quotaOPERATORKD.length; i++) {
            if (result.quotaOPERATORKD[i].OPERATOR_TYPE == "中国联通") {
              uv2 = result.quotaOPERATORKD[i].N
            }
            if (result.quotaOPERATORKD[i].OPERATOR_TYPE == "中国移动") {
              mv2 = result.quotaOPERATORKD[i].N
            }
            if (result.quotaOPERATORKD[i].OPERATOR_TYPE == "中国电信") {
              tv2 = result.quotaOPERATORKD[i].N
            }
          }
          drawchart1r(uv2, mv2, tv2);
          $(".part1 h4").show()
        } else {
          $("#chart1r").hide()
          $(".part1 h4").hide()

        }
      }
      chart1yw()
      // 切换移网
      $(".btnzu1box .btn1").click(function () {
        chart1yw();
      })
      // 切换宽带
      $(".btnzu1box .btn2").click(function () {
        chart1kd();

      })
      // chart2
      function chart2yw() {
        $("#chart2").show()
        $("#chart2r").hide()

        if (result.quotaAGEYW) {
          var age1 = [];
          var agedata1 = [];
          var sum1 = 0;
          var avg1 = 0;
          for (var i = 0; i < result.quotaAGEYW.length; i++) {
            age1.push(result.quotaAGEYW[i].AGE_GROUP + " ");
            agedata1.push({
              value: result.quotaAGEYW[i].count,
              name: result.quotaAGEYW[i].AGE_GROUP + " "
            })
          }
          drawchart2(age1, agedata1);
        } else {
          $("#chart2").hide()
        }
      }
      function chart2kd() {
        $("#chart2").hide()
        $("#chart2r").show()

        if (result.quotaAGEKD) {
          var age2 = [];
          var agedata2 = [];
          var sum2 = 0;
          var avg2 = 0;
          for (var i = 0; i < result.quotaAGEKD.length; i++) {
            age2.push(result.quotaAGEKD[i].AGE_GROUP + " ");
            agedata2.push({
              value: result.quotaAGEKD[i].count,
              name: result.quotaAGEKD[i].AGE_GROUP + " "
            })
          }
          drawchart2r(age2, agedata2);
        } else {
          $("#chart2r").hide()
        }
      }
      chart2yw()
      // 切换移网
      $(".btnzu1box .btn1").click(function () {
        chart2yw();

      })
      // 切换宽带
      $(".btnzu1box .btn2").click(function () {
        chart2kd();

      })

      // cahrt3
      function chart3yw() {
        $("#chart3").show()
        $("#chart3r").hide()

        if (result.quotaUserTypeYW) {
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
          drawchart3(q4, q1);
        } else {
          $("#chart3").hide()

        }
      }
      function chart3kd() {
        $("#chart3").hide()
        $("#chart3r").show()

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
          drawchart3r(s1, s2);
        } else {
          $("#chart3r").hide()
        }
      }
      chart3yw()
      // 切换移网
      $(".btnzu1box .btn1").click(function () {
        chart3yw();
      })
      // 切换宽带
      $(".btnzu1box .btn2").click(function () {
        chart3kd();

      })

      // chart4
      function chart4yw() {
        $("#chart4").show()
        $("#chart4r").hide()

        if (result.quotaStarYW) {
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
          drawchart4(s1, s2, s3, s4, s5, s6);
        } else {
          $("#chart4").hide()
        }
      }
      function chart4kd() {
        $("#chart4").hide()
        $("#chart4r").show()

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
          var sum = skd1[1] + skd2[1] + skd3[1]
          skd1[1] = parseFloat(skd1[1] / sum * 100).toFixed(2)
          skd2[1] = parseFloat(skd2[1] / sum * 100).toFixed(2)
          skd3[1] = parseFloat(skd3[1] / sum * 100).toFixed(2)


          drawchart4r(skd1, skd2, skd3);

        } else {
          $("#chart4r").hide()
        }
      }
      chart4yw()
      // 切换移网
      $(".btnzu1box .btn1").click(function () {
        chart4yw();
      })
      // 切换宽带
      $(".btnzu1box .btn2").click(function () {
        chart4kd()
      })

      /* ***** chart部分 end ***** */

      /* ***** fivebox start ***** */
      function fiveboxyw() {
        $(".five .num1").html(parseFloat(result.pieYW[0].YEAR_NPS).toFixed(2))
        $(".five .num2").html(parseFloat(result.pieYW[0].YEAE_LIFT).toFixed(2))
        var finish = result.pieYW[0].YEAR_FINISH * 100;
        if (finish > 100) {
          finish = 100
        }
        if (finish < 0) {
          finish = 0
        }
        $(".five .num3").html(parseFloat(finish).toFixed(0) + "%")

        $(".five .num4").html(parseFloat(result.pieYW[0].QUARTER_NPS).toFixed(2))
        $(".five .num5").html(parseFloat(result.pieYW[0].QUARTER_LIFT).toFixed(2))
      }
      function fiveboxkd() {
        $(".five .num1").html(parseFloat(result.pieKD[0].YEAR_NPS).toFixed(2))
        $(".five .num2").html(parseFloat(result.pieKD[0].YEAE_LIFT).toFixed(2))
        var finish = result.pieKD[0].YEAR_FINISH * 100;
        if (finish > 100) {
          finish = 100
        }
        if (finish < 0) {
          finish = 0
        }
        $(".five .num3").html(parseFloat(finish).toFixed(0) + "%")
        $(".five .num4").html(parseFloat(result.pieKD[0].QUARTER_NPS).toFixed(2))
        $(".five .num5").html(parseFloat(result.pieKD[0].QUARTER_LIFT).toFixed(2))
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

      /* ***** table start ***** */
      function table1yw() {
        if (result.allRankYW) {
          for (var i = 0; i < result.allRankYW.length; i++) {
            prorank.push({
              name: result.allRankYW[i].PROVINCE_NAME,
              allrank: result.allRankYW[i].allrank,
              arearank: '',
              qfinish: '',
              qlift: ''
            })
            for (var j = 0; j < result.allRankYWN.length; j++) {
              if (result.allRankYW[i].PROVINCE_NAME == result.allRankYWN[j].PROVINCE_NAME) {
                prorank[i].arearank = result.allRankYWN[j].rank;
                prorank[i].qfinish = parseFloat(result.allRankYWN[j].QUARTER_FINISH).toFixed(2);
                prorank[i].qlift = parseFloat(result.allRankYWN[j].QUARTER_LIFT).toFixed(2);
              }
            }
            for (var k = 0; k < result.allRankYWS.length; k++) {
              if (result.allRankYW[i].PROVINCE_NAME == result.allRankYWS[k].PROVINCE_NAME) {
                prorank[i].arearank = result.allRankYWS[k].rank;
                prorank[i].qfinish = parseFloat(result.allRankYWS[k].QUARTER_FINISH).toFixed(2);
                prorank[i].qlift = parseFloat(result.allRankYWS[k].QUARTER_LIFT).toFixed(2);
              }
            }
          }
          for (var i = 0; i < prorank.length; i++) {
            if (prorank[i].qfinish > 100) {
              prorank[i].qfinish = 100
            }
            if (prorank[i].qfinish < 0) {
              prorank[i].qfinish = 0
            }
            str += `
          <tr>
            <td width="20%" align="center">`+ prorank[i].allrank + `</td>
            <td width="20%" align="center">`+ prorank[i].name + `</td>
            <td width="20%" align="center">`+ prorank[i].qfinish + `%</td>
            <td width="20%" align="center">`+ prorank[i].qlift + `</td>
            <td width="20%" align="center">`+ prorank[i].arearank + `</td>
          </tr>
            `
          }
          $("#tplWrapper_TemplateZ").html(str);
          var tr = $("#tplWrapper_TemplateZ").find("tr")
          var imgstr1 = "<img src='img/jbb1.png' style='height:23px;width:23px;'>"
          var imgstr2 = "<img src='img/jbb2.png' style='height:23px;width:23px;'>"
          var imgstr3 = "<img src='img/jbb3.png' style='height:23px;width:23px;'>"
          for (var i = 0; i < tr.length; i++) {
            var td = tr.eq(i).find("td");
            var num = td.eq(0).text();
            if (num == "1") {
              tr.eq(i).find("td").eq(0).html(imgstr1)
              tr.eq(i).css("color", "#bf4959")
            }
            if (num == "2") {
              tr.eq(i).find("td").eq(0).html(imgstr2)
              tr.eq(i).css("color", "#b9542a")
            }
            if (num == "3") {
              // console.log(i)
              tr.eq(i).find("td").eq(0).html(imgstr3)
              // tr.eq(i).find("td").eq(1).css("color", "#137b8a")
              tr.eq(i).css("color", "#137b8a")

            }
          }
          $(".topfive .top1").html(prorank[0].name)
          $(".topfive .top2").html(prorank[1].name)
          $(".topfive .top3").html(prorank[2].name)
          $(".topfive .top4").html(prorank[3].name)
          $(".topfive .top5").html(prorank[4].name)

        }
      }
      function table1kd() {
        if (result.allRankYW) {
          for (var i = 0; i < result.allRankYW.length; i++) {
            prorank.push({
              name: result.allRankYW[i].PROVINCE_NAME,
              allrank: result.allRankYW[i].allrank,
              arearank: '',
              qfinish: '',
              qlift: ''
            })
            for (var j = 0; j < result.allRankYWN.length; j++) {
              if (result.allRankYW[i].PROVINCE_NAME == result.allRankYWN[j].PROVINCE_NAME) {
                prorank[i].arearank = result.allRankYWN[j].rank;
                prorank[i].qfinish = parseFloat(result.allRankYWN[j].QUARTER_FINISH).toFixed(2);
                prorank[i].qlift = parseFloat(result.allRankYWN[j].QUARTER_LIFT).toFixed(2);
              }
            }
            for (var k = 0; k < result.allRankYWS.length; k++) {
              if (result.allRankYW[i].PROVINCE_NAME == result.allRankYWS[k].PROVINCE_NAME) {
                prorank[i].arearank = result.allRankYWS[k].rank;
                prorank[i].qfinish = parseFloat(result.allRankYWS[k].QUARTER_FINISH).toFixed(2);
                prorank[i].qlift = parseFloat(result.allRankYWS[k].QUARTER_LIFT).toFixed(2);
              }
            }
          }
          for (var i = 0; i < prorank.length; i++) {
            if (prorank[i].qfinish > 100) {
              prorank[i].qfinish = 100
            }
            if (prorank[i].qfinish < 0) {
              prorank[i].qfinish = 0
            }
            str += `
          <tr>
            <td width="20%" align="center">`+ prorank[i].allrank + `</td>
            <td width="20%" align="center">`+ prorank[i].name + `</td>
            <td width="20%" align="center">`+ prorank[i].qfinish + `%</td>
            <td width="20%" align="center">`+ prorank[i].qlift + `</td>
            <td width="20%" align="center">`+ prorank[i].arearank + `</td>
          </tr>
            `
          }
          $("#tplWrapper_TemplateZ").html(str);
          var tr = $("#tplWrapper_TemplateZ").find("tr")
          var imgstr1 = "<img src='img/jbb1.png' style='height:23px;width:23px;'>"
          var imgstr2 = "<img src='img/jbb2.png' style='height:23px;width:23px;'>"
          var imgstr3 = "<img src='img/jbb3.png' style='height:23px;width:23px;'>"
          for (var i = 0; i < tr.length; i++) {
            var td = tr.eq(i).find("td");
            var num = td.eq(0).text();
            if (num == "1") {
              tr.eq(i).find("td").eq(0).html(imgstr1)
              tr.eq(i).css("color", "#bf4959")
            }
            if (num == "2") {
              tr.eq(i).find("td").eq(0).html(imgstr2)
              tr.eq(i).css("color", "#b9542a")
            }
            if (num == "3") {
              // console.log(i)
              tr.eq(i).find("td").eq(0).html(imgstr3)
              // tr.eq(i).find("td").eq(1).css("color", "#137b8a")
              tr.eq(i).css("color", "#137b8a")

            }
          }
          $(".topfive .top1").html(prorank[0].name)
          $(".topfive .top2").html(prorank[1].name)
          $(".topfive .top3").html(prorank[2].name)
          $(".topfive .top4").html(prorank[3].name)
          $(".topfive .top5").html(prorank[4].name)

        }
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

      /* ***** table end ***** */

      /* ***** fourbtn start ***** */
      function fourbtnyw() {
        // 整体
        for (var i = 0; i < result.npsCityYWZT.length; i++) {
          npsZT.push({
            name: result.npsCityYWZT[i].CITY_NAME,
            unps: parseFloat(result.npsCityYWZT[i].U_NPS).toFixed(2),
            uyb: parseFloat(result.npsCityYWZT[i].U_NUM).toFixed(2),
            same: parseFloat(result.npsCityYWZT[i].U_NPS).toFixed(2),
            clrcle: parseFloat(result.npsCityYWZT[i].U_NPS).toFixed(2),
            mnps: parseFloat(result.npsCityYWZT[i].M_NPS).toFixed(2),
            myb: parseFloat(result.npsCityYWZT[i].M_NUM).toFixed(2),
            mm: parseFloat(result.npsCityYWZT[i].STANDARD_M).toFixed(2),
            tnps: parseFloat(result.npsCityYWZT[i].T_NPS).toFixed(2),
            tyb: parseFloat(result.npsCityYWZT[i].T_NUM).toFixed(2),
            mt: parseFloat(result.npsCityYWZT[i].STANDARD_T).toFixed(2),
            del: parseFloat(result.npsCityYWZT[i].COMPETITION_BETWEEN).toFixed(2),
          })
        }

        // 业务
        for (var i = 0; i < result.npsCityYWYW.length; i++) {
          npsYW.push({
            name: result.npsCityYWYW[i].CITY_NAME,
            unps: parseFloat(result.npsCityYWYW[i].U_NPS).toFixed(2),
            uyb: parseFloat(result.npsCityYWYW[i].U_NUM).toFixed(2),
            same: parseFloat(result.npsCityYWYW[i].U_NPS).toFixed(2),
            clrcle: parseFloat(result.npsCityYWYW[i].U_NPS).toFixed(2),
            mnps: parseFloat(result.npsCityYWYW[i].M_NPS).toFixed(2),
            myb: parseFloat(result.npsCityYWYW[i].M_NUM).toFixed(2),
            mm: parseFloat(result.npsCityYWYW[i].STANDARD_M).toFixed(2),
            tnps: parseFloat(result.npsCityYWYW[i].T_NPS).toFixed(2),
            tyb: parseFloat(result.npsCityYWYW[i].T_NUM).toFixed(2),
            mt: parseFloat(result.npsCityYWYW[i].STANDARD_T).toFixed(2),
            del: parseFloat(result.npsCityYWYW[i].COMPETITION_BETWEEN).toFixed(2),
          })
        }
        // 网络
        // npsCityYWYW
        for (var i = 0; i < result.npsCityYWWL.length; i++) {
          npsWL.push({
            name: result.npsCityYWWL[i].CITY_NAME,
            unps: parseFloat(result.npsCityYWWL[i].U_NPS).toFixed(2),
            uyb: parseFloat(result.npsCityYWWL[i].U_NUM).toFixed(2),
            same: parseFloat(result.npsCityYWWL[i].U_NPS).toFixed(2),
            clrcle: parseFloat(result.npsCityYWWL[i].U_NPS).toFixed(2),
            mnps: parseFloat(result.npsCityYWWL[i].M_NPS).toFixed(2),
            myb: parseFloat(result.npsCityYWWL[i].M_NUM).toFixed(2),
            mm: parseFloat(result.npsCityYWWL[i].STANDARD_M).toFixed(2),
            tnps: parseFloat(result.npsCityYWWL[i].T_NPS).toFixed(2),
            tyb: parseFloat(result.npsCityYWWL[i].T_NUM).toFixed(2),
            mt: parseFloat(result.npsCityYWWL[i].STANDARD_T).toFixed(2),
            del: parseFloat(result.npsCityYWWL[i].COMPETITION_BETWEEN).toFixed(2),
          })
        }

        // 服务
        // npsCityYWFW
        for (var i = 0; i < result.npsCityYWFW.length; i++) {
          npsFW.push({
            name: result.npsCityYWFW[i].CITY_NAME,
            unps: parseFloat(result.npsCityYWFW[i].U_NPS).toFixed(2),
            uyb: parseFloat(result.npsCityYWFW[i].U_NUM).toFixed(2),
            same: parseFloat(result.npsCityYWFW[i].U_NPS).toFixed(2),
            clrcle: parseFloat(result.npsCityYWFW[i].U_NPS).toFixed(2),
            mnps: parseFloat(result.npsCityYWFW[i].M_NPS).toFixed(2),
            myb: parseFloat(result.npsCityYWFW[i].M_NUM).toFixed(2),
            mm: parseFloat(result.npsCityYWFW[i].STANDARD_M).toFixed(2),
            tnps: parseFloat(result.npsCityYWFW[i].T_NPS).toFixed(2),
            tyb: parseFloat(result.npsCityYWFW[i].T_NUM).toFixed(2),
            mt: parseFloat(result.npsCityYWFW[i].STANDARD_T).toFixed(2),
            del: parseFloat(result.npsCityYWFW[i].COMPETITION_BETWEEN).toFixed(2),
          })
        }
        // 默认渲染整体数据

        for (var i = 0; i < npsZT.length; i++) {
          strfour += `
        <tr>
            <td>`+ npsZT[i].name + `</td>
            <td>`+ npsZT[i].unps + `</td>
            <td>`+ npsZT[i].uyb + `</td>
            <td>`+ npsZT[i].same + `</td>
            <td>`+ npsZT[i].clrcle + `</td>
            <td>`+ npsZT[i].mnps + `</td>
            <td>`+ npsZT[i].myb + `</td>
            <td>`+ npsZT[i].mm + `</td>
            <td>`+ npsZT[i].tnps + `</td>
            <td>`+ npsZT[i].tyb + `</td>
            <td>`+ npsZT[i].mt + `</td>
            <td>`+ npsZT[i].del + `</td>
        </tr>
        `
        }
        $(".talezbmx tbody").html(strfour)

      }
      function fourbtnkd() {
        // 整体
        for (var i = 0; i < result.npsCityYWZT.length; i++) {
          npsZT.push({
            name: result.npsCityYWZT[i].CITY_NAME,
            unps: parseFloat(result.npsCityYWZT[i].U_NPS).toFixed(2),
            uyb: parseFloat(result.npsCityYWZT[i].U_NUM).toFixed(2),
            same: parseFloat(result.npsCityYWZT[i].U_NPS).toFixed(2),
            clrcle: parseFloat(result.npsCityYWZT[i].U_NPS).toFixed(2),
            mnps: parseFloat(result.npsCityYWZT[i].M_NPS).toFixed(2),
            myb: parseFloat(result.npsCityYWZT[i].M_NUM).toFixed(2),
            mm: parseFloat(result.npsCityYWZT[i].STANDARD_M).toFixed(2),
            tnps: parseFloat(result.npsCityYWZT[i].T_NPS).toFixed(2),
            tyb: parseFloat(result.npsCityYWZT[i].T_NUM).toFixed(2),
            mt: parseFloat(result.npsCityYWZT[i].STANDARD_T).toFixed(2),
            del: parseFloat(result.npsCityYWZT[i].COMPETITION_BETWEEN).toFixed(2),
          })
        }

        // 业务
        for (var i = 0; i < result.npsCityYWYW.length; i++) {
          npsYW.push({
            name: result.npsCityYWYW[i].CITY_NAME,
            unps: parseFloat(result.npsCityYWYW[i].U_NPS).toFixed(2),
            uyb: parseFloat(result.npsCityYWYW[i].U_NUM).toFixed(2),
            same: parseFloat(result.npsCityYWYW[i].U_NPS).toFixed(2),
            clrcle: parseFloat(result.npsCityYWYW[i].U_NPS).toFixed(2),
            mnps: parseFloat(result.npsCityYWYW[i].M_NPS).toFixed(2),
            myb: parseFloat(result.npsCityYWYW[i].M_NUM).toFixed(2),
            mm: parseFloat(result.npsCityYWYW[i].STANDARD_M).toFixed(2),
            tnps: parseFloat(result.npsCityYWYW[i].T_NPS).toFixed(2),
            tyb: parseFloat(result.npsCityYWYW[i].T_NUM).toFixed(2),
            mt: parseFloat(result.npsCityYWYW[i].STANDARD_T).toFixed(2),
            del: parseFloat(result.npsCityYWYW[i].COMPETITION_BETWEEN).toFixed(2),
          })
        }
        // 网络
        // npsCityYWYW
        for (var i = 0; i < result.npsCityYWWL.length; i++) {
          npsWL.push({
            name: result.npsCityYWWL[i].CITY_NAME,
            unps: parseFloat(result.npsCityYWWL[i].U_NPS).toFixed(2),
            uyb: parseFloat(result.npsCityYWWL[i].U_NUM).toFixed(2),
            same: parseFloat(result.npsCityYWWL[i].U_NPS).toFixed(2),
            clrcle: parseFloat(result.npsCityYWWL[i].U_NPS).toFixed(2),
            mnps: parseFloat(result.npsCityYWWL[i].M_NPS).toFixed(2),
            myb: parseFloat(result.npsCityYWWL[i].M_NUM).toFixed(2),
            mm: parseFloat(result.npsCityYWWL[i].STANDARD_M).toFixed(2),
            tnps: parseFloat(result.npsCityYWWL[i].T_NPS).toFixed(2),
            tyb: parseFloat(result.npsCityYWWL[i].T_NUM).toFixed(2),
            mt: parseFloat(result.npsCityYWWL[i].STANDARD_T).toFixed(2),
            del: parseFloat(result.npsCityYWWL[i].COMPETITION_BETWEEN).toFixed(2),
          })
        }

        // 服务
        // npsCityYWFW
        for (var i = 0; i < result.npsCityYWFW.length; i++) {
          npsFW.push({
            name: result.npsCityYWFW[i].CITY_NAME,
            unps: parseFloat(result.npsCityYWFW[i].U_NPS).toFixed(2),
            uyb: parseFloat(result.npsCityYWFW[i].U_NUM).toFixed(2),
            same: parseFloat(result.npsCityYWFW[i].U_NPS).toFixed(2),
            clrcle: parseFloat(result.npsCityYWFW[i].U_NPS).toFixed(2),
            mnps: parseFloat(result.npsCityYWFW[i].M_NPS).toFixed(2),
            myb: parseFloat(result.npsCityYWFW[i].M_NUM).toFixed(2),
            mm: parseFloat(result.npsCityYWFW[i].STANDARD_M).toFixed(2),
            tnps: parseFloat(result.npsCityYWFW[i].T_NPS).toFixed(2),
            tyb: parseFloat(result.npsCityYWFW[i].T_NUM).toFixed(2),
            mt: parseFloat(result.npsCityYWFW[i].STANDARD_T).toFixed(2),
            del: parseFloat(result.npsCityYWFW[i].COMPETITION_BETWEEN).toFixed(2),
          })
        }
        // 默认渲染整体数据

        for (var i = 0; i < npsZT.length; i++) {
          strfour += `
        <tr>
            <td>`+ npsZT[i].name + `</td>
            <td>`+ npsZT[i].unps + `</td>
            <td>`+ npsZT[i].uyb + `</td>
            <td>`+ npsZT[i].same + `</td>
            <td>`+ npsZT[i].clrcle + `</td>
            <td>`+ npsZT[i].mnps + `</td>
            <td>`+ npsZT[i].myb + `</td>
            <td>`+ npsZT[i].mm + `</td>
            <td>`+ npsZT[i].tnps + `</td>
            <td>`+ npsZT[i].tyb + `</td>
            <td>`+ npsZT[i].mt + `</td>
            <td>`+ npsZT[i].del + `</td>
        </tr>
        `
        }
        $(".talezbmx tbody").html(strfour)

      }
      fourbtnyw()
      // 切换移网
      $(".btnzu1box .btn1").click(function () {
        fourbtnyw()
      })
      // 切换宽带
      $(".btnzu1box .btn2").click(function () {
        fourbtnkd()
      })

      /* ***** fourbtn end ***** */

      /* ***** detail start ***** */
      function detailyw() {
        for (var i = 0; i < result.npsYW.length; i++) {
          if (result.npsYW[i].L1_NAME == "整体") {
            deZT.push({
              name: result.npsYW[i].L_NAME,
              unps: parseFloat(result.npsYW[i].U_NPS).toFixed(2),
              utj: parseFloat(result.npsYW[i].U_REFERENCE_RATE).toFixed(2),
              user: parseFloat(result.npsYW[i].U_NPS).toFixed(2),
              same: parseFloat(result.npsYW[i].U_NPS).toFixed(2),
              circle: parseFloat(result.npsYW[i].U_NPS).toFixed(2),
              mnps: parseFloat(result.npsYW[i].M_NPS).toFixed(2),
              mm: parseFloat(result.npsYW[i].STANDARD_M).toFixed(2),
              tnps: parseFloat(result.npsYW[i].T_NPS).toFixed(2),
              mt: parseFloat(result.npsYW[i].STANDARD_T).toFixed(2),
              del: parseFloat(result.npsYW[i].COMPETITION_BETWEEN).toFixed(2)
            })
          }
          if (result.npsYW[i].L1_NAME == "服务标签") {
            deFW.push({
              name: result.npsYW[i].L_NAME,
              unps: parseFloat(result.npsYW[i].U_NPS).toFixed(2),
              utj: parseFloat(result.npsYW[i].U_REFERENCE_RATE).toFixed(2),
              user: parseFloat(result.npsYW[i].U_NPS).toFixed(2),
              same: parseFloat(result.npsYW[i].U_NPS).toFixed(2),
              circle: parseFloat(result.npsYW[i].U_NPS).toFixed(2),
              mnps: parseFloat(result.npsYW[i].M_NPS).toFixed(2),
              mm: parseFloat(result.npsYW[i].STANDARD_M).toFixed(2),
              tnps: parseFloat(result.npsYW[i].T_NPS).toFixed(2),
              mt: parseFloat(result.npsYW[i].STANDARD_T).toFixed(2),
              del: parseFloat(result.npsYW[i].COMPETITION_BETWEEN).toFixed(2)

            })
          }
          if (result.npsYW[i].L1_NAME == "业务标签") {
            deYW.push({
              name: result.npsYW[i].L_NAME,
              unps: parseFloat(result.npsYW[i].U_NPS).toFixed(2),
              utj: parseFloat(result.npsYW[i].U_REFERENCE_RATE).toFixed(2),
              user: parseFloat(result.npsYW[i].U_NPS).toFixed(2),
              same: parseFloat(result.npsYW[i].U_NPS).toFixed(2),
              circle: parseFloat(result.npsYW[i].U_NPS).toFixed(2),
              mnps: parseFloat(result.npsYW[i].M_NPS).toFixed(2),
              mm: parseFloat(result.npsYW[i].STANDARD_M).toFixed(2),
              tnps: parseFloat(result.npsYW[i].T_NPS).toFixed(2),
              mt: parseFloat(result.npsYW[i].STANDARD_T).toFixed(2),
              del: parseFloat(result.npsYW[i].COMPETITION_BETWEEN).toFixed(2)

            })
          }
          if (result.npsYW[i].L1_NAME == "网络标签") {
            deWL.push({
              name: result.npsYW[i].L_NAME,
              unps: parseFloat(result.npsYW[i].U_NPS).toFixed(2),
              utj: parseFloat(result.npsYW[i].U_REFERENCE_RATE).toFixed(2),
              user: parseFloat(result.npsYW[i].U_NPS).toFixed(2),
              same: parseFloat(result.npsYW[i].U_NPS).toFixed(2),
              circle: parseFloat(result.npsYW[i].U_NPS).toFixed(2),
              mnps: parseFloat(result.npsYW[i].M_NPS).toFixed(2),
              mm: parseFloat(result.npsYW[i].STANDARD_M).toFixed(2),
              tnps: parseFloat(result.npsYW[i].T_NPS).toFixed(2),
              mt: parseFloat(result.npsYW[i].STANDARD_T).toFixed(2),
              del: parseFloat(result.npsYW[i].COMPETITION_BETWEEN).toFixed(2)

            })
          }

        }
        for (var i = 0; i < deZT.length; i++) {
          destrZT += `
          <tr>
              <td>`+ deZT[i].name + `</td>
              <td>`+ deZT[i].unps + `</td>
              <td>`+ deZT[i].utj + `</td>
              <td>`+ deZT[i].user + `</td>
              <td>`+ deZT[i].same + `</td>
              <td>`+ deZT[i].circle + `</td>
              <td>`+ deZT[i].mnps + `</td>
              <td>`+ deZT[i].mm + `</td>
              <td>`+ deZT[i].tnps + `</td>
              <td>`+ deZT[i].mt + `</td>
              <td>`+ deZT[i].del + `</td>
          </tr>
          `
        }
        for (var i = 0; i < deWL.length; i++) {
          if (deWL[i].name == "网络标签") {
            destrWLf += `
            <tr class="parent" id="row1">
                <td>
                    `+ deWL[i].name + `
                    <i class="glyphicon glyphicon-chevron-down"></i>
                </td>
                <td>`+ deWL[i].unps + `</td>
                <td>`+ deWL[i].utj + `</td>
                <td>`+ deWL[i].user + `</td>
                <td>`+ deWL[i].same + `</td>
                <td>`+ deWL[i].circle + `</td>
                <td>`+ deWL[i].mnps + `</td>
                <td>`+ deWL[i].mm + `</td>
                <td>`+ deWL[i].tnps + `</td>
                <td>`+ deWL[i].mt + `</td>
                <td>`+ deWL[i].del + `</td>
            </tr>
            `
          } else {
            destrWLc += `
            <tr class="child_row1 child">
                <td>`+ deWL[i].name + `</td>
                <td>`+ deWL[i].unps + `</td>
                <td>`+ deWL[i].utj + `</td>
                <td>`+ deWL[i].user + `</td>
                <td>`+ deWL[i].same + `</td>
                <td>`+ deWL[i].circle + `</td>
                <td>`+ deWL[i].mnps + `</td>
                <td>`+ deWL[i].mm + `</td>
                <td>`+ deWL[i].tnps + `</td>
                <td>`+ deWL[i].mt + `</td>
                <td>`+ deWL[i].del + `</td>
            </tr>
            `
          }
        }
        for (var i = 0; i < deYW.length; i++) {
          if (deYW[i].name == "业务标签") {
            destrYWf += `
            <tr class="parent" id="row2">
                <td>
                    `+ deYW[i].name + `
                    <i class="glyphicon glyphicon-chevron-down"></i>
                </td>
                <td>`+ deYW[i].unps + `</td>
                <td>`+ deYW[i].utj + `</td>
                <td>`+ deYW[i].user + `</td>
                <td>`+ deYW[i].same + `</td>
                <td>`+ deYW[i].circle + `</td>
                <td>`+ deYW[i].mnps + `</td>
                <td>`+ deYW[i].mm + `</td>
                <td>`+ deYW[i].tnps + `</td>
                <td>`+ deYW[i].mt + `</td>
                <td>`+ deYW[i].del + `</td>
            </tr>
            `
          } else {
            destrYWc += `
            <tr class="child_row2 child">
                <td>`+ deYW[i].name + `</td>
                <td>`+ deYW[i].unps + `</td>
                <td>`+ deYW[i].utj + `</td>
                <td>`+ deYW[i].user + `</td>
                <td>`+ deYW[i].same + `</td>
                <td>`+ deYW[i].circle + `</td>
                <td>`+ deYW[i].mnps + `</td>
                <td>`+ deYW[i].mm + `</td>
                <td>`+ deYW[i].tnps + `</td>
                <td>`+ deYW[i].mt + `</td>
                <td>`+ deYW[i].del + `</td>
            </tr>
            `
          }
        }

        for (var i = 0; i < deFW.length; i++) {
          if (deFW[i].name == "服务标签") {
            destrFWf += `
            <tr class="parent" id="row3">
                <td>
                    `+ deFW[i].name + `
                    <i class="glyphicon glyphicon-chevron-down"></i>
                </td>
                <td>`+ deFW[i].unps + `</td>
                <td>`+ deFW[i].utj + `</td>
                <td>`+ deFW[i].user + `</td>
                <td>`+ deFW[i].same + `</td>
                <td>`+ deFW[i].circle + `</td>
                <td>`+ deFW[i].mnps + `</td>
                <td>`+ deFW[i].mm + `</td>
                <td>`+ deFW[i].tnps + `</td>
                <td>`+ deFW[i].mt + `</td>
                <td>`+ deFW[i].del + `</td>
            </tr>
            `
          } else {
            destrFWc += `
            <tr class="child_row3 child">
                <td>`+ deFW[i].name + `</td>
                <td>`+ deFW[i].unps + `</td>
                <td>`+ deFW[i].utj + `</td>
                <td>`+ deFW[i].user + `</td>
                <td>`+ deFW[i].same + `</td>
                <td>`+ deFW[i].circle + `</td>
                <td>`+ deFW[i].mnps + `</td>
                <td>`+ deFW[i].mm + `</td>
                <td>`+ deFW[i].tnps + `</td>
                <td>`+ deFW[i].mt + `</td>
                <td>`+ deFW[i].del + `</td>
            </tr>
            `
          }

        }
        destrall = destrZT + destrWLf + destrWLc + destrYWf + destrYWc + destrFWf + destrFWc;
        $(".tablemx tbody").html(destrall)
        $("tr.parent").click(function () {
          $(this)
            .siblings(".child_" + this.id)
            .slideToggle();
          var icon = $(this).find("i");
          if (icon.hasClass("glyphicon-chevron-down")) {
            icon.removeClass("glyphicon-chevron-down");
            icon.addClass("glyphicon-chevron-up");
          } else {
            icon.removeClass("glyphicon-chevron-up");
            icon.addClass("glyphicon-chevron-down");
          }
        });

      }
      function detailkd() {
        for (var i = 0; i < result.npsYW.length; i++) {
          if (result.npsYW[i].L1_NAME == "整体") {
            deZT.push({
              name: result.npsYW[i].L_NAME,
              unps: parseFloat(result.npsYW[i].U_NPS).toFixed(2),
              utj: parseFloat(result.npsYW[i].U_REFERENCE_RATE).toFixed(2),
              user: parseFloat(result.npsYW[i].U_NPS).toFixed(2),
              same: parseFloat(result.npsYW[i].U_NPS).toFixed(2),
              circle: parseFloat(result.npsYW[i].U_NPS).toFixed(2),
              mnps: parseFloat(result.npsYW[i].M_NPS).toFixed(2),
              mm: parseFloat(result.npsYW[i].STANDARD_M).toFixed(2),
              tnps: parseFloat(result.npsYW[i].T_NPS).toFixed(2),
              mt: parseFloat(result.npsYW[i].STANDARD_T).toFixed(2),
              del: parseFloat(result.npsYW[i].COMPETITION_BETWEEN).toFixed(2)
            })
          }
          if (result.npsYW[i].L1_NAME == "服务标签") {
            deFW.push({
              name: result.npsYW[i].L_NAME,
              unps: parseFloat(result.npsYW[i].U_NPS).toFixed(2),
              utj: parseFloat(result.npsYW[i].U_REFERENCE_RATE).toFixed(2),
              user: parseFloat(result.npsYW[i].U_NPS).toFixed(2),
              same: parseFloat(result.npsYW[i].U_NPS).toFixed(2),
              circle: parseFloat(result.npsYW[i].U_NPS).toFixed(2),
              mnps: parseFloat(result.npsYW[i].M_NPS).toFixed(2),
              mm: parseFloat(result.npsYW[i].STANDARD_M).toFixed(2),
              tnps: parseFloat(result.npsYW[i].T_NPS).toFixed(2),
              mt: parseFloat(result.npsYW[i].STANDARD_T).toFixed(2),
              del: parseFloat(result.npsYW[i].COMPETITION_BETWEEN).toFixed(2)

            })
          }
          if (result.npsYW[i].L1_NAME == "业务标签") {
            deYW.push({
              name: result.npsYW[i].L_NAME,
              unps: parseFloat(result.npsYW[i].U_NPS).toFixed(2),
              utj: parseFloat(result.npsYW[i].U_REFERENCE_RATE).toFixed(2),
              user: parseFloat(result.npsYW[i].U_NPS).toFixed(2),
              same: parseFloat(result.npsYW[i].U_NPS).toFixed(2),
              circle: parseFloat(result.npsYW[i].U_NPS).toFixed(2),
              mnps: parseFloat(result.npsYW[i].M_NPS).toFixed(2),
              mm: parseFloat(result.npsYW[i].STANDARD_M).toFixed(2),
              tnps: parseFloat(result.npsYW[i].T_NPS).toFixed(2),
              mt: parseFloat(result.npsYW[i].STANDARD_T).toFixed(2),
              del: parseFloat(result.npsYW[i].COMPETITION_BETWEEN).toFixed(2)

            })
          }
          if (result.npsYW[i].L1_NAME == "网络标签") {
            deWL.push({
              name: result.npsYW[i].L_NAME,
              unps: parseFloat(result.npsYW[i].U_NPS).toFixed(2),
              utj: parseFloat(result.npsYW[i].U_REFERENCE_RATE).toFixed(2),
              user: parseFloat(result.npsYW[i].U_NPS).toFixed(2),
              same: parseFloat(result.npsYW[i].U_NPS).toFixed(2),
              circle: parseFloat(result.npsYW[i].U_NPS).toFixed(2),
              mnps: parseFloat(result.npsYW[i].M_NPS).toFixed(2),
              mm: parseFloat(result.npsYW[i].STANDARD_M).toFixed(2),
              tnps: parseFloat(result.npsYW[i].T_NPS).toFixed(2),
              mt: parseFloat(result.npsYW[i].STANDARD_T).toFixed(2),
              del: parseFloat(result.npsYW[i].COMPETITION_BETWEEN).toFixed(2)

            })
          }

        }
        for (var i = 0; i < deZT.length; i++) {
          destrZT += `
          <tr>
              <td>`+ deZT[i].name + `</td>
              <td>`+ deZT[i].unps + `</td>
              <td>`+ deZT[i].utj + `</td>
              <td>`+ deZT[i].user + `</td>
              <td>`+ deZT[i].same + `</td>
              <td>`+ deZT[i].circle + `</td>
              <td>`+ deZT[i].mnps + `</td>
              <td>`+ deZT[i].mm + `</td>
              <td>`+ deZT[i].tnps + `</td>
              <td>`+ deZT[i].mt + `</td>
              <td>`+ deZT[i].del + `</td>
          </tr>
          `
        }
        for (var i = 0; i < deWL.length; i++) {
          if (deWL[i].name == "网络标签") {
            destrWLf += `
            <tr class="parent" id="row1">
                <td>
                    `+ deWL[i].name + `
                    <i class="glyphicon glyphicon-chevron-down"></i>
                </td>
                <td>`+ deWL[i].unps + `</td>
                <td>`+ deWL[i].utj + `</td>
                <td>`+ deWL[i].user + `</td>
                <td>`+ deWL[i].same + `</td>
                <td>`+ deWL[i].circle + `</td>
                <td>`+ deWL[i].mnps + `</td>
                <td>`+ deWL[i].mm + `</td>
                <td>`+ deWL[i].tnps + `</td>
                <td>`+ deWL[i].mt + `</td>
                <td>`+ deWL[i].del + `</td>
            </tr>
            `
          } else {
            destrWLc += `
            <tr class="child_row1 child">
                <td>`+ deWL[i].name + `</td>
                <td>`+ deWL[i].unps + `</td>
                <td>`+ deWL[i].utj + `</td>
                <td>`+ deWL[i].user + `</td>
                <td>`+ deWL[i].same + `</td>
                <td>`+ deWL[i].circle + `</td>
                <td>`+ deWL[i].mnps + `</td>
                <td>`+ deWL[i].mm + `</td>
                <td>`+ deWL[i].tnps + `</td>
                <td>`+ deWL[i].mt + `</td>
                <td>`+ deWL[i].del + `</td>
            </tr>
            `
          }
        }
        for (var i = 0; i < deYW.length; i++) {
          if (deYW[i].name == "业务标签") {
            destrYWf += `
            <tr class="parent" id="row2">
                <td>
                    `+ deYW[i].name + `
                    <i class="glyphicon glyphicon-chevron-down"></i>
                </td>
                <td>`+ deYW[i].unps + `</td>
                <td>`+ deYW[i].utj + `</td>
                <td>`+ deYW[i].user + `</td>
                <td>`+ deYW[i].same + `</td>
                <td>`+ deYW[i].circle + `</td>
                <td>`+ deYW[i].mnps + `</td>
                <td>`+ deYW[i].mm + `</td>
                <td>`+ deYW[i].tnps + `</td>
                <td>`+ deYW[i].mt + `</td>
                <td>`+ deYW[i].del + `</td>
            </tr>
            `
          } else {
            destrYWc += `
            <tr class="child_row2 child">
                <td>`+ deYW[i].name + `</td>
                <td>`+ deYW[i].unps + `</td>
                <td>`+ deYW[i].utj + `</td>
                <td>`+ deYW[i].user + `</td>
                <td>`+ deYW[i].same + `</td>
                <td>`+ deYW[i].circle + `</td>
                <td>`+ deYW[i].mnps + `</td>
                <td>`+ deYW[i].mm + `</td>
                <td>`+ deYW[i].tnps + `</td>
                <td>`+ deYW[i].mt + `</td>
                <td>`+ deYW[i].del + `</td>
            </tr>
            `
          }
        }

        for (var i = 0; i < deFW.length; i++) {
          if (deFW[i].name == "服务标签") {
            destrFWf += `
            <tr class="parent" id="row3">
                <td>
                    `+ deFW[i].name + `
                    <i class="glyphicon glyphicon-chevron-down"></i>
                </td>
                <td>`+ deFW[i].unps + `</td>
                <td>`+ deFW[i].utj + `</td>
                <td>`+ deFW[i].user + `</td>
                <td>`+ deFW[i].same + `</td>
                <td>`+ deFW[i].circle + `</td>
                <td>`+ deFW[i].mnps + `</td>
                <td>`+ deFW[i].mm + `</td>
                <td>`+ deFW[i].tnps + `</td>
                <td>`+ deFW[i].mt + `</td>
                <td>`+ deFW[i].del + `</td>
            </tr>
            `
          } else {
            destrFWc += `
            <tr class="child_row3 child">
                <td>`+ deFW[i].name + `</td>
                <td>`+ deFW[i].unps + `</td>
                <td>`+ deFW[i].utj + `</td>
                <td>`+ deFW[i].user + `</td>
                <td>`+ deFW[i].same + `</td>
                <td>`+ deFW[i].circle + `</td>
                <td>`+ deFW[i].mnps + `</td>
                <td>`+ deFW[i].mm + `</td>
                <td>`+ deFW[i].tnps + `</td>
                <td>`+ deFW[i].mt + `</td>
                <td>`+ deFW[i].del + `</td>
            </tr>
            `
          }

        }
        destrall = destrZT + destrWLf + destrWLc + destrYWf + destrYWc + destrFWf + destrFWc;
        $(".tablemx tbody").html(destrall)
        $("tr.parent").click(function () {
          $(this)
            .siblings(".child_" + this.id)
            .slideToggle();
          var icon = $(this).find("i");
          if (icon.hasClass("glyphicon-chevron-down")) {
            icon.removeClass("glyphicon-chevron-down");
            icon.addClass("glyphicon-chevron-up");
          } else {
            icon.removeClass("glyphicon-chevron-up");
            icon.addClass("glyphicon-chevron-down");
          }
        });

      }
      detailyw()
      // 切换移网
      $(".btnzu1box .btn1").click(function () {
        detailyw()
      })
      // 切换宽带
      $(".btnzu1box .btn2").click(function () {
        detailkd()
      })

      /* ***** detail end ***** */

      /* ***** rank start ***** */
      function rankyw() {
        for (var i = 0; i < prorank.length; i++) {
          if (prorank[i].name == proname) {
            rankarea = prorank[i].arearank;
            rankall = prorank[i].allrank;
            $(".nor .num").html(rankarea)
            $(".glo .num").html(rankall)
          }
        }
        for (var i = 0; i < result.allRankYWN.length; i++) {
          if (result.allRankYWN[i].PROVINCE_NAME == proname) {
            $(".nor .area").text("北方")
            console.log("北方");
          }

          if (result.allRankYWS[i].PROVINCE_NAME == proname) {
            $(".nor .area").text("南方")
            console.log("南方");
          }

        }

        $(".name").text(proname)
        var str = $(".hrtitle2 span").text()
        var arr = str.split("-")
        arr[1] = proname
        console.log(arr);
        str = arr.join("-")
        $(".hrtitle2 span").text(str)

      }
      function rankkd() {
        for (var i = 0; i < prorank.length; i++) {
          if (prorank[i].name == proname) {
            rankarea = prorank[i].arearank;
            rankall = prorank[i].allrank;
            $(".nor .num").html(rankarea)
            $(".glo .num").html(rankall)
          }
        }
        for (var i = 0; i < result.allRankYWN.length; i++) {
          if (result.allRankYWN[i].PROVINCE_NAME == proname) {
            $(".nor .area").text("北方")
            console.log("北方");
          }

          if (result.allRankYWS[i].PROVINCE_NAME == proname) {
            $(".nor .area").text("南方")
            console.log("南方");
          }

        }

        $(".name").text(proname)
        var str = $(".hrtitle2 span").text()
        var arr = str.split("-")
        arr[1] = proname
        console.log(arr);
        str = arr.join("-")
        $(".hrtitle2 span").text(str)

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
function delnan() {
  $('.tablemx tbody tr').each(function (i) {
    $(this).children('td').each(function (j) {
      if ($(this).text() == "NaN") {
        $(this).text("—")
      }
    });
  });
  $('.rang tbody tr').each(function (i) {
    $(this).children('td').each(function (j) {
      if ($(this).text() == "NaN") {
        $(this).text("—")
      }
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




