import type { HydratedDocument } from "mongoose";
export interface ISocialLinks {
    github?: string;
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
    youtube?: string;
    leetcode?: string;
    hackerrank?: string;
    stackoverflow?: string;
}
export interface ISeoSettings {
    metaTitle: string;
    metaDescription: string;
    metaKeywords: string[];
    siteUrl: string;
}
export interface ISettings {
    siteTitle: string;
    siteDescription: string;
    email: string;
    phone: string;
    address: string;
    logo?: {
        url: string;
        publicId: string;
    };
    favicon?: {
        url: string;
        publicId: string;
    };
    socialLinks: ISocialLinks;
    seo: ISeoSettings;
}
export type SettingsDocument = HydratedDocument<ISettings>;
//# sourceMappingURL=settings.interface.d.ts.map