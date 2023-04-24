let stp1 = document.getElementById("stp-1");
let stp2 = document.getElementById("stp-2");
let stp3 = document.getElementById("stp-3");
let stp4 = document.getElementById("stp-4");

//if("speechSynthesis" in window){
  //  let msg = new SpeechSynthesisUtterance();
  //  msg.text = "welcome Adebayo";
   // window.speechSynthesis.speak(msg);
//}
//else{
  //  alert("your browser doesn't support this");
//}
// function to set plan
    

    document.querySelector(".toggleBtn").addEventListener("click",()=>{
    let month = document.querySelector(".monthly");
    let year = document.querySelector(".yearly");
    let btn = document.querySelector(".toggle");
    const planAmount = document.querySelectorAll(".planAm");
    const addsAmount = document.querySelectorAll(".amount");
    const dur = document.querySelector(".dur");
     function selectDuration(amt,digit,time){
         amt.forEach(items => {
             let num = items.innerHTML;
             let matches = num.match(/\d+/);
             if(matches){
                 items.innerHTML = "$" + matches * digit + time;
             }
         })
     }
        btn.classList.toggle("myMove");
        if(btn.className.includes("myMove")){
            year.style.color="hsl(213, 96%, 18%)";
            month.style.color = "inherit";
            selectDuration(planAmount,10,"/yr");
            selectDuration(addsAmount,10,"/yr");
            dur.innerHTML = "(per year)";
              // when duration is changed after we've selected our options, previous option are being cleared
            document.getElementById("plans").innerHTML =""
            document.querySelector(".planPrice").innerHTML =""
            let pkgParent = document.querySelector(".package-parent").innerHTML = ""
            document.querySelectorAll(".check_box").forEach(check=>{
                check.checked = false;
            })
        }
        else{
            month.style.color ="hsl(213, 96%, 18%)";
            year.style.color = "inherit";
            selectDuration(planAmount,0.10,"/mo");
            selectDuration(addsAmount,0.10,"/mo");
            dur.innerHTML = "(per month)";
            // when duration is changed after we've selected our options, previous option are being cleared
            document.getElementById("plans").innerHTML =""
            document.querySelector(".planPrice").innerHTML =""
            let pkgParent = document.querySelector(".package-parent").innerHTML = ""
            document.querySelectorAll(".check_box").forEach(check=>{
                check.checked = false;
            })
        }     
    })
    
    
    //to select plan package
    let container = document.querySelectorAll(".plansContainer");
    container.forEach(item=>{
        item.addEventListener("click", function updatePrice(e){
            let target = e.target;
            target.focus();
            const price1 = document.getElementById("dur1");
            const price2 = document.getElementById("dur2");
            const price3 = document.getElementById("dur3");
            const planArcade = document.querySelector(".arcade");
            const planAdvance = document.querySelector(".advance");
            const planPro = document.querySelector(".pro");
              
            if(target.contains(price1) && target.contains(planArcade)){
                document.querySelector(".planPrice").innerHTML = price1.innerHTML;
                if(price1.innerHTML.includes("mo")){
                    document.getElementById("plans").innerHTML =
                    planArcade.innerHTML + "(Monthly)";
                }
                else{
                    document.getElementById("plans").innerHTML =
                    planArcade.innerHTML + "(Yearly)";
                }
            }
            else if(target.contains(price2) && target.contains(planAdvance)){
            document.querySelector(".planPrice").innerHTML = price2.innerHTML;
                if(price2.innerHTML.includes("mo")){
                    document.getElementById("plans").innerHTML =
                    planAdvance.innerHTML + "(Monthly)";
                }
                else{
                    document.getElementById("plans").innerHTML =
                    planAdvance.innerHTML + "(Yearly)";
                }
            }
            else if(target.contains(price3) && target.contains(planPro)){
                document.querySelector(".planPrice").innerHTML = price3.innerHTML;
                if(price3.innerHTML.includes("mo")){
                    document.getElementById("plans").innerHTML =
                    planPro.innerHTML + "(Monthly)";
                }
                else{
                    document.getElementById("plans").innerHTML =
                    planPro.innerHTML + "(Yearly)";
                }
            }
            
        })
    })

// lets try this to select service
 const serviceParent = document.querySelectorAll(".parent")
 function setService(item){
const ele1 = item.parentElement.nextElementSibling;
                        let pkgTxt = ele1.children[0].innerHTML;
                    const ele2 = ele1.nextElementSibling;
                     let pkgAmt = ele2.children[0].innerHTML; 
                     const pkgParent = document.createElement("div")  
                     pkgParent.className = "pkgParent"   
                      pkgParent.innerHTML = `<div class="pkgOpt">${pkgTxt}</div>
                          <div class="pkgPrice">${pkgAmt}</div>`;  
                        if(item.checked == true){
                    
              document.querySelector(".package-parent").appendChild(pkgParent)
                        }
                        else{
                        
document.querySelector(".package-parent").removeChild(document.querySelector(".pkgParent"))                        }
          };
   // checking check box by clicking its parent Element       
  serviceParent.forEach(pBox=>{
      pBox.addEventListener("click",(e)=>{
          let target = e.target
          const check1 = document.getElementById("check1")
          const check2 = document.getElementById("check2")
          const check3 = document.getElementById("check3")
          
          
          if(target.className.includes("service") ){
              if(check1.checked == false){
                  check1.checked = true
                  setService(check1);
              }
              else{
                  check1.checked = false
                  setService(check1)
              }
          }else if(target.className.includes("storage")){
              if(check2.checked == false){
                  check2.checked = true
                  setService(check2);
              }else{
                  check2.checked = false
                  setService(check2)
              }
          }else if(target.className.includes("profile")){
              if(check3.checked == false){
                  check3.checked = true
                  setService(check3);
              }else{
                  check3.checked = false
                  setService(check3)
              }
          }
          
      })
  })
 
 //function to select service 
 // checking check-box by clicking on it itself 
    const check = document.querySelectorAll(".check");
     check.forEach(checkBox =>{
           checkBox.addEventListener("click",(e)=>{
            let target = e.target
            const child = target.parentElement;
                         const parent = child.parentElement;
                       const el1 = parent.children[1];
                       let pkgTxt = el1.children[0].innerHTML;
                     const el2 = parent.children[2];
                      let pkgAmt = el2.children[0].innerHTML;
                     let pkgParent = document.createElement("div");
                        pkgParent.classList.add("pkgParent");
                      let content = `<div class="pkgOpt">${pkgTxt}</div>
                         <div class="pkgPrice">${pkgAmt}</div>`;
                         pkgParent.innerHTML = content
                     if(target.checked == true){  
                       document.querySelector(".package-parent").append(pkgParent);
                    }else{
                     document.querySelector(".package-parent").removeChild(document.querySelector(".pkgParent"))
                 }
           })
        });

//calculate total amount per duration
function calculateTotal(){
    let planPrice = document.querySelector(".planPrice")
    let planVal = planPrice.innerHTML.match(/\d+/)
    let packagePrice = document.querySelectorAll(".pkgPrice")
    let totalVal = Number(planVal)
    for(let i = 0; i<packagePrice.length; i++){
        let pkgVal = packagePrice[i].innerHTML.match(/\d+/)
        let packageValue = Number(pkgVal)
        totalVal = totalVal + packageValue
        if(packagePrice[i].innerHTML.includes("mo")){
            document.getElementById("totalPrice").innerHTML = 
            "$" + totalVal + "/mo";
            document.querySelector(".dur").innerHTML = "(Monthly)"
        }else{
            document.getElementById("totalPrice").innerHTML = 
            "$" + totalVal + "/yr";
            document.querySelector(".dur").innerHTML = "(Yearly)"
        }
        
    }
    
}


// configuring the navigation buttons

//next button
const nextBtn = document.querySelectorAll(".next");
const prevBtn = document.querySelectorAll(".back")
  stp1.classList.add("active")

nextBtn.forEach(btn =>{
    btn.addEventListener("click", (e)=>{
        const target = e.target
        const parent = target.parentElement
        const parentContainer = parent.parentElement
        const name = document.getElementById("Name")
        const email = document.getElementById("email")
        const phone = document.getElementById("phone")
        if(parentContainer.id == "first_body"){
          if(name.value==""  || email.value=="" || phone.value==""){
                alert("user must fill the form first")
                let myArr = [name,email,phone]
                myArr.forEach(input=>{
                    input.classList.add("error")
                })
            }else if(!name.checkValidity() || !email.checkValidity() ||
                 phone.value.length > 11){
          alert("user input is invalid please check the form is filled properly")
            }else{
           parentContainer.style.display = "none"
           parentContainer.nextElementSibling.style.display = "block"
           parentContainer.nextElementSibling.classList.add("slide")
           stp1.classList.remove("active")
             stp2.classList.add("active")
             let myArr = [name,email,phone]
             myArr.forEach(input=>{
                    input.classList.remove("error")
                })
       }
       } else if(parentContainer.id == "second_body"){
               if(document.getElementById("plans").innerHTML ==""){
                   alert("please select a plan")
                }else{
           parentContainer.style.display = "none"
           parentContainer.nextElementSibling.style.display = "block"
           parentContainer.nextElementSibling.classList.add('slide')
            stp2.classList.remove("active")
           stp3.classList.add("active")
       }
       }else if(parentContainer.id == "third_body"){
           if(document.querySelector(".package-parent").innerHTML ==""){
               alert("user is to select at least one service option")
           }else{
           parentContainer.style.display = "none"
           parentContainer.classList.add("hide")
           parentContainer.nextElementSibling.style.display = "block"
           parentContainer.nextElementSibling.classList.add("slide")
           stp3.classList.remove("active")
               stp4.classList.add("active")
               calculateTotal();
       }
       } 
       
    })
});


//previous button 
prevBtn.forEach(btn =>{
    btn.addEventListener("click", (e)=>{
        const target = e.target
        const parent = target.parentElement
        const parentContainer = parent.parentElement
        parentContainer.style.display = "none"  
        parentContainer.previousElementSibling.style.display = "block";
            if(parentContainer.id =="fourth_body"){
                stp4.classList.remove("active")
                stp3.classList.add("active")
            }if(parentContainer.id =="third_body"){
                stp3.classList.remove("active")
                stp2.classList.add("active")
            }if(parentContainer.id =="second_body"){
                stp2.classList.remove("active")
                stp1.classList.add("active")
            }
        
     })
  })
//confirmation button 
document.querySelector(".confirm").addEventListener("click",()=>{
    document.querySelector(".popUp-box-wrapper").style.display= "block";
})

// i create a pop up box to alert and ensure users certainty

//to cancel and cross check again 
document.querySelector(".cancel").addEventListener("click",()=>{
    document.querySelector(".popUp-box-wrapper").style.display = "none"
})

//finishing all
document.querySelector(".proceed").addEventListener("click",()=>{
    document.getElementById("fourth_body").style.display = "none"
    document.getElementById("fifth_body").style.display = "block"
    document.querySelector(".popUp-box-wrapper").style.display = "none"
    stp4.classList.remove("active")
})

//to change package 
document.querySelector(".change").addEventListener("click",()=>{
     document.getElementById("fourth_body").style.display = "none"
      document.getElementById("second_body").style.display = "block"
      stp4.classList.remove("active")
      stp2.classList.add("active")
})

    
    
    
    
