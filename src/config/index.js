export const API_URL = import.meta.env.VITE_API_URL || ""

export const ROUTER = {
  HOME: "/",
  JOBS: "/jobs",
  JOB_DETAIL: (id) => `/jobs/${encodeURI(id)}`,
  ADD_NEW_JOB: "/jobs/add",
  EDIT_JOB: (id) => `/jobs/edit/${encodeURI(id)}`,
}

export const ENDPOINTS = {
  JOBS: "/jobs",
  JOB_DETAIL: (id) => `/jobs/${id}`
}

export const DEFAULT_DATA = {
  JOBS: {
    type: 'Full-Time',
    title: '',
    description: '',
    salary: '',
    location: '',
    company: {
      name: '',
      description: '',
      contactEmail: '',
      contactPhone: ''
    }
  }
}
