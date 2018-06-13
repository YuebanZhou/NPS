//绘制index页面上静态的折线图
var lineChart1 = echarts.init(document.getElementById("echarts-line-chart1"));
var icons = {
  yidong: "../img/yidong.png",
  dianxin: "../img/dianxin.png",
  liantong: "../img/liantong.png"
};
var lineoption1 = {
  title: {
    // text: '年度完成率：68%\n年度提升值：5.4\n季度提升值：5.4',
    textStyle: {
      color: "#fff",
      fontSize: 14
    }
  },
  tooltip: {
    trigger: "axis"
  },
  grid: {
    left: "3%",
    right: "10%",
    bottom: "3%",
    containLabel: true
  },
  legend: {
    data: ["中国联通", "中国移动", "中国电信"],
    textStyle: {
      color: "#fff",
      fontSize: 12
    }
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: [],
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
  },
  yAxis: {
    show: true,
    type: "value",
    data: ["yidong", "dianxin", "liantong"],
    axisLabel: {
      show: true,
      textStyle: {
        color: "#fff"
      },
      rich: {
        yidong: {
          backgroundColor: {
            image: icons.yidong
          }
        },
        dainxin: {
          backgroundColor: {
            image: icons.dainxin
          }
        },
        liantong: {
          backgroundColor: {
            image: icons.liantong
          }
        }
      }
      //数据全部展示，不隐藏
      //interval: 0
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: "#333"
      }
    },
    splitLine: {
      lineStyle: {
        color: "#333"
      }
    }
  },
  series: [{
    name: "中国联通",
    type: "line",
    // stack: '总量',
    data: [-1.2, -0.5,
      0.6,
      5,
    {
      value: 5,
      label: {
        normal: {
          textStyle: {
            fontSize: 30
          }
        }
      }
    }
    ],
    symbolSize: 6,
    itemStyle: {
      normal: {
        color: "#D2000B",
        label: {
          show: true
        }
      }
    }
  },
  {
    name: "中国移动",
    type: "line",
    // stack: '总量',
    data: [
      28.4,
      23.4,
      24.2,
      26.9,
      {
        value: 23.8,
        label: {
          normal: {
            textStyle: {
              fontSize: 30
            }
          }
        }
      }
    ],
    symbolSize: 6,
    itemStyle: {
      normal: {
        color: "#95C72D",
        label: {
          show: true
        }
      }
    }
  },
  {
    name: "中国电信",
    type: "line",
    // stack: '总量',
    data: [
      14.1,
      13.9,
      14.4,
      17.9,
      {
        value: 16.5,
        label: {
          normal: {
            textStyle: {
              fontSize: 30
            }
          }
        }
      }
    ],
    symbolSize: 6,
    itemStyle: {
      normal: {
        color: "#053F9D",
        label: {
          show: true
        }
      }
    }
  }
  ]
};
lineChart1.setOption(lineoption1);

//绘制index页面上静态的折线图
var lineChart2 = echarts.init(document.getElementById("echarts-line-chart2"));
var lineoption2 = {
  title: {
    // text: '年度完成率： \n年度提升值： \n季度提升值： ',
    textStyle: {
      color: "#fff",
      fontSize: 14
    }
  },
  tooltip: {
    trigger: "axis"
    // position: [390, 10]
  },
  legend: {
    data: ["中国联通", "中国移动", "中国电信"],
    textStyle: {
      color: "#fff",
      fontSize: 12
    }
  },
  grid: {
    left: "3%",
    right: "10%",
    bottom: "3%",
    containLabel: true
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: ["17Q1", "17Q2", "17Q3", "17Q4", "18Q1"],
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
  },
  yAxis: {
    show: true,
    type: "value",
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
  },
  series: [{
    name: "中国联通",
    type: "line",
    // stack: '总量',
    data: [-0.1, -1.1,
      0.8,
      4.2,
    {
      value: 7.5,
      label: {
        normal: {
          textStyle: {
            fontSize: 30
          }
        }
      }
    }
    ],
    symbolSize: 6,
    itemStyle: {
      normal: {
        color: "#D2000B",
        label: {
          show: true
        }
      }
    }
  },
  {
    name: "中国移动",
    type: "line",
    // stack: '总量',
    data: [, , , ,
      {
        value: -0.7,
        label: {
          normal: {
            textStyle: {
              fontSize: 30
            }
          }
        }
      }
    ],
    symbolSize: 6,
    itemStyle: {
      normal: {
        color: "#95C72D",
        label: {
          show: true
        }
      }
    }
  },
  {
    name: "中国电信",
    type: "line",
    // stack: '总量',
    data: [, , , ,
      {
        value: 6.9,
        label: {
          normal: {
            textStyle: {
              fontSize: 30
            }
          }
        }
      }
    ],
    symbolSize: 6,
    itemStyle: {
      normal: {
        color: "#053F9D",
        label: {
          show: true
        }
      }
    }
  }
  ]
};

lineChart2.setOption(lineoption2);

$(".ibox3").click(function () {
  console.log("ibox3");
  window.location.href = "indexx.html";
});
$(".ibox4").click(function () {
  console.log("ibox4");
  window.location.href = "indexx.html";
});
$(window).resize(function () {
  // console.log("wawa")
  //重置容器高宽
  // resizeWorldMapContainer();
  lineChart1.resize();
  lineChart2.resize();
})

var ywyearq=[];
var ywunps=[];
var ywmnps=[];
var ywtnps=[];
$.ajax({
  type: "post",
  dataType: "json",
  url: "json/index.json",
  success: function (result) {
    console.log("请求成功");
    // 移网
    
    for (var i = 0; i < result.ywNPS.length; i++) {
      ywyearq.push(result.ywNPS[i].YEAR_Q)
      ywunps.push(result.ywNPS[i].U_NPS[0].toFixed(2))
      ywmnps.push(result.ywNPS[i].M_NPS[0].toFixed(2))
      ywtnps.push(result.ywNPS[i].T_NPS[0].toFixed(2))
    }
    lineChart1.setOption({
      xAxis:{data:ywyearq},
      series:[{name:'中国联通',data:ywunps},
      {name:'中国移动',data:ywmnps},
      {name:'中国电信',data:ywtnps}]
    })
  },
  error: function () {
    console.log("请求失败");
  }
})
