import { Inter } from 'next/font/google';
import '../../styles/globals.scss';

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
			</head>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
