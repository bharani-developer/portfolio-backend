// src/modules/projects/projects.swagger.ts

/* -------------------------------------------------------------------------- */
/*                                   Schemas                                  */
/* -------------------------------------------------------------------------- */

import { PROJECT_CATEGORIES, PROJECT_STATUSES } from './projects.constant.js';

export const projectSchemas = {
  /* ------------------------------------------------------------------------ */
  /*                              Image Schema                                */
  /* ------------------------------------------------------------------------ */

  ProjectImage: {
    type: 'object',

    required: ['url', 'publicId'],

    properties: {
      url: {
        type: 'string',
        format: 'uri',
        example:
          'https://res.cloudinary.com/demo/image/upload/v123456/projects/project-thumbnail.png',
      },

      publicId: {
        type: 'string',
        example: 'portfolio/projects/project-thumbnail',
      },
    },
  },

  /* ------------------------------------------------------------------------ */
  /*                              Project Schema                              */
  /* ------------------------------------------------------------------------ */

  Project: {
    type: 'object',

    required: [
      '_id',
      'title',
      'slug',
      'shortDescription',
      'description',
      'gallery',
      'technologies',
      'category',
      'featured',
      'status',
      'sortOrder',
      'isActive',
      'createdAt',
      'updatedAt',
    ],

    properties: {
      _id: {
        type: 'string',
        example: '684fd3cf0f67d6a44c15a001',
      },

      title: {
        type: 'string',
        example: 'Portfolio Website',
      },

      slug: {
        type: 'string',
        example: 'portfolio-website',
      },

      shortDescription: {
        type: 'string',
        example: 'Modern portfolio website built with Next.js and TypeScript.',
      },

      description: {
        type: 'string',
        example:
          'A fully responsive portfolio website featuring blogs, projects, contact form, dashboard, SEO optimization, animations, and admin panel.',
      },

      thumbnail: {
        $ref: '#/components/schemas/ProjectImage',
      },

      gallery: {
        type: 'array',

        items: {
          $ref: '#/components/schemas/ProjectImage',
        },
      },

      technologies: {
        type: 'array',

        items: {
          type: 'string',
        },

        example: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'],
      },

      category: {
        type: 'string',

        enum: PROJECT_CATEGORIES,

        example: PROJECT_CATEGORIES[0],
      },

      githubUrl: {
        type: 'string',
        format: 'uri',
        example: 'https://github.com/username/portfolio-website',
      },

      liveUrl: {
        type: 'string',
        format: 'uri',
        example: 'https://portfolio.example.com',
      },

      featured: {
        type: 'boolean',
        example: true,
      },

      status: {
        type: 'string',

        enum: PROJECT_STATUSES,

        example: PROJECT_STATUSES[0],
      },

      startDate: {
        type: 'string',
        format: 'date-time',
        example: '2026-01-01T00:00:00.000Z',
      },

      endDate: {
        type: 'string',
        format: 'date-time',
        nullable: true,
        example: '2026-06-30T00:00:00.000Z',
      },

      sortOrder: {
        type: 'integer',
        example: 1,
      },

      isActive: {
        type: 'boolean',
        example: true,
      },

      createdAt: {
        type: 'string',
        format: 'date-time',
        example: '2026-01-10T09:30:00.000Z',
      },

      updatedAt: {
        type: 'string',
        format: 'date-time',
        example: '2026-06-15T15:45:00.000Z',
      },

      technologyCount: {
        type: 'integer',
        example: 6,
        readOnly: true,
      },

      galleryImageCount: {
        type: 'integer',
        example: 4,
        readOnly: true,
      },

      hasLiveDemo: {
        type: 'boolean',
        example: true,
        readOnly: true,
      },

      hasGithubRepository: {
        type: 'boolean',
        example: true,
        readOnly: true,
      },

      hasStarted: {
        type: 'boolean',
        example: true,
        readOnly: true,
      },

      isCompleted: {
        type: 'boolean',
        example: false,
        readOnly: true,
      },

      isOngoing: {
        type: 'boolean',
        example: true,
        readOnly: true,
      },
    },
  },
  /* ------------------------------------------------------------------------ */
  /*                         Create Request Schema                            */
  /* ------------------------------------------------------------------------ */

  CreateProjectRequest: {
    type: 'object',

    required: ['title', 'shortDescription', 'description', 'technologies', 'category', 'status'],

    properties: {
      title: {
        type: 'string',
        example: 'Portfolio Website',
      },

      shortDescription: {
        type: 'string',
        example: 'Modern portfolio website built using Next.js and TypeScript.',
      },

      description: {
        type: 'string',
        example:
          'A complete portfolio application with authentication, blog management, project showcase, dashboard, and admin panel.',
      },

      thumbnail: {
        $ref: '#/components/schemas/ProjectImage',
      },

      gallery: {
        type: 'array',

        items: {
          $ref: '#/components/schemas/ProjectImage',
        },

        example: [
          {
            url: 'https://res.cloudinary.com/demo/image/upload/projects/home.png',
            publicId: 'projects/home',
          },
          {
            url: 'https://res.cloudinary.com/demo/image/upload/projects/dashboard.png',
            publicId: 'projects/dashboard',
          },
        ],
      },

      technologies: {
        type: 'array',

        items: {
          type: 'string',
        },

        example: [
          'Next.js',
          'React',
          'TypeScript',
          'Tailwind CSS',
          'Node.js',
          'Express.js',
          'MongoDB',
        ],
      },

      category: {
        type: 'string',

        enum: PROJECT_CATEGORIES,

        example: PROJECT_CATEGORIES[0],
      },

      githubUrl: {
        type: 'string',

        format: 'uri',

        example: 'https://github.com/username/portfolio-website',
      },

      liveUrl: {
        type: 'string',

        format: 'uri',

        example: 'https://portfolio.example.com',
      },

      featured: {
        type: 'boolean',

        default: false,

        example: false,
      },

      status: {
        type: 'string',

        enum: PROJECT_STATUSES,

        example: PROJECT_STATUSES[0],
      },

      startDate: {
        type: 'string',

        format: 'date-time',

        example: '2026-01-01T00:00:00.000Z',
      },

      endDate: {
        type: 'string',

        format: 'date-time',

        nullable: true,

        example: '2026-06-30T00:00:00.000Z',
      },

      sortOrder: {
        type: 'integer',

        default: 0,

        example: 1,
      },

      isActive: {
        type: 'boolean',

        default: true,

        example: true,
      },
    },
  },

  /* ------------------------------------------------------------------------ */
  /*                         Update Request Schema                            */
  /* ------------------------------------------------------------------------ */

  UpdateProjectRequest: {
    type: 'object',

    properties: {
      title: {
        type: 'string',
        example: 'Updated Portfolio Website',
      },

      shortDescription: {
        type: 'string',
        example: 'Updated modern portfolio website built with Next.js.',
      },

      description: {
        type: 'string',
        example: 'Updated description with additional features and improvements.',
      },

      thumbnail: {
        $ref: '#/components/schemas/ProjectImage',
      },

      gallery: {
        type: 'array',

        items: {
          $ref: '#/components/schemas/ProjectImage',
        },
      },

      technologies: {
        type: 'array',

        items: {
          type: 'string',
        },

        example: ['Next.js', 'React', 'TypeScript', 'Node.js', 'MongoDB'],
      },

      category: {
        type: 'string',

        enum: PROJECT_CATEGORIES,
      },

      githubUrl: {
        type: 'string',

        format: 'uri',
      },

      liveUrl: {
        type: 'string',

        format: 'uri',
      },

      featured: {
        type: 'boolean',
      },

      status: {
        type: 'string',

        enum: PROJECT_STATUSES,
      },

      startDate: {
        type: 'string',

        format: 'date-time',
      },

      endDate: {
        type: 'string',

        format: 'date-time',

        nullable: true,
      },

      sortOrder: {
        type: 'integer',
      },

      isActive: {
        type: 'boolean',
      },
    },
  },
  /* ------------------------------------------------------------------------ */
  /*                           Pagination Meta                                */
  /* ------------------------------------------------------------------------ */

  PaginationMeta: {
    type: 'object',

    required: ['page', 'limit', 'total', 'totalPage'],

    properties: {
      page: {
        type: 'integer',
        example: 1,
      },

      limit: {
        type: 'integer',
        example: 10,
      },

      total: {
        type: 'integer',
        example: 25,
      },

      totalPage: {
        type: 'integer',
        example: 3,
      },
    },
  },

  /* ------------------------------------------------------------------------ */
  /*                          Single Project Response                         */
  /* ------------------------------------------------------------------------ */

  ProjectResponse: {
    type: 'object',

    required: ['success', 'statusCode', 'message', 'data'],

    properties: {
      success: {
        type: 'boolean',
        example: true,
      },

      statusCode: {
        type: 'integer',
        example: 200,
      },

      message: {
        type: 'string',
        example: 'Project retrieved successfully.',
      },

      data: {
        $ref: '#/components/schemas/Project',
      },
    },
  },

  /* ------------------------------------------------------------------------ */
  /*                         Multiple Projects Response                       */
  /* ------------------------------------------------------------------------ */

  ProjectsResponse: {
    type: 'object',

    required: ['success', 'statusCode', 'message', 'meta', 'data'],

    properties: {
      success: {
        type: 'boolean',
        example: true,
      },

      statusCode: {
        type: 'integer',
        example: 200,
      },

      message: {
        type: 'string',
        example: 'Projects retrieved successfully.',
      },

      meta: {
        $ref: '#/components/schemas/PaginationMeta',
      },

      data: {
        type: 'array',

        items: {
          $ref: '#/components/schemas/Project',
        },
      },
    },
  },

  /* ------------------------------------------------------------------------ */
  /*                         Project Statistics Response                      */
  /* ------------------------------------------------------------------------ */

  ProjectStatsResponse: {
    type: 'object',

    required: ['success', 'statusCode', 'message', 'data'],

    properties: {
      success: {
        type: 'boolean',
        example: true,
      },

      statusCode: {
        type: 'integer',
        example: 200,
      },

      message: {
        type: 'string',
        example: 'Project statistics retrieved successfully.',
      },

      data: {
        type: 'object',

        properties: {
          total: {
            type: 'integer',
            example: 25,
          },

          active: {
            type: 'integer',
            example: 20,
          },

          featured: {
            type: 'integer',
            example: 8,
          },

          completed: {
            type: 'integer',
            example: 12,
          },

          inProgress: {
            type: 'integer',
            example: 6,
          },

          planning: {
            type: 'integer',
            example: 4,
          },

          archived: {
            type: 'integer',
            example: 2,
          },

          maintenance: {
            type: 'integer',
            example: 1,
          },

          categories: {
            type: 'integer',
            example: 5,
          },
        },
      },
    },
  },

  /* ------------------------------------------------------------------------ */
  /*                           Error Response                                 */
  /* ------------------------------------------------------------------------ */

  ErrorResponse: {
    type: 'object',

    required: ['success', 'statusCode', 'message'],

    properties: {
      success: {
        type: 'boolean',
        example: false,
      },

      statusCode: {
        type: 'integer',
        example: 400,
      },

      message: {
        type: 'string',
        example: 'Validation failed.',
      },

      errorSources: {
        type: 'array',

        items: {
          type: 'object',

          properties: {
            path: {
              type: 'string',
              example: 'title',
            },

            message: {
              type: 'string',
              example: 'Title is required.',
            },
          },
        },
      },

      stack: {
        type: 'string',
        nullable: true,
        example: 'Stack trace available only in development.',
      },
    },
  },
};
/* -------------------------------------------------------------------------- */
/*                                    Paths                                   */
/* -------------------------------------------------------------------------- */

export const projectPaths = {
  /* ------------------------------------------------------------------------ */
  /*                              GET /projects                               */
  /* ------------------------------------------------------------------------ */

  '/projects': {
    get: {
      tags: ['Projects'],

      operationId: 'getProjects',

      summary: 'Get all projects',

      description:
        'Retrieve a paginated list of projects with filtering, searching and sorting support.',

      parameters: [
        {
          in: 'query',

          name: 'searchTerm',

          description: 'Search by title, description, category or technologies.',

          schema: {
            type: 'string',
          },

          example: 'portfolio',
        },

        {
          in: 'query',

          name: 'page',

          description: 'Page number.',

          schema: {
            type: 'integer',
            minimum: 1,
            default: 1,
          },
        },

        {
          in: 'query',

          name: 'limit',

          description: 'Number of records per page.',

          schema: {
            type: 'integer',
            minimum: 1,
            maximum: 100,
            default: 10,
          },
        },

        {
          in: 'query',

          name: 'sortBy',

          description: 'Field used for sorting.',

          schema: {
            type: 'string',

            enum: [
              'title',
              'category',
              'status',
              'featured',
              'sortOrder',
              'createdAt',
              'updatedAt',
              'startDate',
              'endDate',
            ],

            default: 'sortOrder',
          },
        },

        {
          in: 'query',

          name: 'sortOrder',

          description: 'Sorting order.',

          schema: {
            type: 'string',

            enum: ['asc', 'desc'],

            default: 'asc',
          },
        },

        {
          in: 'query',

          name: 'category',

          description: 'Filter by project category.',

          schema: {
            type: 'string',

            enum: PROJECT_CATEGORIES,
          },
        },

        {
          in: 'query',

          name: 'status',

          description: 'Filter by project status.',

          schema: {
            type: 'string',

            enum: PROJECT_STATUSES,
          },
        },

        {
          in: 'query',

          name: 'featured',

          description: 'Filter featured projects.',

          schema: {
            type: 'boolean',
          },
        },

        {
          in: 'query',

          name: 'isActive',

          description: 'Filter active projects.',

          schema: {
            type: 'boolean',
          },
        },
      ],

      responses: {
        200: {
          description: 'Projects retrieved successfully.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ProjectsResponse',
              },
            },
          },
        },

        400: {
          description: 'Invalid request.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal server error.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },
      },
    },

    /* ---------------------------------------------------------------------- */
    /*                             POST /projects                             */
    /* ---------------------------------------------------------------------- */

    post: {
      tags: ['Projects'],

      operationId: 'createProject',

      summary: 'Create a new project',

      description: 'Create a new portfolio project. Requires administrator authentication.',

      security: [
        {
          bearerAuth: [],
        },
      ],

      requestBody: {
        required: true,

        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/CreateProjectRequest',
            },
          },
        },
      },

      responses: {
        201: {
          description: 'Project created successfully.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ProjectResponse',
              },
            },
          },
        },

        400: {
          description: 'Validation failed.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },

        401: {
          description: 'Unauthorized.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },

        409: {
          description: 'Project already exists.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal server error.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },
      },
    },
  },
  /* ------------------------------------------------------------------------ */
  /*                           /projects/{id}                                 */
  /* ------------------------------------------------------------------------ */

  '/projects/{id}': {
    get: {
      tags: ['Projects'],

      operationId: 'getProjectById',

      summary: 'Get project by ID',

      description: 'Retrieve a single project using its unique identifier.',

      parameters: [
        {
          in: 'path',

          name: 'id',

          required: true,

          description: 'Project MongoDB ObjectId.',

          schema: {
            type: 'string',
          },

          example: '684fd3cf0f67d6a44c15a001',
        },
      ],

      responses: {
        200: {
          description: 'Project retrieved successfully.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ProjectResponse',
              },
            },
          },
        },

        400: {
          description: 'Invalid project ID.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },

        404: {
          description: 'Project not found.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal server error.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },
      },
    },

    patch: {
      tags: ['Projects'],

      operationId: 'updateProject',

      summary: 'Update project',

      description: 'Update an existing project. Only administrators can perform this action.',

      security: [
        {
          bearerAuth: [],
        },
      ],

      parameters: [
        {
          in: 'path',

          name: 'id',

          required: true,

          description: 'Project MongoDB ObjectId.',

          schema: {
            type: 'string',
          },

          example: '684fd3cf0f67d6a44c15a001',
        },
      ],

      requestBody: {
        required: true,

        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/UpdateProjectRequest',
            },
          },
        },
      },

      responses: {
        200: {
          description: 'Project updated successfully.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ProjectResponse',
              },
            },
          },
        },

        400: {
          description: 'Validation failed.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },

        401: {
          description: 'Unauthorized.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },

        404: {
          description: 'Project not found.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },

        409: {
          description: 'Project title already exists.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal server error.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },
      },
    },

    delete: {
      tags: ['Projects'],

      operationId: 'deleteProject',

      summary: 'Delete project',

      description: 'Delete an existing project. Only administrators can perform this action.',

      security: [
        {
          bearerAuth: [],
        },
      ],

      parameters: [
        {
          in: 'path',

          name: 'id',

          required: true,

          description: 'Project MongoDB ObjectId.',

          schema: {
            type: 'string',
          },

          example: '684fd3cf0f67d6a44c15a001',
        },
      ],

      responses: {
        200: {
          description: 'Project deleted successfully.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ProjectResponse',
              },
            },
          },
        },

        400: {
          description: 'Invalid project ID.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },

        401: {
          description: 'Unauthorized.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },

        404: {
          description: 'Project not found.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal server error.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },
      },
    },
  },
  /* ------------------------------------------------------------------------ */
  /*                         GET /projects/featured                           */
  /* ------------------------------------------------------------------------ */

  '/projects/featured': {
    get: {
      tags: ['Projects'],

      operationId: 'getFeaturedProjects',

      summary: 'Get featured projects',

      description: 'Retrieve all featured and active portfolio projects.',

      responses: {
        200: {
          description: 'Featured projects retrieved successfully.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ProjectsResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal server error.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },
      },
    },
  },

  /* ------------------------------------------------------------------------ */
  /*                          GET /projects/active                            */
  /* ------------------------------------------------------------------------ */

  '/projects/active': {
    get: {
      tags: ['Projects'],

      operationId: 'getActiveProjects',

      summary: 'Get active projects',

      description: 'Retrieve all active portfolio projects.',

      responses: {
        200: {
          description: 'Active projects retrieved successfully.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ProjectsResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal server error.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },
      },
    },
  },

  /* ------------------------------------------------------------------------ */
  /*                          GET /projects/latest                            */
  /* ------------------------------------------------------------------------ */

  '/projects/latest': {
    get: {
      tags: ['Projects'],

      operationId: 'getLatestProjects',

      summary: 'Get latest projects',

      description: 'Retrieve the most recently created projects.',

      parameters: [
        {
          in: 'query',

          name: 'limit',

          description: 'Maximum number of latest projects to return.',

          schema: {
            type: 'integer',

            minimum: 1,

            default: 6,
          },
        },
      ],

      responses: {
        200: {
          description: 'Latest projects retrieved successfully.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ProjectsResponse',
              },
            },
          },
        },

        400: {
          description: 'Invalid limit value.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal server error.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },
      },
    },
  },

  /* ------------------------------------------------------------------------ */
  /*                         GET /projects/ordered                            */
  /* ------------------------------------------------------------------------ */

  '/projects/ordered': {
    get: {
      tags: ['Projects'],

      operationId: 'getProjectsOrdered',

      summary: 'Get ordered projects',

      description: 'Retrieve projects ordered by featured status, sort order and creation date.',

      responses: {
        200: {
          description: 'Ordered projects retrieved successfully.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ProjectsResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal server error.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },
      },
    },
  },

  /* ------------------------------------------------------------------------ */
  /*                         GET /projects/ongoing                            */
  /* ------------------------------------------------------------------------ */

  '/projects/ongoing': {
    get: {
      tags: ['Projects'],

      operationId: 'getOngoingProjects',

      summary: 'Get ongoing projects',

      description: 'Retrieve all projects that are currently in progress.',

      responses: {
        200: {
          description: 'Ongoing projects retrieved successfully.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ProjectsResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal server error.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },
      },
    },
  },

  /* ------------------------------------------------------------------------ */
  /*                       GET /projects/completed                            */
  /* ------------------------------------------------------------------------ */

  '/projects/completed': {
    get: {
      tags: ['Projects'],

      operationId: 'getCompletedProjects',

      summary: 'Get completed projects',

      description: 'Retrieve all completed portfolio projects.',

      responses: {
        200: {
          description: 'Completed projects retrieved successfully.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ProjectsResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal server error.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },
      },
    },
  },

  /* ------------------------------------------------------------------------ */
  /*                        GET /projects/archived                            */
  /* ------------------------------------------------------------------------ */

  '/projects/archived': {
    get: {
      tags: ['Projects'],

      operationId: 'getArchivedProjects',

      summary: 'Get archived projects',

      description: 'Retrieve all archived portfolio projects.',

      responses: {
        200: {
          description: 'Archived projects retrieved successfully.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ProjectsResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal server error.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },
      },
    },
  },

  /* ------------------------------------------------------------------------ */
  /*                          GET /projects/stats                             */
  /* ------------------------------------------------------------------------ */

  '/projects/stats': {
    get: {
      tags: ['Projects'],

      operationId: 'getProjectStats',

      summary: 'Get project statistics',

      description: 'Retrieve aggregated statistics about portfolio projects.',

      responses: {
        200: {
          description: 'Project statistics retrieved successfully.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ProjectStatsResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal server error.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },
      },
    },
  },
  /* ------------------------------------------------------------------------ */
  /*                         GET /projects/slug/{slug}                        */
  /* ------------------------------------------------------------------------ */

  '/projects/slug/{slug}': {
    get: {
      tags: ['Projects'],

      operationId: 'getProjectBySlug',

      summary: 'Get project by slug',

      description: 'Retrieve a project using its unique slug.',

      parameters: [
        {
          in: 'path',

          name: 'slug',

          required: true,

          description: 'Unique project slug.',

          schema: {
            type: 'string',
          },

          example: 'portfolio-website',
        },
      ],

      responses: {
        200: {
          description: 'Project retrieved successfully.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ProjectResponse',
              },
            },
          },
        },

        404: {
          description: 'Project not found.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal server error.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },
      },
    },
  },

  /* ------------------------------------------------------------------------ */
  /*                      GET /projects/category/{category}                   */
  /* ------------------------------------------------------------------------ */

  '/projects/category/{category}': {
    get: {
      tags: ['Projects'],

      operationId: 'getProjectsByCategory',

      summary: 'Get projects by category',

      description: 'Retrieve all projects belonging to a specific category.',

      parameters: [
        {
          in: 'path',

          name: 'category',

          required: true,

          description: 'Project category.',

          schema: {
            type: 'string',

            enum: PROJECT_CATEGORIES,
          },

          example: PROJECT_CATEGORIES[0],
        },
      ],

      responses: {
        200: {
          description: 'Projects retrieved successfully.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ProjectsResponse',
              },
            },
          },
        },

        400: {
          description: 'Invalid project category.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal server error.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },
      },
    },
  },

  /* ------------------------------------------------------------------------ */
  /*                   GET /projects/technology/{technology}                  */
  /* ------------------------------------------------------------------------ */

  '/projects/technology/{technology}': {
    get: {
      tags: ['Projects'],

      operationId: 'getProjectsByTechnology',

      summary: 'Get projects by technology',

      description: 'Retrieve all projects using a specific technology.',

      parameters: [
        {
          in: 'path',

          name: 'technology',

          required: true,

          description: 'Technology name.',

          schema: {
            type: 'string',
          },

          example: 'React',
        },
      ],

      responses: {
        200: {
          description: 'Projects retrieved successfully.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ProjectsResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal server error.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },
      },
    },
  },

  /* ------------------------------------------------------------------------ */
  /*                        GET /projects/status/{status}                     */
  /* ------------------------------------------------------------------------ */

  '/projects/status/{status}': {
    get: {
      tags: ['Projects'],

      operationId: 'getProjectsByStatus',

      summary: 'Get projects by status',

      description: 'Retrieve all projects having the specified status.',

      parameters: [
        {
          in: 'path',

          name: 'status',

          required: true,

          description: 'Project status.',

          schema: {
            type: 'string',

            enum: PROJECT_STATUSES,
          },

          example: PROJECT_STATUSES[0],
        },
      ],

      responses: {
        200: {
          description: 'Projects retrieved successfully.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ProjectsResponse',
              },
            },
          },
        },

        400: {
          description: 'Invalid project status.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal server error.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },
      },
    },
  },

  /* ------------------------------------------------------------------------ */
  /*                         GET /projects/date/{date}                        */
  /* ------------------------------------------------------------------------ */

  '/projects/date/{date}': {
    get: {
      tags: ['Projects'],

      operationId: 'getProjectsByDate',

      summary: 'Get projects by start date',

      description:
        'Retrieve all active projects whose start date is greater than or equal to the specified date.',

      parameters: [
        {
          in: 'path',

          name: 'date',

          required: true,

          description: 'Start date in ISO 8601 format (YYYY-MM-DD or full ISO datetime).',

          schema: {
            type: 'string',

            format: 'date',
          },

          example: '2026-01-01',
        },
      ],

      responses: {
        200: {
          description: 'Projects retrieved successfully.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ProjectsResponse',
              },
            },
          },
        },

        400: {
          description: 'Invalid date.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal server error.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },
      },
    },
  },
};
