import sendRequest from './send-request';
const BASE_URL = '/api/projects';

export function getAll() {
    return sendRequest(BASE_URL);
}

export function getById(projectId) {
    return sendRequest(`${BASE_URL}/${projectId}`);
}

export function addProject(newProjectInfo) {
    return sendRequest(`${BASE_URL}/new`, 'POST', newProjectInfo);
}

export function updateName(newName) {
    console.log(newName)
    return sendRequest(`${BASE_URL}/name`, 'PUT', newName);
}