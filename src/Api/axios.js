import axios from "axios";
const axiosInstance= axios.create({
    // local vertion of firebase function
    // baseURL: "http://127.0.0.1:5001/amzon-backend-clone/us-central1/api"
    
    // deployed version of amazon server on render.com
    baseURL: "https://amazon-api-deploy-p3ar.onrender.com"
});
// export default {axiosInstance};
export default axiosInstance;
