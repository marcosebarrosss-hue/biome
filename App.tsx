import React, { useState, useEffect, createContext, useContext } from 'react';
import { User, Admin, AppTheme, View, Biome, Item } from './types';
import { authService } from './services/authService';
import { adminService } from './services/adminService';
import LoginPage from './components/auth/LoginPage';
import RegisterPage from './components/auth/RegisterPage';
import AvatarCreator from './components/game/AvatarCreator';
import GameDashboard from './components/game/GameDashboard';
import { DEFAULT_THEME } from './constants';

// --- CONTEXTOS ---

// Contexto de Autenticação
interface AuthContextType {
  currentUser: User | Admin | null;
  login: (username: string, password: string) => Promise<User | Admin | null>;
  logout: () => void;
  register: (username: string, password: string) => Promise<User | null>;
  updateUser: (updatedUser: User) => void;
}
const AuthContext = createContext<AuthContextType | null>(null);
export const useAuth = () => useContext(AuthContext) as AuthContextType;

// Contexto do Tema
export const ThemeContext = createContext<AppTheme>(DEFAULT_THEME);
export const useTheme = () => useContext(ThemeContext);

// Contexto de Edição do Administrador
interface AdminEditContextType {
  isEditMode: boolean;
  toggleEditMode: () => void;
  theme: AppTheme;
  setTheme: React.Dispatch<React.SetStateAction<AppTheme>>;
  biomes: Biome[];
  setBiomes: React.Dispatch<React.SetStateAction<Biome[]>>;
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
  saveChanges: () => void;
  adminPage: string;
  setAdminPage: (page: string) => void;
}
export const AdminEditContext = createContext<AdminEditContextType | null>(null);
export const useAdminEdit = () => useContext(AdminEditContext);


// --- COMPONENTE PRINCIPAL ---

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | Admin | null>(null);
  const [view, setView] = useState<View>(View.Loading);
  const [initialDataLoaded, setInitialDataLoaded] = useState(false);
  
  // Estado para edição do admin
  const [theme, setTheme] = useState<AppTheme>(DEFAULT_THEME);
  const [biomes, setBiomes] = useState<Biome[]>([]);
  const [items, setItems] = useState<Item[]>([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [adminPage, setAdminPage] = useState('dashboard');

  useEffect(() => {
    adminService.initializeData();
    const loadedTheme = adminService.getTheme();
    const loadedBiomes = adminService.getBiomes();
    const loadedItems = adminService.getItems();
    setTheme(loadedTheme);
    setBiomes(loadedBiomes);
    setItems(loadedItems);
    setInitialDataLoaded(true);
  }, []);

  useEffect(() => {
    if (initialDataLoaded) {
      const user = authService.getCurrentUser();
      if (user) {
        setCurrentUser(user);
        if (user.role === 'admin') {
          setView(View.GameDashboard); // Admin agora vê o dashboard do jogo
        } else if (!(user as User).avatar) {
          setView(View.AvatarCreator);
        } else {
          setView(View.GameDashboard);
        }
      } else {
        setView(View.Login);
      }
    }
  }, [initialDataLoaded]);
  
  const login = async (username: string, password: string): Promise<User | Admin | null> => {
    const user = await authService.login(username, password);
    if (user) {
      setCurrentUser(user);
      if (user.role === 'admin') {
        setView(View.GameDashboard);
      } else if (!(user as User).avatar) {
        setView(View.AvatarCreator);
      } else {
        setView(View.GameDashboard);
      }
    }
    return user;
  };
  
  const register = async (username: string, password: string): Promise<User | null> => {
    const newUser = await authService.register(username, password);
    if (newUser) {
      setCurrentUser(newUser);
      setView(View.AvatarCreator);
    }
    return newUser;
  };

  const logout = () => {
    authService.logout();
    setCurrentUser(null);
    setView(View.Login);
    setIsEditMode(false); // Garante que o modo de edição seja desativado ao sair
  };

  const updateUser = (updatedUser: User) => {
    const user = authService.updateUser(updatedUser);
    setCurrentUser(user);
  };
  
  const handleAvatarCreated = (userWithAvatar: User) => {
    setCurrentUser(userWithAvatar);
    setView(View.GameDashboard);
  };

  const saveAdminChanges = () => {
    adminService.saveTheme(theme);
    adminService.saveBiomes(biomes);
    adminService.saveItems(items);
    alert('Alterações salvas com sucesso!');
    setIsEditMode(false);
  };
  
  const renderView = () => {
    const isAdmin = currentUser?.role === 'admin';
    const adminProviderValue = { isEditMode, toggleEditMode: () => setIsEditMode(p => !p), theme, setTheme, biomes, setBiomes, items, setItems, saveChanges: saveAdminChanges, adminPage, setAdminPage };


    switch(view) {
      case View.Loading:
        return <div className="flex items-center justify-center h-screen bg-gray-900 text-white">Carregando...</div>;
      case View.Login:
        return <LoginPage onLoginSuccess={login} onNavigateToRegister={() => setView(View.Register)} />;
      case View.Register:
        return <RegisterPage onRegisterSuccess={register} onNavigateToLogin={() => setView(View.Login)} />;
      case View.AvatarCreator:
         if (currentUser && currentUser.role === 'player') {
          return <AvatarCreator user={currentUser} onAvatarCreated={handleAvatarCreated} />;
        }
        // Fallback or loading for player
        return <div className="flex items-center justify-center h-screen bg-gray-900 text-white">Carregando...</div>;
      case View.GameDashboard:
        if (isAdmin) {
          return (
            <AdminEditContext.Provider value={adminProviderValue}>
               <GameDashboard biomes={biomes} />
            </AdminEditContext.Provider>
          );
        }
        return <GameDashboard biomes={biomes} />;
      default:
        return <LoginPage onLoginSuccess={login} onNavigateToRegister={() => setView(View.Register)} />;
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      <AuthContext.Provider value={{ currentUser, login, logout, register, updateUser }}>
        <div className="min-h-screen text-gray-800 dark:text-gray-200" style={{'--primary-color': theme.primaryColor, '--secondary-color': theme.secondaryColor} as React.CSSProperties}>
          {renderView()}
        </div>
      </AuthContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;