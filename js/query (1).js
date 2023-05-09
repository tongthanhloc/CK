function KTTK(){
    let a = document.getElementById("txtTK").value;
    let pattern = /^[A-Z][a-z0-9]{3,16}$/; 
    if(pattern.test(a)){
        document.getElementById("tbTK").value= "";
        return true;
    }
    else{
        document.getElementById("tbTK").value= "Nhập sai! bắt đầu bằng kí tự in hoa và không có khoảng trắng!!";
        return false;
    }
}

function KTMatKhau(){
    let a = document.getElementById("txtpwd").value;
    let pattern = /^.{6,}$/; 
    if(pattern.test(a)){
        document.getElementById("tbpwd").value= "";
        return true;
    }
    else{
        document.getElementById("tbpwd").value= "Mật khẩu ít nhất 6 ký tự bất kỳ và không có khoảng trắng !!";
        return false;
    }
}

function KTHT(){
    let a = document.getElementById("txtHT").value;
    let pattern = /^([A-Z][a-z]*)(\s[A-Z][a-z]*)*$/; 
    if(pattern.test(a)){
        document.getElementById("tbHT").value= "";
        return true;
    }
    else{
        document.getElementById("tbHT").value= "Nhập sai !!!";
        return false;
    }
}

function KTEmail(){
    let a = document.getElementById("txtE").value;
    let pattern = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/; 
    if(pattern.test(a)){
        document.getElementById("tbE").value= "";
        return true;
    }
    else{
        document.getElementById("tbE").value= "Cú pháp: abcxz@gmai.com";
        return false;
    }
}

function KTSDT(){
    let a = document.getElementById("txtS").value;
    let pattern =  /^(0|\+84)(\s|\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/; 
    if(pattern.test(a)){
        document.getElementById("tbS").value= "";
        return true;
    }
    else{
        document.getElementById("tbS").value= "Sai cú pháp";
        return false;
    }
}
let stt = 1;
function KiemTraTT(){

    if (KTTK() && KTMatKhau() && KTHT() && KTEmail() && KTSDT()) {
       

        let TK = document.getElementById("txtTK").value;
        let matKhau= document.getElementById("txtpwd").value;
        let HT = document.getElementById("txtHT").value;
        let Email = document.getElementById("txtE").value;
        let SDT =document.getElementById('txtS').value;

        let row_moi = "<tr><td>" + stt + "</td><td>" + TK + "</td><td>" + matKhau + "</td><td>" + HT + "</td><td>" + Email + "</td><td>" + SDT + "</td></tr>";
        window.alert("Đăng ký thành công!");
        document.getElementById("tbl").innerHTML += row_moi;
        stt++;
    }
    else{
        document.getElementById("tbDat").value = "Vui lòng nhập đủ thông tin!";
    }
}