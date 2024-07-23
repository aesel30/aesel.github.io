// ==UserScript==
// @name         JFT
// @namespace    https://aesel30.github.io/aesel.github.io/
// @version      1.0
// @description  Script JFT
// @author       Aesel
// @run-at       document-start
// @match        https://j6.prometric-jp.com/Reserve/*
// @grant        none
// ==/UserScript==

(function() {
    "use strict";

    // Variabel untuk login
    const user = "JP2026449";
    const sandi = "Rama230294";

    // Variabel untuk informasi pribadi
    // cewe = perempuan, cowo = laki-laki
    const Tahun = "1996";
    const Bulan = "02";
    const Tanggal = "23";
    const Gender = "cowo";

    // Variabel untuk pembayaran
    const noHP = "08985152070";
    const autobayar = "yes";

    const url = document.location.href;

    if (url.includes("https://j6.prometric-jp.com/Reserve/Login")) {
        document.querySelector('input[name="id_number"]').value = user;
        document.querySelector('input[name="password"]').value = sandi;
        document.querySelector('input[name="captchaCode"]').style.textTransform = "uppercase";
    } else if (url.includes("https://j6.prometric-jp.com/Reserve/Attention")) {
        document.querySelector('input[onclick="agree(\'ExamSelect\')"]').click();
    } else if (url.includes("https://j6.prometric-jp.com/Reserve/Policy")) {
        document.querySelector('input[name="chkPL"][value="1"]').checked = true;
        document.querySelector('input[name="yes"]').click();
    } else if (url.includes("https://j6.prometric-jp.com/Reserve/ExamSelect")) {
        document.querySelector('option[value="F10-E10J"]').selected = true;
        document.querySelector('input[name="test"]').click();
    } else if (url.includes("https://j6.prometric-jp.com/Reserve/Status")) {
        document.querySelector('select[name="selBYear"]').value = Tahun;
        document.querySelector('select[name="selBMonth"]').value = Bulan;
        document.querySelector('select[name="selBDay"]').value = Tanggal;
        if (Gender === "cewe") {
            document.querySelector('input[name="rdoGender"][value="1"]').checked = true;
        } else if (Gender === "cowo") {
            document.querySelector('input[name="rdoGender"][value="2"]').checked = true;
        }
        document.querySelector('input[name="rdoNation"]').checked = true;
        document.querySelector('option[value="Indonesia"]').selected = true;
        document.querySelector('input[name="rdoLang"]').checked = true;
        document.querySelector('option[value="Indonesian"]').selected = true;
        document.querySelector('input[name="chkOccupation"][value="O"]').checked = true;
        document.querySelector('option[value="No, I have not been to Japan before"]').selected = true;
        document.querySelector('option[value="300 hours (Approx. 20 hours per week for 4 months"]').selected = true;
        document.querySelector('input[name="chkCBT"][value="A"]').checked = true;
        document.querySelector('input[name="chkTextbook"][value="D"]').checked = true;
        document.querySelector('input[name="chkWebSite"][value="A"]').checked = true;
        document.querySelector('option[value="A"]').selected = true;
    } else if (url.includes("https://j6.prometric-jp.com/Reserve/Confirm")) {
        document.querySelector('input[name="tel_1"]').value = noHP;
        if (autobayar === "yes") {
            document.querySelector('input[name="next"]').click();
        }
    }

    window.addEventListener("DOMContentLoaded", (e) => {
        // Variabel untuk auto search
        const Tahun1 = "2024";
        const Bulan1 = "07";
        const Tanggal1 = [29, 30, 31];
        const autosearch = "yes";
        const wakturefresh = 1000;

        if (url.includes("https://j6.prometric-jp.com/Reserve/Discount")) {
            document.querySelector('input[value="zotapay"]').checked = true;
            document.querySelector('input[name="Next"]').click();
        } else if (url.includes("https://j6.prometric-jp.com/Reserve/SelectPlace")) {
            Tanggal1.sort(() => Math.random() - 0.5);
            document.querySelector('input[name="exam_day_y"]').value = Tahun1;
            document.querySelector('input[name="exam_day_m"]').value = Bulan1;
            Tanggal1.forEach((e) => {
                document.querySelector('input[name="exam_day_d"]').value = e;
                document.querySelector('input[type=text][name=placeName]').value = "Indonesia";
            });
        } else if (url.includes("https://j6.prometric-jp.com/Reserve/SelectPlace#result")) {
            Tanggal1.sort(() => Math.random() - 0.5);
            document.querySelector('input[name="exam_day_y"]').value = Tahun1;
            document.querySelector('input[name="exam_day_m"]').value = Bulan1;
            Tanggal1.forEach((e) => {
                document.querySelector('input[name="exam_day_d"]').value = e;
            });
            document.querySelector('input[type=text][name=placeName]').value = "Indonesia";
        }

        if (autosearch === "yes") {
            setTimeout(() => {
                document.querySelector('input[name="search"]').click();
            }, parseInt(wakturefresh));
        }
    });
})();
