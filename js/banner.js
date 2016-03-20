(function () {
    var autoTimer = null, step = 0, duration = 3500;
    var banner = document.getElementById("banner"), imgList = banner.getElementsByTagName("img");
    var tip = document.getElementById("tip"), tipList = tip.getElementsByTagName("li");
    var btnLeft = document.getElementById("leftBtn"), btnRight = document.getElementById("rightBtn");

    function selectTip() {
        var temp = step;
        temp >= tipList.length ? temp = 0 : null;
        for (var i = 0; i < tipList.length; i++) {
            tipList[i].className = step === i ? "current" : null;
        }
    }


    tipMove();
    function tipMove() {
        for (var i = 0; i < tipList.length; i++) {
            var cur = tipList[i];
            cur.index = i;
            cur.onmouseover = function () {
                window.clearInterval(autoTimer);
                step = this.index;
                animate(banner, {left: -step * 730}, 500);
                selectTip();
                autoTimer = window.setInterval(autoMove, duration)
            }
        }
    }


    btnRight.onclick = function () {
        window.clearInterval(autoTimer);
        autoMove();
        autoTimer=window.setInterval(autoMove,duration);
    };


    btnLeft.onclick=function(){
        window.clearInterval(autoTimer);
        step--;
        if (step < 0) {
            step = 5;
            banner.style.left = -step*730 + "px";
        }
        animate(banner, {left: -step * 730}, 500);
        selectTip();
        autoTimer = window.setInterval(autoMove, duration);
    }


    function autoMove() {
        step++;
        if (step > 5) {
            step = 1;
            banner.style.left = 0;
        }
        animate(banner, {left: -step * 730}, 500);
        selectTip();
    }

    window.setInterval(autoMove, duration)


})();