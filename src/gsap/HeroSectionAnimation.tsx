import gsap from 'gsap'

const HeroSectionAnimation = (q:gsap.utils.SelectorFunc) => {
    gsap.to(q(".t1"), {
        delay: '.3',
        opacity: "1",
        y: 0,
        duration: '.6',
        ease: 'ease'
    });
    gsap.to(q(".t2"), {
        delay: '.7',
        opacity: "1",
        y: 0,
        duration: '.4',
        ease: 'ease'
    });
    gsap.to(q(".b1"), {
        delay: '1.15',
        opacity: "1",
       
        duration: '.3'
    });
    gsap.to(q(".b2"), {
        delay: '1.6',
        opacity: "1",
        duration: '.6'
    });

    gsap.to(".mainBox", {
        delay: '1.5',
        opacity: "1",
        duration: '.7'
    });

    gsap.to(".quoteBox", {
        delay: '1.9',
        opacity: "1",
        duration: '.7',
        top: 'auto'
    });
    gsap.to(".gradientBg", {
        delay: '2.3',
        opacity: "1",
        duration: '1'
    });
    gsap.to(".img1", {
        delay: '1.6',
        opacity: 1,
        duration: '1'
    });
}

export default HeroSectionAnimation