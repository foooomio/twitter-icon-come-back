// ==UserScript==
// @name         Twitter Icon Come Back
// @namespace    https://foooomio.net
// @match        https://twitter.com/*
// @match        https://tweetdeck.twitter.com/
// @author       foooomio
// @run-at       document-body
// @grant        none
// @license      MIT License
// ==/UserScript==

(function() {
    document.body.className = document.body.className.replace('edge-design');
    new MutationObserver(function(mutations) {
        if (!mutations.some(function(mutation) {
            return mutation.oldValue.indexOf('edge-design') !== -1;
        })) return;
        document.body.className = document.body.className.replace('edge-design');
    }).observe(
        document.body,
        { attributes: true, attributeOldValue: true, attributeFilter: ['class'] }
    );
})();
