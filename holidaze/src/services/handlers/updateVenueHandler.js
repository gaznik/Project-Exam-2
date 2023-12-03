import apiRequest from '../../services/api/apiRequest';

async function updateVenue(url, updatedInfo) {
  try {
    const result = await apiRequest(url, 'PUT', updatedInfo);
    console.log(result);

    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export default updateVenue;
