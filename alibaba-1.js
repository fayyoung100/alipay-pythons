/**
 * 版本1: 砸金蛋活动
 */
function goRenwu(){
  var renwu=document.querySelector('#recyclerView > div > div:nth-child(2) > div > div > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div > span');
  if (renwu == null) {
    renwu = document.querySelector('#recyclerView > div > div:nth-child(2) > div > div > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > span');
  }
  if (renwu!=null) {
    renwu.click();
    setTimeout("goHongbao();",200);
  }
}

function goHongbao(){
  var renwu = document.querySelector('#recyclerView > div > div:nth-child(2) > div > div > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > span');
  if (renwu == null) {
    renwu = document.querySelector('#recyclerView > div > div:nth-child(2) > div > div > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div > span');
  }
  if (renwu != null) {
    renwu.click();
    setTimeout("qiangHongbao8();",200);
  }
}

function qiangHongbao8(){
  //抢8元
  var qiang1=document.querySelector('#recyclerView > div > div:nth-child(2) > div > div > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div.rax-scrollview > div > div:nth-child(3) > div:nth-child(3) > div > img');
  if(qiang1!=null){
    qiang1.click();
  }else{
    var qiang2=document.querySelector('#recyclerView > div > div:nth-child(2) > div > div > div:nth-child(3) > div:nth-child(2) > div > div.rax-scrollview > div > div:nth-child(3) > div:nth-child(3) > div > img');
    if(qiang2!=null){
      qiang2.click();
    } else {
		var qiang3 = document.querySelector('#recyclerView > div > div:nth-child(2) > div > div > div:nth-child(3) > div:nth-child(3) > div > div.rax-scrollview > div > div:nth-child(3) > div:nth-child(3) > div > img');
		if (qiang3!=null) {
			qiang3.click();
		}
	}
  }
  setTimeout("qiangHongbao3();",200);
};

function qiangHongbao3(){
  //抢3元
  var qiang3=document.querySelector('#recyclerView > div > div:nth-child(2) > div > div > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div.rax-scrollview > div > div:nth-child(2) > div:nth-child(3) > div > img');
  if(qiang3!=null){
    qiang3.click();
  }else{
    var qiang4=document.querySelector('#recyclerView > div > div:nth-child(2) > div > div > div:nth-child(3) > div:nth-child(2) > div > div.rax-scrollview > div > div:nth-child(2) > div:nth-child(3) > div > img');
    if(qiang4!=null){
      qiang4.click();
    } else {
		var qiang5 = document.querySelector('#recyclerView > div > div:nth-child(2) > div > div > div:nth-child(3) > div:nth-child(3) > div > div.rax-scrollview > div > div:nth-child(2) > div:nth-child(3) > div > img');
		if (qiang5!=null) {
			qiang5.click();
		}
	}
  }
  setTimeout("goRound();",200);
}

function goRound(){
  var myDate = new Date();
  var hour=myDate.getHours();
  var minute=myDate.getMinutes();
  var second=myDate.getSeconds();

  if((hour==9||hour==13)&&minute>=58){
    if(minute==59&&second>40){
      //提前20秒启动
      setTimeout("goRenwu();",500);
    }else{
      //提前2分钟准备
      setTimeout("goRenwu();",5000);
    }
  }else if((hour==10||hour==14)&&minute==0&&second<10){
    //延后10秒
    setTimeout("goRenwu();",500);
  }else{
    setTimeout("goRenwu();",60000);
  }
}

setTimeout("goRenwu();",2000);