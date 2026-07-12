/**
 * =============================================================================
 * File: pagination.constants.ts
 * Description: Pagination constants used throughout the application.
 * =============================================================================
 */

export const PAGINATION = Object.freeze({
  /**
   * Default Pagination
   */
  DEFAULT_PAGE: 1,

  DEFAULT_LIMIT: 10,

  /**
   * Allowed Limits
   */
  MIN_LIMIT: 1,

  MAX_LIMIT: 100,

  /**
   * Skip
   */
  DEFAULT_SKIP: 0,

  /**
   * Maximum page number accepted.
   * Helps prevent extremely large page values.
   */
  MAX_PAGE: Number.MAX_SAFE_INTEGER,

  /**
   * Default Sorting
   */
  DEFAULT_SORT_FIELD: 'createdAt',

  DEFAULT_SORT_ORDER: -1,

  /**
   * Sort Directions
   */
  SORT: Object.freeze({
    ASC: 'asc',
    DESC: 'desc',

    ASCENDING: 1,
    DESCENDING: -1,
  }),

  /**
   * Query Parameter Names
   */
  QUERY: Object.freeze({
    PAGE: 'page',

    LIMIT: 'limit',

    SORT: 'sort',

    ORDER: 'order',

    SEARCH: 'search',

    FIELDS: 'fields',
  }),

  /**
   * Response Metadata Keys
   */
  META: Object.freeze({
    PAGE: 'page',

    LIMIT: 'limit',

    TOTAL: 'total',

    TOTAL_PAGES: 'totalPages',

    HAS_NEXT_PAGE: 'hasNextPage',

    HAS_PREVIOUS_PAGE: 'hasPreviousPage',

    NEXT_PAGE: 'nextPage',

    PREVIOUS_PAGE: 'previousPage',

    PAGING_COUNTER: 'pagingCounter',
  }),

  /**
   * Common Sort Fields
   */
  SORT_FIELDS: Object.freeze({
    CREATED_AT: 'createdAt',

    UPDATED_AT: 'updatedAt',

    NAME: 'name',

    TITLE: 'title',

    SORT_ORDER: 'sortOrder',

    PUBLISHED_AT: 'publishedAt',
  }),

  /**
   * MongoDB Projection
   */
  PROJECTION: Object.freeze({
    INCLUDE: 1,

    EXCLUDE: 0,
  }),

  /**
   * Supported Search Operators
   */
  SEARCH: Object.freeze({
    CONTAINS: 'contains',

    STARTS_WITH: 'startsWith',

    ENDS_WITH: 'endsWith',

    EXACT: 'exact',
  }),
} as const);

/* -------------------------------------------------------------------------- */
/*                               Default Values                               */
/* -------------------------------------------------------------------------- */

export const DEFAULT_PAGE = PAGINATION.DEFAULT_PAGE;

export const DEFAULT_LIMIT = PAGINATION.DEFAULT_LIMIT;

export const DEFAULT_SKIP = PAGINATION.DEFAULT_SKIP;

/* -------------------------------------------------------------------------- */
/*                                   Limits                                   */
/* -------------------------------------------------------------------------- */

export const MIN_LIMIT = PAGINATION.MIN_LIMIT;

export const MAX_LIMIT = PAGINATION.MAX_LIMIT;

export const MAX_PAGE = PAGINATION.MAX_PAGE;

/* -------------------------------------------------------------------------- */
/*                                   Sorting                                  */
/* -------------------------------------------------------------------------- */

export const DEFAULT_SORT_FIELD = PAGINATION.DEFAULT_SORT_FIELD;

export const DEFAULT_SORT_ORDER = PAGINATION.DEFAULT_SORT_ORDER;

export const SORT = PAGINATION.SORT;

/* -------------------------------------------------------------------------- */
/*                              Query Parameters                              */
/* -------------------------------------------------------------------------- */

export const PAGINATION_QUERY = PAGINATION.QUERY;

/* -------------------------------------------------------------------------- */
/*                               Response Meta                                */
/* -------------------------------------------------------------------------- */

export const PAGINATION_META = PAGINATION.META;

/* -------------------------------------------------------------------------- */
/*                                Sort Fields                                 */
/* -------------------------------------------------------------------------- */

export const SORT_FIELDS = PAGINATION.SORT_FIELDS;

/* -------------------------------------------------------------------------- */
/*                                 Projection                                 */
/* -------------------------------------------------------------------------- */

export const PROJECTION = PAGINATION.PROJECTION;

/* -------------------------------------------------------------------------- */
/*                             Search Operations                              */
/* -------------------------------------------------------------------------- */

export const SEARCH_OPERATORS = PAGINATION.SEARCH;
