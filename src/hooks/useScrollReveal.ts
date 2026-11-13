import {useEffect} from 'react';

export function useScrollReveal() {
    useEffect(() => {
        if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    (entry.target as HTMLElement).dataset.reveal = 'visible';
                    observer.unobserve(entry.target);
                }
            });
        }, {threshold: 0.1, rootMargin: '0px 0px -30px 0px'});

        elements.forEach((element) => {
            element.dataset.reveal = 'pending';
            observer.observe(element);
        });

        return () => {
            observer.disconnect();
            elements.forEach((element) => {
                delete element.dataset.reveal;
            });
        };
    }, []);
}
