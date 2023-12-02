import { PROFILE_MEDIA_URL } from '../../utils/constants';
import apiRequest from '../api/apiRequest';

async function updateAvatar(avatar) {
  try {
    const response = await apiRequest(PROFILE_MEDIA_URL, 'PUT', avatar);

    if (response.ok) {
      console.log('Success! Your avatar is updated.');
      return response;
    } else {
      console.error('Something went wrong, try again.');
      throw new Error('Request failed');
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default updateAvatar;
