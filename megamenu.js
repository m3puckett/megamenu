// free to use, MIT license - puckett5.com / https://github.com/m3puckett/megamenu.git
// lightweight megamenu with click to open
const menuItems = document.getElementsByClassName("megamenu-show");  // anything that is opened with us
    closeMenus = function ( exceptMenuId ) {
        let i = 0;
        while (i < menuItems.length) {
            div = document.getElementById(menuItems[i].id);
                // console.log(exceptMenuId);
                if (menuItems[i].id !== exceptMenuId) { div.className = "megamenu"; } // close the menu by changing the class to megamenu
                //   console.log(div.id, div.className);
            i++;
        }
    }
    let showElem = function( showID ) {
        closeMenus( showID );   // close all menus except the clicked, which will show or megamenu at the toggle
        div = document.getElementById( showID );
        try { div.className = div.className === "megamenu" ? "megamenu-show" : "megamenu"; } // toggle the menu
        catch ( div ) {
            if (div.style?.display !== undefined) {
                div.style.display = (( div.style.display === "none" ) ? "block" : "none" );
            } else console.log("undefined div id", showID,)  // log if id not found
        }
    }
    window.addEventListener('click', function(e) {
        if (!document.getElementById('nav')?.contains(e.target) && (!document.getElementById('megamenu')?.contains(e.target))) {
            closeMenus();   // close all menus if clicking outside of id "nav" or id "megamenu"
        }  // checking for click location, including if undefined
    })
