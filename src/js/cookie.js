//  面向对象的方法封装cookie
var $cookie={
    create: function(key,value,expires){
        var cookieText = encodeURIComponent(key)+'='+encodeURIComponent(value)+
        ';path=/';
        if( !isNaN(expires)){
            var date = new Date();
            date.setDate(date.getDate()+expires)
             cookieText +='expirse='+date;
        }
        document.cookie=cookieText;
    },
    get:function(key){
        var arr =document.cookie.split('; ');
        for(var i=0;i<arr.length;i ++){
            var list =arr[i].split('=');
            if(list[0]==encodeURIComponent(key)){
                return decodeURIComponent(list[1])
            }
        }
    },
    remove:function(key){
            document.cookie =encodeURIComponent(key)+'=;expirse='+new Date(0)+';path=/'
    }

}