const code = document.getElementById("code")

const lines = [
"Initializing server...",
"Loading bypass modules...",
"Connecting API gateway...",
"Checking Safelinku bypass...",
"Loading 200+ shortlink modules...",
"Starting endpoint /api/skip",
"Server status: ONLINE",
"Monitoring requests...",
]

function randomLine(){
const line = lines[Math.floor(Math.random()*lines.length)]
code.innerHTML += line + "\n"
code.scrollTop = code.scrollHeight
}

setInterval(randomLine,1200)

const sound = document.getElementById("bgSound")
const toggle = document.getElementById("soundToggle")

let playing = false

toggle.onclick = ()=>{
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