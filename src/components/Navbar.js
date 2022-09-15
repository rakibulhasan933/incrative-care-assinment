import React from 'react';

const Navbar = () => {
	return (
		<div className="navbar bg-base-100">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
					</label>
					<ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
						<li><a href='/'>Home</a></li>
						<li tabIndex={0}>
							<a href='/' className="justify-between">
								COURSES
								<svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
							</a>
							<ul className="p-2">
								<li><a href='/' >Career paths</a></li>
								<li><a href='/' >Learning paths</a></li>
								<li><a href='/' >IELTS Live Courses</a></li>
							</ul>
						</li>
						<li tabIndex={0}>
							<a href='/' className="justify-between">
								CAREER
								<svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
							</a>
							<ul className="p-2">
								<li><a href='/' >Recruitment</a></li>
								<li><a href='/' >Career Fair 2022</a></li>
							</ul>
						</li>
						<li tabIndex={0}>
							<a href='/' className="justify-between">
								SPECIAL FEATURES
								<svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
							</a>
							<ul className="p-2">
								<li><a href='/' >MCQ Quiz Test</a></li>
								<li><a href='/' >Live Support Session </a></li>
								<li><a href='/' >Business</a></li>
								<li><a href='/' >Blogs</a></li>
							</ul>
						</li>
						<li><a href="/">AFFILIATION</a></li>
						<li><a href="/">LIVE SUPPORT CHAT</a></li>
						<li> <div className="form-control">
							<input type="text" placeholder="Search" className="input input-bordered w-20 h-10" />
						</div></li>
						<li> <div className="indicator">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
						</div></li>
						<li><a href='/' className="btn w-15 text-white items-center">LOGIN</a></li>
					</ul>
				</div>
				<a href='/' className="btn btn-ghost normal-case text-xl">Ineractive Care</a>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal p-0">
					<li><a href='/'>Home</a></li>
					<li tabIndex={0}>
						<a href='/' className="justify-between">
							COURSES
							<svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
						</a>
						<ul className="p-2">
							<li><a href='/' >Career paths</a></li>
							<li><a href='/' >Learning paths</a></li>
							<li><a href='/' >IELTS Live Courses</a></li>
						</ul>
					</li>
					<li tabIndex={0}>
						<a href='/' className="justify-between">
							CAREER
							<svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
						</a>
						<ul className="p-2">
							<li><a href='/' >Recruitment</a></li>
							<li><a href='/' >Career Fair 2022</a></li>
						</ul>
					</li>
					<li tabIndex={0}>
						<a href='/' className="justify-between">
							SPECIAL FEATURES
							<svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
						</a>
						<ul className="p-2">
							<li><a href='/' >MCQ Quiz Test</a></li>
							<li><a href='/' >Live Support Session </a></li>
							<li><a href='/' >Business</a></li>
							<li><a href='/' >Blogs</a></li>
						</ul>
					</li>
					<li><a href="/">AFFILIATION</a></li>
					<li><a href="/">LIVE SUPPORT CHAT</a></li>
					<li> <div className="form-control">
						<input type="text" placeholder="Search" className="input input-bordered w-20 h-10" />
					</div></li>
					<li> <div className="indicator">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
					</div></li>
					<li><a href='/' className="btn w-15 text-white items-center">LOGIN</a></li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;