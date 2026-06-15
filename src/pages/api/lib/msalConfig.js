import { PublicClientApplication } from '@azure/msal-browser';

const getRedirectUri = () => {
  if (typeof window !== 'undefined') {
    const isLocalhost = window.location.hostname === 'localhost';
    return isLocalhost
      ? process.env.NEXT_PUBLIC_REDIRECT_URI_LOCAL
      : process.env.NEXT_PUBLIC_REDIRECT_URI_PROD;
  }
  return process.env.NEXT_PUBLIC_REDIRECT_URI_LOCAL; 
};

const msalConfig = {
  auth: {
    clientId: process.env.NEXT_PUBLIC_MICROSOFT_CLIENT_ID,
    authority: 'https://login.microsoftonline.com/common',
    redirectUri: getRedirectUri(),
  },
};

export const msalInstance = new PublicClientApplication(msalConfig);
