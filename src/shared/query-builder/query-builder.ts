// src\shared\query-builder\queryBuilder.ts

import type { Query } from 'mongoose';

export class QueryBuilder<T> {
  public modelQuery: Query<T[], T>;
  public query: Record<string, unknown>;

  constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
    this.modelQuery = modelQuery;
    this.query = query;
  }

  search(searchableFields: string[]) {
    const searchTerm = this.query.searchTerm as string | undefined;

    if (searchTerm) {
      this.modelQuery = this.modelQuery.find({
        $or: searchableFields.map((field) => ({
          [field]: {
            $regex: searchTerm,
            $options: 'i',
          },
        })),
      });
    }

    return this;
  }

  filter() {
    const queryObj = { ...this.query };

    const excludedFields = ['searchTerm', 'sortBy', 'sortOrder', 'page', 'limit', 'fields'];

    excludedFields.forEach((field) => {
      delete queryObj[field];
    });

    this.modelQuery = this.modelQuery.find(queryObj);

    return this;
  }

  sort() {
    const sortBy = (this.query.sortBy as string) || 'createdAt';

    const sortOrder = (this.query.sortOrder as string) || 'desc';

    const sort = sortOrder === 'asc' ? sortBy : `-${sortBy}`;

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
    const fields =
      typeof this.query.fields === 'string' ? this.query.fields.split(',').join(' ') : '-__v';

    this.modelQuery = this.modelQuery.select(fields);

    return this;
  }

  async countTotal() {
    const queryObj = { ...this.query };

    const excludedFields = ['searchTerm', 'sortBy', 'sortOrder', 'page', 'limit', 'fields'];

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
