export declare const AUTH_MESSAGE: {
    /**
     * Authentication Success
     */
    readonly LOGIN_SUCCESS: "Login successful";
    readonly GOOGLE_LOGIN_SUCCESS: "Google login successful";
    readonly LOGOUT_SUCCESS: "Logout successful";
    readonly PROFILE_RETRIEVED: "Profile retrieved successfully";
    readonly TOKEN_REFRESHED: "Access token refreshed successfully";
    readonly PASSWORD_CHANGED: "Password changed successfully";
    /**
     * Authentication Errors
     */
    readonly INVALID_CREDENTIALS: "Invalid email or password";
    readonly INVALID_GOOGLE_TOKEN: "Invalid Google token";
    readonly GOOGLE_AUTH_FAILED: "Google authentication failed";
    readonly ACCOUNT_NOT_FOUND: "Account not found";
    readonly ACCOUNT_ALREADY_EXISTS: "Account already exists";
    readonly EMAIL_ALREADY_EXISTS: "Email already exists";
    /**
     * Account Status
     */
    readonly ACCOUNT_DELETED: "Account has been deleted";
    readonly ACCOUNT_INACTIVE: "Account is inactive";
    readonly ACCOUNT_BLOCKED: "Account has been blocked";
    readonly EMAIL_NOT_VERIFIED: "Email is not verified";
    /**
     * Provider Validation
     */
    readonly GOOGLE_ACCOUNT_REQUIRED: "Please continue with Google sign in";
    readonly LOCAL_ACCOUNT_REQUIRED: "Please sign in using email and password";
    /**
     * Authorization
     */
    readonly UNAUTHORIZED: "Unauthorized access";
    readonly FORBIDDEN: "Forbidden access";
    readonly ACCESS_DENIED: "Access denied";
    /**
     * Token Messages
     */
    readonly ACCESS_TOKEN_REQUIRED: "Access token is required";
    readonly REFRESH_TOKEN_REQUIRED: "Refresh token is required";
    readonly INVALID_TOKEN: "Invalid token";
    readonly TOKEN_EXPIRED: "Token has expired";
    readonly INVALID_REFRESH_TOKEN: "Invalid refresh token";
    /**
     * User Profile
     */
    readonly PROFILE_UPDATED: "Profile updated successfully";
    readonly AVATAR_UPDATED: "Profile picture updated successfully";
    /**
     * Password
     */
    readonly INCORRECT_OLD_PASSWORD: "Current password is incorrect";
    readonly PASSWORD_RESET_SUCCESS: "Password reset successfully";
};
export declare const AUTH_COOKIE: {
    readonly REFRESH_TOKEN: "refreshToken";
};
export declare const AUTH_PROVIDER: {
    readonly LOCAL: "LOCAL";
    readonly GOOGLE: "GOOGLE";
};
export type TAuthProvider = (typeof AUTH_PROVIDER)[keyof typeof AUTH_PROVIDER];
//# sourceMappingURL=auth.constant.d.ts.map