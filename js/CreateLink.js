function createLink(){
    if(create_link.name.value && create_link.ip.value && create_link.port.value){
        var link = 'https://addserver.bbo51dog.net/?name=' + create_link.name.value + '&ip=' + create_link.ip.value + '&port=' + create_link.port.value;
        document.getElementById("result").value = link;
        return true;
    }else{
        alert('サーバー名、IP、アドレスの全てを入力してください');
        return false;
    }
}