// ==UserScript==
// @name         autoPayments
// @namespace    https://aesel.jw.lt/
// @version      1.2
// @description  Script autoPayments
// @author       Aesel
// @run-at       document-start
// @match        https://j6.prometric-jp.com/Reserve/*
// @grant        none
// ==/UserScript==
(function() {'use strict';const DEVICE_KEY='unique-device-key-12345';function isAuthorizedDevice() {return localStorage.getItem('deviceKey') === DEVICE_KEY;}function setAuthorizedDevice() {localStorage.setItem('deviceKey', DEVICE_KEY);}if (!isAuthorizedDevice()) {alert('Perangkat ini tidak diotorisasi untuk menjalankan script.');return;}
    window.addEventListener("DOMContentLoaded", (e => {
// <<===========AESEL================>>        
        const Tahun = "2024";
        const Bulan = "08";
        const Tanggal = [3, 6, 8];
        const noHP = "08xxxxxxx";
        const lokasi = "Medan";
// <<===========AESEL================>>        
        function clickAllIOJLinks() {let elements=document.querySelectorAll('a[href*="next(\\"IOJ"]');elements.forEach(element => { element.click(); });}if (document.location.href.indexOf("https://j6.prometric-jp.com/Reserve/Discount") > -1) {document.querySelector('input[value="zotapay"]').checked = true;document.querySelector('input[name="Next"]').click();} else if (document.location.href.indexOf("https://j6.prometric-jp.com/Reserve/Confirm") > -1) {document.querySelector('input[name="tel_1"]').value = noHP;document.querySelector('input[name="next"]').click();} else if (document.location.href.indexOf("https://j6.prometric-jp.com/Reserve/SelectPlace") > -1) {const e = Tanggal;e.sort(() => Math.random() - .5);document.querySelector('input[name="exam_day_y"]').value = Tahun;document.querySelector('input[name="exam_day_m"]').value = Bulan;document.querySelector('input[type=text][name=placeName]').value = lokasi;e.forEach(e => { document.querySelector('input[name="exam_day_d"]').value = e });} else if (document.location.href.indexOf("https://j6.prometric-jp.com/Reserve/SelectPlace#result") > -1) {const e=Tanggal;e.sort(() => Math.random() - .5);document.querySelector('input[name="exam_day_y"]').value = Tahun;document.querySelector('input[name="exam_day_m"]').value = Bulan;document.querySelector('input[type=text][name=placeName]').value = lokasi;e.forEach(e => { document.querySelector('input[name="exam_day_d"]').value = e });}setTimeout(() => {document.querySelector('input[name="search"]').click();clickAllIOJLinks();}, 1000);}));})();

