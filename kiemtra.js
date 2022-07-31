function kiemtra(e){
    event.preventDefault();
     var usename = document.getElementById("usename").value;
     var password = document.getElementById("password").value;

     var use = {
        usename : usename,
        password : password,
     };

     var josn=JSON.stringify(use);
     localStorage.setItem(usename,josn);
     alert("Đăng ký thành công")
     window.location="login.html"

}

function login(e){
    event.preventDefault();
    var usename = document.getElementById("usename").value;
    var password = document.getElementById("password").value;
    var use = localStorage.getItem(usename);
    var dulieu = JSON.parse(use);

    if(dulieu.usename=="" && dulieu.password==""){
        alert("Vui lòng nhập UseName and Password")
        document.getElementById("usename").style.background='yellow'
        document.getElementById("password").style.background='yellow'

    }

    else if(usename == dulieu.usename && password == dulieu.password)
    {
     alert("Đăng nhập thành công")
    window.open("/index.html")
    }

    else{
        alert("Sai useName of Password");
        document.getElementById("usename").style.background='yellow'
        document.getElementById("password").style.background='yellow'
    }
}