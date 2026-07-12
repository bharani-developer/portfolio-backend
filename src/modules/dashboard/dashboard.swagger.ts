// src/modules/dashboard/dashboard.swagger.ts

/* -------------------------------------------------------------------------- */
/*                               Dashboard Swagger                            */
/* -------------------------------------------------------------------------- */

/**
 * Dashboard API documentation.
 *
 * Structure
 * 1. Schemas
 * 2. Responses
 * 3. Paths
 */

/* -------------------------------------------------------------------------- */
/*                                  Schemas                                   */
/* -------------------------------------------------------------------------- */

export const dashboardSchemas = {
  /* ------------------------------------------------------------------------ */
  /*                              Overview                                    */
  /* ------------------------------------------------------------------------ */

  DashboardOverview: {
    type: 'object',

    additionalProperties: false,

    required: [
      'projects',
      'blogs',
      'services',
      'skills',
      'experiences',
      'educations',
      'certifications',
      'testimonials',
    ],

    properties: {
      projects: {
        type: 'integer',
        minimum: 0,
        example: 12,
        description: 'Total projects',
      },

      blogs: {
        type: 'integer',
        minimum: 0,
        example: 25,
        description: 'Total blogs',
      },

      services: {
        type: 'integer',
        minimum: 0,
        example: 8,
        description: 'Total services',
      },

      skills: {
        type: 'integer',
        minimum: 0,
        example: 35,
        description: 'Total skills',
      },

      experiences: {
        type: 'integer',
        minimum: 0,
        example: 6,
        description: 'Total experiences',
      },

      educations: {
        type: 'integer',
        minimum: 0,
        example: 3,
        description: 'Total educations',
      },

      certifications: {
        type: 'integer',
        minimum: 0,
        example: 15,
        description: 'Total certifications',
      },

      testimonials: {
        type: 'integer',
        minimum: 0,
        example: 10,
        description: 'Total testimonials',
      },

      contacts: {
        type: 'integer',
        minimum: 0,
        example: 50,
        description: 'Total contacts (Admin only. Hidden from Viewer responses.)',
      },
    },

    example: {
      projects: 12,
      blogs: 25,
      services: 8,
      skills: 35,
      experiences: 6,
      educations: 3,
      certifications: 15,
      testimonials: 10,
      contacts: 50,
    },
  },

  /* ------------------------------------------------------------------------ */
  /*                               Projects                                   */
  /* ------------------------------------------------------------------------ */

  DashboardProjects: {
    type: 'object',

    additionalProperties: false,

    required: ['total', 'active', 'featured'],

    properties: {
      total: {
        type: 'integer',
        minimum: 0,
        example: 12,
        description: 'Total projects',
      },

      active: {
        type: 'integer',
        minimum: 0,
        example: 10,
        description: 'Active projects',
      },

      featured: {
        type: 'integer',
        minimum: 0,
        example: 4,
        description: 'Featured projects',
      },
    },

    example: {
      total: 12,
      active: 10,
      featured: 4,
    },
  },

  /* ------------------------------------------------------------------------ */
  /*                                 Blogs                                    */
  /* ------------------------------------------------------------------------ */

  DashboardBlogs: {
    type: 'object',

    additionalProperties: false,

    required: ['total', 'published', 'featured'],

    properties: {
      total: {
        type: 'integer',
        minimum: 0,
        example: 25,
        description: 'Total blogs',
      },

      published: {
        type: 'integer',
        minimum: 0,
        example: 18,
        description: 'Published blogs',
      },

      featured: {
        type: 'integer',
        minimum: 0,
        example: 6,
        description: 'Featured blogs',
      },
    },

    example: {
      total: 25,
      published: 18,
      featured: 6,
    },
  },

  /* ------------------------------------------------------------------------ */
  /*                                Services                                  */
  /* ------------------------------------------------------------------------ */

  DashboardServices: {
    type: 'object',

    additionalProperties: false,

    required: ['total', 'active'],

    properties: {
      total: {
        type: 'integer',
        minimum: 0,
        example: 8,
        description: 'Total services',
      },

      active: {
        type: 'integer',
        minimum: 0,
        example: 8,
        description: 'Active services',
      },
    },

    example: {
      total: 8,
      active: 8,
    },
  },

  /* ------------------------------------------------------------------------ */
  /*                                 Skills                                   */
  /* ------------------------------------------------------------------------ */

  DashboardSkills: {
    type: 'object',

    additionalProperties: false,

    required: ['total', 'active'],

    properties: {
      total: {
        type: 'integer',
        minimum: 0,
        example: 35,
        description: 'Total skills',
      },

      active: {
        type: 'integer',
        minimum: 0,
        example: 32,
        description: 'Active skills',
      },
    },

    example: {
      total: 35,
      active: 32,
    },
  },

  /* ------------------------------------------------------------------------ */
  /*                              Experiences                                 */
  /* ------------------------------------------------------------------------ */

  DashboardExperiences: {
    type: 'object',

    additionalProperties: false,

    required: ['total', 'current'],

    properties: {
      total: {
        type: 'integer',
        minimum: 0,
        example: 6,
        description: 'Total experiences',
      },

      current: {
        type: 'integer',
        minimum: 0,
        example: 1,
        description: 'Current experiences',
      },
    },

    example: {
      total: 6,
      current: 1,
    },
  },

  /* ------------------------------------------------------------------------ */
  /*                               Educations                                 */
  /* ------------------------------------------------------------------------ */

  DashboardEducations: {
    type: 'object',

    additionalProperties: false,

    required: ['total', 'current'],

    properties: {
      total: {
        type: 'integer',
        minimum: 0,
        example: 3,
        description: 'Total education records',
      },

      current: {
        type: 'integer',
        minimum: 0,
        example: 1,
        description: 'Current education records',
      },
    },

    example: {
      total: 3,
      current: 1,
    },
  },
  /* ------------------------------------------------------------------------ */
  /*                             Certifications                               */
  /* ------------------------------------------------------------------------ */

  DashboardCertifications: {
    type: 'object',

    additionalProperties: false,

    required: ['total', 'active'],

    properties: {
      total: {
        type: 'integer',
        minimum: 0,
        example: 15,
        description: 'Total certifications',
      },

      active: {
        type: 'integer',
        minimum: 0,
        example: 15,
        description: 'Active certifications',
      },
    },

    example: {
      total: 15,
      active: 15,
    },
  },

  /* ------------------------------------------------------------------------ */
  /*                              Testimonials                                */
  /* ------------------------------------------------------------------------ */

  DashboardTestimonials: {
    type: 'object',

    additionalProperties: false,

    required: ['total', 'featured'],

    properties: {
      total: {
        type: 'integer',
        minimum: 0,
        example: 10,
        description: 'Total testimonials',
      },

      featured: {
        type: 'integer',
        minimum: 0,
        example: 5,
        description: 'Featured testimonials',
      },
    },

    example: {
      total: 10,
      featured: 5,
    },
  },

  /* ------------------------------------------------------------------------ */
  /*                                Contacts                                  */
  /* ------------------------------------------------------------------------ */

  DashboardContacts: {
    type: 'object',

    additionalProperties: false,

    required: ['total', 'unread', 'replied'],

    properties: {
      total: {
        type: 'integer',
        minimum: 0,
        example: 50,
        description: 'Total contact messages',
      },

      unread: {
        type: 'integer',
        minimum: 0,
        example: 12,
        description: 'Unread contact messages',
      },

      replied: {
        type: 'integer',
        minimum: 0,
        example: 30,
        description: 'Replied contact messages',
      },
    },

    example: {
      total: 50,
      unread: 12,
      replied: 30,
    },
  },

  /* ------------------------------------------------------------------------ */
  /*                             Configuration                                */
  /* ------------------------------------------------------------------------ */

  DashboardConfiguration: {
    type: 'object',

    additionalProperties: false,

    required: ['heroConfigured', 'settingsConfigured'],

    properties: {
      heroConfigured: {
        type: 'boolean',
        example: true,
        description: 'Whether Hero section has been configured',
      },

      settingsConfigured: {
        type: 'boolean',
        example: true,
        description: 'Whether application settings exist',
      },
    },

    example: {
      heroConfigured: true,
      settingsConfigured: true,
    },
  },

  /* ------------------------------------------------------------------------ */
  /*                            Recent Project                                */
  /* ------------------------------------------------------------------------ */

  DashboardRecentProject: {
    type: 'object',

    additionalProperties: false,

    required: ['_id', 'title', 'slug', 'category', 'featured', 'createdAt'],

    properties: {
      _id: {
        type: 'string',
        example: '686ab5d90b6a4379d1db01aa',
      },

      title: {
        type: 'string',
        example: 'Portfolio Website',
      },

      slug: {
        type: 'string',
        example: 'portfolio-website',
      },

      category: {
        type: 'string',
        example: 'Web Development',
      },

      featured: {
        type: 'boolean',
        example: true,
      },

      createdAt: {
        type: 'string',
        format: 'date-time',
        example: '2026-07-07T08:30:15.000Z',
      },
    },
  },

  /* ------------------------------------------------------------------------ */
  /*                              Recent Blog                                 */
  /* ------------------------------------------------------------------------ */

  DashboardRecentBlog: {
    type: 'object',

    additionalProperties: false,

    required: ['_id', 'title', 'slug', 'category', 'isPublished', 'isFeatured', 'createdAt'],

    properties: {
      _id: {
        type: 'string',
        example: '686ab5d90b6a4379d1db01bb',
      },

      title: {
        type: 'string',
        example: 'Getting Started with Node.js',
      },

      slug: {
        type: 'string',
        example: 'getting-started-nodejs',
      },

      category: {
        type: 'string',
        example: 'Programming',
      },

      isPublished: {
        type: 'boolean',
        example: true,
      },

      isFeatured: {
        type: 'boolean',
        example: false,
      },

      createdAt: {
        type: 'string',
        format: 'date-time',
        example: '2026-07-07T08:30:15.000Z',
      },
    },
  },

  /* ------------------------------------------------------------------------ */
  /*                             Recent Contact                               */
  /* ------------------------------------------------------------------------ */

  DashboardRecentContact: {
    type: 'object',

    additionalProperties: false,

    required: ['_id', 'name', 'email', 'subject', 'status', 'priority', 'isRead', 'createdAt'],

    properties: {
      _id: {
        type: 'string',
        example: '686ab5d90b6a4379d1db01cc',
      },

      name: {
        type: 'string',
        example: 'John Doe',
      },

      email: {
        type: 'string',
        format: 'email',
        example: 'john@example.com',
      },

      subject: {
        type: 'string',
        example: 'Project Inquiry',
      },

      status: {
        type: 'string',
        example: 'pending',
      },

      priority: {
        type: 'string',
        example: 'high',
      },

      isRead: {
        type: 'boolean',
        example: false,
      },

      createdAt: {
        type: 'string',
        format: 'date-time',
        example: '2026-07-07T08:30:15.000Z',
      },
    },
  },
  /* ------------------------------------------------------------------------ */
  /*                                Recent                                    */
  /* ------------------------------------------------------------------------ */

  DashboardRecent: {
    type: 'object',

    additionalProperties: false,

    required: ['projects', 'blogs'],

    properties: {
      projects: {
        type: 'array',

        description: 'Recently created projects',

        items: {
          $ref: '#/components/schemas/DashboardRecentProject',
        },
      },

      blogs: {
        type: 'array',

        description: 'Recently created blog posts',

        items: {
          $ref: '#/components/schemas/DashboardRecentBlog',
        },
      },

      contacts: {
        type: 'array',

        description: 'Recently received contact messages (Admin only)',

        items: {
          $ref: '#/components/schemas/DashboardRecentContact',
        },
      },
    },

    example: {
      projects: [
        {
          _id: '686ab5d90b6a4379d1db01aa',
          title: 'Portfolio Website',
          slug: 'portfolio-website',
          category: 'Web Development',
          featured: true,
          createdAt: '2026-07-07T08:30:15.000Z',
        },
      ],

      blogs: [
        {
          _id: '686ab5d90b6a4379d1db01bb',
          title: 'Getting Started with Node.js',
          slug: 'getting-started-nodejs',
          category: 'Programming',
          isPublished: true,
          isFeatured: false,
          createdAt: '2026-07-07T08:30:15.000Z',
        },
      ],

      contacts: [
        {
          _id: '686ab5d90b6a4379d1db01cc',
          name: 'John Doe',
          email: 'john@example.com',
          subject: 'Project Inquiry',
          status: 'pending',
          priority: 'high',
          isRead: false,
          createdAt: '2026-07-07T08:30:15.000Z',
        },
      ],
    },
  },

  /* ------------------------------------------------------------------------ */
  /*                           Dashboard Data                                 */
  /* ------------------------------------------------------------------------ */

  DashboardData: {
    type: 'object',

    additionalProperties: false,

    required: [
      'overview',
      'projects',
      'blogs',
      'services',
      'skills',
      'experiences',
      'educations',
      'certifications',
      'testimonials',
      'configuration',
      'recent',
    ],

    properties: {
      overview: {
        $ref: '#/components/schemas/DashboardOverview',
      },

      projects: {
        $ref: '#/components/schemas/DashboardProjects',
      },

      blogs: {
        $ref: '#/components/schemas/DashboardBlogs',
      },

      services: {
        $ref: '#/components/schemas/DashboardServices',
      },

      skills: {
        $ref: '#/components/schemas/DashboardSkills',
      },

      experiences: {
        $ref: '#/components/schemas/DashboardExperiences',
      },

      educations: {
        $ref: '#/components/schemas/DashboardEducations',
      },

      certifications: {
        $ref: '#/components/schemas/DashboardCertifications',
      },

      testimonials: {
        $ref: '#/components/schemas/DashboardTestimonials',
      },

      contacts: {
        $ref: '#/components/schemas/DashboardContacts',
        description: 'Admin only',
      },

      configuration: {
        $ref: '#/components/schemas/DashboardConfiguration',
      },

      recent: {
        $ref: '#/components/schemas/DashboardRecent',
      },
    },
  },

  /* ------------------------------------------------------------------------ */
  /*                         Dashboard Success Response                       */
  /* ------------------------------------------------------------------------ */

  DashboardResponse: {
    type: 'object',

    additionalProperties: false,

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
        example: 'Dashboard statistics retrieved successfully',
      },

      data: {
        $ref: '#/components/schemas/DashboardData',
      },
    },
  },

  /* ------------------------------------------------------------------------ */
  /*                           Unauthorized Response                          */
  /* ------------------------------------------------------------------------ */

  DashboardUnauthorizedResponse: {
    type: 'object',

    additionalProperties: false,

    required: ['success', 'statusCode', 'message'],

    properties: {
      success: {
        type: 'boolean',
        example: false,
      },

      statusCode: {
        type: 'integer',
        example: 401,
      },

      message: {
        type: 'string',
        example: 'Unauthorized access',
      },
    },
  },

  /* ------------------------------------------------------------------------ */
  /*                             Forbidden Response                           */
  /* ------------------------------------------------------------------------ */

  DashboardForbiddenResponse: {
    type: 'object',

    additionalProperties: false,

    required: ['success', 'statusCode', 'message'],

    properties: {
      success: {
        type: 'boolean',
        example: false,
      },

      statusCode: {
        type: 'integer',
        example: 403,
      },

      message: {
        type: 'string',
        example: 'Forbidden resource',
      },
    },
  },

  /* ------------------------------------------------------------------------ */
  /*                          Internal Server Error                           */
  /* ------------------------------------------------------------------------ */

  DashboardInternalServerErrorResponse: {
    type: 'object',

    additionalProperties: false,

    required: ['success', 'statusCode', 'message'],

    properties: {
      success: {
        type: 'boolean',
        example: false,
      },

      statusCode: {
        type: 'integer',
        example: 500,
      },

      message: {
        type: 'string',
        example: 'Internal Server Error',
      },
    },
  },
};
/* -------------------------------------------------------------------------- */
/*                                    Paths                                   */
/* -------------------------------------------------------------------------- */

export const dashboardPaths = {
  '/dashboard': {
    get: {
      tags: ['Dashboard'],

      operationId: 'getDashboardStatistics',

      summary: 'Get dashboard statistics',

      description: `
Returns dashboard analytics for the portfolio application.

### Viewer Access
- Portfolio overview
- Project statistics
- Blog statistics
- Service statistics
- Skill statistics
- Experience statistics
- Education statistics
- Certification statistics
- Testimonial statistics
- Configuration status
- Recent projects
- Recent blogs

### Admin Access
Includes everything available to Viewer plus:
- Contact statistics
- Recent contact messages
`,

      security: [
        {
          bearerAuth: [],
        },
      ],

      responses: {
        200: {
          description: 'Dashboard statistics retrieved successfully',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/DashboardResponse',
              },

              examples: {
                success: {
                  summary: 'Dashboard statistics',

                  value: {
                    success: true,
                    statusCode: 200,
                    message: 'Dashboard statistics retrieved successfully',

                    data: {
                      overview: {
                        projects: 12,
                        blogs: 25,
                        services: 8,
                        skills: 35,
                        experiences: 6,
                        educations: 3,
                        certifications: 15,
                        testimonials: 10,
                        contacts: 50,
                      },

                      projects: {
                        total: 12,
                        active: 10,
                        featured: 4,
                      },

                      blogs: {
                        total: 25,
                        published: 18,
                        featured: 6,
                      },

                      services: {
                        total: 8,
                        active: 8,
                      },

                      skills: {
                        total: 35,
                        active: 32,
                      },

                      experiences: {
                        total: 6,
                        current: 1,
                      },

                      educations: {
                        total: 3,
                        current: 1,
                      },

                      certifications: {
                        total: 15,
                        active: 15,
                      },

                      testimonials: {
                        total: 10,
                        featured: 5,
                      },

                      contacts: {
                        total: 50,
                        unread: 12,
                        replied: 30,
                      },

                      configuration: {
                        heroConfigured: true,
                        settingsConfigured: true,
                      },

                      recent: {
                        projects: [],
                        blogs: [],
                        contacts: [],
                      },
                    },
                  },
                },
              },
            },
          },
        },

        401: {
          description: 'Authentication failed. Access token is missing, expired, or invalid.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/DashboardUnauthorizedResponse',
              },
            },
          },
        },

        403: {
          description: 'Authenticated user does not have permission to access dashboard.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/DashboardForbiddenResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal server error',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/DashboardInternalServerErrorResponse',
              },
            },
          },
        },
      },
    },
  },
};
