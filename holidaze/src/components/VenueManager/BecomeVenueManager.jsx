import apiRequest from '../../services/api/apiRequest';
import { PROFILE_DATA_URL } from '../../utils/constants.js';

async function BecomeVenueManager() {
    try {
        const updateVenueManagerStatus = {
            venueManager: true,
        };

        const response = await apiRequest(PROFILE_DATA_URL, 'PUT', updateVenueManagerStatus);

        if (response) {
            console.log('Response:', response);
            console.log('Success! You are a venue manager.');
            return response;
        } else {
            console.error('Empty response received or unexpected structure.');
            return null;
        }
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export default BecomeVenueManager;
