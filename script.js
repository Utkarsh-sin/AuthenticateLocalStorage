
function onChange(){
    p = document.getElementById("password").value;
    c = document.getElementById("confirm").value;
  if(p.value != c.value) {
    alert("Passwords Don't Match");
    document.getElementById("submit").disabled = true;
  } else {
    document.getElementById("submit").disabled = false;
  }
}
function saveData(){
    let password = document.getElementById("password").value;
    let confirm_password = document.getElementById("confirm").value;
    let fullname=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    if(fullname=="" || email=="" || password==""|| confirm_password==""){
        document.getElementById("message").innerHTML="Error: All the feilds are mandatory";
        document.getElementById("message").className = "error";
    }
    else{ 
        document.getElementById("message").innerHTML = "Successfully Signed Up!";
        document.getElementById("message").className = "success";
        location.href="profile.html";
    
        let obj = {'fullname': fullname, 'email': email, 'password': password };
        localStorage.setItem("obj", JSON.stringify(obj));
        console.log(obj);
    
    
        // let fname=localStorage.getItem('name')?localStorage.getItem('name'):''
        // console.log(fname);
        // if(fname!='')
        // {
        //     alert('Please visit profile');
        //     window.location.href="profile.html";
        // }
        // function saveData()
        // {
        //     let user_records=new Array();
        //     user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
        //     if(user_records.some((v)=>{return v.email==email && v.password==password && v.fullname==fullname}))
        //     {
        //         alert("Login Pass");
        //         let current_user=user_records.filter((v)=>{return v.email==email && v.password==password && v.fullname==fullname})[0]
        //         localStorage.setItem('name',current_user.fullname);
        //         localStorage.setItem('email',current_user.email);
        //         localStorage.setItem('password',current_user.password);
        //         window.location.href="profile.html"
        //     }
        //     else
        //     {
        //         alert('Login Fail');
        //     }
    
        // }
    
    }
    
}
