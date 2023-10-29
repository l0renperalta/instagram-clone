import axios from 'axios';
import jwt_decode from 'jwt-decode';

const API_URL = 'http://127.0.0.1:8000';

export const loginReq = async (values) => {
  try {
    const response = await axios.post(`${API_URL}/users/login/`, values);
    const { access, refresh } = response.data;

    localStorage.setItem('access', access);
    localStorage.setItem('refresh', refresh);
    const user = jwt_decode(localStorage.getItem('access'));

    localStorage.setItem('username', user.username);
    localStorage.setItem('user_id', user.user_id);
    localStorage.setItem('avatar', user.avatar);
  } catch (error) {
    console.log(error);
  }
};

export const registerReq = async (values) => {
  try {
    const response = await axios.post(`${API_URL}/users/register/`, values);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

// export const axiosGetUsers = async () => {
//   try {
//     const res = await axios.get(`${API_URL}/results`, { params: { _sort: 'id', _order: 'desc' } });
//     const { data } = res;
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const axiosPostUser = async (values) => {
//   await axios.post(`${API_URL}/results`, values);
// };

// export const axiosDeleteUser = async (id) => {
//   await axios.delete(`${API_URL}/results/${id}`);
// };

// export const axiosUpdateUser = async (user) => {
//   await axios.put(`${API_URL}/results/${user.id}`, user);
// };
