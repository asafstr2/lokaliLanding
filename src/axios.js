import axios from "axios";



const instance= axios.create({
    baseURL:"https://lokli-8e9a3.firebaseio.com/"
})

export default instance;