// ==UserScript==
// @name         Jakarta 
// @namespace    https://viayoo.com/
// @version      0.1
// @description  try to take over the world!
// @author       Faizin
// @run-at       document-start
// @match        https://j6.prometric-jp.com/Reserve/SelectPlace*
// @grant        none
// ==/UserScript==

window.addEventListener("DOMContentLoaded",(c=>{"use strict";var i=!1;['JavaScript:onClick=click_next(\\"IOJ02\\",\\"09:15\\",\\"1\\")','JavaScript:onClick=click_next(\\"IOJ02\\",\\"10:00\\",\\"1\\")','JavaScript:onClick=click_next(\\"IOJ02\\",\\"10:45\\",\\"1\\")','JavaScript:onClick=click_next(\\"IOJ02\\",\\"11:30\\",\\"1\\")','JavaScript:onClick=click_next(\\"IOJ02\\",\\"12:15\\",\\"1\\")','JavaScript:onClick=click_next(\\"IOJ02\\",\\"13:00\\",\\"1\\")','JavaScript:onClick=click_next(\\"IOJ02\\",\\"13:45\\",\\"1\\")','JavaScript:onClick=click_next(\\"IOJ02\\",\\"14:30\\",\\"1\\")','JavaScript:onClick=click_next(\\"IOJ02\\",\\"15:15\\",\\"1\\")','JavaScript:onClick=click_next(\\"IOJ02\\",\\"16:00\\",\\"1\\")','JavaScript:onClick=click_next(\\"IOJ02\\",\\"16:45\\",\\"1\\")','JavaScript:onClick=click_next(\\"IOJ02\\",\\"17:30\\",\\"1\\")','JavaScript:onClick=click_next(\\"IOJ01\\",\\"09:15\\",\\"1\\")','JavaScript:onClick=click_next(\\"IOJ01\\",\\"10:00\\",\\"1\\")','JavaScript:onClick=click_next(\\"IOJ01\\",\\"10:45\\",\\"1\\")','JavaScript:onClick=click_next(\\"IOJ01\\",\\"11:30\\",\\"1\\")','JavaScript:onClick=click_next(\\"IOJ01\\",\\"12:15\\",\\"1\\")','JavaScript:onClick=click_next(\\"IOJ01\\",\\"13:00\\",\\"1\\")','JavaScript:onClick=click_next(\\"IOJ01\\",\\"13:45\\",\\"1\\")','JavaScript:onClick=click_next(\\"IOJ01\\",\\"14:30\\",\\"1\\")','JavaScript:onClick=click_next(\\"IOJ01\\",\\"15:15\\",\\"1\\")','JavaScript:onClick=click_next(\\"IOJ01\\",\\"16:00\\",\\"1\\")','JavaScript:onClick=click_next(\\"IOJ01\\",\\"16:45\\",\\"1\\")','JavaScript:onClick=click_next(\\"IOJ01\\",\\"17:30\\",\\"1\\")','JavaScript:onClick=click_next(\\"IOJ07\\",\\"09:15\\",\\"1\\")','JavaScript:onClick=click_next(\\"IOJ07\\",\\"10:00\\",\\"1\\")','JavaScript:onClick=click_next(\\"IOJ07\\",\\"10:45\\",\\"1\\")','JavaScript:onClick=click_next(\\"IOJ07\\",\\"11:30\\",\\"1\\")','JavaScript:onClick=click_next(\\"IOJ07\\",\\"12:15\\",\\"1\\")','JavaScript:onClick=click_next(\\"IOJ07\\",\\"13:00\\",\\"1\\")','JavaScript:onClick=click_next(\\"IOJ07\\",\\"13:45\\",\\"1\\")','JavaScript:onClick=click_next(\\"IOJ07\\",\\"14:30\\",\\"1\\")','JavaScript:onClick=click_next(\\"IOJ07\\",\\"15:15\\",\\"1\\")','JavaScript:onClick=click_next(\\"IOJ07\\",\\"16:00\\",\\"1\\")','JavaScript:onClick=click_next(\\"IOJ07\\",\\"16:45\\",\\"1\\")','JavaScript:onClick=click_next(\\"IOJ07\\",\\"17:30\\",\\"1\\")','JavaScript:onClick=click_next(\\"IOJ10\\",\\"09:15\\",\\"1\\")','JavaScript:onClick=click_next(\\"IOJ10\\",\\"10:00\\",\\"1\\")','JavaScript:onClick=click_next(\\"IOJ10\\",\\"10:45\\",\\"1\\")','JavaScript:onClick=click_next(\\"IOJ10\\",\\"11:30\\",\\"1\\")','JavaScript:onClick=click_next(\\"IOJ10\\",\\"12:15\\",\\"1\\")','JavaScript:onClick=click_next(\\"IOJ10\\",\\"13:00\\",\\"1\\")','JavaScript:onClick=click_next(\\"IOJ10\\",\\"13:45\\",\\"1\\")','JavaScript:onClick=click_next(\\"IOJ10\\",\\"14:30\\",\\"1\\")','JavaScript:onClick=click_next(\\"IOJ10\\",\\"15:15\\",\\"1\\")','JavaScript:onClick=click_next(\\"IOJ10\\",\\"16:00\\",\\"1\\")','JavaScript:onClick=click_next(\\"IOJ10\\",\\"16:45\\",\\"1\\")','JavaScript:onClick=click_next(\\"IOJ10\\",\\"17:30\\",\\"1\\")','JavaScript:onClick=click_next(\\"IOJ02\\",\\"09:15\\",\\"2\\")','JavaScript:onClick=click_next(\\"IOJ02\\",\\"10:00\\",\\"2\\")','JavaScript:onClick=click_next(\\"IOJ02\\",\\"10:45\\",\\"2\\")','JavaScript:onClick=click_next(\\"IOJ02\\",\\"11:30\\",\\"2\\")','JavaScript:onClick=click_next(\\"IOJ02\\",\\"12:15\\",\\"2\\")','JavaScript:onClick=click_next(\\"IOJ02\\",\\"13:00\\",\\"2\\")','JavaScript:onClick=click_next(\\"IOJ02\\",\\"13:45\\",\\"2\\")','JavaScript:onClick=click_next(\\"IOJ02\\",\\"14:30\\",\\"2\\")','JavaScript:onClick=click_next(\\"IOJ02\\",\\"15:15\\",\\"2\\")','JavaScript:onClick=click_next(\\"IOJ02\\",\\"16:00\\",\\"2\\")','JavaScript:onClick=click_next(\\"IOJ02\\",\\"16:45\\",\\"2\\")','JavaScript:onClick=click_next(\\"IOJ02\\",\\"17:30\\",\\"2\\")','JavaScript:onClick=click_next(\\"IOJ01\\",\\"09:15\\",\\"2\\")','JavaScript:onClick=click_next(\\"IOJ01\\",\\"10:00\\",\\"2\\")','JavaScript:onClick=click_next(\\"IOJ01\\",\\"10:45\\",\\"2\\")','JavaScript:onClick=click_next(\\"IOJ01\\",\\"11:30\\",\\"2\\")','JavaScript:onClick=click_next(\\"IOJ01\\",\\"12:15\\",\\"2\\")','JavaScript:onClick=click_next(\\"IOJ01\\",\\"13:00\\",\\"2\\")','JavaScript:onClick=click_next(\\"IOJ01\\",\\"13:45\\",\\"2\\")','JavaScript:onClick=click_next(\\"IOJ01\\",\\"14:30\\",\\"2\\")','JavaScript:onClick=click_next(\\"IOJ01\\",\\"15:15\\",\\"2\\")','JavaScript:onClick=click_next(\\"IOJ01\\",\\"16:00\\",\\"2\\")','JavaScript:onClick=click_next(\\"IOJ01\\",\\"16:45\\",\\"2\\")','JavaScript:onClick=click_next(\\"IOJ01\\",\\"17:30\\",\\"2\\")','JavaScript:onClick=click_next(\\"IOJ07\\",\\"09:15\\",\\"2\\")','JavaScript:onClick=click_next(\\"IOJ07\\",\\"10:00\\",\\"2\\")','JavaScript:onClick=click_next(\\"IOJ07\\",\\"10:45\\",\\"2\\")','JavaScript:onClick=click_next(\\"IOJ07\\",\\"11:30\\",\\"2\\")','JavaScript:onClick=click_next(\\"IOJ07\\",\\"12:15\\",\\"2\\")','JavaScript:onClick=click_next(\\"IOJ07\\",\\"13:00\\",\\"2\\")','JavaScript:onClick=click_next(\\"IOJ07\\",\\"13:45\\",\\"2\\")','JavaScript:onClick=click_next(\\"IOJ07\\",\\"14:30\\",\\"2\\")','JavaScript:onClick=click_next(\\"IOJ07\\",\\"15:15\\",\\"2\\")','JavaScript:onClick=click_next(\\"IOJ07\\",\\"16:00\\",\\"2\\")','JavaScript:onClick=click_next(\\"IOJ07\\",\\"16:45\\",\\"2\\")','JavaScript:onClick=click_next(\\"IOJ07\\",\\"17:30\\",\\"2\\")','JavaScript:onClick=click_next(\\"IOJ10\\",\\"09:15\\",\\"2\\")','JavaScript:onClick=click_next(\\"IOJ10\\",\\"10:00\\",\\"2\\")','JavaScript:onClick=click_next(\\"IOJ10\\",\\"10:45\\",\\"2\\")','JavaScript:onClick=click_next(\\"IOJ10\\",\\"11:30\\",\\"2\\")','JavaScript:onClick=click_next(\\"IOJ10\\",\\"12:15\\",\\"2\\")','JavaScript:onClick=click_next(\\"IOJ10\\",\\"13:00\\",\\"2\\")','JavaScript:onClick=click_next(\\"IOJ10\\",\\"13:45\\",\\"2\\")','JavaScript:onClick=click_next(\\"IOJ10\\",\\"14:30\\",\\"2\\")','JavaScript:onClick=click_next(\\"IOJ10\\",\\"15:15\\",\\"2\\")','JavaScript:onClick=click_next(\\"IOJ10\\",\\"16:00\\",\\"2\\")','JavaScript:onClick=click_next(\\"IOJ10\\",\\"16:45\\",\\"2\\")','JavaScript:onClick=click_next(\\"IOJ10\\",\\"17:30\\",\\"2\\")'].forEach((function(c){if(!i){var t=document.querySelectorAll('a[href="'+c+'"]');t.length>0&&(t[0].click(),i=!0)}}))}))();