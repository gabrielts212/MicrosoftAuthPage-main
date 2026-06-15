import axios from 'axios';

const MICROSOFT_CLIENT_ID = process.env.NEXT_PUBLIC_MICROSOFT_CLIENT_ID;
const REDIRECT_URI = process.env.NEXT_PUBLIC_REDIRECT_URI;

export const loginWithMicrosoft = async () => {
  const response_type = 'code';
  const scope = 'user.read';

  const authUrl = `https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=${MICROSOFT_CLIENT_ID}&response_type=${response_type}&redirect_uri=${REDIRECT_URI}&scope=${scope}`;

  window.location.href = authUrl;
};

export const handleMicrosoftCallback = async (code) => {
  const response = await axios.post('/api/auth/microsoft', { code });
  return response.data;
};
