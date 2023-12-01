import { retrieveAccessToken } from "./localStorage.js";

export function loggedInStatus() {
  const accessToken = retrieveAccessToken();
  console.log("Access Token:", accessToken); 
  return !!accessToken; 
}
