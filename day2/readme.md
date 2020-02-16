# Javascript Amazon UI 구현

- 캐러셀 구현
- mock 데이터 
- ES6 Classes 사용
- addEventListener
- Animation / CSS transition, transform 
- 자연 스럽게 동작 구현



## Classes 

#### 전체 구조

네비게이션 캐러셀에는 크게 2가지로 구조를 나눔

- Nav 영역 
  - click Event가 발생가하면 해당 Index를 전달 **and** active 처리
  - active 처리는 index 값을 참고 하여 해당 element 에게 active 부여 
- Contens 영역
  - 받은 index 값에 따라 해당 화면 보여줌



### Class를 어떻게 나눌것인가?

#### UI를 담당하는 Class

mock 데이터를 가져와 UI 를 그려주는 Class

- uiMain Class : Nav 와 Contents 를 묶어줌
- uiNav Class : mock 데이터를 가쳐와 Nav 를 그려줌
- uiContents class : mock 데이터를 가져와 card를 그려줌

#### 기능을 담당하는 Class

- Slider Class : 
  - document.querySelector() / querySelectorAll() 을 사용하여 DOM 컨트롤
  - Slider의 property = index / DOM Elements
  - index라는 상태를 가지고 있으며 addEventListner, 등 이벤트 발생시 index 상태값 변경
  - index 상태 값에 따라 contents 영역 **and** nav 영역이 변경
  - init 초기 스타일(css) / 복사본 생성



#### Nav Class / Contents Class 로 나누어 보기

- Nav Class는 어떤 메소드와 프로퍼티를 가져야 하는가?
- Contents Class는 어떤 메소드와 프로퍼티를 가져야 하는가?
- 이를 구성함에 있어 부족하거나 불필요한 요소에 대해서 생각해보라.



##### **Nav Class**

역할 : 

- Click이 Event가 발생하면 클릭된 element 가지고 있는 data-set을 전송

- Click이 되면 Active 처리가 되어야 함

  - index값을 참고하여 해당 버튼을 Active 할것인지?
  - 단순 Event가 발생하면 해당 element를 Active 할것인지?

  **단순 Event가 발생시 해당 element를 Active 하게되면 좌우 버튼을 눌렀을때는 버그가 생김**

  여기서 드는 생각, 굳이 슬라이더에 Nav Class 를 나눠야 할까?