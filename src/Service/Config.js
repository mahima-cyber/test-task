import axios from "axios";
export const baseURL = 'https://cloudimagetry.onrender.com'

const Config  = axios.create({
    baseURL : baseURL,
})

// Config.interceptors.request.use(function(config){
//   return config;
// },function(error){
//   return error;
// })
export default Config;