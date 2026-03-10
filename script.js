const responseBox = document.getElementById("response")
const statusCode = document.getElementById("statusCode")
const sendBtn = document.getElementById("sendGet")

sendBtn.onclick = ()=>{

const codes = [200,201,204,300,400,401,404,500]

const code = codes[Math.floor(Math.random()*codes.length)]

statusCode.innerText = "Status: " + code

let data

if(code === 200){

data = {
status:true,
result:"https://download-link.com/file"
}

}else{

data = {
status:false,
message:"error processing request"
}

}

responseBox.innerText = JSON.stringify(data,null,2)

}



const logs = document.getElementById("logs")

const serverLogs = [
"Starting server...",
"Loading bypass modules...",
"Connecting database...",
"Listening API requests...",
"Monitoring traffic..."
]

function addLog(){

const line = serverLogs[Math.floor(Math.random()*serverLogs.length)]

logs.innerHTML += line + "\n"

logs.scrollTop = logs.scrollHeight

}

setInterval(addLog,1500)



const sound = document.getElementById("bgSound")
const toggle = document.getElementById("soundToggle")

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