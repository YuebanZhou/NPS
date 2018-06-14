//绘制index页面上静态的折线图
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
      data: [{ value: '29', name: '年度完成率' }],
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
        color: '#666',
      },
      detail: {
        formatter: '{value}%',
        fontSize: 24,
        offsetCenter: [0, '85%']
      },
      title: {
        fontSize: 12,
        offsetCenter: [0, '20%'],
        textStyle: {
          color: '#fff'
        }
      },
      pointer: {
        width: 3            // 指针大小
      }
    }
  ]
};
chart1.setOption(option1);

var chart2 = echarts.init(document.getElementById("chart2"));
var option2 = {
  tooltip: {
    trigger: 'axis',
  },
  legend: {
    data: ['中国联通', '中国移动', '中国电信'],
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
      name: '中国联通',
      type: 'line',
      itemStyle: {
        normal: {
          color: "#F6B37F",
          label: {
            show: true
          }
        }
      },
      areaStyle: {
        normal: {
          color: '#F6B37F'
        }
      },
      data: [-1.2, -0.5, 0.6, 5, 5]
    },
    {
      name: '中国移动',
      type: 'line',
      itemStyle: {
        normal: {
          color: "#25D8ED",
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
      data: [28.4, 23.4, 24.2, 26.9, 23.8]
    },
    {
      name: '中国电信',
      type: 'line',
      itemStyle: {
        normal: {
          color: "#21A838",
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
      data: [14.1, 13.9, 14.4, 17.9, 16.5]
    }
  ]
};
chart2.setOption(option2);

var chart3 = echarts.init(document.getElementById("chart3"));
var option3 = {
  tooltip: {
    trigger: 'axis',
  },
  legend: {
    data: ['纯语音用户', '有流量4G用户', '有流量非4G用户'],
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
      name: '纯语音用户',
      type: 'line',
      itemStyle: {
        normal: {
          color: "#F6B37F",
          label: {
            show: true
          }
        }
      },
      areaStyle: {
        normal: {
          color: '#F6B37F'
        }
      },
      data: [11.2, 17.2, 17.4, 23.2, 17.1]
    },
    {
      name: '有流量4G用户',
      type: 'line',
      itemStyle: {
        normal: {
          color: "#25D8ED",
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
      data: [-6.4, -2.9, -1.8, 2.1, 3.6]
    },
    {
      name: '有流量非4G用户',
      type: 'line',
      itemStyle: {
        normal: {
          color: "#21A838",
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
      data: [-4.5, -2.9, 0.0, 8.1, 5.5]
    }
  ]
};
chart3.setOption(option3);

var chart3r = echarts.init(document.getElementById("chart3r"));
var option3r = {
  tooltip: {
    trigger: 'axis',
  },
  legend: {
    data: ['2I2C', '非2I2C',],
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
      name: '2I2C',
      type: 'line',
      itemStyle: {
        normal: {
          color: "#F6B37F",
          label: {
            show: true
          }
        }
      },
      areaStyle: {
        normal: {
          color: '#F6B37F'
        }
      },
      data: [31.8, 11.9, 9.8, 9.9, 6.5]
    },
    {
      name: '非2I2C',
      type: 'line',
      itemStyle: {
        normal: {
          color: "#25D8ED",
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
      data: [, -1.0, -0.6, 4.0, 4.6]
    }
  ]
};
chart3r.setOption(option3r);


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

      data: [{ value: '29', name: '年度完成率' }],
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
  ]

};
chart4.setOption(option4);

var chart5 = echarts.init(document.getElementById("chart5"));
var option5 = {
  tooltip: {
    trigger: 'axis',
  },
  legend: {
    data: ['中国联通', '中国移动', '中国电信'],
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
      name: '中国联通',
      type: 'line',
      itemStyle: {
        normal: {
          color: "#F6B37F",
          label: {
            show: true
          }
        }
      },
      areaStyle: {
        normal: {
          color: '#F6B37F'
        }
      },
      data: [-0.1, -1.1, 0.8, 4.2, 7.5]
    },
    {
      name: '中国移动',
      type: 'line',
      itemStyle: {
        normal: {
          color: "#25D8ED",
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
      data: [, , , , 6.9]
    },
    {
      name: '中国电信',
      type: 'line',
      itemStyle: {
        normal: {
          color: "#21A838",
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
      data: [, , , , -0.7]
    }
  ]
};
chart5.setOption(option5);

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

$("#chart2").click(function () {
  window.location.href = "indexx.html"
})
$("#chart5").click(function () {
  window.location.href = "indexx.html"
})
$(".enter1").click(function () {
  window.location.href = "index1.html"
})
$("#btn1").click(function () {
  $("#chart3").show();
  $("#chart3r").hide();
})
$("#btn2").click(function () {
  $("#chart3").hide();
  $("#chart3r").show();
})