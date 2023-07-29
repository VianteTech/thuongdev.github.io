let location = window.location.href
if(location.includes("settings")){
    let val=document.getElementById('time/clock'); 
    val.value = localStorage.getItem("time");
    document.getElementById("test").addEventListener("input", function(e) {
        let getvalue=e.target.value.toLowerCase().trim();
        if(getvalue==="fresh theme"){
        localStorage.setItem("theme","Fresh Theme")  
        Theme()
        }
        else if(getvalue==="royal theme"){
        localStorage.setItem("theme","Royal Theme")  
        Theme()
        }
        else if(getvalue==="dark theme"){
        localStorage.setItem("theme","Dark Theme")
        Theme()
        }
        else{
        localStorage.setItem("theme","Light Theme")  
        Theme()
        }
    });
    document.getElementById("text").addEventListener("input", function(e) {
        let getval=e.target.value.toLowerCase().trim();
        if(getval==="bold background"){
        localStorage.setItem("back","Bold Background")  
        Back()
        }
        else if(getval==="playful background"){
        localStorage.setItem("back","Playful Background")  
        Back()
        }
        else if(getval==="warm background"){
        localStorage.setItem("back","Warm Background")
        Back()
        }
        else if(getval==="cool background"){
        localStorage.setItem("back","Cool Background")
        Back()
        }
        else if(getval==="earthy background"){
        localStorage.setItem("back","Earthy Background")
        Back()
        }
        else if(getval==="party background"){
        localStorage.setItem("back","Party Background")
        Back()
        }
        else if(getval==="peaceful background"){
        localStorage.setItem("back","Peaceful Background")
        Back()
        }
        else{
        localStorage.setItem("back","Flamitio Background")  
        Back()
        }
    });
    load();
    RRclick();
}
export function Theme(){
    let theme=localStorage.getItem("theme");
    if(theme==="Fresh Theme"){
    document.querySelector(":root").style.setProperty('--color', '#EDF5E1');
    document.querySelector(":root").style.setProperty('--background', '#5CDB95');   
    }
    else if(theme==="Royal Theme"){
    document.querySelector(":root").style.setProperty('--color', '#ffe5b4');
    document.querySelector(":root").style.setProperty('--background', '#00539C');   
    }
    else if(theme==="Dark Theme"){
    document.querySelector(":root").style.setProperty('--color', 'white');
    document.querySelector(":root").style.setProperty('--background', 'black');   
    }
    else{
    document.querySelector(":root").style.setProperty('--color', 'black');
    document.querySelector(":root").style.setProperty('--background', 'white');
    }
}
export function Back(){
    let back=localStorage.getItem("back");
    if(back==="Bold Background"){
    document.querySelector(":root").style.setProperty('--backimg', 'linear-gradient(to right,#0F3443,#34E89E)');
    }
    else if(back==="Playful Background"){
    document.querySelector(":root").style.setProperty('--backimg', 'linear-gradient(to right,#12C2E9,#F64F59)');
    }
    else if(back==="Warm Background"){
    document.querySelector(":root").style.setProperty('--backimg', 'linear-gradient(to right,#FCCF31,#F55555)');
    }
    else if(back==="Cool Background"){
    document.querySelector(":root").style.setProperty('--backimg', 'linear-gradient(to right,#7F7FD5,#91EAE4)');
    }
    else if(back==="Earthy Background"){
    document.querySelector(":root").style.setProperty('--backimg', 'linear-gradient(to right,#31B7C2,#7BC393)');
    }
    else if(back==="Party Background"){
    document.querySelector(":root").style.setProperty('--backimg', 'linear-gradient(to right,#333399,#FF00CC)');
    }
    else if(back==="Peaceful Background"){
    document.querySelector(":root").style.setProperty('--backimg', 'linear-gradient(to right,#3E5151,#DECBA4)');
    }
    else{
    document.querySelector(":root").style.setProperty('--backimg', 'linear-gradient(to left,white,aliceblue,pink)');
    }
}
export function LoadLang(){
  let userLang = navigator.language || navigator.userLanguage; 
  if(userLang=="vi"){
      localStorage.setItem("Lang","vi")
  }
  else{
      localStorage.setItem("Lang",userLang)
  }
}
export function displaytime(){
    save()
    const viweekdays = ["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];
    const enweekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const vimonths= ["Tháng 1","Tháng 2","Tháng 3","Tháng 4","Tháng 5","Tháng 6","Tháng 7","Tháng 8","Tháng 9","Tháng 10","Tháng 11","Tháng 12"];
    const enmonths= ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const d = new Date();
    let enweekday = enweekdays[d.getDay()];
    let enmonth = enmonths[d.getMonth()];
    let viweekday = viweekdays[d.getDay()];
    let vimonth = vimonths[d.getMonth()];
    let year = d.getFullYear();
    let day = d.getDate();
    let selector = document.getElementById('time/clock').value;
    let Currentlang=localStorage.getItem("Lang");
    const cb=document.querySelector("#checktime")
    if( Currentlang==="vi"|| Currentlang==="vi-VN"){
        if(cb.checked){
            if(selector==="date&time"){
                document.getElementById("time").innerHTML = new Date().toLocaleString();
                localStorage.setItem("time","date&time")
            }
            if(selector==="currentdate"){
                document.getElementById("time").innerHTML = new Date().toLocaleDateString();
                localStorage.setItem("time","currentdate")
            }
            if(selector==="currenttime"){
                document.getElementById("time").innerHTML= new Date().toLocaleTimeString();
                localStorage.setItem("time","currenttime")
            }
            if(selector==="default"){
                document.getElementById("time").innerHTML= `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()} ${new Date().toString().match(/([A-Z]+[\+-][0-9]+.*)/)[1]}`
                localStorage.setItem("time","default")
            }
        }
        else{
            if(selector==="date&time"){
                document.getElementById("time").innerHTML = `${new Date().toLocaleTimeString()} ${viweekday} Ngày ${day} ${vimonth} Năm ${year}`;
                localStorage.setItem("time","date&time")
            }
            if(selector==="currentdate"){
                document.getElementById("time").innerHTML = `${viweekday} Ngày ${day} ${vimonth} Năm ${year}`;
                localStorage.setItem("time","currentdate")
            }
            if(selector==="currenttime"){
                document.getElementById("time").innerHTML= new Date().toLocaleTimeString();
                localStorage.setItem("time","currenttime")
            }
            if(selector==="default"){
                document.getElementById("time").innerHTML= `${viweekday} Ngày ${day} ${vimonth} Năm ${year} ${new Date().toLocaleTimeString()} ${new Date().toString().match(/([A-Z]+[\+-][0-9]+.*)/)[1]}`;
                localStorage.setItem("time","default")
            }
        }
    } 
    else{
        if(cb.checked){
            if(selector==="date&time"){
                document.getElementById("time").innerHTML = new Date().toLocaleString();
                localStorage.setItem("time","date&time")
            }
            if(selector==="currentdate" ){
                document.getElementById("time").innerHTML = new Date().toLocaleDateString();
                localStorage.setItem("time","currentdate")
            }
            if(selector==="currenttime"){
                document.getElementById("time").innerHTML= new Date().toLocaleTimeString();
                localStorage.setItem("time","currenttime")
            }
            if(selector==="default"){
                document.getElementById("time").innerHTML= `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()} ${new Date().toString().match(/([A-Z]+[\+-][0-9]+.*)/)[1]}`
                localStorage.setItem("time","default")
            }
        }
        else{
            if(selector==="date&time"){
                document.getElementById("time").innerHTML = `${new Date().toLocaleTimeString()} ${enweekday} ${enmonth} ${day} Year ${year}`;
                localStorage.setItem("time","date&time")
            }
            if(selector==="currentdate"){
                document.getElementById("time").innerHTML = `${enweekday} ${enmonth} ${day} Year ${year}`;
                localStorage.setItem("time","currentdate")
            }
            if(selector==="currenttime"){
                document.getElementById("time").innerHTML= new Date().toLocaleTimeString();
                localStorage.setItem("time","currenttime")
            }
            if(selector==="default"){
                document.getElementById("time").innerHTML= `${enweekday} ${enmonth} ${day} Year ${year} ${new Date().toLocaleTimeString()} ${new Date().toString().match(/([A-Z]+[\+-][0-9]+.*)/)[1]}`;
                localStorage.setItem("time","default")
            }
        }
    }
    setTimeout(displaytime, 1000); 
}
export function DisplayDevice(){
    console.clear()
    let contents=document.getElementsByClassName("show");
    let content=document.getElementById("navbar");
    let con1=document.getElementById("v1");
    let con2=document.getElementById("v2");
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
    var checkbox = document.querySelector('#checktime');
    localStorage.setItem('checktime', checkbox.checked);
}
function load(){    
    var checked = JSON.parse(localStorage.getItem('checktime'));
    document.querySelector("#checktime").checked = checked;
}