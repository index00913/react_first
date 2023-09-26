import { useState } from 'react';
import './style.scss';
import Popup from './components/Popup';

function App() {
	const [Open, setOpen] = useState(false);
	return (
		<>
			<button onClick={() => setOpen(true)}>팝업 열기</button>
			<button onClick={() => setOpen(false)}>팝업 닫기</button>
			{Open && <Popup />}
		</>
	);
}

export default App;
