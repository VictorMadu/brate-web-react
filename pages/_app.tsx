import React, { useEffect, useLayoutEffect, useState } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import { store, persistor } from "../redux/store";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/globals.css";
import { loadStoredState } from "../use-case";

config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Brate</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageWrapper>
        <Component {...pageProps} />
      </PageWrapper>
      <div id="modal-root"></div>
    </>
  );
}

const PageWrapper = ({ children }: { children: JSX.Element }) => {
  const [showChildren, setShowChildren] = useState(false);
  useEffect(() => {
    console.log("PageWrapper useEffect called");
  });
  useEffect(() => {
    console.log("page mounted");
    loadStoredState();
    setShowChildren(true);
    return () => console.log("page unmounted");
  }, []);

  return showChildren ? children : null;
};

export default MyApp;
