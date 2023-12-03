import { VENUES_URL } from '../../utils/constants.js';
import { useParams } from 'react-router-dom';
import apiRequest from '../../services/api/apiRequest'; 

function DeleteVenue() {
    let { id } = useParams();
    const deleteVenueUrl = `${VENUES_URL}/${id}`;

    const deleteVenue = async () => {
        try {
            const response = await apiRequest(deleteVenueUrl, 'DELETE', {}, {});
            
            if (response.status === 204) {
                console.log('The venue was deleted.');
            } else {
                console.error('Something went wrong while deleting the venue.');
            }
        } catch(error) {
            console.error('Error deleting venue:', error);
        }
    }

    return (
        <div>
            <button onClick={deleteVenue}>Delete</button>
        </div>
    )
}

export default DeleteVenue;
