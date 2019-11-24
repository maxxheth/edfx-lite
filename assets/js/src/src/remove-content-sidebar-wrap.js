var contentSidebarWrap = document.getElementsByClassName('content-sidebar-wrap')[0],
    siteContainer = document.getElementsByClassName('site-container')[0];

if (siteContainer === contentSidebarWrap.parentNode) {

    siteContainer.removeChild(contentSidebarWrap);

}

