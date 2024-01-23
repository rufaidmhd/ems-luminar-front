
import axios from "axios";








export const commonApi=async(method,url,data,header)=>{
  let config={
    method,
    url,
    data,
    header:header?header:{"content-type":"apllication/json"}
  }



//   create axios instance api call

return await axios(config).then((data)=>{
    return data
}).catch((err)=>{
    return err
})
}
