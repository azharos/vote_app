import axios from "axios";

export const ServiceGet = async (url, data) => {
    try {
        const response = await axios.get(url, data);
        return {
            status: true,
            data: response.data,
        };
    } catch (error) {
        return {
            status: true,
            data: error.message,
        };
    }
};

export const ServicePost = async (url, data) => {
    try {
        const response = await axios.post(url, data);
        return {
            status: true,
            data: response.data,
        };
    } catch (error) {
        return {
            status: false,
            data: error.message,
        };
    }
};
