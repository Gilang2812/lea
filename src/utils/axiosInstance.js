import axios from "axios";
import { baseUrl } from "./baseUrl";

export const axiosInstance = axios.create({  //baris ini untuk menconfigurasi axios default
    baseURL: baseUrl,  // menentukan base url dari backend atau api yang akan di gunakan
    headers: {'autorization': 'bearer <token>'} // untuk mengirimkan value dari req.headers di backend misal req.headers.authorization sehingga value nya adalah "brearer <token>" 
  });

export const axiosConfig = axios.create({
  baseUrl : 'http://localhost:3000'
})