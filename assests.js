let location = window.location.href
if(location.includes("settings")){
    document.getElementById('time/clock').value = localStorage.getItem("time");
    document.getElementById("test").addEventListener("input", function(e) {
        let getvalue=e.target.value.toLowerCase().trim();
        if(getvalue==="fresh theme")
        Palete("theme","Fresh Theme")
        else if(getvalue==="royal theme")
        Palete("theme","Royal Theme")  
        else if(getvalue==="dark theme")
        Palete("theme","Dark Theme")
        else
        Palete("theme","Light Theme")
    });
    document.getElementById("text").addEventListener("input", function(e) {
        let getval=e.target.value.toLowerCase().trim();
        if(getval==="bold background")
        Palete("back","Bold Background")  
        else if(getval==="playful background")
        Palete("back","Playful Background")  
        else if(getval==="warm background")
        Palete("back","Warm Background")
        else if(getval==="cool background")
        Palete("back","Cool Background")
        else if(getval==="earthy background")
        Palete("back","Earthy Background")
        else if(getval==="party background")
        Palete("back","Party Background")
        else if(getval==="peaceful background")
        Palete("back","Peaceful Background")
        else
        Palete("back","Flamitio Background")
    });
    load();
    RRclick();
}
export function Palete(arg1,arg2){
    localStorage.setItem(arg1,arg2);
    let theme=localStorage.getItem("theme"),
        back=localStorage.getItem("back");
    if(theme==="Fresh Theme")
    changecss(':root','--color', '#EDF5E1','--background', '#5CDB95');   
    else if(theme==="Royal Theme")
    changecss(':root','--color', '#ffe5b4','--background', '#00539C');   
    else if(theme==="Dark Theme")
    changecss(':root','--color', 'white','--background', 'black');   
    else
    changecss(':root','--color', 'black','--background', 'white');
    if(back==="Bold Background")
    changecssproperties(':root','--backimg', 'linear-gradient(to right,#0F3443,#34E89E)');
    else if(back==="Playful Background")
    changecssproperties(':root','--backimg', 'linear-gradient(to right,#12C2E9,#F64F59)');
    else if(back==="Warm Background")
    changecssproperties(':root','--backimg', 'linear-gradient(to right,#FCCF31,#F55555)');
    else if(back==="Cool Background")
    changecssproperties(':root','--backimg', 'linear-gradient(to right,#7F7FD5,#91EAE4)');
    else if(back==="Earthy Background")
    changecssproperties(':root','--backimg', 'linear-gradient(to right,#31B7C2,#7BC393)');
    else if(back==="Party Background")
    changecssproperties(':root','--backimg', 'linear-gradient(to right,#333399,#FF00CC)');
    else if(back==="Peaceful Background")
    changecssproperties(':root','--backimg', 'linear-gradient(to right,#3E5151,#DECBA4)');
    else
    changecssproperties(':root','--backimg', 'linear-gradient(to left,white,aliceblue,pink)');
}
function changecssproperties(arg1,arg2,arg3){
    document.querySelector(arg1).style.setProperty(arg2, arg3);
}
function changecss(arg,arg1,arg2,arg3,arg4){
    document.querySelector(arg).style.setProperty(arg1, arg2);
    document.querySelector(arg).style.setProperty(arg3, arg4);
}
export function LoadLang(){
  let userLang = navigator.language || navigator.userLanguage; 
  if(userLang=="vi")
    localStorage.setItem("Lang","vi")
  else
    localStorage.setItem("Lang",userLang)
}
export function displaytime(){
    save()
    const viweekdays = ["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"],
          enweekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          vimonths= ["Tháng 1","Tháng 2","Tháng 3","Tháng 4","Tháng 5","Tháng 6","Tháng 7","Tháng 8","Tháng 9","Tháng 10","Tháng 11","Tháng 12"],
          enmonths= ["January","February","March","April","May","June","July","August","September","October","November","December"],
          d = new Date(),
          cb=document.querySelector("#checktime")
    let enweekday = enweekdays[d.getDay()], 
        enmonth = enmonths[d.getMonth()],
        viweekday = viweekdays[d.getDay()],
        vimonth = vimonths[d.getMonth()],
        year = d.getFullYear(),
        day = d.getDate(),
        selector = document.getElementById('time/clock').value,
        Currentlang=localStorage.getItem("Lang");
    if( Currentlang==="vi"|| Currentlang==="vi-VN"){
        if(cb.checked){
            if(selector==="date&time")
                TimeSelect("time",new Date().toLocaleString(),"date&time")
            else if(selector==="currentdate")
                TimeSelect("time",new Date().toLocaleDateString(),"currentdate")
            else if(selector==="currenttime")
                TimeSelect("time",new Date().toLocaleTimeString(),"currenttime")
            else if(selector==="default")
                TimeSelect("time",`${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()} ${new Date().toString().match(/([A-Z]+[\+-][0-9]+.*)/)[1]}`,"default")
        }
        else{
            if(selector==="date&time")
                TimeSelect("time",`${new Date().toLocaleTimeString()} ${viweekday} Ngày ${day} ${vimonth} Năm ${year}`,"date&time")
            else if(selector==="currentdate")
                TimeSelect("time",`${viweekday} Ngày ${day} ${vimonth} Năm ${year}`,"currentdate")
            else if(selector==="currenttime")
                TimeSelect("time",new Date().toLocaleTimeString(),"currenttime")
            else if(selector==="default")
                TimeSelect("time",`${viweekday} Ngày ${day} ${vimonth} Năm ${year} ${new Date().toLocaleTimeString()} ${new Date().toString().match(/([A-Z]+[\+-][0-9]+.*)/)[1]}`,"default")
        }
    } 
    else{
        if(cb.checked){
            if(selector==="date&time")
                TimeSelect("time",new Date().toLocaleString(),"date&time")
            else if(selector==="currentdate" )
                TimeSelect("time",new Date().toLocaleDateString(),"currentdate")
            else if(selector==="currenttime")
                TimeSelect("time",new Date().toLocaleTimeString(),"currenttime")
            else if(selector==="default")
                TimeSelect("time",`${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()} ${new Date().toString().match(/([A-Z]+[\+-][0-9]+.*)/)[1]}`,"default")
        }
        else{
            if(selector==="date&time")
                TimeSelect("time",`${new Date().toLocaleTimeString()} ${enweekday} ${enmonth} ${day} Year ${year}`,"date&time")
            else if(selector==="currentdate")
                TimeSelect("time",`${enweekday} ${enmonth} ${day} Year ${year}`,"currentdate")
            else if(selector==="currenttime")
                TimeSelect("time",new Date().toLocaleTimeString(),"currenttime")
            else if(selector==="default")
                TimeSelect("time",`${enweekday} ${enmonth} ${day} Year ${year} ${new Date().toLocaleTimeString()} ${new Date().toString().match(/([A-Z]+[\+-][0-9]+.*)/)[1]}`,"default")
        }
    }
    setTimeout(displaytime, 1000); 
}
function TimeSelect(arg1,arg2,arg3){
    document.getElementById(arg1).innerHTML= arg2
    localStorage.setItem(arg1,arg3)
}
export function DisplayDevice(){
    console.clear()
    let contents=document.getElementsByClassName("show"),
        content=document.getElementById("navbar"),
        con1=document.getElementById("v1"),
        con2=document.getElementById("v2");
    if (window.screen.width <=385 && window.screen.width >=320 && window.screen.height>=480 && window.screen.height <=854) {
        content.style.visibility="visible";
        con2.style.display="none";
        con1.style.display="block";
        for(var i=0;i<contents.length;i++){
            contents[i].style.visibility="hidden";
        }
        console.log("You're using a Mobile Device now.")
    } 
    else{
        content.style.visibility="hidden";
        con2.style.display="block";
        con1.style.display="none";
        for(var i=0;i<contents.length;i++){
            contents[i].style.visibility="visible";
        }
        console.log("You're using a Desktop/Laptop/PC now.")
    }
    setTimeout(DisplayDevice,200)
}
export function Displaytime(){
    let currenttime= new Date().toLocaleTimeString();
    document.getElementById('time').innerHTML=currenttime;
    setTimeout(Displaytime, 1000); 
}
export function MobileMenu(){
    document.getElementById("navbar").onclick=function(){
        document.getElementById("mySidenav").style.width = "270px";
    }
    document.getElementById("closenav").onclick=function(){
        document.getElementById("mySidenav").style.width = "0";
    }
}
function RRclick(){
    if (localStorage.ccount) {
        localStorage.ccount = Number(localStorage.ccount)+1;
        console.clear()
        const obj={
            Language: localStorage.getItem("Lang").toString(),
            Background: localStorage.getItem("back").toString(),
            Theme: localStorage.getItem("theme").toString(),
            Time: localStorage.getItem("time").toString(),
        }
        console.table(obj)
    }
    else 
    {
        localStorage.ccount = 1;
        if(localStorage.ccount==1){
            window.location.reload()
        }
        localStorage.setItem("Lang","vi")
        localStorage.setItem("back","Flamitio Background")  
        localStorage.setItem("theme","Light Theme") 
        localStorage.setItem("time","default") 
    }
} 
function save(){
    localStorage.setItem('checktime', document.querySelector('#checktime').checked);
}
function load(){    
    document.querySelector("#checktime").checked = JSON.parse(localStorage.getItem('checktime'));
}
