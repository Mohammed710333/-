let contdown =new Date('oct 6 ,2024  15:37:255').getTime();
let count=setInterval(  function() {
let datenow=new Date().getTime();
let differentdate=contdown-datenow
var day=Math.floor(differentdate/(1000*60*60*24));
var hour=Math.floor(differentdate% (1000*60*60*24) /(1000*60*60))
var minute=Math.floor(differentdate% (1000*60*60) /(1000*60))
var second=Math.floor(differentdate% (1000*60) /(1000))
document.getElementById("second").innerHTML="الثانيه"+second
document.getElementById("minute").innerHTML="دقيقه"+minute
document.getElementById("hour").innerHTML="الساعه"+hour
document.getElementById("day").innerHTML="اليوم "+day ;

} ,1000)
document.getElementById('day').style.color='darkblue';
document.getElementById('hour').style.color='darkblue';
document.getElementById('minute').style.color='darkblue';
document.getElementById('second').style.color='darkblue';
