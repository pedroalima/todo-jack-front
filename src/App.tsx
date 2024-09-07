import { Toaster } from "./components/ui/toaster";
import AppRoutes from "./routes";

function App() {
  return (
    <>
      <AppRoutes />
      <Toaster />
    </>
  );
}

export default App;
