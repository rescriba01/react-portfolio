import resumeData from '../data/resumeData.json'

export const SITE_CONFIG = {
  title: resumeData.name || 'Your Portfolio',
  description: resumeData.description || 'Welcome to my portfolio',
  // other site-wide constants
}

export const PORTFOLIO_ITEMS = resumeData.portfolio || [] 