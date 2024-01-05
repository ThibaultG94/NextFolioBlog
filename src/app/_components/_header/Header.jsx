'use client';

import { usePathname } from 'next/navigation';
import React from 'react';
import Navigation from './Navigation';
import '../../../../styles/header.scss';
import Link from 'next/link';
import DesktopIcon from './DesktopIcon';
import Logo from './Logo';
import SocialMedias from './SocialMedias';

const Header = () => {
	const pathname = usePathname();
	const activeLinkStyle = 'active';
	const linkStyle = 'flex items-center text-white mb-5';

	return (
		<header className="header">
			<Logo
				activeLinkStyle={activeLinkStyle}
				linkStyle={linkStyle}
				pathname={pathname}
			/>
			<Navigation
				activeLinkStyle={activeLinkStyle}
				linkStyle={linkStyle}
				pathname={pathname}
			/>
			<SocialMedias />
		</header>
	);
};

export default Header;
