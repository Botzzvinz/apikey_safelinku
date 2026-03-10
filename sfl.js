const axios = require("axios")

async function skipSafelinku(url){

try{

const res = await axios({
method:"GET",
url:url,
maxRedirects:10,
validateStatus:()=>true,
headers:{
"User-Agent":"Mozilla/5.0"
}
})

const finalUrl = res.request?.res?.responseUrl || url

return {
status:true,
result:finalUrl
}

}catch(e){

return {
status:false,
message:"gagal bypass safelinku",
error:e.message
}

}

}

module.exports = skipSafelinku