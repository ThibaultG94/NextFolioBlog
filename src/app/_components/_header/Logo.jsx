import Link from 'next/link';
import DesktopIcon from './DesktopIcon';

const Logo = ({ linkStyle, pathname }) => {
	const isActive = pathname === '/';

	return (
		<div className="logo">
			<div className={linkStyle}>
				<Link
					className={`${isActive ? 'active-link flex' : 'flex'}`}
					href="/">
					<DesktopIcon
						className={'w-6 h-6'}
						stroke={'currentColor'}
					/>
					<span className="ml-2 text-xl">Thibault Guilhem</span>
				</Link>
			</div>
		</div>
	);
};

export default Logo;
