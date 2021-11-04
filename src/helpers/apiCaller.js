import axios from 'axios'

const token = localStorage.getItem('token')

/**
 * Login request
 * 
 * @author José Gil
 * 
 * @param {string} url 
 * @param {object} body 
 * @returns {objet}
 */
export const login = async (url, body) => (
    await (await axios.post(url, body)).data
)

/**
 * Get request
 * 
 * @author José Gil
 * 
 * @param {string} url
 * @returns {objet}
 */
export const get = async (url) => (
    await (await axios.get(url, { headers: { token } })).data
)

/**
 * Create request
 * 
 * @author José Gil
 * 
 * @param {string} url
 * @param {body} object data
 * @returns {objet}
 */
export const create = async (url, body) => (
    await (await axios.post(url, body, { headers: { token } })).data
)


/**
 * Update request
 * 
 * @author José Gil
 * 
 * @param {string} url
 * @param {id} string register identifier
 * @param {body} object update data
 * @returns {objet}
 */
export const update = async (url, id, body) => (
    await (await axios.put(url + id, body, { headers: { token } })).data
)

/**
 * Update request
 * 
 * @author José Gil
 * 
 * @param {string} url
 * @param {id} string register identifier
 * @returns {objet}
 */
export const destroy = async (url, id) => (
    await (await axios.delete(url + id, { headers: { token } })).data
)
