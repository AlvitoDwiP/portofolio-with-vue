import { siteConfig } from '@/data/site'

export function createPageTitle(value) {
  return value ? `${value} | ${siteConfig.name}` : siteConfig.name
}
