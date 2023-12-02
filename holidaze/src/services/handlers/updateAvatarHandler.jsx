import { PROFILE_MEDIA_URL } from '../../utils/constants';
import { accessToken } from '../../utils/localStorage';

async function updateAvatarHandler(avatar) {
    try {
        const response = await fetch(PROFILE_MEDIA_URL, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`
            },
            body: JSON.stringify(avatar)
        });

        const result = await response.json();

        if (response.ok) {
            console.log('Success! Your avatar is updated.');
        } else {
            console.error('Something went wrong, try again.');
        }

        return result;
    } catch (error) {
        console.error(error);
    }
}

export default updateAvatarHandler;
