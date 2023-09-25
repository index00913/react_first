//rfce
function Header() {
	const handler = () => {
		console.log('text');
	};
	return (
		//한줄주석
		<header>
			<h1 className='title'>Logo</h1>
			<p onClick={() => handler('hello')}>링크</p>
		</header>
	);
}

export default Header;
