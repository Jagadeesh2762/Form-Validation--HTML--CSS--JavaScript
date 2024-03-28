function valid(){
    fn = document.getElementById("firstname");
    ln = document.getElementById("lastname");
    p =  document.getElementById("password");
    cp = document.getElementById("cpass");
    mail=document.getElementById("mail");
    add =document.getElementById("address");
    ph = document.getElementById("ph");
    err1 = document.getElementById("error1");
    err2 = document.getElementById("error2");
    err3 = document.getElementById("error3");
    err4 = document.getElementById("error4");
    err5 = document.getElementById("error5");
    err6 = document.getElementById("error6");
    err7 = document.getElementById("error7");
    nameexp=/^[a-z A-Z]{3,20}$/;
    passexp=/^[a-zA-Z0-9]{8,20}$/;
    mailexp=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    phexp=/^[6-9]{1}[0-9]{9}$/;
    if(fn.value==""){
        err1.innerText = "Please provide First Name";
        fn.focus();
        return false;
    }else if(nameexp.test(fn.value)==false){
        err1.innerText="Invalid name";
        return false;
    }else{
        err1.innerText = "";
        ln.focus();
    }
    if(ln.value==""){
        err2.innerText = "Please provide Last Name";
        return false;
        ln.focus();
    }else if(nameexp.test(ln.value)==false){
        err2.innerText = "Invalid name";
        return false;
    }else{
        err2.innerText = "";
        p.focus();
    }
    if(p.value==""){
        err3.innerText = "Please provide password";
        return false;
        p.focus();
    }else if(passexp.test(p.value)==false){
        err3.innerText = "Password must be 8 character";
        return false;
        p.focus();

    }else{
        err3.innerText="";
        cp.focus();
    }
    if(cp.value!=p.value){
        err4.innerText = "Password does not match";
        return false;
        cp.focus();
    }else{
        err4.innerText="";
        mail.focus();
    }
    if(mail.value==""){
        err5.innerText = "Please provide Email ID";
        return false;
        mail.focus();
    }else if(mailexp.test(mail.value)==false){
        err5.innerText="Invalid Email Format";
        return false;
        mail.focus();
    }else{
        err5.innerText="";
        add.focus();
    }
    if(add.value==""){
        err6.innerText = "Please provide address";
        return false;
        add.focus();
    }else{
        er6.innerText="";
        ph.focus();
    }

    if(ph.value==""){
        err7.innerText = "Please provide phone number";
        return false;
        ph.focus();
    }else if(phexp.test(ph.value)==false){
        err7.innerText = "Number should be start with 6/7/8/9 and should be 10 digit";
        return false;
        ph.focus();
    }else{
        err7.innerText="";
    }

}
function max120(){
    m=document.getElementById("address");
    cnt=120;
    cnt=cnt-m.value.length;
    rc=document.getElementById("error6");
    rc.innerText=cnt;
    m.setAttributes("maxlength",120);
}