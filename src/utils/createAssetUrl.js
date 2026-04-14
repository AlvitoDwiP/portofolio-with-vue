const ABSOLUTE_URL_PATTERN = /^(?:[a-z]+:)?\/\//i

export const createAssetUrl = (path = '') => {
  if (
    !path ||
    ABSOLUTE_URL_PATTERN.test(path) ||
    path.startsWith('mailto:') ||
    path.startsWith('tel:') ||
    path.startsWith('#')
  ) {
    return path
  }

  const baseUrl = import.meta.env.BASE_URL || '/'
  const normalizedBaseUrl = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path

  return `${normalizedBaseUrl}${normalizedPath}`
}
