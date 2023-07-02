import sendRequest from './send-request';
const BASE_URL = '/api/todos';

export function addTodo(newTodo) {
    return sendRequest(`${BASE_URL}/new`, 'POST', newTodo);
}