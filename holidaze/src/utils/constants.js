import { username } from './localStorage';
export const API_BASE_URL = 'https://api.noroff.dev/api/v1/holidaze';

export const VENUES_ENDPOINT = '/venues';
export const REGISTER_URL = `${API_BASE_URL}/auth/register`;
export const LOGIN_URL = `${API_BASE_URL}/auth/login`;


export const PROFILES_URL = `${API_BASE_URL}/profiles`;
export const PROFILE_DATA_URL = `${PROFILES_URL}/${username}`;
export const PROFILE_MEDIA_URL = `${PROFILE_DATA_URL}/media`
export const PROFILE_BOOKINGS_URL = `${PROFILE_DATA_URL}/bookings?_venue=true&_customer=true&sort=dateFrom&sortOrder=asc`;
export const PROFILE_VENUES_URL = `${PROFILES_URL}/${username}/venues`;