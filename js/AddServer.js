function addServer() {
    var get = {};
    if (1 < location.search.length) {
        var query = window.location.search.substring(1);
        var param = query.split('&');
        for (var i = 0; i < param.length; i++) {
            var element = param[i].split('=');
            var name = decodeURIComponent(element[0]);
            var value = decodeURIComponent(element[1]);
            get[name] = value;
        }
    }
    if (get['name'] && get['ip'] && get['port']) {
        document.getElementById("transition_wrap").innerHTML =
            "<p>Minecraftを開いています<br>画面が切り替わらない場合はMinecraftがインストールされているかなどをご確認ください</p>" +
            "<p>Minecraftへ遷移後にサーバーが追加されない場合があります。(原因調査中)" +
            "<a href='/'>TOPへ戻る</a>"
        location.href = 'minecraft://?addExternalServer=' + get['name'] + '|' + get['ip'] + ':' + get['port'];
    }
}
