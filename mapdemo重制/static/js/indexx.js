$(".btn1").click(function() {
  console.log("btn1");
  $("#con1").show();
  $("#con2").hide();
  $("#con3").hide();
  if ($($(".btn2").hasClass("active"))) {
    $(".btn2").removeClass("active");
    $(this).addClass("active");
  }
  if ($($(".btn3").hasClass("active"))) {
    $(".btn3").removeClass("active");
    $(this).addClass("active");
  }
});
$(".btn2").click(function() {
  console.log("btn2");
  $("#con1").hide();
  $("#con2").show();
  $("#con3").hide();
  $(this).addClass("active");
  if ($($(".btn1").hasClass("active"))) {
    $(".btn1").removeClass("active");
  }
  if ($($(".btn3").hasClass("active"))) {
    $(".btn3").removeClass("active");
  }
});
$(".btn3").click(function() {
  console.log("btn3");
  $("#con1").hide();
  $("#con2").hide();
  $("#con3").show();
  $(this).addClass("active");
  if ($($(".btn1").hasClass("active"))) {
    $(".btn1").removeClass("active");
  }
  if ($($(".btn2").hasClass("active"))) {
    $(".btn2").removeClass("active");
  }
});
$(".btn4").click(function() {
  window.location.href = "index.html";
});
//网络
var chart1 = echarts.init(document.getElementById("chart1"));
var option1 = {
  title: {
    text: "总体",
    textStyle: {
      color: "#000",
      fontSize: 14
    }
  },
  tooltip: {
    trigger: "axis"
  },
  legend: {
    data: ["中国联通", "中国移动", "中国电信"],
    textStyle: {
      color: "#000",
      fontSize: 12
    }
  },
  grid: {
    left: "3%",
    right: "6%",
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
        color: "#000"
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
    // data:['<img src="../img/yidong.png"/>','<img src="../img/dianxin.png"/>','<img src="../img/liantong.png"/>'],
    data: ["yidong", "dianxin", "liantong"],
    axisLabel: {
      show: true,
      textStyle: {
        color: "#000"
      }
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
  series: [
    {
      name: "中国联通",
      type: "line",
      // stack: '总量',
      data: [-1.2, -0.5, 0.6, 5, 5],
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
      data: [28.4, 23.4, 24.2, 26.9, 23.8],
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
      data: [14.1, 13.9, 14.4, 17.9, 16.5],
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
chart1.setOption(option1);
// var chart2 = echarts.init(document.getElementById("chart2"));
// var option2 = {
//   title: {
//     text: "网络-同环比NPS提升值",
//     textStyle: {
//       color: "#000",
//       fontSize: 14
//     }
//   },
//   tooltip: {
//     trigger: "axis",
//     axisPointer: {
//       type: "shadow"
//     }
//   },
//   legend: {
//     data: ["18Q1-17基准值", "18Q1-17Q4"]
//   },
//   calculable: true,
//   xAxis: [
//     {
//       axisLabel: {
//         interval: 0,
//         // rotate: 20
//       },
//       type: "category",
//       axisTick: { show: false },

//       data: [
//         "网络整体",
//         "4G上网\n信号",
//         "上网信号\n覆盖",
//         "语音信号\n覆盖",
//         "上网信号\n稳定性",
//         "上网速度",
//         "语音信号\n稳定性",
//         "室外信号",
//         "室内信号"
//       ]
//     }
//   ],
//   yAxis: [
//     {
//       type: "value",
//       name: "值"
//       //   max:30,
//       //   min:-30
//     }
//     // {
//     //   type: "value",
//     //   name: "提及率",
//     //   max: 100,
//     //   min: 0
//     // }
//   ],
//   series: [
//     {
//       name: "18Q1-17基准值",
//       type: "bar",
//       barGap: 0,
//       label: {
//         normal: {
//           show: true,
//           textStyle: {
//             color: "#000"
//           }
//         }
//       },
//       data: [4.0, -26.9, -5.0, -2.5, 1.1, 4.6, 5.6, 5.9, 2.5],
//       itemStyle: {
//         normal: {
//           color: "#ffcc99"
//         }
//       }
//     },
//     {
//       name: "18Q1-17Q4",
//       type: "bar",
//       label: {
//         normal: {
//           show: true,
//           textStyle: {
//             color: "#000"
//           }
//         }
//       },
//       markLine: {
//         itemStyle: {
//           normal: {
//             borderWidth: 1,
//             lineStyle: {
//               type: "dash",
//               color: "#333 ",
//               width: 2
//             },
//             label: {
//               formatter: function(str) {
//                 var str = "环比下降，\n需引起关注";
//                 return str;
//               },
//               textStyle: {
//                 fontSize: 16,
//                 fontWeight: "bolder"
//               }
//             }
//           }
//         },
//         data: [
//           [
//             {
//               coord: ["上网信号\n稳定性", 0]
//             },
//             {
//               coord: ["上网信号\n稳定性", 10]
//             }
//           ]
//         ]
//       },
//       data: [-0.8, -12.1, -25.1, -21.1, -6.7, 6.3, -3.0, 1.0, -2.5],
//       itemStyle: {
//         normal: {
//           color: "#cc6699"
//         }
//       }
//     }
//     // {
//     //   name: "提及率",
//     //   type: "line",
//     //   yAxisIndex: 1,
//     //   data: [80.7, 67.6, 42.9, 40.2, 29.6, 27.0, 19.0, 7.4]
//     // }
//   ]
// };
// chart2.setOption(option2);

//业务
var chart3 = echarts.init(document.getElementById("chart3"));
var option3 = {
  title: {
    text: "总体",
    textStyle: {
      color: "#000",
      fontSize: 14
    }
  },
  title: {
    // text: '移网的运营情况',
    textStyle: {
      color: "#000",
      fontSize: 14
    }
  },
  tooltip: {
    trigger: "axis"
  },
  legend: {
    data: ["中国联通", "中国移动", "中国电信"],
    textStyle: {
      color: "#000",
      fontSize: 12
    }
  },
  grid: {
    left: "3%",
    right: "6%",
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
        color: "#000"
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
    // data:['<img src="../img/yidong.png"/>','<img src="../img/dianxin.png"/>','<img src="../img/liantong.png"/>'],
    data: ["yidong", "dianxin", "liantong"],
    axisLabel: {
      show: true,
      textStyle: {
        color: "#000"
      }
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
  series: [
    {
      name: "中国联通",
      type: "line",
      // stack: '总量',
      data: [4.6, 3.4, 9.8, 12.3, 19.6],
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
      data: [4.6, -9.2, -4.7, -3, -4.9],
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
      data: [9.5, 6.6, 9.8, 7.9, 25.2],
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
chart3.setOption(option3);
// var chart4 = echarts.init(document.getElementById("chart4"));
// var option4 = {
//   title: {
//     text: "业务-同环比NPS提升值",
//     textStyle: {
//       color: "#000",
//       fontSize: 14
//     }
//   },
//   tooltip: {
//     trigger: "axis",
//     axisPointer: {
//       type: "shadow"
//     }
//   },
//   legend: {
//     data: ["18Q1-17基准值", "18Q1-17Q4"]
//   },
//   calculable: true,
//   xAxis: [
//     {
//       axisLabel: {
//         interval: 0,
//         // rotate: 20
//       },
//       type: "category",
//       axisTick: { show: false },

//       data: [
//         "业务整体",
//         "计费准确",
//         "不知情定制\n乱收费扣费",
//         "流量包",
//         "促销活动和宣传",
//         "与互联网公司\n合作的产品",
//         "价格认可度",
//         "套餐设计"
//       ]
//     }
//   ],
//   yAxis: [
//     {
//       type: "value",
//       name: "值"
//       //   max:30,
//       //   min:-30
//     }
//     // {
//     //   type: "value",
//     //   name: "提及率",
//     //   max: 100,
//     //   min: 0
//     // }
//   ],
//   series: [
//     {
//       name: "18Q1-17基准值",
//       type: "bar",
//       barGap: 0,
//       label: {
//         normal: {
//           show: true,
//           textStyle: {
//             color: "#000"
//           }
//         }
//       },
//       markLine: {
//         itemStyle: {
//           normal: {
//             borderWidth: 1,
//             lineStyle: {
//               type: "dash",
//               color: "#333 ",
//               width: 2
//             },
//             label: {
//               formatter: function(str) {
//                 var str = "同、环比下降，\n需引起关注";
//                 return str;
//               },
//               textStyle: {
//                 fontSize: 16,
//                 fontWeight: "bolder"
//               }
//             }
//           }
//         },
//         data: [
//           [
//             {
//               coord: ["与互联网公司\n合作的产品", 0]
//             },
//             {
//               coord: ["与互联网公司\n合作的产品", 10]
//             }
//           ]
//         ]
//       },
//       data: [14.3, -7.3, -1.8, 18.3, 27.2, -6.8, 12.2, 17.4],
//       itemStyle: {
//         normal: {
//           color: "#ffcc99"
//         }
//       }
//     },
//     {
//       name: "18Q1-17Q4",
//       type: "bar",
//       label: {
//         normal: {
//           show: true,
//           textStyle: {
//             color: "#000"
//           }
//         }
//       },
//       markLine: {
//         itemStyle: {
//           normal: {
//             borderWidth: 1,
//             lineStyle: {
//               type: "dash",
//               color: "#333 ",
//               width: 2
//             },
//             label: {
//               formatter: function(str) {
//                 var str =
//                   "提及率：3.3(17Q1)->1.9(18Q1)\n提及率降低，但口碑下降严重";
//                 return str;
//               },
//               textStyle: {
//                 fontSize: 16,
//                 fontWeight: "bolder"
//               }
//             }
//           }
//         },
//         data: [
//           [
//             {
//               coord: ["计费准确", 0]
//             },
//             {
//               coord: ["计费准确", 10]
//             }
//           ]
//         ]
//       },
//       data: [7.3, 1.2, 4.2, 14.8, 10.1, -10.3, 7.0, 9.2],
//       itemStyle: {
//         normal: {
//           color: "#cc6699"
//         }
//       }
//     }
//     // {
//     //   name: "提及率",
//     //   type: "line",
//     //   yAxisIndex: 1,
//     //   data: [58.3, 52.2, 14.9, 11.9, 11.1, 6.4, 1.9],
//     //   label: {
//     //     normal: {
//     //       show: true
//     //     }
//     //   }
//     // }
//   ]
// };
// chart4.setOption(option4);

//服务
var chart5 = echarts.init(document.getElementById("chart5"));
var option5 = {
  title: {
    text: "总体",
    textStyle: {
      color: "#000",
      fontSize: 14
    }
  },
  title: {
    // text: '移网的运营情况',
    textStyle: {
      color: "#000",
      fontSize: 14
    }
  },
  tooltip: {
    trigger: "axis"
  },
  legend: {
    data: ["中国联通", "中国移动", "中国电信"],
    textStyle: {
      color: "#000",
      fontSize: 12
    }
  },
  grid: {
    left: "3%",
    right: "6%",
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
        color: "#000"
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
    // data:['<img src="../img/yidong.png"/>','<img src="../img/dianxin.png"/>','<img src="../img/liantong.png"/>'],
    data: ["yidong", "dianxin", "liantong"],
    axisLabel: {
      show: true,
      textStyle: {
        color: "#000"
      }
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
  series: [
    {
      name: "中国联通",
      type: "line",
      // stack: '总量',
      data: [23.6, 21.2, 26.1, 27.1, 25.1],
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
      data: [54.6, 51, 54.5, 58, 50.7],
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
      data: [30, 28, 26.3, 32.1, 27.5],
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
chart5.setOption(option5);
// var chart6 = echarts.init(document.getElementById("chart6"));
// var option6 = {
//   title: {
//     text: "渠道服务-同环比NPS提升值",
//     textStyle: {
//       color: "#000",
//       fontSize: 14
//     }
//   },
//   tooltip: {
//     trigger: "axis",
//     axisPointer: {
//       type: "shadow"
//     }
//   },
//   legend: {
//     data: ["18Q1-17基准值", "18Q1-17Q4"]
//   },
//   calculable: true,
//   xAxis: [
//     {
//       axisLabel: {
//         interval: 0,
//         // rotate: 20
//       },
//       type: "category",
//       axisTick: { show: false },

//       data: [
//         "服务整体",
//         "营业厅\n现场运营\n服务",
//         "营业厅\n业务办理\n方便快捷",
//         "营业厅\n服务人员\n态度和技能",
//         "营业厅\n整体服务",
//         "电子渠道\n在线客服\n（2I用户）",
//         "电子渠道\n界面设计\n业务告知",
//         "电子渠道\n业务办理\n方便快捷",
//         "电子渠道\n整体服务",
//         "热线业务\n办理\n方便快捷",
//         "热线\n运营服务",
//         "热线\n服务人员\n态度和技能",
//         "热线\n整体服务"
//       ]
//     }
//   ],
//   yAxis: [
//     {
//       type: "value",
//       name: "值"
//       //   max:30,
//       //   min:-30
//     }
//     // {
//     //   type: "value",
//     //   name: "提及率",
//     //   max: 100,
//     //   min: 0
//     // }
//   ],
//   grid: {
//     left: "3%",
//     right: "6%",
//     bottom: "3%",
//     containLabel: true
//   },
//   series: [
//     {
//       name: "18Q1-17基准值",
//       type: "bar",
//       barGap: 0,
//       label: {
//         normal: {
//           show: true,
//           textStyle: {
//             color: "#000"
//           }
//         }
//       },
//       markLine: {
//         itemStyle: {
//           normal: {
//             borderWidth: 1,
//             lineStyle: {
//               type: "dash",
//               color: "#333 ",
//               width: 2
//             },
//             label: {
//               formatter: function(str) {
//                 var str = "提及率:17.5%->15%\nNPS同比: 74.6->75.2";
//                 return str;
//               },
//               textStyle: {
//                 fontSize: 12,
//                 fontWeight: "bolder"
//               }
//             }
//           }
//         },
//         data: [
//           [
//             {
//               coord: ["热线\n服务人员\n态度和技能", 0]
//             },
//             {
//               coord: ["热线\n服务人员\n态度和技能", -10]
//             }
//           ]
//         ]
//       },
//       data: [1.5, 0, 0, 0.9, 1.8, -5.3, 0, 0, -2.5, 0, 0, 0.5, -5.1],
//       itemStyle: {
//         normal: {
//           color: "#ffcc99"
//         }
//       }
//     },
//     {
//       name: "18Q1-17Q4",
//       type: "bar",
//       label: {
//         normal: {
//           show: true,
//           textStyle: {
//             color: "#000"
//           }
//         }
//       },
//       markLine: {
//         itemStyle: {
//           normal: {
//             borderWidth: 1,
//             lineStyle: {
//               type: "dash",
//               color: "#333 ",
//               width: 2
//             },
//             label: {
//               formatter: function(str) {
//                 var str = "提及率:11%->20%\nNPS同比: 7.1->9.8";
//                 return str;
//               },
//               textStyle: {
//                 fontSize: 12,
//                 fontWeight: "bolder"
//               }
//             }
//           }
//         },
//         data: [
//           [
//             {
//               coord: ["热线业务\n办理\n方便快捷", 0]
//             },
//             {
//               coord: ["热线业务\n办理\n方便快捷", -10]
//             }
//           ]
//         ]
//       },
//       data: [
//         -1.9,
//         -7,
//         16.8,
//         -1.9,
//         3,
//         -15.6,
//         22.4,
//         4.3,
//         5.8,
//         8.1,
//         11.6,
//         -0.7,
//         -5.2
//       ],
//       itemStyle: {
//         normal: {
//           color: "#cc6699"
//         }
//       }
//     }
//     // {
//     //   name: "提及率",
//     //   type: "line",
//     //   yAxisIndex: 1,
//     //   data: [31, 15, 14.5, 6.8, 22.5, 19.7, 4.1,0.8,23.3,13.7,9.2,4.9],
//     //   label: {
//     //     normal: {
//     //       show: true
//     //     }
//     //   }
//     // }
//   ]
// };
// chart6.setOption(option6);
// var chart7 = echarts.init(document.getElementById("chart7"));
// var option7 = {
//   title: {
//     text: "非渠道服务-同环比NPS提升值",
//     textStyle: {
//       color: "#000",
//       fontSize: 14
//     }
//   },
//   tooltip: {
//     trigger: "axis",
//     axisPointer: {
//       type: "shadow"
//     }
//   },
//   legend: {
//     data: ["18Q1-17基准值", "18Q1-17Q4"]
//   },
//   calculable: true,
//   xAxis: [
//     {
//       axisLabel: {
//         interval: 0,
//         // rotate: 20
//       },
//       type: "category",
//       axisTick: { show: false },

//       data: [
//         "业务办理\n成功率",
//         "投诉解决",
//         "垃圾短信\n诈骗电话",
//         "支持第三方充值缴费\n非常方便",
//         "帐详单",
//         "充值缴费\n方便快捷",
//         "提醒服务",
//         "服务人员\n态度、技能",
//         "业务办理\n方便快捷"
//       ]
//     }
//   ],
//   yAxis: [
//     {
//       type: "value",
//       name: "值"
//       //   max:30,
//       //   min:-30
//     }
//     // {
//     //   type: "value",
//     //   name: "提及率",
//     //   max: 100,
//     //   min: 0
//     // }
//   ],
//   grid: {
//     left: "3%",
//     right: "6%",
//     bottom: "3%",
//     containLabel: true
//   },
//   series: [
//     {
//       name: "18Q1-17基准值",
//       type: "bar",
//       barGap: 0,
//       label: {
//         normal: {
//           show: true,
//           textStyle: {
//             color: "#000"
//           }
//         }
//       },
//       data: [32.3, 0, -13.1, 4.9, 11, 6.4, -2.2, 3.6, 4.2],
//       itemStyle: {
//         normal: {
//           color: "#ffcc99"
//         }
//       }
//     },
//     {
//       name: "18Q1-17Q4",
//       type: "bar",
//       label: {
//         normal: {
//           show: true,
//           textStyle: {
//             color: "#000"
//           }
//         }
//       },
//       markLine: {
//         itemStyle: {
//           normal: {
//             borderWidth: 1,
//             lineStyle: {
//               type: "dash",
//               color: "#333 ",
//               width: 2
//             },
//             label: {
//               formatter: function(str) {
//                 var str = "提及率：\n17年 :3.5\n18Q1:1.6";
//                 return str;
//               },
//               textStyle: {
//                 fontSize: 16,
//                 fontWeight: "bolder"
//               }
//             }
//           }
//         },
//         data: [
//           [
//             {
//               coord: ["垃圾短信\n诈骗电话", 0]
//             },
//             {
//               coord: ["垃圾短信\n诈骗电话", 10]
//             }
//           ]
//         ]
//       },
//       data: [-5.4, 3.5, -7.9, 1.8, -15.6, 0.4, -9.2, 0.1, 6],
//       itemStyle: {
//         normal: {
//           color: "#cc6699"
//         }
//       }
//     }
//     // {
//     //   name: "提及率",
//     //   type: "line",
//     //   yAxisIndex: 1,
//     //   data: [43.3, 26.2, 18.8, 15, 6.9, 4.7, 1.6,1.5,1.0],
//     //   label: {
//     //     normal: {
//     //       show: true
//     //     }
//     //   }
//     // }
//   ]
// };
// chart7.setOption(option7);
