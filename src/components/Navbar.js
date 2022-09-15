import React from 'react';

const Navbar = () => {
	return (
		<div className="navbar bg-base-100">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
					</label>
					<ul tabIndex={0} className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
						<li><a href='/'>Home</a></li>
						<li tabIndex={0}>
							<a href='/' className="justify-between">
								COURSES
								<svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
							</a>
							<ul className="p-2">
								<li><a href='/' className='text-white ' >Career paths</a></li>
								<li><a href='/' className='text-white ' >Learning paths</a></li>
								<li><a href='/' className='text-white ' >IELTS Live Courses</a></li>
							</ul>
						</li>
						<li tabIndex={0}>
							<a href='/' className="justify-between">
								CAREER
								<svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
							</a>
							<ul className="p-2">
								<li><a href='/' className='text-white ' >Recruitment</a></li>
								<li><a href='/' className='text-white ' >Career Fair 2022</a></li>
							</ul>
						</li>
						<li tabIndex={0}>
							<a href='/' className="justify-between">
								SPECIAL FEATURES
								<svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
							</a>
							<ul className="p-2">
								<li><a href='/' className='text-white ' >MCQ Quiz Test</a></li>
								<li><a href='/' className='text-white ' >Live Support Session </a></li>
								<li><a href='/' className='text-white ' >Business</a></li>
								<li><a href='/' className='text-white ' >Blogs</a></li>
							</ul>
						</li>
						<li><a href="/">AFFILIATION</a></li>
						<li><a href="/">LIVE SUPPORT CHAT</a></li>
						<li> <div className="form-control">
							<input type="text" placeholder="Search" className="w-20 h-10 input input-bordered" />
						</div></li>
						<li> <div className="indicator">
							<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
						</div></li>
						<li><a href='/' className="items-center text-white btn w-15">LOGIN</a></li>
					</ul>
				</div>
				<a href='/' className="text-xl uppercase btn btn-ghost">Interactive Cares</a>
			</div>
			<div className="hidden navbar-center lg:flex">
				<ul className="p-0 menu menu-horizontal">
					<li><a href='/'>Home</a></li>
					<li tabIndex={0}>
						<a href='/' className="justify-between">
							COURSES
							<svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
						</a>
						<ul className="p-2">
							<li><a href='/' className='text-white ' >Career paths</a></li>
							<li><a href='/' className='text-white ' >Learning paths</a></li>
							<li><a href='/' className='text-white ' >IELTS Live Courses</a></li>
						</ul>
					</li>
					<li tabIndex={0}>
						<a href='/' className="justify-between">
							CAREER
							<svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
						</a>
						<ul className="p-2">
							<li><a href='/' className='text-white ' >Recruitment</a></li>
							<li><a href='/' className='text-white ' >Career Fair 2022</a></li>
						</ul>
					</li>
					<li tabIndex={0}>
						<a href='/' className="justify-between">
							SPECIAL FEATURES
							<svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
						</a>
						<ul className="p-2">
							<li><a href='/' className='text-white ' >MCQ Quiz Test</a></li>
							<li><a href='/' className='text-white ' >Live Support Session </a></li>
							<li><a href='/' className='text-white ' >Business</a></li>
							<li><a href='/' className='text-white ' >Blogs</a></li>
						</ul>
					</li>
					<li><a href="/">AFFILIATION</a></li>
					<li><a href="/">LIVE SUPPORT CHAT</a></li>
					<li> <div className="form-control">
						<input type="text" placeholder="Search" className="w-20 h-10 input input-bordered" />
					</div></li>
					<li> <div className="indicator">
						<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
					</div></li>
					<li><a href='/' className="items-center text-white btn w-15">LOGIN</a></li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;