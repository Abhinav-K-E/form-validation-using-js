let name = document.getElementById("name");
let mail = document.getElementById("email");
let mess = document.getElementById("message");

let lab01 = document.getElementById("lab01");
let lab02 = document.getElementById("lab02");
let lab03 = document.getElementById("lab03");

let regexp01 = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
let regexp02 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        
function check(){
    let check01 = (regexp01.test(name.value))? 1 : 0;
    let check02 = (regexp02.test(mail.value))? 1 : 0;

    if(check01 && check02 && (mess.value.length > 10)){
        window.alert("Message sent successfully");

        name.value="";
        lab01.innerHTML = "";
        name.style.borderColor = "#2e02495c";

        mail.value = "";
        lab02.innerHTML = "";
        mail.style.borderColor = "#2e02495c";

        mess.value="";
        lab03.innerHTML = "";
        mess.style.borderColor = "#2e02495c";
    }
    else{
        if(check01==0){
            lab01.innerHTML = "Name is wrong";
            name.style.borderColor = "red";
        }else{
            lab01.innerHTML = "";
            name.style.borderColor = "green";
        }
        
        if(check02==0){
            lab02.innerHTML = "Please enter a valid email.";
            mail.style.borderColor = "red";
        }else{
            lab02.innerHTML = "";
            mail.style.borderColor = "green";
        }
        
        
        if(mess.value.length <= 10){
            lab03.innerHTML = "Your message must contain more than 10 characters";
            mess.style.borderColor = "red";
        }else{
            lab03.innerHTML = "";
            mess.style.borderColor = "green";
        }
    }
            
}
        