require('dotenv').config();
const axios = require('axios');

async function getImageUrlForType(type, amount = 10) {
    const apiKey = process.env.IMAGE_API_KEY; // Your Unsplash Access Key
    const apiUrl = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(type)}&client_id=${apiKey}&per_page=${amount}`;
    try {
        const response = await axios.get(apiUrl);
        // Extract the URL from the response. This depends on the API's response structure.
        return response.data.results[0].urls.regular;
    } catch (error) {
        console.error('Error fetching image:', error);
        return null; // or a default image URL
    }
}

module.exports = {
    getImageUrlForType
};
