import { useEffect, useState } from "react";

export default function useScrollTrigger() {
    const [scrollAmount, setScrollAmount] = useState(0);

    useEffect(() => {
        function handleScroll() {
            setScrollAmount(Math.floor(document.scrollTop) || Math.floor(document.scrollingElement.scrollTop))
        };

        document.addEventListener('scroll', () => handleScroll())
            
        return () => {
            document.removeEventListener('scroll', handleScroll());
        }
    }, []);

    return scrollAmount;
}