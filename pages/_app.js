import "../styles/index.scss";
import Layout from "../components/layout";
import { AppProvider } from "../data/context";
function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
}

export default MyApp;
