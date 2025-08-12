// src/axios.js
import axios from 'axios';

export default axios.create({
  baseURL: import.meta.env.DEV 
    ? 'https://render-test-5rjk.onrender.com' 
    : '' // empty so vercel.json rewrites handle prod
});
