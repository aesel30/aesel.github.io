// ==UserScript==
// @name         Denpasar 
// @namespace    https://viayoo.com/
// @version      0.1
// @description  try to take over the world!
// @author       Faizin
// @run-at       document-start
// @match        https://j6.prometric-jp.com/Reserve/SelectPlace*
// @grant        none
// ==/UserScript==

window.addEventListener("DOMContentLoaded",(c=>{"use strict";var i=!1;['JavaScript:onClick=click_next(\\"IOJ09\\",\\"09:15\\",\\"1\\")','JavaScript:onClick=click_next(\\"IOJ09\\",\\"10:00\\",\\"1\\")','JavaScript:onClick=click_next(\\"IOJ09\\",\\"10:45\\",\\"1\\")','JavaScript:onClick=click_next(\\"IOJ09\\",\\"11:30\\",\\"1\\")','JavaScript:onClick=click_next(\\"IOJ09\\",\\"12:15\\",\\"1\\")','JavaScript:onClick=click_next(\\"IOJ09\\",\\"13:00\\",\\"1\\")','JavaScript:onClick=click_next(\\"IOJ09\\",\\"13:45\\",\\"1\\")','JavaScript:onClick=click_next(\\"IOJ09\\",\\"14:30\\",\\"1\\")','JavaScript:onClick=click_next(\\"IOJ09\\",\\"09:15\\",\\"2\\")','JavaScript:onClick=click_next(\\"IOJ09\\",\\"10:00\\",\\"2\\")','JavaScript:onClick=click_next(\\"IOJ09\\",\\"10:45\\",\\"2\\")','JavaScript:onClick=click_next(\\"IOJ09\\",\\"11:30\\",\\"2\\")','JavaScript:onClick=click_next(\\"IOJ09\\",\\"12:15\\",\\"2\\")','JavaScript:onClick=click_next(\\"IOJ09\\",\\"13:00\\",\\"2\\")','JavaScript:onClick=click_next(\\"IOJ09\\",\\"13:45\\",\\"2\\")','JavaScript:onClick=click_next(\\"IOJ09\\",\\"14:30\\",\\"2\\")'].forEach((function(c){if(!i){var t=document.querySelectorAll('a[href="'+c+'"]');t.length>0&&(t[0].click(),i=!0)}}))}))();