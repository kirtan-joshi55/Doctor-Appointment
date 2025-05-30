const cloudinary = require("cloudinary").v2;
const fs = require("fs");
require("dotenv").config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadCloudinary = async (localFilePath,options = {}) => {
    try {
        if (!localFilePath) return null;

        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
            ...options,
        });
        console.log("File upload successfuly :", response.url);
        return response;
    }
    catch (error) {
        fs.unlinkSync(localFilePath); // removes the locally saved temporary file as the upload operation got failed
        return null;
        console.log("Error uploading to Cloudinary:", error);
    }
}


module.exports = {cloudinary, uploadCloudinary};
