'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navigation = () => {
	const pathname = usePathname();

	const linkStyle = 'flex items-center mr-2 mb-5 text-white';
	const activeLinkStyle = 'font-bold';

	return (
		<nav>
			<ul className="flex items-center">
				<li className={linkStyle}>
					<Link
						className={`${pathname === '/' ? activeLinkStyle : ''}`}
						href="/">
						<span className="text-xl">
							<i className="fas fa-laptop-code"></i>
							<u className="pl-2">Thibault Guilhem</u>
						</span>
					</Link>
				</li>
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
						className={`${pathname === '/' ? activeLinkStyle : ''}`}
						href="/">
						<span className="text-xl">
							<i class="fas fa-blog"></i>
							<u className="pl-2">Blog</u>
						</span>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
