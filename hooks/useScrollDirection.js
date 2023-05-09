import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

export default function useScrollDirection(scrollElement) {
    const [isScrollDown, setIsScrollDown] = useState(undefined);
    const prevScrollAmount = useRef(0);

    useEffect(() => {
        document.addEventListener('scroll', () => {
          const scrollAmount = scrollElement ? scrollElement.scrollingElement.scrollTop : document.scrollingElement.scrollTop;
          if (prevScrollAmount.current < scrollAmount) {
            setIsScrollDown(true)
          } else if (prevScrollAmount.current === scrollAmount) {
            return
          } else {
            setIsScrollDown(false)
          }
          prevScrollAmount.current = scrollElement ? scrollElement.scrollingElement.scrollTop : document.scrollingElement.scrollTop;
        })
    }, [scrollElement]);

    return isScrollDown;
}