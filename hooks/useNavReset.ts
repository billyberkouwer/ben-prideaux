import { useEffect } from "react";

export default function useNavReset(setIsNavLight: any) {
    useEffect(() => {
        setIsNavLight(false);
    }, [setIsNavLight]);
    return null;
}