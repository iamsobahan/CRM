import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000', // Corrected baseURL
});

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const refresh = localStorage.getItem('refresh');

        if (refresh) {
          const response = await instance.post('/api/token/refresh/', {
            refresh: refresh,
          });

          const { access } = response.data;
          localStorage.setItem('access', access);

          // Update Authorization header for future requests
          instance.defaults.headers.common[
            'Authorization'
          ] = `Bearer ${access}`;
          originalRequest.headers['Authorization'] = `Bearer ${access}`;

          return instance(originalRequest); // Retry the original request
        } else {
          // No refresh token available, handle it (e.g., redirect to login)
          console.log('Refresh token not available.');
        }
      } catch (e) {
        console.log(e);
        // Optionally, you could log out the user here, clear localStorage, or redirect to login
      }
    }

    return Promise.reject(error);
  }
);

export default instance;
