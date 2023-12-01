export function retrieveAccessToken() {
    const accessToken = localStorage.getItem('accessToken'); 
    return accessToken;
}

export function removeUserData() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('username');
    localStorage.removeItem('avatar');
  }
  