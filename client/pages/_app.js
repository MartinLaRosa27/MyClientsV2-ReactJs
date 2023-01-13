import React, { useState } from "react";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import { Footer } from "../components/Footer";
import { Provider } from "react-redux";
import { Header } from "../components/Header";
import store from "../redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const [tokenHeader, setTokenHeader] = useState(null);

  return (
    <>
      <Provider store={store}>
        <Head>
          <title>MyClients Aoo</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Toaster />
        <Header tokenHeader={tokenHeader} />
        <Component {...pageProps} setTokenHeader={setTokenHeader} />
        <Footer />
      </Provider>
    </>
  );
}
