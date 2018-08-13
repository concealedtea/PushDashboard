var isCollapsed = false
collapseButton = document.querySelector('#collapse-button');

collapseButton.addEventListener('click', collapseSidebar);

function collapseSidebar() {
    if (isCollapsed == false) {
        let contentWrapper = document.querySelector('.content-wrapper');
        contentWrapper.style.position = "absolute";
        contentWrapper.style.zIndex = "1030";
        contentWrapper.style.width = "100%";
        contentWrapper.style.marginLeft = "0px";
        contentWrapper.style.transition = "all .5s";
        collapseButton.innerHTML = "Sidebar Mode";
        isCollapsed = true;
    } else {
        let contentWrapper = document.querySelector('.content-wrapper');
        contentWrapper.style.position = "static";
        contentWrapper.style.width = "auto";
        contentWrapper.style.marginLeft = "230px";
        contentWrapper.style.zIndex = "800";
        contentWrapper.style.transition = "all .5s";
        collapseButton.innerHTML = "Fullscreen Mode";
        isCollapsed = false;
    }
}
