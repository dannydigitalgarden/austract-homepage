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