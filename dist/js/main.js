function initFooterMenuAccordion() {

    const accordionBtns = Array.from(
        document.querySelectorAll(".footer .footer__column .toggle-button")
    );

    accordionBtns.forEach((accordion) => {
        accordion.addEventListener("click", function () {

            this.closest(".footer__column").classList.toggle("is-active");

            let content = this.closest(".footer__column-label").nextElementSibling;

            if (content.style.maxHeight) {
                //this is if the accordion is open
                content.style.maxHeight = null;
            } else {
                //if the accordion is currently closed
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
}

window.addEventListener('load', () => {
    initFooterMenuAccordion();
})

window.addEventListener('load', () => {
    const btnOpen = document.querySelector('.guidance-by-industry .select-industry--mobile-btn-open');
    const btnClose = document.querySelector('.guidance-by-industry .select-industry--mobile-btn-close .close-button');
    const guidanceListing = document.querySelector('.guidance-by-industry .guidance-by-industry__listing-wrapper')


    btnOpen.addEventListener('click', () => {
        guidanceListing.style.display = 'block';
        document.body.style.overflow = 'hidden'
    })

    btnClose.addEventListener('click', () => {
        guidanceListing.style.display = 'none';
        document.body.style.overflow = ''
    })
})