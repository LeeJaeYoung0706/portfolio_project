# portfolio_project
개인 이력서 및 포트폴리오 홈페이지 


## Start

```
npx create-next-app@latest
```

## 프로젝트의 목적

---
여러 면접을 다니면서 CSS에 대한 질문을 많이 받았는데,
아무래도 퍼블리싱을 받아서 프론트 작업을 많이 하다보니까 기초가 적었던 것은 사실인 것 같아
포트폴리오를 직접 하나하나 제작해가면서 CSS 를 공부하려고 합니다.


## 프로젝트 이슈

---
### 1. Styled-Component 이슈

---
SeverSideRendering 과 무관하게 CSS in JS 인 Styled-Component 로 인해서
상위 컴포넌트에 'use client' 를 선언해서 StyledComponentRegistry 로 CSS 를 입혀줘야합니다.


### 2. Scroll Event 이슈

---

new IntersectionObserver(callback, options) 방법과 Library 사용 중에 고민했습니다.
IntersectionObserver => 특정 요소를 옵저빙하여 특정한 액션을 취할 수 있음
framer-motion => 요소 , scroll Y 의 위치 등을 정확하게 파악할 수 있음
직접 구현 => 간단하게 구현 가능 ( 직접 Dom 을 핸들링하는 window 함수를 사용함.)

```javascript
const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    }
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
};

export default useScrollPosition;
```

넥스트에서 지원하는 스크롤 포지션 복구 기능

```javascript
next.config.js
    experimental: {
        scrollRestoration: true
    };
```

사용 목적은 요소보다는 scroll이 0 이 아닐 때 사용하는 Style 변경이 주 목적이어서 라이브러리를 사용해보려고 합니다.


### 3. Style 관리 이슈

---
어떻게 해야 좋을까.. Atom 형식으로 가져가니까 Style에 대한 처리가 각각의 파일에 분담되어 있어서 어려운 점.
CSS 기능 별로 CSS 파일을 만드는 것이 나을까..

