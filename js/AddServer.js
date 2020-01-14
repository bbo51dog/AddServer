function addServer(){
    var get = {};
    if(1 < location.search.length){
        var query = window.location.search.substring(1);
        var param = query.split('&');
        for(var i = 0; i < param.length; i++ ){
            var element = param[i].split('=');
            var name = decodeURIComponent(element[ 0 ]);
            var value = decodeURIComponent(element[ 1 ]);
            get[name] = value;
        }
    }
    if(get['name'] && get['ip'] && get['port']){
        location.href = 'minecraft://?addExternalServer=' + get['name'] + '|' + get['ip'] + ':' + get['port'];
    }
}