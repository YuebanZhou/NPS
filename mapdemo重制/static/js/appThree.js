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
    type: 'value',
    // splitNumber: 1,  
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
    // markLine: {
    //   data: [
    //     { type: 'average', name: '平均值' }
    //   ]
    // },
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
    // markLine: {
    //   data: [
    //     { type: 'average', name: '平均值' }
    //   ]
    // },
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
    // markLine: {
    //   data: [
    //     { type: 'average', name: '平均值' }
    //   ]
    // },
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
    type: 'value',
    // splitNumber: 1,  
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
    // markLine: {
    //   data: [
    //     { type: 'average', name: '平均值' }
    //   ]
    // },
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
    // markLine: {
    //   data: [
    //     { type: 'average', name: '平均值' }
    //   ]
    // },
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
    // markLine: {
    //   data: [
    //     { type: 'average', name: '平均值' }
    //   ]
    // },
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

var lineChart11 = echarts.init(document.getElementById("echarts-line-chart11"));
var lineoption11 = {
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
    data: ["纯语音用户", "有流量4G用户", "有流量非4G用户"],
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
    type: 'value',
    // splitNumber: 1,  
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
  },
  series: [{
    name: "纯语音用户",
    type: "line",
    // stack: '总量',
    data: [11.2, 17.2,
      17.4,
      23.2,
      {
        value: 17.1,
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
        color: "#953735",
        label: {
          show: true
        }
      }
    }
  },
  {
    name: "有流量4G用户",
    type: "line",
    // stack: '总量',
    data: [-6.4, -2.9, 0.0, 8.1,
    {
      value: 5.5,
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
        color: "#F79748",
        label: {
          show: true
        }
      }
    }
  },
  {
    name: "有流量非4G用户",
    type: "line",
    // stack: '总量',
    data: [-4.5, -3.2, -1.8, 2.1,
    {
      value: 3.6,
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
        color: "#558ED5",
        label: {
          show: true
        }
      }
    }
  }
  ]
};

lineChart11.setOption(lineoption11);
var lineChart12 = echarts.init(document.getElementById("echarts-line-chart12"));
var lineoption12 = {
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
    data: ["2I2C", "非2I2C"],
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
    type: 'value',
    // splitNumber: 1,  
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
  },
  series: [{
    name: "2I2C",
    type: "line",
    // stack: '总量',
    data: [31.8, 11.9,
      9.8,
      9.9,
      {
        value: 6.5,
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
        color: "#4F81BD",
        label: {
          show: true
        }
      }
    }
  },
  {
    name: "非2I2C",
    type: "line",
    // stack: '总量',
    data: [, -1.0, -0.6, 4.0,
      {
        value: 4.6,
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
        color: "#9BBB59",
        label: {
          show: true
        }
      }
    }
  },

  ]
};

lineChart12.setOption(lineoption12);
var lineChart21 = echarts.init(document.getElementById("echarts-line-chart21"));
var lineoption21 = {
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
    type: 'value',
    // splitNumber: 1,  
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

lineChart21.setOption(lineoption21);
var lineChart22 = echarts.init(document.getElementById("echarts-line-chart22"));
var lineoption22 = {
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
    type: 'value',
    // splitNumber: 1,  
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

lineChart22.setOption(lineoption22);


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

var ywyearq = [];
var ywunps = [];
var ywmnps = [];
var ywtnps = [];

var kdyearq = [];
var kdunps = [];
var kdmnps = [];
var kdtnps = [];
$.ajax({
  type: "post",
  dataType: "json",
  url: "json/index.json",
  success: function (result) {
    console.log("请求成功");
    // 移网
    var arr=[]
    for (var i = 0; i < result.ywNPS.length; i++) {
      arr.push({
        val1:result.ywNPS[i].YEAR_Q.split("Q")[0],
        val2:result.ywNPS[i].YEAR_Q.split("Q")[1]
      })
      var temp=0;
      for(var j=0;j<arr.length;j++){
        if(arr[j+1].val1<arr[j].val1){
          temp=arr[j].val1;
          arr[j].val1=arr[j+1].val1;
          arr[j+1].val1=temp;
        }
      }
      console.log(arr);
      
    }
    console.log(arr);
    
    lineChart1.setOption({
      xAxis: { data: ywyearq },
      series: [{ name: '中国联通', data: ywunps },
      { name: '中国移动', data: ywmnps },
      { name: '中国电信', data: ywtnps }]
    })
    lineChart2.setOption({
      xAxis: { data: kdyearq },
      series: [{ name: '中国联通', data: kdunps },
      { name: '中国移动', data: kdmnps },
      { name: '中国电信', data: kdtnps }]
    })
  },
  error: function () {
    console.log("请求失败");
  }
})
