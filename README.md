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


### 4. Checked , 요소 옵저버의 문제

---
우선 라이브러리를 사용해서 Top 을 선택했었는데 intersection Observer 사용하는 것도 해보고 싶어서 두 가지 다 적용해보았습니다. 
결론적으로는 하나만 사용해도 되지만 두 가지 다 사용해 보는 것이 좋을 것 같아서 두 개의 기능을 분리하여 훅으로 만들었습니다

isTop => 라이브러리 사용
요소 관찰 => intersection Observer 사용

이 때 이슈가 있었는데 사용자 관점에서 아래로 스크롤을 내릴 경우 header의 배경색을 안보이도록 했었는데 모바일일 경우 좀 더 나은 경험을 제공하기 위해서 모바일 Menu 버튼을 클릭 했을 경우에 다시 색깔이 보이도록 설계하기 위해서 
Redux , jotai 중에 고민하다가 좀 무거워도 대중적으로 사용되는 Redux 를 사용했습니다. persist 를 이용한 새로고침 방지는 필요 없을 것 같아서 제공하지 않았습니다.


### 5. 슬라이드 이슈

음.. Styled component 에서 클래스를 너무 많이 만든다고 경고창이 나타난다. 슬라이드 방식으로 마우스 클릭으로 넘기도록 하고싶었는데 

```javascript

'use client'
import React, {useMemo, useRef, useState} from "react";
import ProjectBorderContentView from "@/atom/molecules/project/border/ProjectBorderContentView";
import styled, {css, RuleSet} from "styled-components";

const Test = styled.div<{$style: any}>`
  ${props => {
      return `
        transform: translateX(${props.$style}px);
      `
  }};
  flex: 0 0 100%;
  height: 100%;
  background-color: #ccc;
`

export default function ProjectBorderContent(): React.JSX.Element {

    const [isDragging, setIsDragging] = useState(false);
    const [startPosition, setStartPosition] = useState(0);
    const [currentTranslate, setCurrentTranslate] = useState(0);
    const [endPosition , setEndPosition] = useState(0);
    const testRef = useRef<HTMLDivElement>(null);

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartPosition(e.clientX - currentTranslate);
    };

    const handleMouseUp = (e: React.MouseEvent) => {
        setEndPosition(e.clientX - currentTranslate)

        setIsDragging(false);
    };

    const handleMouseLeave = (e: React.MouseEvent) => {
        setEndPosition(e.clientX - currentTranslate)
        setIsDragging(false);
    };
    // const cal = useMemo( () => Math.abs(startPosition) - Math.abs(endPosition) , []);
    const handleMouseMove = (e: React.MouseEvent) => {
        if (isDragging) {
            const currentPosition = e.clientX;
            const translate = currentPosition - startPosition;
            const cal = Math.abs(startPosition) - Math.abs(endPosition);
            console.log(Math.abs(startPosition) - Math.abs(endPosition));
            const width = testRef.current?.offsetWidth || 0;
            if (translate > width) {
                setCurrentTranslate(width);
            } else if ((width * -1) > translate) {
                setCurrentTranslate(width  * -1);
            } else {
                setCurrentTranslate(translate);
            }
        }
    };


    return (
        <ProjectBorderContentView
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            ref={testRef}
        >
            <Test $style={currentTranslate}>ㅅㄷㄴㅅㅁㄴㅇㄻㅇㄻㄴㅇㄻㄴ</Test>
            <Test $style={currentTranslate}>asdfasdfasdfs</Test>
            <Test $style={currentTranslate}>asdfasdfasdfs</Test>
        </ProjectBorderContentView>
    )
}
```
