'use strict';
let nice,location = window.location.href,val,val1,keys,root,roots,assets;
if(location.includes("settings")){
    click();
    load();
    document.getElementById('time/clock').value = localStorage.getItem("time");
}
else if(location=="https://thuong.pages.dev/"){
    document.getElementById("secret").addEventListener("dblclick",(e) => {
        document.getElementById("secret1").innerHTML=`<a href="/img.html">MCU-VIP</a>`
    });
}
else if(location.includes("aboutme")||location.includes("myprojects")){
    let cols = document.getElementsByClassName("collapsible");
    for (let i = 0; i < cols.length; i++) {
        cols[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight){
            content.style.maxHeight = null;
            }
            else {
            content.style.maxHeight = content.scrollHeight + "px";
            } 
        });
    }
}
const API_URL='/data/db.json',
FetchDb = async() =>{
    try{
        const response = await fetch(API_URL)
        root = await response.json()
        roots= Object.values(root.db)[0]
        assets= Object.values(root.db)[1]
        assign("backimg",localStorage.getItem("backimgs"))
        assign("themes",localStorage.getItem("themes"))
        if(location.includes("settings")){
            document.getElementById("text").addEventListener("input", function(e) {
                val=(e.target.value).toLowerCase().trim()
                check("backimgs",val)
                assign("backimg",localStorage.getItem("backimgs"))
            })
            document.getElementById("test").addEventListener("input", function(e) {
                val1=(e.target.value).toLowerCase().trim()
                check("themes",val1)
                assign("themes",localStorage.getItem("themes"))
            })
            document.getElementById("text").value=`${localStorage.getItem("backimgs").split("/")[1]} Background`,
            document.getElementById("test").value=`${localStorage.getItem("themes").split("/")[1]} Theme`
            document.getElementById('time/clock').value = localStorage.getItem("time");
        }
    }
    catch(err){
        console.log(err.stack)
    }
}
(async()=>await FetchDb())();
function click(){
    if (localStorage.ccount)
        localStorage.ccount = Number(localStorage.ccount)+1;
        // console.clear()
        // const obj={
        //     Language: localStorage.getItem("Lang").toString(),
        //     Background: localStorage.getItem("backimgs").toString(),
        //     Theme: localStorage.getItem("themes").toString(),
        //     Time: localStorage.getItem("time").toString(),
        //     MobileMenu: localStorage.getItem("cobile").toString(),
        // }
        // console.table(obj)
    else 
    {
        localStorage.ccount = 1;
        if(localStorage.ccount==1)
            window.location.reload()
        localStorage.setItem("backimgs",":root/Party")
        localStorage.setItem("themes",":root/Light")
        localStorage.setItem("Lang","vi")
        localStorage.setItem("time","default") 
        localStorage.setItem("cobile","false")
    }
} 
function assign(arg1,arg2){
    arg2=arg2.split("/")
    let index=Object.keys(roots[arg2[0]])
    let value=Object.values(roots[arg2[0]])
    if(arg2[0]==":root"){
        if(arg1=="themes"){
            for(let i=0;i<index.length;i++){
                if(arg2[1]==index[i]){
                    document.querySelector(arg2[0]).style.setProperty(`--color`,value[i]["--color"]);
                    document.querySelector(arg2[0]).style.setProperty(`--background`,value[i]["--background"]);
                }
            }
        }
        else if(arg1=="backimg"){
            for(let i=0;i<index.length;i++){
                if(arg2[1]==index[i]){
                    document.querySelector(arg2[0]).style.setProperty(`--${arg1}`,value[i][`--${arg1}`]);
                }
            }
        }
    }
}
function check(arg1,arg2){
    keys=new Array
    for(let i=0;i<Object.keys(assets[arg1]).length;i++){
        keys.push((Object.keys(assets[arg1])[i]).split("/"))
    }
    for(let i=0;i<keys.length;i++){
        for(let j=0;j<keys[i].length;j++){
            if(keys[i][j]==arg2){
                localStorage.setItem(arg1,Object.values(assets[arg1])[i])
            }
        }
    }
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
    if(Currentlang==="vi"|| Currentlang==="vi-VN"){
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
    if (window.screen.width <=385 && window.screen.width >=320 && window.screen.height>=480 && window.screen.height <=854||JSON.parse(localStorage.getItem('cobile'))==true) {
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
        if(!nice){
        document.getElementById("mySidenav").style.width = "280px";
        nice=true
        }
        else{
        document.getElementById("mySidenav").style.width = "0";
        nice=false
        }
    }
}
function save(){
    localStorage.setItem('checktime', document.querySelector('#checktime').checked);
    localStorage.setItem('cobile', document.querySelector('#cobile').checked);
}
function load(){    
    document.querySelector("#checktime").checked = JSON.parse(localStorage.getItem('checktime'));
    document.querySelector("#cobile").checked = JSON.parse(localStorage.getItem('cobile'));
}
