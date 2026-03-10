const axios = require("axios")

async function skipSafelinku(url){

try{

const res = await axios.get(url,{
maxRedirects:10,
headers:{
"User-Agent":"Mozilla/5.0"
}
})

const finalUrl = res.request.res.responseUrl

return {
status:true,
result:finalUrl
}

}catch(e){

return {
status:false,
message:"gagal bypass safelinku"
}

}

}

module.exports = skipSafelinku
