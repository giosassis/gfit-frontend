import axios from 'axios';

const resetPasswordService = {
  resetPassword: async (email, token, newPassword) => {
    try {
      const response = await axios.post(
        'https://localhost:7187/api/Auth/reset-password',
        {
          email,
          token,
          newPassword,
        }
      );

      if (response.status === 200) {
        return true; // Password reset successfully
      } else {
        return false; // Reset failed
      }
    } catch (error) {
      console.error('Error resetting password', error);
      return false; // Error occurred
    }
  },
};

export default resetPasswordService;