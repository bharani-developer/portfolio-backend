import type { HydratedDocument, Model } from "mongoose";
import type { IImage } from "../../interfaces/index.js";
import type { EMPLOYMENT_TYPE, WORK_MODE } from "./experience.constant.js";
export type TEmploymentType = (typeof EMPLOYMENT_TYPE)[keyof typeof EMPLOYMENT_TYPE];
export type TWorkMode = (typeof WORK_MODE)[keyof typeof WORK_MODE];
export interface IExperience {
    company: string;
    slug: string;
    companyLogo?: IImage;
    position: string;
    employmentType: TEmploymentType;
    workMode: TWorkMode;
    location: string;
    startDate: Date;
    endDate?: Date | null;
    isCurrent: boolean;
    summary: string;
    responsibilities: string[];
    technologies: string[];
    companyWebsite?: string;
    sortOrder: number;
    isActive: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}
export type TExperienceDocument = HydratedDocument<IExperience>;
export interface IExperienceModel extends Model<IExperience> {
}
//# sourceMappingURL=experience.interface.d.ts.map