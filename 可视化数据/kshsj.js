var t=null;
t=setTimeout(time,1000);
function time (){
    clearTimeout(t);
    dt=new Date();
    var y = dt.getFullYear();
    var mt =dt.getUTCMonth()+1;
    var day =dt.getDate();
    var wks ="星期" + "日一二三四五六".charAt(dt.getDay());
    var h=dt.getHours();
    var m=dt.getMinutes();
    var s=dt.getSeconds();
    document.querySelector(".showtime").innerHTML=y+"年"+mt+"月"+day+" "+h+"时"+m+"分"+s+"秒"+" "+wks;
    t=setTimeout(time,1000);
}




