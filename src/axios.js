import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-136fa/us-central1/api'
    // the api url (cloud function) url
});

export default instance