import Link from 'next/link';
import React from 'react';

const Navigation = ({ activeLinkStyle, linkStyle, pathname }) => {
	return (
		<nav className="navigation">
			<li className={linkStyle}>
				<Link href="#projects">
					<span className="text-xl">Projets</span>
				</Link>
			</li>
			<li className={linkStyle}>
				<Link href="#technologies">
					<span className="text-xl">Technos</span>
				</Link>
			</li>
			<li className={linkStyle}>
				<Link href="#about">
					<span className="text-xl">À propos</span>
				</Link>
			</li>
			<li className={linkStyle}>
				<Link
					className={`${pathname === '/blog' ? 'active-link' : ''}`}
					href="/">
					<i class="fas fa-blog"></i>
					<span className="pl-2 text-xl">Blog</span>
				</Link>
			</li>
		</nav>
	);
};

export default Navigation;
