import type { IUploadResponse } from "./upload.interface.js";
export declare const UploadService: {
    uploadImage: (file: Express.Multer.File | undefined) => Promise<IUploadResponse>;
    deleteImage: (publicId: string) => Promise<void>;
};
//# sourceMappingURL=upload.service.d.ts.map