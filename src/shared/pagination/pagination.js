// src\shared\pagination\pagination.ts
export const calculatePagination = (options) => {
    const page = Number(options.page) || 1;
    const limit = Number(options.limit) || 10;
    const skip = (page - 1) * limit;
    const sortCondition = {};
    if (options.sortBy && options.sortOrder) {
        sortCondition[options.sortBy] = options.sortOrder === "asc" ? 1 : -1;
    }
    else {
        sortCondition.createdAt = -1;
    }
    return {
        page,
        limit,
        skip,
        sortCondition,
    };
};
//# sourceMappingURL=pagination.js.map