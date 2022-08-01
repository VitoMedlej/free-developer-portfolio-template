import gsap from 'gsap'

const HeroSectionAnimation = (q:gsap.utils.SelectorFunc) => {
    gsap.to(q(".t1"), {
        delay: '.25',
        opacity: "1",
        y: 0,
        duration: '.5',
        ease: 'ease'
    });
    gsap.to(q(".t2"), {
        delay: '.6',
        opacity: "1",
        y: 0,
        duration: '.4',
        ease: 'ease'
    });
    gsap.to(q(".b1"), {
        delay: '1.1',
        opacity: "1",
       
        duration: '.3'
    });
    gsap.to(q(".b2"), {
        delay: '1.5',
        opacity: "1",
        duration: '.5'
    });

    gsap.to(".mainBox", {
        delay: '1.4',
        opacity: "1",
        duration: '.6'
    });

    gsap.to(".quoteBox", {
        delay: '1.8',
        opacity: "1",
        duration: '.6',
        top: 'auto'
    });
    gsap.to(".gradientBg", {
        delay: '2.3',
        opacity: "1",
        duration: '.8'
    });
    gsap.to(".img1", {
        delay: '1.6',
        opacity: 1,
        duration: '.9'
    });

}

export default HeroSectionAnimation