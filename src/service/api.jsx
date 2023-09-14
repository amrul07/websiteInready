import axios from "axios";

const baseUrl = `https://inr.hmjti-uinam.com/api`;

const api = axios.create({
    baseURL: baseUrl,
  });
  
  // Fungsi untuk melakukan permintaan GET
  export const fetchData = async (endpoint) => {
    try {
      const response = await api.get(endpoint);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  // Fungsi untuk melakukan permintaan POST
  export const postData = async (endpoint, data) => {
    try {
      const response = await api.post(endpoint, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  // Fungsi untuk melakukan permintaan PUT
  export const putData = async (endpoint, data) => {
    try {
      const response = await api.put(endpoint, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  // Fungsi untuk melakukan permintaan DELETE
  export const deleteData = async (endpoint) => {
    try {
      const response = await api.delete(endpoint);
      return response.data;
    } catch (error) {
      throw error;
    }
  };