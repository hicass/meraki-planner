import sendRequest from './send-request';
const BASE_URL = '/api/quotes';

export async function get() {
    return sendRequest(BASE_URL);
}
