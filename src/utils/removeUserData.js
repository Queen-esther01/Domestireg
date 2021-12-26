import cookie from 'react-cookies'


export const removeUserData = () =>{
    localStorage.removeItem('dreg')
    cookie.remove('dreg')
}