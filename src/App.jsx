import Footer from './components/Footer';
import Header from './components/Header';
import Popup from './components/Popup';
import List from './components/List';
import './style.scss';

//원시형자료는 : 메모리, 값 자체가 callstack에서 생성된 다음에 저장
//원시형자료는 변수값을 다른 변수에 복사했을때 값 자체가 복사되는 deep copy;s
//복사된 값을 변경해도 원본은 그대로 유지되는 불변성 유지 (immutable);

//참조형자료는 : 메모리(callstack), 배열, 객체등의 값 자체는 (heap memory) 생성돔
//callstack에 있는 메모리에는 배열의 값 자체가 담기는게 아닌 힙메모리에 있는 값의 위치값이 담김
//참조링크가 담겨있는 변수를 새로운 변수에 옮겨담으면 값이 복사되는 것이 참조링크만 복사됨
//결국 같은 값을 가리키고 있는 두개의 링크만 복사가됨
//복사가된 링크의 값을 바꾸면 결국 원본값이 회손됨 (shallow copy) 불변성 유지 안됨

//리액트 개발시 불변성이 중요한 이유
//리액트는 원본이 있어야 본사본을 통해서 차이점을 비교분석
//리액트안에서 배열이나, 객체같은 참조형 자료는 무조건 deep copy를 해서 데이터를 변경해야됨

import { useState } from 'react';

function App() {
	console.log('app');
	//const [상태값, 상태변경전용함수] = useState(초기값);
	//리액트 컴포넌트는 state값이 State변경함수로 변경되야지만 컴포넌트가 재랜더링됨
	//숫자를 증가, 감소 기킬때 전위증감 연산자를 써야지만 해당 렌더링 사이클에서 바로 값이 변경되면서 다음번 렌더링에 반영됨
	let [Num, setNum] = useState(0);
	console.log(Num);

	return (
		<>
			<h1>{Num}</h1>
			<button onClick={() => setNum(--Num)}>minus</button>
			<button onClick={() => setNum(++Num)}>plus</button>
		</>
	);
}

export default App;
/* 
	- hooks 16버전부터 새로나온 개념으로 리액트에서 자주쓰이는 상태관리, 생명주기에 관련된 내용들을
	- hook이라는 형태의 내장함수로 편의기능을 제공
	- hook이 나오기 전까지는 class방식으로 컴포넌트를 생성 및 기능확장을 비효율적으로 처리

	자주쓰는 hook 3대장
	useState - 컴포넌트의 화면의 랜더링을 담당하는 중요한 정보값 관리
	useEffect - 컴포넌트의 생명주기에 관련된 함수 (생성, 변화, 소멸)
	useRef - 컴포넌트 안쪽에서 특정 값을 참조객체에 담을때

	리액트의 성능관를 hook
	리액트에서의 memoization - 메모리점유율을 늘려서 성능을 개선
	자바스크립트는 기본적으로 Garbage collector에 의해서 메모리가 관리됨
	아래의 hook을 통해서 특정 값을 강제 메모이제이션 처리하면 가비지컬렉터에서 제외함
	memo(컴포넌트 자체를 메모이제이션)
	useCallback (컴포넌트 안쪽의 핸들러 함수 자체를 메모이제이션)
	useMemo (특정 핸들러함수의 리턴값을 메모이제이션)
*/
