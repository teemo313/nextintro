import NavBar from "../components/Navbar";
import Layout from "../components/layout";

export default function App({Component, pageProps}){
    return (
        <>
            <Layout>
            <Component {...pageProps} />
            </Layout> 
        </>
    )
}