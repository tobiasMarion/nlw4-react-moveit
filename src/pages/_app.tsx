import React from "react";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  const user = 'teste'
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
