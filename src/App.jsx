import { useState, useRef } from 'react';
import './style.scss';

function App() {
	console.log('re-render');
	let Num = useRef(0);
	let Box = useRef(null);	
	console.log(Num);

	const prev = ()=>{
		Box.current,style.transform = `rotate(${--Num.current * 45}deg)`
	};

	const next = ()=>{
		Box.current,style.transform = `rotate(${++Num.current * 45}deg)`
	};
	//const [Num, setNum] = useState(0);
	return (
		<>
			<button
				onClick={}
			>
				prev
			</button>
			<button
				onClick={}
			>
				next
			</button>

			<article ref={box}></article>
		</>
	);
}

export default App;
/*
	state: 해당 값이 변경되면 무조건 컴포넌트 재랜더링됨
	변수: 컴포넌트 안에 값을 만듬

	useRef실사용 사례1
	- 모션작업을 할때 특정 스타일 변경되더라도 컴포넌트를 불필요허게 재호출하고 싶지 않을때 
	useRef실사용 사례2
	- 가상돔요소를 실제적으로 선택해서 가져와야 할 때
*/
