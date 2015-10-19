﻿function Navbar() {
    this.brand = "Your Brand Here";
    this.pages =
        [
            new Page("Home", "/", ""),
            new Page("About", "/about", "about"),
        ];
}

function Page(_name, _url, _sref) {
    this.name = _name;
    this.url = _url;
    this.sref = _sref;
}
Page.prototype.isActive = function () {
    return window.location.pathname == this.url;
}
