// Unsplash API
const count = 10;
const apiKey = 'Mz_y5oG0R2nhq_n8pCmNo5HC3jPxZI_mIFYIiUY8NhQ';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        //catch error here
    }
}

//On Load
getPhotos();