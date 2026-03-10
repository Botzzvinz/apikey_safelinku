const config = require("./config")
const skipSafelinku = require("./lib/sfl")

module.exports = async (req,res)=>{

res.setHeader("Access-Control-Allow-Origin","*")

const { apikey, url, type } = req.query

if(!apikey){
return res.json({
status:false,
message:"apikey required"
})
}

if(!config.apikeys.includes(apikey)){
return res.json({
status:false,
message:"invalid apikey"
})
}

if(!url){
return res.json({
status:false,
message:"url required"
})
}

if(type === "safelinku"){

const result = await skipSafelinku(url)

return res.json(result)

}

return res.json({
status:false,
message:"type tidak tersedia"
})

}