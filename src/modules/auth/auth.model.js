// src/modules/auth/auth.model.ts
import bcrypt from "bcrypt";
import { Schema, model } from "mongoose";
import { env } from "../../config/env.js";
import { ROLE } from "../../constants/role.constant.js";
const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        minlength: [2, "Name must be at least 2 characters"],
        maxlength: [100, "Name cannot exceed 100 characters"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        trim: true,
        index: true,
    },
    password: {
        type: String,
        select: false,
    },
    role: {
        type: String,
        enum: Object.values(ROLE),
        default: ROLE.VIEWER,
        required: true,
        index: true,
    },
    authProvider: {
        type: String,
        enum: ["LOCAL", "GOOGLE"],
        default: "LOCAL",
        required: true,
        index: true,
    },
    googleId: {
        type: String,
        unique: true,
        sparse: true,
        index: true,
    },
    avatar: {
        url: {
            type: String,
            default: "",
            trim: true,
        },
        publicId: {
            type: String,
            default: "",
            trim: true,
        },
    },
    emailVerified: {
        type: Boolean,
        default: false,
        index: true,
    },
    givenName: {
        type: String,
        trim: true,
    },
    familyName: {
        type: String,
        trim: true,
    },
    locale: {
        type: String,
        trim: true,
    },
    hostedDomain: {
        type: String,
        trim: true,
    },
    isDeleted: {
        type: Boolean,
        default: false,
        index: true,
    },
    isActive: {
        type: Boolean,
        default: true,
        index: true,
    },
    lastLoginAt: {
        type: Date,
        default: null,
    },
}, {
    timestamps: true,
    versionKey: false,
});
/**
 * Hash password only for LOCAL accounts
 */
userSchema.pre("save", async function () {
    if (!this.isModified("password")) {
        return;
    }
    if (!this.password) {
        return;
    }
    this.password = await bcrypt.hash(this.password, env.BCRYPT_SALT_ROUNDS);
});
/**
 * Exclude soft deleted users
 */
userSchema.pre(/^find/, function () {
    this.find({
        isDeleted: false,
    });
});
export const User = model("User", userSchema);
//# sourceMappingURL=auth.model.js.map