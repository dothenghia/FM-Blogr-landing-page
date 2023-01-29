
import logo from '../../assets/images/logo.svg';
import iconArrowDesktop from '../../assets/images/icon-arrow-light.svg';
import './header.scss';

const Header = () => {
	const showDropList = (e) => {
		if (e.currentTarget === e.target) {
			if (e.currentTarget.classList.contains('mobile__drop-show')) {
				e.currentTarget.classList.remove('mobile__drop-show')
			}
			else
			{
				let dropLists = document.getElementsByClassName('mobile__drop-show')
				for (let dropList of dropLists) {
					dropList.classList.remove('mobile__drop-show')
				}
	
				e.currentTarget.classList.add('mobile__drop-show')
			}
		}
	}

	return (
		<div id='header'>
			<div className="container">
				{/* ============ Navigation Bar ============== */}
				<nav className="nav-pc">

					<div className="nav-left">
						<div className="nav-logo">
							<img src={logo} alt="Logo" />
						</div>

						<ul className="nav-drop">
							<li className="drop-lists">
								Product
								<ul className="drop-list">
									<li className="drop-item">Overview</li>
									<li className="drop-item">Pricing</li>
									<li className="drop-item">Marketplace</li>
									<li className="drop-item">Features</li>
									<li className="drop-item">Integrations</li>
								</ul>
							</li>

							<li className="drop-lists">
								Company
								<ul className="drop-list">
									<li className="drop-item">About</li>
									<li className="drop-item">Team</li>
									<li className="drop-item">Blog</li>
									<li className="drop-item">Careers</li>
								</ul>
							</li>

							<li className="drop-lists">
								Connect
								<ul className="drop-list">
									<li className="drop-item">Contact</li>
									<li className="drop-item">Newsletter</li>
									<li className="drop-item">LinkedIn</li>
								</ul>
							</li>
						</ul>

					</div>

					<div className="nav-right">
						<button className="login-button">Login</button>
						<button className="signup-button">Sign Up</button>
					</div>
				</nav>


				<div className="nav-mobile">
					<div className="nav-logo">
						<img src={logo} alt="Logo" />
					</div>

					<div className="nav-mobile-container">
						<input type="checkbox" id='nav-mobile__input'/>

						<label htmlFor='nav-mobile__input' className='nav-mobile__menu-btn'><svg width="32" height="18" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fillRule="evenodd"><path d="M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z"/></g></svg></label>

						<label htmlFor='nav-mobile__input' className='nav-mobile__overlay'></label>

						<nav className="nav-mobile__modal">
							<label htmlFor='nav-mobile__input' className='nav-mobile__close-btn'><svg width="26" height="26" xmlns="http://www.w3.org/2000/svg"><path d="M23.607.98l1.414 1.413L14.414 13l10.607 10.607-1.414 1.414L13 14.414 2.393 25.021.98 23.607 11.586 13 .98 2.393 2.393.98 13 11.586 23.607.98z" fill="#FFF" fillRule='evenodd'/></svg></label>

							<ul className="mobile__drop">
								<li className="mobile__drop-lists" onClick={showDropList}>
									Product
									<ul className="mobile__drop-list">
										<li className="mobile__drop-item">Overview</li>
										<li className="mobile__drop-item">Pricing</li>
										<li className="mobile__drop-item">Marketplace</li>
										<li className="mobile__drop-item">Features</li>
										<li className="mobile__drop-item">Integrations</li>
									</ul>
								</li>

								<li className="mobile__drop-lists" onClick={showDropList}>
									Company
									<ul className="mobile__drop-list">
										<li className="mobile__drop-item">About</li>
										<li className="mobile__drop-item">Team</li>
										<li className="mobile__drop-item">Blog</li>
										<li className="mobile__drop-item">Careers</li>
									</ul>
								</li>

								<li className="mobile__drop-lists" onClick={showDropList}>
									Connect
									<ul className="mobile__drop-list">
										<li className="mobile__drop-item">Contact</li>
										<li className="mobile__drop-item">Newsletter</li>
										<li className="mobile__drop-item">LinkedIn</li>
									</ul>
								</li>
							</ul>

							<div className="mobile__buttons">
								<button className="mobile__login-button">Login</button>
								<button className="mobile__signup-button">Sign Up</button>
							</div>

						</nav>
					</div>

				</div>


				{/* ============ Introduction Section ============== */}
				<div className='intro'>
					<h1 className="intro-title">A modern publishing platform</h1>
					<p className="intro-subtitle">Grow your audience and build your online brand</p>
					
					<div className="intro-buttons">
						<button className="start-button">Start for Free</button>
						<button className="learn-button">Learn More</button>
					</div>
				</div>

			</div>
		</div>
	)
}

export default Header;