import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GetProfile, AdminLogout } from '../services/Services';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const access = localStorage.getItem('access');
    if (access) {
      const profile = await GetProfile();
      if (profile) {
        setUser(profile);
      } else {
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
      }
    }
    setLoading(false);
  };

  const login = (userData, tokens) => {
    localStorage.setItem('access', JSON.stringify(tokens.access));
    localStorage.setItem('refresh', JSON.stringify(tokens.refresh));
    setUser(userData);
    navigate('/dashboard');
  };

  const logout = async () => {
    await AdminLogout();
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};