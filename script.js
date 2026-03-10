const code = document.getElementById("code")

const logs = [
"Starting API server...",
"Loading modules...",
"Connecting bypass engine...",
"Safelinku bypass module ready",
"Loading 200+ shortlink handlers...",
"Server listening requests...",
"API ready",
"Monitoring traffic..."
]

function addLog(){

const text = logs[Math.floor(Math.random()*logs.length)]

code.innerHTML += text + "\n"

code.scrollTop = code.scrollHeight

}

setInterval(addLog,1200)



const sound = document.getElementById("bgSound")
const toggle = document.getElementById("soundToggle")

let playing=false

toggle.onclick=()=>{

if(!playing){

sound.play()
toggle.innerText="🔇 Mute"
playing=true

}else{

sound.pause()
toggle.innerText="🔊 Sound"
playing=false

}

}