import '../styles/globals.css';
import Script from 'next/script';
import Header from '@components/Header';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';

function MyApp({ Component, pageProps }) {
	const initialState = useInitialState();

	return (
		<AppContext.Provider value={initialState}>
			<Header />
			<Script async src="https://www.googletagmanager.com/gtag/js?id=G-5KHBH04036" />
			<Script id="google-analytics" strategy="afterInteractive">
				{`window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
				gtag('config', 'G-5KHBH04036');
				`}
			</Script>
			<Header />
			<Component {...pageProps} />;
		</AppContext.Provider>
	);
}

export default MyApp;
