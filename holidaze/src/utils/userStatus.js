import { accessToken } from "./localStorage";

export function isLoggedIn() {
  const accessToken = localStorage.getItem('accessToken'); 
  return !!accessToken;
}
export function retrieveAccessToken() {
  return accessToken;
}

export function loggedInUsername() {
  return localStorage.getItem('username');
}
