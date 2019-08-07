/**
 * 版本2 - 元宝权益活动（需要到元宝权益界面设置脚本）
 */
function goRenwu() {
  var renwu = document.querySelector(
    "#tabItemundefined_0 > div:nth-child(1) > span"
  );
  if (renwu != null) {
    renwu.click();
    setTimeout("goHongbao();", 200);
  }
}

function goHongbao() {
  var renwu = document.querySelector(
    "#tabItemundefined_1 > div:nth-child(1) > span"
  );
  if (renwu != null) {
    renwu.click();
  }
  console.log('enableGetHB3:', enableGetHB3())
  if (enableGetHB3()) {
    setTimeout("qiangHongbao3();", 200);
  } else {
    setTimeout("qiangHongbao8();", 200);
  }
}

function qiangHongbao8() {
  //抢8元
  var qiang1 = document.querySelector(
    "body > div > div > div:nth-child(3) > div > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div > span"
  );
  if (qiang1 != null) {
    qiang1.click();
  }
  setTimeout("goRound();", 200);
}

function qiangHongbao3() {
  //抢3元
  var qiang3 = document.querySelector(
    "body > div > div > div:nth-child(3) > div > div > div:nth-child(2) > div:nth-child(1) > div > div:nth-child(4) > div > span"
  );
  if (qiang3 != null) {
    qiang3.click();
  }
  setTimeout("goRound();", 200);
}

function enableGetHB3() {
  var myDate = new Date();
  var hour = myDate.getHours();
  var minute = myDate.getMinutes();
  var second = myDate.getSeconds();
  if (
    (hour == 10 || hour == 14) &&
    minute == 0 &&
    (second >= 10 && second <= 59)
  ) {
    return true;
  }
  return false;
}

function goRound() {
  setTimeout("goRenwu();", 300);
  // var myDate = new Date();
  // var hour=myDate.getHours();
  // var minute=myDate.getMinutes();
  // var second=myDate.getSeconds();

  // if((hour==9||hour==13)&&minute>=58){
  //   if(minute==59&&second>40){
  //     //提前20秒启动
  //     setTimeout("goRenwu();",500);
  //   }else{
  //     //提前2分钟准备
  //     setTimeout("goRenwu();",5000);
  //   }
  // }else if((hour==10||hour==14)&&minute==0&&second<10){
  //   //延后10秒
  //   setTimeout("goRenwu();",500);
  // }else{
  //   setTimeout("goRenwu();",600);
  // }
}

goRound();