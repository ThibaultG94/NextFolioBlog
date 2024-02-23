import { Inter } from 'next/font/google';
import '../../styles/globals.scss';
import Header from './_components/_header/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Thibault Guilhem',
	description:
		'Portfolio and Blog of Thibault Guilhem, a developer web based in Paris, France. I build web applications and tools. I am passionate about web technologies, open source, and design.',
};

export default function RootLayout({ children }) {
	return (
		<html lang="fr">
			<head>
				<meta
					httpEquiv="Content-Type"
					content="text/html; charset=utf-8"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>
				<meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
				<meta name="description" content={metadata.description} />
				<meta property="og:type" content="website" />
				<title>{metadata.title}</title>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
				/>
			</head>
			<body className={inter.className}>
				<Header />
				{children}
			</body>
		</html>
	);
}
