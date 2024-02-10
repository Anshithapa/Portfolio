$(document).ready(function () {
   $("#contact-form").validate({
        rules: {
            fname: {
                required: true,
                minlength: 4
            },
            emailId:{
                required: true,
                email: true
            },
            phn:{
                required: true,
                number :true,
                minlength:10
            },
            message:{
                required:true
            }
        },
       messages:{
           fname:{
               required:"Enter Full name",
               minlength:"Name should contain atleast 4 letters"
           },
           emailId:{
                required: "Enter Email ID",
                email: "Enter a valid Email"
            },
           phn:{
                required: "Enter Phone number",
                number :"Enter a valid Phone number",
                minlength:"Enter a valid Phone number"
            },
           message:{
                required:"Enter your message"
            }
       }
    })
})

