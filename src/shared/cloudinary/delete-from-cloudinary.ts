// src\shared\cloudinary\deleteFromCloudinary.ts

import cloudinary from '../../configs/cloudinary.config.js';

export const deleteFromCloudinary = async (publicId: string): Promise<void> => {
  if (!publicId) {
    return;
  }

  try {
    await cloudinary.uploader.destroy(publicId, {
      resource_type: 'image',
    });
  } catch (error) {
    console.error(`Failed to delete Cloudinary asset: ${publicId}`, error);

    throw error;
  }
};
