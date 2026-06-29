// src/modules/auth/auth.constant.ts
export const AUTH_MESSAGE = {
    /**
     * Authentication Success
     */
    LOGIN_SUCCESS: "Login successful",
    GOOGLE_LOGIN_SUCCESS: "Google login successful",
    LOGOUT_SUCCESS: "Logout successful",
    PROFILE_RETRIEVED: "Profile retrieved successfully",
    TOKEN_REFRESHED: "Access token refreshed successfully",
    PASSWORD_CHANGED: "Password changed successfully",
    /**
     * Authentication Errors
     */
    INVALID_CREDENTIALS: "Invalid email or password",
    INVALID_GOOGLE_TOKEN: "Invalid Google token",
    GOOGLE_AUTH_FAILED: "Google authentication failed",
    ACCOUNT_NOT_FOUND: "Account not found",
    ACCOUNT_ALREADY_EXISTS: "Account already exists",
    EMAIL_ALREADY_EXISTS: "Email already exists",
    /**
     * Account Status
     */
    ACCOUNT_DELETED: "Account has been deleted",
    ACCOUNT_INACTIVE: "Account is inactive",
    ACCOUNT_BLOCKED: "Account has been blocked",
    EMAIL_NOT_VERIFIED: "Email is not verified",
    /**
     * Provider Validation
     */
    GOOGLE_ACCOUNT_REQUIRED: "Please continue with Google sign in",
    LOCAL_ACCOUNT_REQUIRED: "Please sign in using email and password",
    /**
     * Authorization
     */
    UNAUTHORIZED: "Unauthorized access",
    FORBIDDEN: "Forbidden access",
    ACCESS_DENIED: "Access denied",
    /**
     * Token Messages
     */
    ACCESS_TOKEN_REQUIRED: "Access token is required",
    REFRESH_TOKEN_REQUIRED: "Refresh token is required",
    INVALID_TOKEN: "Invalid token",
    TOKEN_EXPIRED: "Token has expired",
    INVALID_REFRESH_TOKEN: "Invalid refresh token",
    /**
     * User Profile
     */
    PROFILE_UPDATED: "Profile updated successfully",
    AVATAR_UPDATED: "Profile picture updated successfully",
    /**
     * Password
     */
    INCORRECT_OLD_PASSWORD: "Current password is incorrect",
    PASSWORD_RESET_SUCCESS: "Password reset successfully",
};
export const AUTH_COOKIE = {
    REFRESH_TOKEN: "refreshToken",
};
export const AUTH_PROVIDER = {
    LOCAL: "LOCAL",
    GOOGLE: "GOOGLE",
};
//# sourceMappingURL=auth.constant.js.map