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
chart3.setOption(option3);

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
chart5.setOption(option5);

var chart6 = echarts.init(document.getElementById("chart6"));
var option6 = {
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
chart6.setOption(option6);