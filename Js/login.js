$(document).ready(
    ()=>{
        $('input[type="button"]').click(
            ()=>{
                var username=$('input[type="text"]').val();
                var password=$('input[type="password"]').val();
                if(username=='' && password=='' ){
                    alert("username or password is not entered")
                }
                else{
                    $.ajax({
                        url:"https://mocki.io/v1/3682519b-f37c-4d27-ae43-e3ffac2ccf02",
                        type:'GET',
                        daat:{
                            "username":username,
                            "password":password,
                        },

                        success:(x)=>{
                            alert(username+"Welcome.......!!!!  Logged in Successful........");
                            console.log(x);
                            window.location="registration.html"
                        }

                    })
                }
            }
        )
    }
)