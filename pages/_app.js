import NavBar from "../components/Navbar";
export default function App({Component, pageProps}){
    return (
        <>
						<NavBar />
            <Component {...pageProps} />
            <span>hello</span>
						<style jsx global>{`
		            a {
		                color : white ;
            }`}</style>
        </>
    )
}