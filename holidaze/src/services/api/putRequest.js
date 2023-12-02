import { accessToken } from '../../utils/localStorage.js';

async function performPutRequest(url, data) {
    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (response.ok) {
            console.log('Success! PUT request completed.');
        } else {
            console.error('Something went wrong with the PUT request.');
        }

        return result;
    } catch (error) {
        console.error('Error in PUT request:', error);
    }
}

export default performPutRequest;
