import axios from "axios";
export const baseURL = 'https://testmarkand.herokuapp.com'

const Config  = axios.create({
    baseURL : baseURL,
    headers: {
        "Content-type": "application/json",
      },
})
export default Config;