"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef, useLayoutEffect } from "react";
import styles from '../page.module.css'

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScrollerEffect({children}: {readonly children: React.ReactNode}) {
    const scrollControllerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const sections = gsap.utils.toArray(scrollControllerRef.current?.children as HTMLCollection);
            gsap.to(sections, {
                xPercent : -100 * (sections.length -1),
                ease : 'none',
                scrollTrigger: {
                    trigger: scrollControllerRef.current,
                    pin: true,
                    scrub: 1,
                    end: () => '+=' + scrollControllerRef.current?.offsetWidth,
                },
            })
        }, scrollControllerRef);
        return () => ctx.revert();
    }, []);
    return(
        <section ref={scrollControllerRef} className={styles.horizontalWindow}>
            {children}
        </section>
    );
}

