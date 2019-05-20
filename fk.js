var coursetree = document.querySelectorAll('#coursetree a ');
var courses = new Array();
for (var i = 0; i < coursetree.length; i++) {
    courses[i] = coursetree[i].href;
}
//获取当前播放节
var currentIndex;
var h4 = document.querySelectorAll('#coursetree a h4');
for (var i = 0; i < h4.length; i++) {
    if (h4[i].className.indexOf("currents") === 0) {
        currentIndex = i;
        break;
}
//获取iframe框架
var iframe1 = document.getElementsByTagName("iframe")[0].contentDocument;
var iframe2 = iframe1.getElementsByTagName("iframe")[0].contentDocument;
var interval;
setInterval(function () {
    if (iframe1.getElementsByClassName("ans-attach-ct ans-job-finished").length === 0) {
        //开始播放
        iframe2.getElementsByClassName("vjs-big-play-button")[0].click();
        //取消自动暂停:
      interval = setInterval(function () { var bt = iframe2.getElementsByClassName("vjs-play-control vjs-control vjs-button vjs-paused")[0]; 
        if (bt !== null&&bt!==undefined) { bt.click(); } }, 2000);
    }
    else {
        var next = document.createElement("a");
        next.href = courses[++currentIndex];
        next.click();
        clearInterval(interval);
        //重新获取框架
        setTimeout(function()
        {
            h4[currentIndex-1].classList.remove("currents");
            h4[currentIndex].classList.add("currents");
            iframe1 = document.getElementsByTagName("iframe")[0].contentDocument;
            iframe2 = iframe1.getElementsByTagName("iframe")[0].contentDocument;
        },3000);
    }
}, 5000);