function createLink(){
    if(create_link.name.value && create_link.ip.value && create_link.port.value){
        document.getElementById("result").value = "SYNCER"
        return true;
    }else{
        alert('サーバー名、IP、アドレスの全てを入力してください');
        return false;
    }
}