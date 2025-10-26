import "@/styles/globals.css";
import { useAuthStore } from "@/lib/store";
import { useRouter } from "next/router";
import { useEffect } from "react";

const PUBLIC_ROUTES = ["/login", "/signup", "/forget", "/", "/index"];

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const { isAuthenticated } = useAuthStore();

  useEffect(() => {
    const path = router.pathname || "/";
    const isPublic = PUBLIC_ROUTES.includes(path);
    if (!isAuthenticated && !isPublic) {
      const raw = typeof window !== 'undefined' ? localStorage.getItem('auth') : null;
      if (raw) {
        // If persisted, allow access (store will hydrate on first render)
        return;
      }
      router.replace("/login");
    }
  }, [isAuthenticated, router]);

  return <Component {...pageProps} />;
}
