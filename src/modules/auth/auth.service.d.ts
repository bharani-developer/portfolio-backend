import type { IChangePassword, IGooglePayload, ILoginResponse, ILoginUser, IRefreshTokenResponse, IUser } from "./auth.interface.js";
export declare const AuthService: {
    login: (payload: ILoginUser) => Promise<ILoginResponse>;
    googleLogin: (payload: IGooglePayload) => Promise<ILoginResponse>;
    refreshToken: (token: string) => Promise<IRefreshTokenResponse>;
    getProfile: (userId: string) => Promise<import("mongoose").Document<unknown, {}, IUser, {}, import("mongoose").DefaultSchemaOptions> & IUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    changePassword: (userId: string, payload: IChangePassword) => Promise<void>;
};
//# sourceMappingURL=auth.service.d.ts.map