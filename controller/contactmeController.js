import axios from 'axios';
import { showAlert } from './alerts';

export const contactme = async (name, email,message) => {
  try {
    const res = await axios({
      method: 'POST',
      url: '/contactme',
      data: {
        name,
        email,
        message
      }
    });

    if (res.data.status === 'success') {
      showAlert('success', ' Form submitted successfully!');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};