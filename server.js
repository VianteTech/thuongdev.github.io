let obj = require('./data/host.json')
const fs = require('fs');
const path = require('path')
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json());
function DeployChanges(){
    for(let i=0;i<obj.data.length;i++){
        if(obj.extensions[i]=="image"){
            let content = 
`<!DOCTYPE html> 
<html lang="vi"> 
<head> 
<title>${obj.file[i]}|File Hosting</title> 
</head> 
<body> 
<p><b>Hosted By <a href="https://thuong.pages.dev">thuong.pages.dev</a></b></p>
<img title="${obj.file[i]}" alt="This is a file about ${obj.file[i]}" src="${obj.base64[i]}">
<style>
body{
background:black;
color:white;
width: 90%;
}
p{
text-align: center;
font-size: 20px;
}
video,img{
display: block;
margin-left: auto;
margin-right: auto;
width: 50%;
height: auto;
}
</style>
</body> 
</html>`
            Host(obj.file[i],content)
        }
        else if(obj.extensions[i]=="video"){
            let content = 
`<!DOCTYPE html> 
<html lang="vi"> 
<head> 
<title>${obj.file[i]}|File Hosting</title> 
</head> 
<body> 
<p><b>Hosted By <a href="https://thuong.pages.dev">thuong.pages.dev</a></b></p>
<video title="${obj.file[i]}" alt="This is a file about ${obj.file[i]}" src="${obj.base64[i]}" autoplay controls></video>
<style>
body{
background:black;
color:white;
width: 90%;
}
p{
text-align: center;
font-size: 20px;
}
video,img{
display: block;
margin-left: auto;
margin-right: auto;
width: 50%;
height: auto;
}
</style>
</body> 
</html>`
            Host(obj.file[i],content)
        }
        else{}
    }
}
function Host(filename,content){
    fs.writeFile(`host/${filename}.html`, content, err => {
        if (err) {
        console.error(err);
        }
    });
}
function CheckForMultipleFiles(){
    for(let i=0;i<obj.data.length;i++){
        for(let j=i+1;j<obj.data.length;j++){
            if(obj.data[i]==obj.data[j]){
                obj.data.splice(j,1)
                obj.extensions.splice(j,1)
                obj.file.splice(j,1)
                obj.base64.splice(j,1)
                fs.writeFile('./data/host.json', JSON.stringify(obj,null,4), function writeJSON(err) {
                    if (err) return console.log(err);
                });
            }
        }
    }
}
function RequestChanges(arg,arg1){
    newarg=arg.split("|")
    newarg1=arg1.split("|")
    for(let i=0;i<newarg.length;i++){
        newarg[i]=newarg[i].trim()
        //arg1 is base64 encoded
        //arg is filename with extensions
        obj["base64"].push(newarg1[i])
        obj["data"].push(newarg[i])
        obj["extensions"].push(newarg1[i].slice(5,newarg1[i].indexOf("/")))
        obj["file"].push(path.parse(newarg[i]).name)
        fs.writeFile('./data/host.json', JSON.stringify(obj,null,4), function writeJSON(err) {
            if (err) return console.log(err);
        });
        CheckForMultipleFiles();
        DeployChanges();
    }
}
app.post('/example', (req, res) => {
    RequestChanges(req.body.fname,req.body.dlink)
    res.send(
`<h1>
Thank you for using, please wait for your deployment in 4 seconds.
</h1>
<p style="display:none" id="wait">Now you can vist your website by typing on the search bar "https://thuong.pages.dev/host/(filename without extension).html".</p>
<script type="text/javascript">
setTimeout(()=>{
document.getElementById("wait").style.display="block"
},4000)
</script>
`);
    });
const port = 8080;
app.listen(port, () => {
  console.log(`Server running on port 8080`);
});
//cannot be used because of nodejs and expressjs