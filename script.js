function logar(){
    const login= document.getElementById('email').value;
    const senha= document.getElementById('senha').value;

    if(login== 'giselly15avelino@gmail.com' && senha=='110202'){
        location.href= 'home.html';
    }else{
        alert('usuário ou senha incorretos')
    }

}