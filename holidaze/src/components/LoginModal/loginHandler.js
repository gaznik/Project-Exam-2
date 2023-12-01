import { LOGIN_URL } from '../../utils/api/constants';
import redirectToProfile from './redirect';
import storeUserData from './storeUserData';

async function handleLogin(data) {
try {
    const response = await fetch(LOGIN_URL, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    });
    if (response.ok) {
    const loginData = await response.json();
    const { name: username, avatar: userAvatar, accessToken } = loginData;
    storeUserData(accessToken, username, userAvatar);
    setTimeout(redirectToProfile, 3000);
    } else {
    const errorData = await response.json();
    console.error('Login failed:', errorData);
    }
    } catch (error) {
    console.error('Login error:', error);
}
}

export default handleLogin;
