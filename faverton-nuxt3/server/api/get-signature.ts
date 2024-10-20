import { v2 as cloudinary } from 'cloudinary';

export default defineEventHandler(async () => {
  const timestamp = Math.round(new Date().getTime() / 1000);

  const signature = cloudinary.utils.api_sign_request({
    timestamp: timestamp,
  }, process.env.CLOUDINARY_API_SECRET as string);
  return {
    signature,
    timestamp,
  };
});
