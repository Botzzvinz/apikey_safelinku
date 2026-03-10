const logs = document.getElementById("logs")
const sendBtn = document.getElementById("sendGet")
const responseBox = document.getElementById("response")
const statusCode = document.getElementById("statusCode")

function log(text){

const time = new Date().toLocaleTimeString()

logs.innerHTML += "["+time+"] "+text+"\n"

logs.scrollTop = logs.scrollHeight

}

sendBtn.onclick=()=>{

log("Incoming GET /api/skip/safelinku")

const codes=[200,400,401,404,500]

const code=codes[Math.floor(Math.random()*codes.length)]

statusCode.innerText="Status: "+code

if(code===200){

responseBox.innerText=JSON.stringify({
status:true,
result:"https://download-link.com/file"
},null,2)

log("Response 200 OK")

}else{

responseBox.innerText=JSON.stringify({
status:false,
message:"request failed"
},null,2)

log("Response "+code+" ERROR")

}

}


function copyEndpoint(){

navigator.clipboard.writeText("/api/skip/safelinku")

alert("Endpoint copied")

}


const sound=document.getElementById("bgSound")
const toggle=document.getElementById("soundToggle")

let playing=false

toggle.onclick=()=>{

if(!playing){
sound.play()
playing=true
}else{
sound.pause()
playing=false
}

}