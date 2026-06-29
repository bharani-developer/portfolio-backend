// src\shared\query-builder\queryBuilder.ts
export class QueryBuilder {
    modelQuery;
    query;
    constructor(modelQuery, query) {
        this.modelQuery = modelQuery;
        this.query = query;
    }
    search(searchableFields) {
        const searchTerm = this.query.searchTerm;
        if (searchTerm) {
            this.modelQuery = this.modelQuery.find({
                $or: searchableFields.map((field) => ({
                    [field]: {
                        $regex: searchTerm,
                        $options: "i",
                    },
                })),
            });
        }
        return this;
    }
    filter() {
        const queryObj = { ...this.query };
        const excludedFields = [
            "searchTerm",
            "sortBy",
            "sortOrder",
            "page",
            "limit",
            "fields",
        ];
        excludedFields.forEach((field) => {
            delete queryObj[field];
        });
        this.modelQuery = this.modelQuery.find(queryObj);
        return this;
    }
    sort() {
        const sortBy = this.query.sortBy || "createdAt";
        const sortOrder = this.query.sortOrder || "desc";
        const sort = sortOrder === "asc" ? sortBy : `-${sortBy}`;
        this.modelQuery = this.modelQuery.sort(sort);
        return this;
    }
    paginate() {
        const page = Number(this.query.page) || 1;
        const limit = Number(this.query.limit) || 10;
        const skip = (page - 1) * limit;
        this.modelQuery = this.modelQuery.skip(skip).limit(limit);
        return this;
    }
    fields() {
        const fields = typeof this.query.fields === "string"
            ? this.query.fields.split(",").join(" ")
            : "-__v";
        this.modelQuery = this.modelQuery.select(fields);
        return this;
    }
    async countTotal() {
        const queryObj = { ...this.query };
        const excludedFields = [
            "searchTerm",
            "sortBy",
            "sortOrder",
            "page",
            "limit",
            "fields",
        ];
        excludedFields.forEach((field) => {
            delete queryObj[field];
        });
        const total = await this.modelQuery.model.countDocuments(queryObj);
        const page = Number(this.query.page) || 1;
        const limit = Number(this.query.limit) || 10;
        return {
            page,
            limit,
            total,
            totalPage: Math.ceil(total / limit),
        };
    }
}
//# sourceMappingURL=queryBuilder.js.map