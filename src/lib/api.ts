import axios from 'axios';

export const getUserData = async (userId: string) => {
  try {
    const { data } = await axios.get('https://api.github.com/users/' + userId);
    return data;
  } catch (e) {
    return null;
  }
};
