# JS/CSS Grids megamenu
A very lightweight, native Javascript/CSS megamenu that works from click, not hover.

<a href="https://github.com/teloe/snazzymenu/blob/main/LICENSE"><img src="https://img.shields.io/github/license/teloe/snazzymenu?style=for-the-badge" /></a>



## Lightweight
This was developed to remove the need for bootstrap menus, allowing for faster load times.  Using CSS grids, it's easy
make responsive as well.

## How to use
Simply follow the lead of the html file, using the ID and class structure that is provided.  The megamenu class will be
swapped for megamenu-show when the link is clicked.  Formatting has been left plain with the expectation that
custom CSS formatting for your website will be added.

### The menu bar

Megamenus will be called via js code, any other links can be mixed in as needed.

```
<nav id="nav">
    <ul>
        <li><a href="javascript:void(0);" onclick="showElem('services');">Services</a></li>
        <li><a href="javascript:void(0);" onclick="showElem('pentest');">Pentesting</a></li>
        <li><a href="javascript:void(0);" onclick="showElem('compliance');">Compliance</a></li>
        <li><a href="https://raxis.com/blog/">Blog</a></li>
    </ul>
</nav>
```

### The megamenu

Use a div block as follows for each of the megamenus.  Use any formatting you'd like, while maintaining the id and class structure.

```
<div id="compliance" class="megamenu">
    <a href="/compliance">
        <h4>
            Compliance
        </h4>
        <p>Get in compliance, it's required.</p>
    </a>
</div>
```
