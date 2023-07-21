import axios from "axios"

export const useAxios = () => {
 const client =  axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
  })

  return {
   client
  }
}
