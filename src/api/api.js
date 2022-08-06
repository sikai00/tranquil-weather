/**
 * This module is responsible for fetching weather information from OpenWeather.
 */

/**
 * Fetches weather information from OpenWeather asynchronously.
 * @param {string} API_KEY - API key from OpenWeather.
 * @param {string} location - Location for the weather information as requested.
 * @returns {Promise} Promise of a JSON from OpenWeather.
 */
export default async function getWeatherPromise (API_KEY, location) {
  // Issues: No defense against unresolved, rejected requests.
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
  const response = await fetch(url)
  const responseJson = await response.json()
  return responseJson
}
