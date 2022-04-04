import '../styles/globals.sass'
import '../styles/default.sass'
import { useRouter } from "next/router"
// import Loading from '../components/js/loading'
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleStart = url => {
      url !== router.pathname ? setLoading(true) : setLoading(false)
    };
    const handleComplete = (url) => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  const loadingComponent = (<h2>Loading...</h2>)
  return (
    <div>
      {/* <Loading loading={loading} /> */}
      {loading && loadingComponent}
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
