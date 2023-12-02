import { accessToken } from "../../../utils/localStorage";

export function isLoggedIn() {
  const accessToken = localStorage.getItem('accessToken'); 
  return !!accessToken;
}
export function retrieveAccessToken() {
  return accessToken;
}
