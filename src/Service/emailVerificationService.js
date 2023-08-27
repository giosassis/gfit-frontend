import axios from 'axios';

const emailVerificationService = {
  verifyAndConfirmEmail: async (email, token) => {
    try {
      const response = await axios.get(
        `https://localhost:7187/api/EmailConfirmation/confirm?email=${encodeURIComponent(email)}&token=${encodeURIComponent(token)}`
      );

      if (response.status === 200) {
        return true; 
      } else {
        return false;  
      }
    } catch (error) {
      console.error('Error verifying/confirming email', error);
      return false;  
    }
  },
};

export default emailVerificationService;