import axios from "axios";
const BASE_URL = "http://localhost:8080/api"

const uploadImage = async (formData: FormData) => {
    return await axios.post(`${BASE_URL}/photo/upload`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
}

export default uploadImage;