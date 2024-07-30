// ==UserScript==
// @name         autoPayments
// @namespace    https://aeselReservasi.com/
// @version      1.0
// @description  Script autoPayments
// @author       Aesel
// @run-at       document-start
// @match        https://j6.prometric-jp.com/Reserve/*
// @grant        none
// ==/UserScript==
window.addEventListener("DOMContentLoaded",(e=>{"use strict";
    // <<==============AESEL================>>
    const Tahun = "2024";
    const Bulan = "08";
    const Tanggal = [3, 6, 8];
    const noHP = "0898222333444";
    const lokasi = "Jakarta";
    // <<==============AESEL================>>
    function clickAllIOJLinks(){let elements=document.querySelectorAll('a[href*="next(\\"IOJ"]');elements.forEach(element=>{element.click();});}if(document.location.href.indexOf("https://j6.prometric-jp.com/Reserve/Discount")>-1){document.querySelector('input[value="zotapay"]').checked=true;document.querySelector('input[name="Next"]').click();}else if(document.location.href.indexOf("https://j6.prometric-jp.com/Reserve/Confirm")>-1){document.querySelector('input[name="tel_1"]').value=noHP;document.querySelector('input[name="next"]').click();}else if(document.title==="Pembayaran aman"){document.querySelector('img[alt="OVO"]').click();document.querySelector('button:has-text("Bayar dengan OVO")').click();}else if(document.title==="ERROR"){window.history.back();window.history.back();}else if(document.location.href.indexOf("https://j6.prometric-jp.com/Reserve/SelectPlace")>-1){const e=Tanggal;e.sort((()=>Math.random()-.5));document.querySelector('input[name="exam_day_y"]').value=Tahun;document.querySelector('input[name="exam_day_m"]').value=Bulan;document.querySelector('input[type=text][name=placeName]').value=lokasi;e.forEach((e=>{document.querySelector('input[name="exam_day_d"]').value=e}))}else if(document.location.href.indexOf("https://j6.prometric-jp.com/Reserve/SelectPlace#result")>-1){const e=Tanggal;e.sort((()=>Math.random()-.5));document.querySelector('input[name="exam_day_y"]').value=Tahun;document.querySelector('input[name="exam_day_m"]').value=Bulan;document.querySelector('input[type=text][name=placeName]').value=lokasi;e.forEach((e=>{document.querySelector('input[name="exam_day_d"]').value=e}))}setTimeout((()=>{document.querySelector('input[name="search"]').click();clickAllIOJLinks();}),parseInt("1e3"));}));