import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import "react-toastify/dist/ReactToastify.css";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "../createEmotionCache";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getTheme } from "@/utils";
import { useEffect } from "react";
import { setAuthToken } from "@/axios";
import { ToastContainer } from "react-toastify";
import { CssBaseline } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import Head from "next/head";
const clientSideEmotionCache = createEmotionCache();

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET_ID,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);

export default function App({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: AppProps & AppProps & { emotionCache?: EmotionCache | undefined }) {
  const setAuthenticationState = () => {
    firebaseAuth.currentUser
      ?.getIdToken(true)
      .then((token) => {
        setAuthToken(token);
      })
      .catch(() => {
        setAuthToken("");
      });
  };

  useEffect(() => {
    firebaseAuth.onAuthStateChanged(function (user) {
      if (user) {
        setAuthenticationState();
      } else {
        setAuthToken("");
      }
    });
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Dynamic Docs</title>
        <link rel="shortcut icon" href={"/favicon.ico"} />
      </Head>
      <ThemeProvider theme={getTheme()}>
        <CssBaseline />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <Component {...pageProps} />
        </LocalizationProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}
