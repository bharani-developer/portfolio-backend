/* -------------------------------------------------------------------------- */
/*                                 1. Imports                                 */
/* -------------------------------------------------------------------------- */

import httpStatus from 'http-status';

import { BaseCrudService } from '../../shared/base/index.js';

import { PROJECT_MESSAGE, PROJECT_SEARCHABLE_FIELDS } from './projects.constant.js';

import { Project } from './projects.model.js';

import type {
  IProject,
  TCreateProjectPayload,
  TProjectCategory,
  TProjectDocument,
  TProjectStatus,
  TUpdateProjectPayload,
} from './projects.types.js';

import { AppError, generateSlug } from '../../shared/utils/index.js';

/* -------------------------------------------------------------------------- */
/*                               2. Base Service                              */
/* -------------------------------------------------------------------------- */

const projectBaseService = new BaseCrudService<IProject>(Project, [
  ...PROJECT_SEARCHABLE_FIELDS,
] as string[]);

/* -------------------------------------------------------------------------- */
/*                                  3. Create                                 */
/* -------------------------------------------------------------------------- */

const createProject = async (payload: TCreateProjectPayload): Promise<TProjectDocument> => {
  const title = payload.title.trim();

  const existingProject = await Project.findOne({
    title,
  });

  if (existingProject) {
    throw new AppError(httpStatus.CONFLICT, PROJECT_MESSAGE.ALREADY_EXISTS);
  }

  const projectPayload: Partial<IProject> = {
    ...payload,

    title,

    shortDescription: payload.shortDescription.trim(),

    description: payload.description.trim(),

    technologies: payload.technologies.map((technology) => technology.trim()),

    slug: generateSlug(title),

    ...(payload.githubUrl
      ? {
        githubUrl: payload.githubUrl.trim(),
      }
      : {}),

    ...(payload.liveUrl
      ? {
        liveUrl: payload.liveUrl.trim(),
      }
      : {}),

    ...(payload.thumbnail
      ? {
        thumbnail: payload.thumbnail,
      }
      : {}),
  };
  return projectBaseService.create(projectPayload);
};

/* -------------------------------------------------------------------------- */
/*                                 4. Get All                                 */
/* -------------------------------------------------------------------------- */

const getProjects = async (query: Record<string, unknown>) => projectBaseService.getAll(query);

/* -------------------------------------------------------------------------- */
/*                                5. Get By Id                                */
/* -------------------------------------------------------------------------- */

const getProjectById = async (id: string): Promise<TProjectDocument> =>
  projectBaseService.getById(id);

/* -------------------------------------------------------------------------- */
/*                                  6. Update                                 */
/* -------------------------------------------------------------------------- */

const updateProject = async (
  id: string,
  payload: TUpdateProjectPayload,
): Promise<TProjectDocument> => {
  const existingProject = await projectBaseService.getById(id);

  const title = payload.title?.trim() ?? existingProject.title;

  const duplicateProject = await Project.findOne({
    title,
    _id: {
      $ne: existingProject._id,
    },
  });

  if (duplicateProject) {
    throw new AppError(httpStatus.CONFLICT, PROJECT_MESSAGE.ALREADY_EXISTS);
  }

  const updatePayload: Partial<IProject> = {
    ...payload,

    ...(payload.title && {
      title,
      slug: generateSlug(title),
    }),

    ...(payload.shortDescription && {
      shortDescription: payload.shortDescription.trim(),
    }),

    ...(payload.description && {
      description: payload.description.trim(),
    }),

    ...(payload.githubUrl && {
      githubUrl: payload.githubUrl.trim(),
    }),

    ...(payload.liveUrl && {
      liveUrl: payload.liveUrl.trim(),
    }),

    ...(payload.technologies && {
      technologies: payload.technologies.map((technology) => technology.trim()),
    }),
  };

  return projectBaseService.update(id, updatePayload);
};
/* -------------------------------------------------------------------------- */
/*                                  7. Delete                                 */
/* -------------------------------------------------------------------------- */

const deleteProject = async (id: string): Promise<TProjectDocument> =>
  projectBaseService.delete(id);

/* -------------------------------------------------------------------------- */
/*                              8. Custom Queries                             */
/* -------------------------------------------------------------------------- */

/**
 * Get all active projects.
 */
const getActiveProjects = async () =>
  Project.find({
    isActive: true,
  })
    .sort({
      featured: -1,
      sortOrder: 1,
      createdAt: -1,
    })
    .lean();

/**
 * Get featured projects.
 */
const getFeaturedProjects = async () =>
  Project.find({
    featured: true,
    isActive: true,
  })
    .sort({
      sortOrder: 1,
      createdAt: -1,
    })
    .lean();

/**
 * Get project by slug.
 */
const getProjectBySlug = async (slug: string) => {
  const result = await Project.findOne({
    slug,
    isActive: true,
  });

  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, PROJECT_MESSAGE.NOT_FOUND);
  }

  return result;
};

/**
 * Get projects by category.
 */
const getProjectsByCategory = async (category: TProjectCategory) =>
  Project.find({
    category,
    isActive: true,
  })
    .sort({
      featured: -1,
      sortOrder: 1,
      createdAt: -1,
    })
    .lean();

/**
 * Get projects by status.
 */
const getProjectsByStatus = async (status: TProjectStatus) =>
  Project.find({
    status,
    isActive: true,
  })
    .sort({
      featured: -1,
      sortOrder: 1,
      createdAt: -1,
    })
    .lean();

/**
 * Get projects by technology.
 */
const getProjectsByTechnology = async (technology: string) =>
  Project.find({
    technologies: {
      $in: [technology.trim()],
    },

    isActive: true,
  })
    .sort({
      featured: -1,
      sortOrder: 1,
      createdAt: -1,
    })
    .lean();

/**
 * Get latest projects.
 */
const getLatestProjects = async (limit = 6) =>
  Project.find({
    isActive: true,
  })
    .sort({
      createdAt: -1,
    })
    .limit(limit)
    .lean();
/**
 * Get projects ordered for portfolio display.
 */
const getProjectsOrdered = async () =>
  Project.find({
    isActive: true,
  })
    .sort({
      featured: -1,
      sortOrder: 1,
      createdAt: -1,
    })
    .lean();

/**
 * Get ongoing projects.
 */
const getOngoingProjects = async () =>
  Project.find({
    status: 'In Progress',
    isActive: true,
  })
    .sort({
      featured: -1,
      sortOrder: 1,
      startDate: -1,
    })
    .lean();

/**
 * Get completed projects.
 */
const getCompletedProjects = async () =>
  Project.find({
    status: 'Completed',
    isActive: true,
  })
    .sort({
      featured: -1,
      endDate: -1,
      sortOrder: 1,
    })
    .lean();

/**
 * Get archived projects.
 */
const getArchivedProjects = async () =>
  Project.find({
    status: 'Archived',
    isActive: true,
  })
    .sort({
      updatedAt: -1,
    })
    .lean();

/**
 * Get projects started after a date.
 */
const getProjectsByDate = async (startDate: Date) =>
  Project.find({
    startDate: {
      $gte: startDate,
    },

    isActive: true,
  })
    .sort({
      startDate: -1,
    })
    .lean();

/**
 * Get project statistics.
 */
const getProjectStats = async () => {
  const [
    total,
    active,
    featured,
    completed,
    inProgress,
    planning,
    archived,
    maintenance,
    categories,
  ] = await Promise.all([
    projectBaseService.count(),

    projectBaseService.count({
      isActive: true,
    }),

    projectBaseService.count({
      featured: true,
    }),

    projectBaseService.count({
      status: 'Completed',
    }),

    projectBaseService.count({
      status: 'In Progress',
    }),

    projectBaseService.count({
      status: 'Planning',
    }),

    projectBaseService.count({
      status: 'Archived',
    }),

    projectBaseService.count({
      status: 'Maintenance',
    }),

    Project.distinct('category'),
  ]);

  return {
    total,

    active,

    featured,

    completed,

    inProgress,

    planning,

    archived,

    maintenance,

    categories: categories.length,
  };
};
/* -------------------------------------------------------------------------- */
/*                                  9. Export                                 */
/* -------------------------------------------------------------------------- */

export const ProjectService = {
  createProject,

  getProjects,

  getProjectById,

  updateProject,

  deleteProject,

  getActiveProjects,

  getFeaturedProjects,

  getProjectBySlug,

  getProjectsByCategory,

  getProjectsByStatus,

  getProjectsByTechnology,

  getLatestProjects,

  getProjectsOrdered,

  getOngoingProjects,

  getCompletedProjects,

  getArchivedProjects,

  getProjectsByDate,

  getProjectStats,
};
