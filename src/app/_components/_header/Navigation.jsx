import Link from 'next/link';

const Navigation = ({ activeLinkStyle, linkStyle, pathname }) => {
	const isActive = pathname === '/blog';

	return (
		<nav className="navigation">
			<div className={linkStyle}>
				<Link href="#projects">
					<span className="text-xl">Projets</span>
				</Link>
			</div>
			<div className={linkStyle}>
				<Link href="#technologies">
					<span className="text-xl">Technos</span>
				</Link>
			</div>
			<div className={linkStyle}>
				<Link href="#about">
					<span className="text-xl">À propos</span>
				</Link>
			</div>
			<div className={linkStyle}>
				<Link
					className={`${isActive ? 'active-link' : ''}`}
					href="/blog">
					<i class="fas fa-blog"></i>
					<span className="pl-2 text-xl">Blog</span>
				</Link>
			</div>
		</nav>
	);
};

export default Navigation;
