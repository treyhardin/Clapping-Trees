if (!Shopify.designMode) {
    // Locomotive Scroll
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        lerp: 0.1
    });
    scroll.on('scroll', (instance) => {
        
        // Transparent Header Toggle
        let bodyElement = document.querySelector('body');
        let headerElement = document.querySelector('.header');
        if (bodyElement.classList.contains("banner-page")) {
            if (instance.scroll.y > 0) {
                headerElement.classList.add('sticky');
                headerElement.classList.remove("transparent-header");
            } else {
                headerElement.classList.remove('sticky');
                headerElement.classList.add("transparent-header");
            }
        }

        // Circle Badge Animation
        let circleText = document.querySelector('.circle-text');
        let computedStyles = window.getComputedStyle(circleText, null);
        let transformStyle = computedStyles.getPropertyValue('transform');

        var values = transformStyle.split('(')[1],
            values = values.split(')')[0],
            values = values.split(',');

        var a = values[0]; // 0.866025
        var b = values[1]; // 0.5
        var c = values[2]; // -0.5
        var d = values[3]; // 0.866025

        var angle = Math.round(Math.asin(b) * (180/Math.PI));
        
        
        angle = (angle + instance.scroll.y) / 10;
        let transformAngle = "rotate(" + angle + "deg)";

        circleText.style.transform = transformAngle;


    });

    window.addEventListener('DOMContentLoaded', (event) => {
        scroll.update();
    });
}