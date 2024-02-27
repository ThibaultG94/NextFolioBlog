import Link from 'next/link';

const SocialMedias = ({ linkStyle }) => {
	return (
		<div className="socials">
			<div className={linkStyle + ' socials-icon'}>
				<Link href="#">
					<i className="fa-brands fa-github text-2xl md:text-3xl"></i>
				</Link>
			</div>
			<div className={linkStyle + ' socials-icon'}>
				<Link href="#">
					<i className="fa-brands fa-linkedin text-2xl md:text-3xl"></i>
				</Link>
			</div>
			<div className={linkStyle + ' socials-icon'}>
				<Link href="#">
					<i className="fa-brands fa-instagram text-2xl md:text-3xl"></i>
				</Link>
			</div>
		</div>
	);
};

export default SocialMedias;
