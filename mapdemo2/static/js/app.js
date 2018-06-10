//地图容器
var chart = echarts.init(document.getElementById('main'));
//34个省、市、自治区的名字拼音映射数组
var provinces = {
  //23个省
  "台湾": "taiwan",
  "河北": "hebei",
  "山西": "shanxi",
  "辽宁": "liaoning",
  "吉林": "jilin",
  "黑龙江": "heilongjiang",
  "江苏": "jiangsu",
  "浙江": "zhejiang",
  "安徽": "anhui",
  "福建": "fujian",
  "江西": "jiangxi",
  "山东": "shandong",
  "河南": "henan",
  "湖北": "hubei",
  "湖南": "hunan",
  "广东": "guangdong",
  "海南": "hainan",
  "四川": "sichuan",
  "贵州": "guizhou",
  "云南": "yunnan",
  "陕西": "shanxi1",
  "甘肃": "gansu",
  "青海": "qinghai",
  //5个自治区
  "新疆": "xinjiang",
  "广西": "guangxi",
  "内蒙古": "neimenggu",
  "宁夏": "ningxia",
  "西藏": "xizang",
  //4个直辖市
  "北京": "beijing",
  "天津": "tianjin",
  "上海": "shanghai",
  "重庆": "chongqing",
  //2个特别行政区
  "香港": "xianggang",
  "澳门": "aomen"
};

//直辖市和特别行政区-只有二级地图，没有三级地图
var special = ["北京", "天津", "上海", "重庆", "香港", "澳门"];
var mapdata = [];
//分布热点的大小
var ssize = 2;
//绘制全国地图
$.getJSON('static/map/china.json', function (data) {
  d = [];
  for (var i = 0; i < data.features.length; i++) {
    //将地点的名称和cp坐标传入d数组
    d.push({
      name: data.features[i].properties.name,
      value: data.features[i].properties.cp,
    })
  }
  mapdata = d;
  window.onresize = function () {
    chart.resize(); //使第一个图表适应
  }
  //注册地图
  echarts.registerMap('china', data);
  //绘制地图
  renderMap('china', d);
});

//地图点击事件
chart.on('click', function (params) {
  if (params.name in provinces) {
    //全国下钻到省级
    console.log("第一级下钻到第二级");
    $.getJSON('static/map/province/' + provinces[params.name] + '.json', function (data) {
      echarts.registerMap(params.name, data);
      var d = [];
      for (var i = 0; i < data.features.length; i++) {
        d.push({
          name: data.features[i].properties.name,
          value: data.features[i].properties.cp,
        })
      }
      var prow = [];
      for (var i = 0; i < allData.length; i++) {
        var value = [];
        if (allData[i].hallProv == params.name) {
          var v1 = parseFloat(allData[i].hallLng)
          var v2 = parseFloat(allData[i].hallLat)
          var v3 = parseFloat(allData[i].sendnum)
          prow.push({
            name: allData[i].hallName,
            value: value.concat(v1, v2, v3)
          })
        }
      }
      renderMap(params.name, d);
    });
  } else {
    renderMap('china', mapdata);
  }
});

//初始化绘制全国地图配置
var option = {
  backgroundColor: '#091c3d',
  title: {
    // text: '2018年一季度NPS运营总览',
    // subtext: '短信活动信息发送数量分布图',
    //link: 'http://www.baidu.com',
    left: 'right',
    textStyle: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'normal',
      fontFamily: "Microsoft YaHei"
    },
    subtextStyle: {
      color: '#ccc',
      fontSize: 16,
      fontWeight: 'normal',
      fontFamily: "Microsoft YaHei"
    }
  },
  tooltip: {
    trigger: 'item',
    formatter: function (params) {
      return params.name + '</br>整体：9.1 第8名</br>网络：9.1 第8名</br>业务：9.1 第6名</br>服务：9.1 第2名'
    }
  },


};


//渲染地图
function renderMap(map, data) {
  //二级标题
  // option.title.subtext = map;
  //渲染地图
  option.geo = {
    show: true,
    map: map,
    right: 10,
    top: 10,
    height: '50%',
    width: '50%',
    label: {
      normal: {
        show: false
      },
      emphasis: {
        show: false,
      }
    },
    roam: false,
    itemStyle: {
      normal: {
        areaColor: '#07265A',
        borderColor: '#1d6475',
        borderWidth: 1,
        shadowColor: 'rgba(63, 218, 255, 0.1)',
        shadowBlur: 20
      },
      emphasis: {
        areaColor: '#D97634',
      }
    }
  };
  option.series = [{
    name: map,
    type: 'effectScatter',
    map: 'china',
    coordinateSystem: 'geo',
    data: data,
    roam: false,
    left: 'right',
    top: 'top',
    height: '80%',
    selectedMode: 'single',
    symbolSize: 6,
    showEffectOn: 'render',
    rippleEffect: {
      brushType: 'stroke'
    },
    hoverAnimation: true,
    nameMap: {
      'china': '中国'
    },
    tooltip: {
      trigger: 'item',
      formatter: function (params) {
        return params.name + '</br>整体：9.1 第8名</br>网络：9.1 第8名</br>业务：9.1 第6名</br>服务：9.1 第2名'
      }
    },
    label: {
      normal: {
        show: true,
        formatter: '{b}',
        position: 'right',
        textStyle: {
          color: "#ffeaea",
          fontSize: 12
        }
      },
      emphasis: {
        show: true,
        textStyle: {
          color: "#51a1a1",
          //renderMap2中的颜色不一样
          // color: "#7fffff",
          fontSize: 12
        }
      }
    },
    itemStyle: {
      normal: {
        color: '#F4E925',
        shadowBlur: 8,
        shadowColor: '#05C3F9'
      }
    },
    zlevel: 1
  }];
  //渲染地图
  chart.setOption(option);
}