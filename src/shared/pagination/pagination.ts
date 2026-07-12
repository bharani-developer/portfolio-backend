// src\shared\pagination\pagination.ts

export interface IPaginationOptions {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface IPaginationResult {
  page: number;
  limit: number;
  skip: number;
  sortCondition: Record<string, 1 | -1>;
}

export const calculatePagination = (options: IPaginationOptions): IPaginationResult => {
  const page = Number(options.page) || 1;

  const limit = Number(options.limit) || 10;

  const skip = (page - 1) * limit;

  const sortCondition: Record<string, 1 | -1> = {};

  if (options.sortBy && options.sortOrder) {
    sortCondition[options.sortBy] = options.sortOrder === 'asc' ? 1 : -1;
  } else {
    sortCondition.createdAt = -1;
  }

  return {
    page,
    limit,
    skip,
    sortCondition,
  };
};
