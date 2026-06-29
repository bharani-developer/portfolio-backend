import { Schema } from "mongoose";
export declare const imageSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    _id: false;
}, {
    url: string;
    publicId: string;
}, import("mongoose").Document<unknown, {}, {
    url: string;
    publicId: string;
}, {
    id: string;
}, Omit<import("mongoose").DefaultSchemaOptions, "_id"> & {
    _id: false;
}> & Omit<{
    url: string;
    publicId: string;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, unknown, {
    url: string;
    publicId: string;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=image.schema.d.ts.map