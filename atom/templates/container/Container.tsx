import React from 'react';
import {ThemeHandlerProvider} from "@/lib/ThemeHandlerContext";
import ContainerView from "@/atom/templates/container/ContainerView";

export default function Container({children}: ContainerPropsInterface) {


  /**
   * Children Props
   */
  // const props = {  scroll: scrollYCheck }
  // const childrenWithProps = Children.map(children , (children) => {
  //     if (isValidElement(children)) {
  //         return React.cloneElement(children as React.ReactElement<any> , { props });
  //     }
  //     return children;
  // });


  return (
    <ThemeHandlerProvider>
      <ContainerView>
        {children}
      </ContainerView>
    </ThemeHandlerProvider>
  )
}