// API Configuration

// API_ROOT is the concrete base path for all backend endpoints.
export const API_ROOT = (import.meta.env.VITE_API_URL ? `${import.meta.env.VITE_API_URL.replace(/\/$/, '')}` : '') + '/api';

// App Configuration
export const APP_CONFIG = {
  name: 'KaamSetu',
  version: '1.0.0',
  description: 'Connect with skilled workers for all your service needs',
  
  // Feature flags
  features: {
    geolocation: true,
    notifications: true,
    realTimeUpdates: true,
    fileUpload: true
  },
  
  // Limits
  limits: {
    maxFileSize: 10 * 1024 * 1024, // 10MB
    maxImages: 5,
    maxDescriptionLength: 1000,
    otpExpiryMinutes: 10
  },
  
  // Default values
  defaults: {
    jobRadius: 10, // km
    currency: '₹',
    language: 'en',
    theme: 'light'
  }
}

// Environment check
export const isDevelopment = import.meta.env.DEV
export const isProduction = import.meta.env.PROD

// API endpoints
export const ENDPOINTS = {
  auth: {
    login: '/api/auth/login',
    register: '/api/auth/register',
    logout: '/api/auth/logout',
    verifyOtp: '/api/auth/verify-otp',
    forgotPassword: '/api/auth/forgot-password',
    resetPassword: '/api/auth/reset-password'
  },
  jobs: {
    create: '/api/jobs',
    list: '/api/jobs',
    details: '/api/jobs/:id',
    accept: '/api/jobs/:id/accept',
    cancel: '/api/jobs/:id/cancel',
    complete: '/api/jobs/:id/complete',
    rate: '/api/jobs/:id/rate'
  },
  workers: {
    profile: '/api/workers/profile',
    stats: '/api/workers/stats',
    jobs: '/api/workers/jobs'
  },
  clients: {
    profile: '/api/clients/profile',
    stats: '/api/clients/stats',
    jobs: '/api/clients/jobs'
  }
}