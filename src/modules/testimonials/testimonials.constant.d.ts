export declare const TESTIMONIAL_MESSAGE: {
    readonly NOT_FOUND: "Testimonial not found";
    readonly ALREADY_EXISTS: "Testimonial already exists";
    readonly CREATED: "Testimonial created successfully";
    readonly UPDATED: "Testimonial updated successfully";
    readonly DELETED: "Testimonial deleted successfully";
    readonly FETCHED: "Testimonials fetched successfully";
};
export declare const TESTIMONIAL_DEFAULT: {
    readonly IS_ACTIVE: true;
    readonly IS_FEATURED: false;
    readonly SORT_ORDER: 0;
    readonly RATING: 5;
    readonly CLIENT_TYPE: "Individual";
};
export declare const TESTIMONIAL_CLIENT_TYPE: {
    readonly INDIVIDUAL: "Individual";
    readonly FREELANCER: "Freelancer";
    readonly STARTUP: "Startup";
    readonly COMPANY: "Company";
    readonly AGENCY: "Agency";
    readonly ORGANIZATION: "Organization";
    readonly OTHER: "Other";
};
export declare const TESTIMONIAL_CLIENT_TYPES: ("Other" | "Individual" | "Freelancer" | "Startup" | "Company" | "Agency" | "Organization")[];
export declare const TESTIMONIAL_RATING: {
    readonly ONE: 1;
    readonly TWO: 2;
    readonly THREE: 3;
    readonly FOUR: 4;
    readonly FIVE: 5;
};
export declare const TESTIMONIAL_RATINGS: (4 | 3 | 1 | 2 | 5)[];
export declare const TESTIMONIAL_SEARCHABLE_FIELDS: readonly ["clientName", "clientPosition", "clientCompany", "projectName", "review"];
export declare const TESTIMONIAL_FILTERABLE_FIELDS: readonly ["clientType", "rating", "isFeatured", "isActive"];
export declare const TESTIMONIAL_SORT_FIELDS: readonly ["clientName", "clientPosition", "clientCompany", "projectName", "rating", "clientType", "isFeatured", "sortOrder", "createdAt", "updatedAt"];
export declare const TESTIMONIAL_SELECT_FIELDS: readonly ["clientName", "clientPosition", "clientCompany", "clientWebsite", "projectName", "review", "rating", "clientType", "isFeatured", "sortOrder", "isActive", "createdAt", "updatedAt"];
//# sourceMappingURL=testimonials.constant.d.ts.map