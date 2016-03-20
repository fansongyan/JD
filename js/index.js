~function () {
    var sideNav = document.getElementById("sideNav");
    var liList = sideNav.getElementsByTagName("li");
    var classDiv = sideNav.getElementsByTagName("div");
    for (var i = 0; i < liList.length; i++) {
        var curLi = liList[i];
        curLi.index = i;
        curLi.onmouseenter = function () {
            classDiv[this.index].style.display = "block";
            classDiv[this.index].style["z-index"] = 10;
        };
        curLi.onmouseleave = function () {
            classDiv[this.index].style.display = "none";
        };
    }
}();

function bindData() {
    var str = "";
    var likePic = document.getElementById("likePic");
    var frg = document.createDocumentFragment;
    for (var i = 0; i < likeDate.length; i++) {
        var curLi = likeDate[i];
        str += "<li>";
        str += "<a href='' target='_blank' title='" + curLi['title'] + "'>";
        str += "<img src='" + curLi['imgLike'] + "' alt='" + curLi['title'] + "'/>";
        str += "<div class='botTxt'>";
        str += "<p>" + curLi["title"] + "</p>";
        str += "<h3 class='texRed marLef15'>" + curLi["prace"] + "</h3>";
        str += "</div>";
        str += "</a>";
        str += "</li>";
    }
    likePic.innerHTML = str;

    str = "";
    var picList = document.getElementById("picList");
    for (i = 0; i < recomData.length; i++) {
        var curRec = recomData[i];
        //<li><img src="images/pic1.jpg" alt="" width="250" height="164"/></li>
        str += "<li>";
        str += "<img src='" + curRec['recomImg'] + "' />";
        str += "</li>";
    }
    picList.innerHTML = str;
    //frg.appendChild(picList);


}
bindData();

~function () {
    var myJdLi = document.getElementById("myJdLi");
    myJdLi.onmouseover=function(){
       document.getElementById("myJd").style.display="block";
    }
    myJdLi.onmouseout=function(){
        document.getElementById("myJd").style.display="none";
    }

    var mobileJdList = document.getElementById("mobileJdList");
    mobileJdList.onmouseover=function(){
        document.getElementById("mobileJd").style.display="block";
    }
    mobileJdList.onmouseout=function(){
        document.getElementById("mobileJd").style.display="none";
    }

    var jdwdList = document.getElementById("jdwdList");
    jdwdList.onmouseover=function(){
        document.getElementById("jdwd").style.display="block";
    }
    jdwdList.onmouseout=function(){
        document.getElementById("jdwd").style.display="none";
    }

    var jdshList = document.getElementById("jdshList");
    jdshList.onmouseover=function(){
        document.getElementById("jdsh").style.display="block";
    }
    jdshList.onmouseout=function(){
        document.getElementById("jdsh").style.display="none";
    }


    var jdlistCont = document.getElementById("jdlistCont");
    jdlistCont.onmouseover=function(){
        document.getElementById("jdlist").style.display="block";
    }
    jdlistCont.onmouseout=function(){
        document.getElementById("jdlist").style.display="none";
    }
}();

