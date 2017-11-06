// ==UserScript==
// @name         Twitter Icon Come Back
// @namespace    https://foooomio.net
// @match        https://twitter.com
// @match        https://twitter.com/*
// @match        https://tweetdeck.twitter.com/
// @author       foooomio
// @run-at       document-start
// @grant        none
// @license      MIT License
// ==/UserScript==

(function() {
    const style = `
.Avatar--circle { border-radius: 3px !important; }
.dropdown-toggle { border-radius: 4px !important; }
.Avatar { border-radius: 4px !important; }
.avatar { border-radius: 10% !important; }
.DashboardProfileCard-avatarImage { border-radius: 10% !important; }
.ProfileAvatar { border-radius: 10% !important; }
.ProfileAvatar-image { border-radius: 10% !important; }
`;
    document.head.innerHTML += '<style>' + style + '</style>';
})();
