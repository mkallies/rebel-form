import axios from 'axios'

// axios.defaults.baseURL = ''

/**
 * fetcher
 *
 * @param {config} - contains url and method properties
 */

function fetcher({ config, data }) {
  return axios({ ...config, data })
}

export { fetcher }
