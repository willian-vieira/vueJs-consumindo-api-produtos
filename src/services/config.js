import axios from 'axios'

//Cria uma conexão http com Client axios
export const http = axios.create ({
    //Link URL API Back-End
    baseURL: 'http://localhost:8081/api/'
})

    

