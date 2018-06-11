var str=''
for(var i=0;i<31;i++){
    str+=`<tr>
    <td width="75" align="center">1</td>
    <td width="75" align="center">江苏</td>
    <td width="75" align="center">100%</td>
    <td width="75" align="center">11.11</td>
    <td width="75" align="center">10.69</td>
    <td width="75" align="center">1</td>
  </tr>`
}
$("#tplWrapper_TemplateZ").html(str)
var tr=$("#tplWrapper_TemplateZ").find("tr")
var imgstr1="<img src='static/img/jbb1.png' style='height:23px;width:23px;'>"
var imgstr2="<img src='static/img/jbb2.png' style='height:23px;width:23px;'>"
var imgstr3="<img src='static/img/jbb3.png' style='height:23px;width:23px;'>"
// console.log(tr)
for(var i=0;i<tr.length;i++){
  var td = tr.eq(i).find("td");  
  var num = td.eq(0).text();
  // console.log(num)
  if(num=="1"){
    // console.log(i)
    tr.eq(i).find("td").eq(0).html(imgstr1)
  }
  if(num=="2"){
    // console.log(i)
    tr.eq(i).find("td").eq(0).html(imgstr2)
  }
  if(num=="3"){
    // console.log(i)
    tr.eq(i).find("td").eq(0).html(imgstr3)
  }
}