const MAX_AGE = 60 * 60 * 24 * 365 * 2; // 2 years, chrome is capped at 400 days

export const useToken = () => {
  return useCookie('token', {
    secure: true,
    maxAge: MAX_AGE,
  });
};

export const useRefreshToken = () => {
  return useCookie('refreshToken', {
    secure: true,
    maxAge: MAX_AGE,
  });
}
