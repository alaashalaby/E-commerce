        /* ==== validation form ==== */
        let form = document.getElementById("myform");
        let email = document.getElementById("useremail");
        let password = document.getElementById("userpass");
        let emailError = document.getElementById("email-error");
        let passError = document.getElementById("pass-error");
        form.addEventListener("submit" , (e)=>{
            e.preventDefault();
            let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if(email.value.trim() === ""){
                email.parentElement.className = 'input-box error';
                emailError.innerHTML="Email Is Required";
            }else if(regex.test(email.value.trim())){
                email.parentElement.className = "input-box success";
            }else{
                email.parentElement.className = "input-box error";
                emailError.innerHTML="Email Is not Valid";
            }
            if(password.value.trim() === ""){
                password.parentElement.className = 'input-box error';
                passError.innerHTML="Password Is Required";
            }else if(password.value.trim().length < 5){
                password.parentElement.className = 'input-box error';
                passError.innerHTML="Password must be at least 5 charcaters";
            }else if(password.value.trim().length > 15){
                password.parentElement.className = 'input-box error';
                passError.innerHTML="Password must be less than 15 charcaters";
            }else{
                password.parentElement.className = "input-box success";
            }
        })