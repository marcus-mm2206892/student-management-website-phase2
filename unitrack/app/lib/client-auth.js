export function checkClientAuth() {
  if (typeof window === 'undefined') return false;
  
  const userData = localStorage.getItem('user');
  if (!userData) return false;

  try {
    const { role, expires } = JSON.parse(userData);
    return new Date(expires) > new Date() ? role : false;
  } catch {
    return false;
  }
}

export function setClientAuth(user) {
  localStorage.setItem('user', JSON.stringify({
    ...user,
    expires: new Date(Date.now() + 1000 * 60 * 30) // 30 minute expiry
  }));
}