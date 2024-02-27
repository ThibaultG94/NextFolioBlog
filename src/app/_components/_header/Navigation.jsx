import Link from 'next/link';

const Navigation = ({ linkStyle, pathname }) => {
	const isActive = pathname === '/blog';

	return (
		<nav className="navigation">
			<div className={linkStyle}>
				<Link href="#projects">
					<span className="text-xl text-gray-400 hover:text-white">
						Projets
					</span>
				</Link>
			</div>
			<div className={linkStyle}>
				<Link href="#technologies">
					<span className="text-xl text-gray-400 hover:text-white">
						Technos
					</span>
				</Link>
			</div>
			<div className={linkStyle}>
				<Link href="#about">
					<span className="text-xl text-gray-400 hover:text-white">
						À propos
					</span>
				</Link>
			</div>
			<div className={linkStyle}>
				<Link
					className={`${isActive ? 'active-link' : ''}`}
					href="/blog">
					{/* <i className="fas fa-blog"></i> */}
					<span className="pl-2 text-xl text-gray-400 hover:text-white">
						Blog
					</span>
				</Link>
			</div>
		</nav>
	);
};

export default Navigation;
