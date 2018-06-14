$(".btn11").click(function () {
  $(".ywchart").show()
  $(".kdchart").hide()

  if ($(".btn12").hasClass("active")) {
    $(".btn12").removeClass("active");
    $(this).addClass("active");
  }
});
$(".btn12").click(function () {
  $(".kdchart").show()
  $(".ywchart").hide()
  $(this).addClass("active");
  if ($(".btn11").hasClass("active")) {
    $(".btn11").removeClass("active");
  }
});
$(".btn21").click(function () {
  if ($(".btn22").hasClass("active")) {
    $(".btn22").removeClass("active");
    $(this).addClass("active");
  }
  if ($(".btn23").hasClass("active")) {
    $(".btn23").removeClass("active");
    $(this).addClass("active");
  }
  if ($(".btn24").hasClass("active")) {
    $(".btn24").removeClass("active");
    $(this).addClass("active");
  }
});
$(".btn22").click(function () {
  $(this).addClass("active");
  if ($(".btn21").hasClass("active")) {
    $(".btn21").removeClass("active");
  }
  if ($(".btn23").hasClass("active")) {
    $(".btn23").removeClass("active");
  }
  if ($(".btn24").hasClass("active")) {
    $(".btn24").removeClass("active");
  }
});
$(".btn23").click(function () {
  $(this).addClass("active");
  if ($(".btn21").hasClass("active")) {
    $(".btn21").removeClass("active");
  }
  if ($(".btn22").hasClass("active")) {
    $(".btn22").removeClass("active");
  }
  if ($(".btn24").hasClass("active")) {
    $(".btn24").removeClass("active");
  }
});
$(".btn24").click(function () {
  $(this).addClass("active");
  if ($(".btn21").hasClass("active")) {
    $(".btn21").removeClass("active");
  }
  if ($(".btn22").hasClass("active")) {
    $(".btn22").removeClass("active");
  }
  if ($(".btn23").hasClass("active")) {
    $(".btn23").removeClass("active");
  }
});
$(".btn31").click(function () {
  if ($(".btn32").hasClass("active")) {
    $(".btn32").removeClass("active");
    $(this).addClass("active");
  }
  if ($(".btn33").hasClass("active")) {
    $(".btn33").removeClass("active");
    $(this).addClass("active");
  }
  if ($(".btn34").hasClass("active")) {
    $(".btn34").removeClass("active");
    $(this).addClass("active");
  }
});
$(".btn32").click(function () {
  $(this).addClass("active");
  if ($(".btn31").hasClass("active")) {
    $(".btn31").removeClass("active");
  }
  if ($(".btn33").hasClass("active")) {
    $(".btn33").removeClass("active");
  }
  if ($(".btn34").hasClass("active")) {
    $(".btn34").removeClass("active");
  }
});
$(".btn33").click(function () {
  $(this).addClass("active");
  if ($(".btn31").hasClass("active")) {
    $(".btn31").removeClass("active");
  }
  if ($(".btn32").hasClass("active")) {
    $(".btn32").removeClass("active");
  }
  if ($(".btn34").hasClass("active")) {
    $(".btn34").removeClass("active");
  }
});
$(".btn34").click(function () {
  $(this).addClass("active");
  if ($(".btn31").hasClass("active")) {
    $(".btn31").removeClass("active");
  }
  if ($(".btn32").hasClass("active")) {
    $(".btn32").removeClass("active");
  }
  if ($(".btn33").hasClass("active")) {
    $(".btn33").removeClass("active");
  }
});

var chart5 = echarts.init(document.getElementById("chart5"));
var option5 = {
  color: ["#F8352F", "#63BA79", "#37B3D7"],
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  legend: {
    orient: "vertical",
    right: 60,
    bottom: 20,
    data: ["联通", "移动", "电信"]
  },
  series: [
    {
      name: "客户信息",
      type: "pie",
      radius: "55%",
      center: ["50%", "50%"],
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
      data: [
        { value: 42.1, name: "联通" },
        { value: 29.0, name: "移动" },
        { value: 28.9, name: "电信" }
      ]
    }
  ]
};
chart5.setOption(option5);

var chart6 = echarts.init(document.getElementById("chart6"));
var option6 = {
  color: ["#F7B9C6", "#AAD7BA", "#7D6597", "#F6D7A0", "#EB8970", "#69B7BB"],
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  legend: {
    orient: "vertical",
    right: 60,
    bottom: 20,
    data: ["18-24", "25-34", "35-39", "40-44", "45-55", "55岁以上"],
    right: 'right'
  },
  series: [
    {
      name: "客户信息",
      type: "pie",
      radius: "55%",
      center: ["50%", "50%"],
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
      data: [
        { value: 19.2, name: "18-24" },
        { value: 36.2, name: "25-34" },
        { value: 9.5, name: "35-39" },
        { value: 8.6, name: "40-44" },
        { value: 12.3, name: "45-55" },
        { value: 6.6, name: "55岁以上" }
      ]
    }
  ]
};
chart6.setOption(option6);

var chart7 = echarts.init(document.getElementById("chart7"));
var option7 = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow"
    }
  },
  legend: {
    data: ["17Q4", "18Q1"]
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true
  },
  xAxis: [
    {
      axisLabel: {
        interval: 0,
      },
      type: "category",
      axisTick: { show: false },

      data: ["纯语音用户", "有流量4G用户", "有流量非4G用户"]
    }
  ],
  yAxis: [
    {
      type: "value",
      name: "值"
      //   max:30,
      //   min:-30
    }
  ],
  series: [
    {
      name: "17Q4",
      type: "bar",
      barGap: 0,
      label: {
        normal: {
          show: true,
          textStyle: {
            color: "#000"
          }
        }
      },
      data: [9.5, 15.6, 74.9],
      itemStyle: {
        normal: {
          color: "#ffcc99"
        }
      }
    },
    {
      name: "18Q1",
      type: "bar",
      label: {
        normal: {
          show: true,
          textStyle: {
            color: "#000"
          }
        }
      },
      data: [8.8, 12.1, 79.1],
      itemStyle: {
        normal: {
          color: "#cc6699"
        }
      }
    }
  ]
};
chart7.setOption(option7);

var chart8 = echarts.init(document.getElementById("chart8"));
var option8 = {
  color: ["#8DBC92", "#FFFAC2", "#F6BEAD", "#B884AA", "#0B59A1"],

  tooltip: {
    trigger: "axis",
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  legend: {
    data: ["1星", "2星", "3星", "4星", "5星"]
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true
  },
  yAxis: {
    type: "value"
  },
  xAxis: {
    type: "category",
    data: ["联通各类用户数量实际占比", "调研样本量占比"]
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
      data: [20.5, 33.5],
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
      data: [29.1, 33.6],
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
      data: [11.3, 17.0],
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
      data: [7.6, 13.7],
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
      data: [3.0, 3.0],
      label: {
        normal: {
          show: true,
          textStyle: {
            color: "#000"
          }
        }
      },
    }
  ]
};
chart8.setOption(option8);





$("tr.parent").click(function () {
  console.log("parent");
  // $(this).toggleClass('selected');
  $(this)
    .siblings(".child_" + this.id)
    .slideToggle();
  var icon = $(this).find("i");
  console.log(icon);
  if (icon.hasClass("glyphicon-chevron-down")) {
    console.log("glyphicon-chevron-down");
    icon.removeClass("glyphicon-chevron-down");
    icon.addClass("glyphicon-chevron-up");
  } else {
    icon.removeClass("glyphicon-chevron-up");
    icon.addClass("glyphicon-chevron-down");
  }
});



var chart9 = echarts.init(document.getElementById("chart9"));
var option9 = {
  color: ["#8DBC92", "#FFFAC2"],

  tooltip: {
    trigger: "axis",
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  legend: {
    data: ["女", "男"]
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true
  },
  yAxis: {
    type: "value"
  },
  xAxis: {
    type: "category",
    data: ["移动宽带", "电信宽带", "联通宽带"]
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
      data: [35.2, 33.2, 30.4],
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
      data: [64.8, 66.8, 69.6],
      label: {
        normal: {
          show: true,
          textStyle: {
            color: "#000"
          }
        }
      },
    }
  ]
};
chart9.setOption(option9);
var chart10 = echarts.init(document.getElementById("chart10"));
var option10 = {
  color: ["#8DBC92", "#FFFAC2"],

  tooltip: {
    trigger: "axis",
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  legend: {
    data: ["FTTH接入", "LAN接入", "XDSL接入"]
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true
  },
  yAxis: {
    type: "value"
  },
  xAxis: {
    type: "category",
    data: ["联通用户", "调研样本"]
  },
  series: [
    {
      name: "FTTH接入",
      type: "bar",
      stack: "总量",
      label: {
        normal: {
          show: true,
          position: "insideRight"
        }
      },
      data: [82.1, 82.5],
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
      name: "LAN接入",
      type: "bar",
      stack: "总量",
      label: {
        normal: {
          show: true,
          position: "insideRight"
        }
      },
      data: [13.3, 13.7],
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
      name: "XDSL接入",
      type: "bar",
      stack: "总量",
      label: {
        normal: {
          show: true,
          position: "insideRight"
        }
      },
      data: [4.7, 3.9],
      label: {
        normal: {
          show: true,
          textStyle: {
            color: "#000"
          }
        }
      },
    }
  ]
};
chart10.setOption(option10);
var chart11 = echarts.init(document.getElementById("chart11"));
var option11 = {
  color: ["#F7B9C6", "#AAD7BA", "#7D6597", "#F6D7A0", "#EB8970", "#69B7BB"],
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  legend: {
    orient: "vertical",
    right: 60,
    bottom: 20,
    data: ["18-24", "25-34", "35-39", "40-44", "45-55", "55岁以上"],
    right: 'right'
  },
  series: [
    {
      name: "客户信息",
      type: "pie",
      radius: "55%",
      center: ["50%", "50%"],
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
      data: [
        { value: 19.2, name: "18-24" },
        { value: 36.2, name: "25-34" },
        { value: 9.5, name: "35-39" },
        { value: 8.6, name: "40-44" },
        { value: 12.3, name: "45-55" },
        { value: 6.6, name: "55岁以上" }
      ]
    }
  ]
};
chart11.setOption(option11);
$(window).resize(function () {
  chart5.resize();
  chart6.resize();
  chart7.resize();
  chart8.resize();
  chart9.resize();
  chart10.resize();
  chart11.resize();

})
