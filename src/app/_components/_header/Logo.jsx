import Link from 'next/link';
import React from 'react';
import DesktopIcon from './DesktopIcon';

const Logo = ({ linkStyle, pathname }) => {
	return (
		<div className="logo">
			<li className={linkStyle}>
				<Link
					className={`${
						pathname === '/' ? 'active-link flex' : 'flex'
					}`}
					href="/">
					<DesktopIcon />
					<span className="ml-2 text-xl">Thibault Guilhem</span>
				</Link>
			</li>
		</div>
	);
};

export default Logo;
