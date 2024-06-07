class Auth {
    constructor() {
      this.baseUrl = "/api/auth"; 
    }
  
    async fetchApi(url, options) {
      try {
        const response = await fetch(url, options);
        if (!response.ok) {  
          const errorData = await response.json(); // Parse the error response body
          return { error: { message: errorData.message, status: response.status, statusText: response.statusText}};
         }
        return response.json();
      } catch (error) {
        return error;
      }
    }
  
    async signUp(userData) { 
      const url = `${this.baseUrl}/sign-up`;
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      };
      return this.fetchApi(url, options);
    }
  
    async signIn(userData) {
      const url = `${this.baseUrl}/sign-in`;
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      };
      return this.fetchApi(url, options);
    }
  
    async logout() {
      const url = `${this.baseUrl}/logout`;
      const options = {
        method: 'GET',
        credentials: 'include', // Include credentials (cookies) in the request
      };
      return this.fetchApi(url, options);
    }

    async changeProfilePicture(file,userId) {
      const url = `${this.baseUrl}/change-profile`;
      const formData = new FormData();
      formData.append('image', file);
      formData.append('id', userId); 
      const options = {
        method: 'POST',
        body: formData,
        credentials: 'include', // Include credentials (cookies) in the request
      };
      return this.fetchApi(url, options);
    }

    async changeProfileData(userData) {
      const url = `${this.baseUrl}/update-profile-data`;
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
        credentials: 'include', // Include credentials (cookies) in the request
      };
      return this.fetchApi(url, options);
    }
  }
  
  export default Auth;
  