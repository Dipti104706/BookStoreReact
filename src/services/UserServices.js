import axios from 'axios'


export const register=async(obj) => {
    let response=await axios.post("https://localhost:44329/api/User/register",obj)
    return response
}

export const login=async(obj) => {
    let response=await axios.post("https://localhost:44329/api/User/Login",obj)
    return response
}

export const forgotpassword=async(email) => {
    let response=await axios.post(`https://localhost:44329/api/User/forgot?email=${email}`,"")
    return response
}

export const getBooks = async() =>{
    let response = await axios.get(`https://localhost:44329/api/Book/getAllBooks`)
    return response
}