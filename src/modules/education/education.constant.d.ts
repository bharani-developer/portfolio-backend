export declare const EDUCATION_MESSAGE: {
    readonly NOT_FOUND: "Education not found";
    readonly ALREADY_EXISTS: "Education already exists";
};
export declare const EDUCATION_DEFAULT: {
    readonly IS_ACTIVE: true;
    readonly IS_CURRENT: false;
    readonly SORT_ORDER: 0;
    readonly CGPA_SCALE: 10;
};
export declare const EDUCATION_LEVEL: {
    readonly DOCTORATE: "Doctorate";
    readonly MASTERS: "Masters";
    readonly BACHELORS: "Bachelors";
    readonly DIPLOMA: "Diploma";
    readonly HIGHER_SECONDARY: "Higher Secondary";
    readonly SECONDARY: "Secondary";
    readonly CERTIFICATION: "Certification";
    readonly OTHER: "Other";
};
export declare const EDUCATION_LEVELS: ("Other" | "Doctorate" | "Masters" | "Bachelors" | "Diploma" | "Higher Secondary" | "Secondary" | "Certification")[];
export declare const EDUCATION_TYPE: {
    readonly FULL_TIME: "Full Time";
    readonly PART_TIME: "Part Time";
    readonly DISTANCE: "Distance";
    readonly ONLINE: "Online";
};
export declare const EDUCATION_TYPES: ("Full Time" | "Part Time" | "Distance" | "Online")[];
export declare const GRADE_TYPE: {
    readonly CGPA: "CGPA";
    readonly GPA: "GPA";
    readonly PERCENTAGE: "Percentage";
    readonly DIVISION: "Division";
    readonly PASS: "Pass";
};
export declare const GRADE_TYPES: ("CGPA" | "GPA" | "Percentage" | "Division" | "Pass")[];
export declare const EDUCATION_SEARCHABLE_FIELDS: readonly ["institution", "degree", "fieldOfStudy", "location", "description", "skills"];
export declare const EDUCATION_FILTERABLE_FIELDS: readonly ["educationLevel", "educationType", "gradeType", "isCurrent", "isActive"];
export declare const EDUCATION_SORT_FIELDS: readonly ["institution", "degree", "startDate", "endDate", "sortOrder", "createdAt", "updatedAt"];
//# sourceMappingURL=education.constant.d.ts.map