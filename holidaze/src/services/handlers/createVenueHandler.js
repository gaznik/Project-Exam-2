import { VENUES_URL } from '../../utils/constants.js';
import apiRequest from '../api/apiRequest'; 

async function createVenue(venue) {
    try {
        const response = await apiRequest(VENUES_URL, 'POST', venue);

        return response;
    } catch(error) {
        console.error('Error creating venue:', error);
        throw error;
    }
}

export default createVenue;
