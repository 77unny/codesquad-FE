# FE# 비동기 프로그래밍

- 동기/비동기의 차이를 이해
- 호출스택(call stack) 이해
- 호출스택(call stack) & callback queue 이벤트 루프 이해
- 동기-비동기 순서, 비동기-비동기 순서 이해 그리고 이순서에 따른 call stack 과 callback queue 이해
- Event Queue 와 call stack 과의 관계
- JSON
- fetch API (어떻게 요청이 되는지? 동작방식)
- Promise 패턴
- 추가적으로 XHR (XMLHTTPRequest) / HTTP Method / 서버 요청 방식 이해
- DOM - TEMPLATING



## JavaScript 엔진 동작 원리?

자바스크립트는 싱글스레드 언어로 한 번에 하나의 작업만 할 수 있다.

자바스크립트 엔진에는 크게 3가지 영역으로 나눌 수 있다.

- Heap
- Call stack 
- Queue & Event Loop

![https://media.prod.mdn.mozit.cloud/attachments/2013/02/09/4617/7989fbc61258c53631b736c76074c517/default.svg](https://media.prod.mdn.mozit.cloud/attachments/2013/02/09/4617/7989fbc61258c53631b736c76074c517/default.svg)

#### Heap

자바스크립트 엔진이 구동되면서 코드를 읽고 실행 하는 과정에서 중요한 2가지 단계

- 정보(ex. 변수, 함수 등)를 특정한 장소에 저장 = **메모리 힙 (Memory Heap)**
- 현재 실행되고 있는 코드를 트래킹 하는 작업 = **호출 스택 (Call stack)**

예를 들어 `const num = 100` 이라는 코드를 자바스크립트 엔진에게 `num` 라는 이름을 가진 변수를 자바스크립트 메모리 공간에 달라고 하는 것이다. 그리고 그 공간에 `100` 이라는 값을 보관 해줘 라는 행위

**즉, 변수 함수 저장 호출등의 작업이 발생하는 이 공간이 메모리 힙 이라 한다.**



#### Call stack (호출스택)

메모리를 존재하는 공간 중 하나로, 코드를 읽어 내려가면서 수행할 작업들을 스택에 쌓는다. 수행에 필요한 것들은 메모리 힙에서 찾아서 작업을 수행한다.

**즉, 어떠한 함수를 실행 시키면 스택이라는 공간에 PUSH, 그 함수가 반환 및 종료 되면 POP**

실행 예)

```javascript
function foo () {
	console.log('foo');
	return poo();
}

function poo () {
	console.log('poo');
}
foo();
```

1. foo()를 실행 하게 되면 `foo()`를 호출스택 (call stack) 에 쌓인다
2. foo() 함수에서 먼저 정의된 `console.log('foo')` 를 호출 스택에 올린다.
3. 실행이 종료된 `console.log('foo')` 호출스택 (call stack) 에 **제거** 하고, `foo() 함수에서 return poo()` 를 만나 호출스택 (call stack) `poo()`를 올린다.
4. poo() 함수에서 정의된 console.log('poo')를 호출스택에 올리고 종료와 함꼐 제거 된다.
5. 실행은 `PUSH` / 제거는 `POP`



#### Callback Queue & Event Queue ... Event Loop

Queue는 실행될 콜백함수나 실행될 메세지들에 대한 리스트,
callback queue, event queue, task queue 동일한 말이며, 실행된 콜백함수, 실행될 메세지들에 대한 리스트

call stack (호출스택)이 비어져있으면 event loop 가 queue 에 있는 리스트를 stack에 담아준다.

`Event Loop` 는 call stack가 비어져있는지 반복적으로 확인하여 queue의 메세지를 전달한다.

```javascript
//Event loop 동작방식 MDN, 새로운 메세지가 없다면 도착을 동기적으로 기다린다. 
while(queue.waitForMessage()){
  queue.processNextMessage();
}
```

실행 예)

```javascript
function foo(){
    console.log('foo');
    return poo();
}
setTimeout(function(){
    console.log('a')
},0)
function poo(){
    console.log('poo')
}
foo()
```

1. 실행 예제 코드의 실행 순서는 `setTimeout` → `foo()` → `poo()`
2. setTimeout이 스택에 쌓이고 setTimeout은 `Queue`에게 가지고 있는 콜백을 넘긴다.
3. foo(), poo() 가 실행 되고 stack이 비어있을 때까지 **Queue는 콜백을 가지고 있는다.**
4. `event loop`가 stack이 비어 있는지 확인하고 비어있으면 해당 콜백을 `stack` 으로 **옮겨 실행한다.**

