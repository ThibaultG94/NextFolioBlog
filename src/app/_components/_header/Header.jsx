'use client';

import { usePathname } from 'next/navigation';
import Navigation from './Navigation';
import '../../../../styles/header.scss';
import Logo from './Logo';
import SocialMedias from './SocialMedias';

const Header = () => {
	const pathname = usePathname();
	const linkStyle = 'flex items-center text-white mb-5';

	return (
		<header className="header">
			<Logo linkStyle={linkStyle} pathname={pathname} />
			<Navigation linkStyle={linkStyle} pathname={pathname} />
			<SocialMedias linkStyle={linkStyle} />
		</header>
	);
};

export default Header;
