import type { HydratedDocument, Model } from "mongoose";
import type { IImage } from "../../interfaces/index.js";
import type { TESTIMONIAL_CLIENT_TYPE } from "./testimonials.constant.js";
export type TTestimonialClientType = (typeof TESTIMONIAL_CLIENT_TYPE)[keyof typeof TESTIMONIAL_CLIENT_TYPE];
export interface ITestimonial {
    clientName: string;
    clientPosition?: string;
    clientCompany?: string;
    clientImage?: IImage;
    clientWebsite?: string;
    projectName?: string;
    review: string;
    rating: 1 | 2 | 3 | 4 | 5;
    clientType: TTestimonialClientType;
    isFeatured: boolean;
    sortOrder: number;
    isActive: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}
export type TTestimonialDocument = HydratedDocument<ITestimonial>;
export type TCreateTestimonialPayload = Omit<ITestimonial, "createdAt" | "updatedAt">;
export type TUpdateTestimonialPayload = Partial<Omit<ITestimonial, "createdAt" | "updatedAt">>;
export interface ITestimonialModel extends Model<ITestimonial> {
}
//# sourceMappingURL=testimonials.interface.d.ts.map