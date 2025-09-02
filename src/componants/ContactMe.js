import { useState } from "react";
import emailjs from "emailjs-com";

function ContactMe(){
    const [name , setname] = useState("");
    const [err_name , setErrname] = useState(true);
    const [err_email , setErremail] = useState(true);
    const [err_label , setErrlabel] = useState(true);
    const [email , setemail] = useState("");
    const [label , setlabel] = useState("");

    const handsubmit = (e)=>{
         e.preventDefault();
        const validate = ()=>{
            let validateOk = true;
        

    if(!name || name.length <4){
        setErrname(false);
        validateOk = false;
    }else{ 
        setErrname(true);
    }
     if(!email || email.length <4){
        setErremail(false);
         validateOk = false;
    }else{
        setErremail(true);
    }
   if(!label || label.length <4){
        setErrlabel(false);
         validateOk = false;
    }else{
        setErrlabel(true);
    }
    return validateOk;
};
if(validate()){
    emailjs
    .send(
          "service_o6wz7h2",
          "template_utpn2yw",
          {
            name: name,
            Subject: email,
            message: label,
          },
          "HdNX05seOlnXNDueR"
        )
        .then(
          (result) => {
            alert("تم إرسال الإيميل بنجاح!");
            // إعادة تعيين الحقول بعد الإرسال الناجح
            setname("");
            setemail("");
            setlabel("");
          },
          (error) => {
            alert("حدث خطأ أثناء إرسال الإيميل. حاول مرة أخرى.");
            console.log(error.text);
          }
        );
    }
    }
    return(
    <form id="form_contact" onSubmit={handsubmit}>
    <div id="contact_me" class="contact_me">
        <h1>Before you go, let’s connect!</h1>
        <div class="contact_me_card">
            <h3>Send me a message...</h3>
            <div class="contact_me_input"> 
                <div class="">
                    <p>Your Name</p>
                    <input type="text" name="" id="name" value={name} onChange={(e)=> setname(e.target.value)} />
                    <p className={err_name ?'no_error':'error'}>Enter Your Name</p>
                </div>
                <div>
                    <p>Email Address</p>
                    <input type="email" name="" id="email" value={email} onChange={(e)=> setemail(e.target.value)} />
                    <p className={err_email ?'no_error':'error'}>Enter Your Email</p>

                </div>
            </div>
            <div class="contact_me_textarea">
                <p>Your Message</p>
                <textarea name="" id="" value={label} onChange={(e)=> setlabel(e.target.value)}></textarea>
                <p className={err_label ?'no_error':'error'}>Enter Your Message</p>

            </div>
            <div class="contact_me_btn">
                <button type="submit" id="btn_send_message">Send Message</button>
            </div>
        </div>
    </div>
    </form>
    )
}
export default ContactMe;



 
