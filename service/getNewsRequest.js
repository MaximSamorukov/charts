
function getNewsRequest(category = 'business', language = 'en', country = 'us') {
  return {
    category,
    language,
    country
  }
}

export { getNewsRequest };