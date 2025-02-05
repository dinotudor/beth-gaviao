"use client";

import { useState, useEffect } from "react";

export function useMobile(breakpoint: number = 768) {
    const [isMobile, setIsMobile] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        const checkMobile = () => {
            const width = window.innerWidth;
            setWindowWidth(width);
            setIsMobile(width < breakpoint);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, [breakpoint]);

    return {
        isMobile,
        windowWidth,
        isDesktop: !isMobile,
    };
}

export function MobileDetectionExample() {
    const { isMobile, windowWidth } = useMobile(768);

    return (
        <div>
            <h1>Device Detection</h1>
            <p>Is Mobile: {isMobile ? "Yes" : "No"}</p>
            <p>Window Width: {windowWidth}px</p>
        </div>
    );
}

export function useTouchDevice() {
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        const checkTouchSupport = () => {
            setIsTouchDevice(
                "ontouchstart" in window ||
                    navigator.maxTouchPoints > 0 ||
                    (navigator as Navigator).maxTouchPoints > 0
            );
        };

        checkTouchSupport();
        window.addEventListener("touchstart", checkTouchSupport);

        return () => {
            window.removeEventListener("touchstart", checkTouchSupport);
        };
    }, []);

    return isTouchDevice;
}

export function useDeviceDetection() {
    const mobile = useMobile();
    const isTouch = useTouchDevice();

    return {
        ...mobile,
        isTouch,
        isMobileTouch: mobile.isMobile && isTouch,
        isDesktopTouch: !mobile.isMobile && isTouch,
    };
}
