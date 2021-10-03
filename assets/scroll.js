if (!Shopify.designMode) {
    // Locomotive Scroll
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        lerp: 0.3
    });
    scroll.on('scroll', (instance) => {
        // console.log(instance.scroll.y);
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
    });
}