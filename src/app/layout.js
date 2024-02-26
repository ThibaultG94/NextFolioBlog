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
			<body className={inter.className} suppressHydrationWarning={true}>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
				/>
				<Header />
				{children}
			</body>
		</html>
	);
}
