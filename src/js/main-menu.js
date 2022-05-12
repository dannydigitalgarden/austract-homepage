window.addEventListener('load', () => {
    const headerMainMenu = document.querySelector('.header-main-menu')
    const menuLevelOneItems =  document.querySelectorAll('.main-menu__item.level-1.is-parent');
    const bodyHeight = document.body.offsetHeight;
    const headerMainMenuOffsetTop = headerMainMenu.offsetTop + headerMainMenu.getBoundingClientRect().height;

    document.body.style.setProperty('--overlay-top', headerMainMenuOffsetTop + "px");
    document.body.style.setProperty('--overlay-height', bodyHeight - headerMainMenuOffsetTop + "px");

    let megaMenuIsShowed = false;

    menuLevelOneItems.forEach(item => {
        const megaMenu = item.querySelector('.main-menu__second-level');
        const closeButton  = item.querySelector('.main-menu__second-level .close-button')

        item.addEventListener('click', (e) => {
            if (megaMenu.contains(e.target)) return
            if (!megaMenuIsShowed) {
                item.classList.add('is-active')
                document.body.classList.add('body-menu-hover');
                document.body.classList.remove('body-menu-hover-fade-out');
                megaMenu.style.display = 'block';
                megaMenuIsShowed = true;
            } else {
                closeMegaMenu(item, megaMenu)
            }
        });

        closeButton.addEventListener('click', (e) => {
            e.stopImmediatePropagation()
            closeMegaMenu(item, megaMenu)
        })
    })

    document.addEventListener('mouseup', (e) => {

            const activeMenu = document.querySelector(".main-menu__item.level-1.is-parent.is-active");
           
            if (!activeMenu) return
            if (!activeMenu.contains(e.target)) {
                const activeMegaMenu = activeMenu.querySelector('.main-menu__second-level');
                closeMegaMenu(activeMenu, activeMegaMenu)
            }
    })


    function closeMegaMenu(menuItem, megaMenu) {
        document.body.classList.remove('body-menu-hover');
        document.body.classList.add('body-menu-hover-fade-out');
        megaMenu.style.display = 'none';
        megaMenuIsShowed = false;
        menuItem.classList.remove('is-active')
    }
})