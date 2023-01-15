import CONSTANTS from '../constants';

export const registerUser = async (data) => {
    const responce = await fetch(`${CONSTANTS.API_BASE}/user/sign-up`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
    });
    if (responce.status === 400) {
     const error = await responce.json();
     return Promise.reject(error);
    }

    return responce.json();

}



export const loginUser = async (data) => {
    const responce = await fetch(`${CONSTANTS.API_BASE}/user/sign-in`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
    });
    if (responce.status === 400) {
        const error = await responce.json();
        return Promise.reject(error.err);
       }
   
       return responce.json();
   
}

export const checkToken = async (token) => {
    const responce = await fetch(`${CONSTANTS.API_BASE}/user/${token}`);
    if (responce.status === 403) {
        const error = await responce.json();
        return Promise.reject(error.err);
       }
   
       return responce.json();
   
}