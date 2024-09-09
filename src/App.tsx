import { Toaster } from "./components/ui/toaster";
import { AuthProvider } from "./contexts/AuthContext";
import AppRoutes from "./routes";

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
      <Toaster />
    </AuthProvider>
  );
}

export default App;
