// ==UserScript==
// @name         Bandung 
// @namespace    https://aesel.github.io
// @version      0.1
// @description  try to take over the world!
// @author       Aesel
// @run-at       document-start
// @match        https://j6.prometric-jp.com/Reserve/SelectPlace*
// @grant        none
// ==/UserScript==

window.addEventListener("DOMContentLoaded", () => {
    "use strict";
    const links = [
        'JavaScript:onClick=click_next("IOJ04","09:15","1")',
        'JavaScript:onClick=click_next("IOJ04","10:00","1")',
        'JavaScript:onClick=click_next("IOJ04","10:45","1")',
        'JavaScript:onClick=click_next("IOJ04","11:30","1")',
        'JavaScript:onClick=click_next("IOJ04","12:15","1")',
        'JavaScript:onClick=click_next("IOJ04","13:00","1")',
        'JavaScript:onClick=click_next("IOJ04","09:15","2")',
        'JavaScript:onClick=click_next("IOJ04","10:00","2")',
        'JavaScript:onClick=click_next("IOJ04","10:45","2")',
        'JavaScript:onClick=click_next("IOJ04","11:30","2")',
        'JavaScript:onClick=click_next("IOJ04","12:15","2")',
        'JavaScript:onClick=click_next("IOJ04","13:00","2")'
    ];

    let clicked = false;
    links.forEach(link => {
        if (!clicked) {
            const elements = document.querySelectorAll(`a[href="${link}"]`);
            if (elements.length > 0) {
                elements[0].click();
                clicked = true;
            }
        }
    });
});
