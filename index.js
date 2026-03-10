const express = require("express")
const config = require("./config")
const skipSafelinku = require("./lib/sfl")

const app = express()

app.get("/", (req,res)=>{
res.json({
status:true,
message:"🚀 VINZZZ API ACTIVE"
})
})

app.get("/api/skip", async (req,res)=>{

res.setHeader("Access-Control-Allow-Origin","*")

const { apikey, url, type } = req.query

if(!apikey){
return res.status(401).json({
status:false,
message:"apikey required"
})
}

if(!config.apikeys.includes(apikey)){
return res.status(401).json({
status:false,
message:"invalid apikey"
})
}

if(!url){
return res.status(400).json({
status:false,
message:"url required"
})
}

if(type === "safelinku"){

const result = await skipSafelinku(url)

return res.status(200).json(result)

}

return res.status(404).json({
status:false,
message:"type tidak tersedia"
})

})

module.exports = app