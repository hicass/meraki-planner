import sendRequest from './send-request';
const BASE_URL = '/api/todos';

export function addTodo(newTodo) {
    return sendRequest(`${BASE_URL}/new`, 'POST', newTodo);
}

export function update(changes) {
    return sendRequest(`${BASE_URL}/update`, 'PUT', changes);
}

export function deleteTodo(projectId) {
    return sendRequest(`${BASE_URL}/${projectId}`, 'DELETE', projectId);
}

export function incrementStatus(projectId) {
    return sendRequest(`${BASE_URL}/incrementStatus`, 'PUT', projectId);
}

export function decrementStatus(projectId) {
    return sendRequest(`${BASE_URL}/decrementStatus`, 'PUT', projectId);
}