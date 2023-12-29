import { Inter } from 'next/font/google';
import '../../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Thibault Guilhem',
	description:
		'Portfolio and Blog of Thibault Guilhem, a developer web based in Paris, France. I build web applications and tools. I am passionate about web technologies, open source, and design.',
};

export default function RootLayout({ children }) {
	return (
		<html lang="fr">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
