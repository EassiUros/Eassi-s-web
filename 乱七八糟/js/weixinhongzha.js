var appElement = document.querySelector('[ng-controller=chatSenderController]');
var $scope = angular.element(appElement).scope();
var t = setInterval(function(){
    var nowLocalTime = new Date();
    var nowTime = nowLocalTime.toLocaleTimeString();
    var s = nowLocalTime.getSeconds();
    var h = nowLocalTime.getHours();
    var m = nowLocalTime.getMinutes()
     var sh = 17 - h 

     if(sh >= 0){
        sh = sh+"小时"
     }else{
        sh = ""
     }
     var sm = 60 - m;
     if(sm == "0"){
        sm = ""
     }else{
        sm = sm +"分钟"
     }
     var ss = 60 - s 

     if(ss == "0"){
        ss = ""
     } else {
        ss = ss + "秒"
     }
    if(s == "0"){//此为一分钟一次
        console.log()
        $scope.editAreaCtn = "现在是"+nowTime+"距离五一放假还剩" +sh + sm + ss ;
        $scope.sendTextMessage();
    }
},1000)
