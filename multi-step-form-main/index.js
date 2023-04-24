const nextBtn = document.querySelectorAll(".next");
nextBtn.forEach(btn =>{
    btn.addEventListener("click", (e)=>{
        const target = e.target
        const parent = target.parentElement
        const parentContainer = parent.parentElement
        const name = document.getElementById("Name")
        const email = document.getElementById("email")
        const phone = document.getElementById("phone")
        if(parentContainer.id == "first_body"){
            if(name.value==""  && email.value=="" && phone.value==""){
                alert("user must fill the form first")
            }else if(!name.checkValidity() || !email.checkValidity() ||
                 phone.value.length > 11){
             alert("user input is invlaid please check the form is filled properly")
            }
            else{
            parentContainer.nextElementSibling.style.display = "block"
            parentContainer.style.display = "none"
        }
        }
        
    })
});
