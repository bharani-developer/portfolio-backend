interface ICloudinaryUploadResponse {
    url: string;
    publicId: string;
}
export declare const uploadToCloudinary: (filePath: string, folder?: string) => Promise<ICloudinaryUploadResponse>;
export {};
//# sourceMappingURL=uploadToCloudinary.d.ts.map