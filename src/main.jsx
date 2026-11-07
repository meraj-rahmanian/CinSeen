import "./styles/tailwind.css";
import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Navbar from "./components/navbar.jsx";
import Loading from "./components/loading.jsx";
import Wellcom from "./pages/wellcom.jsx";
import Home from "./pages/Home.jsx";
import Movise from "./pages/Movise.jsx";
import MovieDitalse from "./pages/MovieDitalse.jsx";
import Favorit from "./pages/Favorit.jsx";
import NotFound from "./components/p404.jsx";
import Offline from "./components/ofline.jsx";

function App() {
  const [ready, setReady] = useState(() => document.readyState === "complete");
  const [isOnline, setIsOnline] = useState(() => navigator.onLine);

  useEffect(() => {
    if (ready) return;

    const handleLoad = () => setReady(true);
    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, [ready]);
  useEffect(() => {
    const goOnline = () => setIsOnline(true);
    const goOffline = () => setIsOnline(false);

    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);

    return () => {
      window.removeEventListener("online", goOnline);
      window.removeEventListener("offline", goOffline);
    };
  }, []);

  if (!ready) return <Loading />;
  if (!ready) return <Loading />;
  if (!isOnline) return <Offline />;

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="" element={<Wellcom />} />
        <Route path="/HOME" element={<Home />} />
        <Route path="/MOVIES" element={<Movise />} />
        <Route path="/Movie/:id" element={<MovieDitalse />} />
        <Route path="/FAVORITES" element={<Favorit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

createRoot(document.querySelector("#root")).render(<App />);
