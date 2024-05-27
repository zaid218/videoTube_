import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    console.log('below is clooudinary path')
    console.log(localFilePath);
    console.log('above is ')
    try {
        if (!localFilePath) return null;

        //upload to cloudinary if localFilePath exists
        const result = await cloudinary.uploader.upload(localFilePath, {
            resource_type: 'auto',
        });

        // console.log("file uploaded to cloudinary", result.url);

        fs.unlinkSync(localFilePath); //remove file from localFilePath after uploading to cloudinary
        return result;
    } catch (error) {
        fs.unlinkSync(localFilePath);
        //remove the locally save temp file which is currently on the server kyunki local file path toh aa chuka hai ., as the upload operation failed..because malicious and corrupted file rh jayegi server pe ..
        return error;
    }
};

const deleteOnCloudinary = async (public_id, resource_type="image") => {
    try {
        if (!public_id) return null;

        //delete file from cloudinary
        const result = await cloudinary.uploader.destroy(public_id, {
            resource_type: `${resource_type}`
        });
    } catch (error) {
        return error;
        console.log("delete on cloudinary failed", error);
    }
};

export { uploadOnCloudinary, deleteOnCloudinary };
