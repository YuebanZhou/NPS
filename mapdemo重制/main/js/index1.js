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
var area=''
var rankarea=''
var rankall=''

// 模拟获取省份名称
var proname="山东"
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
// 切换网络业务服务
$(".img").click(function (ev) {
  var ofx = $(".img").offset().left;
  var oEvent = ev || event;
  var xx = oEvent.clientX;
  if (xx <= (100 + ofx)) {
    //整体
    $(".img1").show();
    $(".img2").hide();
    $(".img3").hide();
    $(".img4").hide();
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
  } else if (xx > (100 + ofx) && xx <= (200 + ofx)) {
    //业务
    $(".img1").hide();
    $(".img2").show();
    $(".img3").hide();
    $(".img4").hide();
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
  } else if (xx > (200 + ofx) && xx <= (300 + ofx)) {
    //网络
    $(".img1").hide();
    $(".img2").hide();
    $(".img3").show();
    $(".img4").hide();
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
  } else if (xx > (300 + ofx)) {
    // 服务
    $(".img1").hide();
    $(".img2").hide();
    $(".img3").hide();
    $(".img4").show();
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

// 表格收起放出
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

    /* ***** fivebox start ***** */
    $(".five .num1").html(parseFloat(result.pieYW[0].YEAR_NPS).toFixed(2))
    $(".five .num2").html(parseFloat(result.pieYW[0].YEAE_LIFT).toFixed(2))
    $(".five .num3").html(parseFloat(result.pieYW[0].YEAR_FINISH).toFixed(2))
    $(".five .num4").html(parseFloat(result.pieYW[0].QUARTER_NPS).toFixed(2))
    $(".five .num5").html(parseFloat(result.pieYW[0].QUARTER_LIFT).toFixed(2))
    /* ***** fivebox end ***** */

    /* ***** table start ***** */
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
    /* ***** table end ***** */

    /* ***** fourbtn start ***** */
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
    /* ***** fourbtn end ***** */

    /* ***** detail start ***** */
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

    /* ***** detail end ***** */

    /* ***** rank start ***** */
    for(var i=0;i<prorank.length;i++){
      if(prorank[i].name==proname){
        rankarea=prorank[i].arearank;
        rankall=prorank[i].allrank;
        $(".nor .num").html(rankarea)
        $(".glo .num").html(rankall)
      }
    }
    for(var i=0;i<result.allRankYWN.length;i++){
      if(result.allRankYWN[i].PROVINCE_NAME==proname){
        $(".nor .area").html("北")
      }else {
        $(".nor .area").html("南")
      }
    }
    /* ***** rank end ***** */



  },
  error: function () {
    console.log("请求失败");
  }
})




