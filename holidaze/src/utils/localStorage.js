export const username = localStorage.getItem('username');
export const avatar = localStorage.getItem('avatar');
export const accessToken = localStorage.getItem('accessToken'); 

export function removeUserData() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('username');
    localStorage.removeItem('avatar');
  }
  