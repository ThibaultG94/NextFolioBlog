import Link from 'next/link';

const SocialMedias = ({ linkStyle }) => {
	return (
		<div className="socials">
			<div className={linkStyle + 'socials-icon'}>
				<Link href="#">
					<i className="fa-brands fa-github"></i>
				</Link>
			</div>
			<div className={linkStyle + 'socials-icon'}>
				<Link href="#">
					<i className="fa-brands fa-linkedin"></i>
				</Link>
			</div>
			<div className={linkStyle + 'socials-icon'}>
				<Link href="#">
					<i className="fa-brands fa-instagram"></i>
				</Link>
			</div>
		</div>
	);
};

export default SocialMedias;
