import axios from 'axios'

export const login=async(obj) => {
    let response=await axios.post("https://localhost:44378",obj)
    return response
}