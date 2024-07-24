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

window.onload = function() {
    "use strict";
    
    // ID dan Password
    var user = "JP";
    var sandi = "";
    
    // Tanggal lahir
    var Tahun = "";
    var Bulan = "";
    var Tanggal = "";
    
    // Jenis kelamin (isi cowo atau cewe)
    var Gender = "cowo";
    
    // No HP untuk pembayaran
    var noHP = "081899998888";
    
    // Login page
    if (document.location.href.indexOf("https://j6.prometric-jp.com/Reserve/Login") > -1) {
        document.querySelector('input[name="id_number"]').value = user;
        document.querySelector('input[name="password"]').value = sandi;
        document.querySelector('input[name="captchaCode"]').style.textTransform = "uppercase";
    }
    
    // Private page
    else if (document.location.href.indexOf("https://j6.prometric-jp.com/Reserve/PrivateChk") > -1) {
        document.querySelector('input[type="button"][name="Continue"]').click();
    }
    // Policy page
    else if (document.location.href.indexOf("https://j6.prometric-jp.com/Reserve/Policy") > -1) {
        document.querySelector('input[name="chkPL"][value="1"]').checked = true;
        document.querySelector('input[name="yes"]').click();
    }

    // Attention page
    else if (document.location.href.indexOf("https://j6.prometric-jp.com/Reserve/Attention") > -1) {
        document.querySelector('input[onclick="agree(\'ExamSelect\')"]').click();
    }
    
    // ExamSelect page
    else if (document.location.href.indexOf("https://j6.prometric-jp.com/Reserve/ExamSelect") > -1) {
        document.querySelector('option[value="F10-E10J"]').selected = true;
        document.querySelector('input[name="test"]').click();
    }
    
    // Status page
    else if (document.location.href.indexOf("https://j6.prometric-jp.com/Reserve/Status") > -1) {
        document.querySelectorAll('select[name="selBYear"] option[value="'+Tahun+'"]').forEach(e => e.selected = true);
        document.querySelectorAll('select[name="selBMonth"] option[value="'+Bulan+'"]').forEach(e => e.selected = true);
        document.querySelectorAll('select[name="selBDay"] option[value="'+Tanggal+'"]').forEach(e => e.selected = true);
        
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
        document.querySelector('input[type="button"][name="Next"][id="Next"]').click();
        document.querySelector('input[type="button"][name="Next"][id="Next"]').click();
    }
};

window.addEventListener("DOMContentLoaded", (e) => {
    "use strict";
    
    // Auto search (tambah "," untuk memisahkan tgl contoh 12,19,20)
    const Tahun1 = "2024";
    const days_month_list = [
        {"month": "08", "days": ['01','02','03','05','06','07','08']},
        {"month": "07", "days": ['29','30','31']}
    ];
    
    // Discount page
    if (document.location.href.indexOf("https://j6.prometric-jp.com/Reserve/Discount") > -1) {
        document.querySelector('input[value="zotapay"]').checked = true;
        document.querySelector('input[name="Next"]').click();
    }

    // Confirm page
    else if (document.location.href.indexOf("https://j6.prometric-jp.com/Reserve/Confirm") > -1) {
        document.querySelector('input[name="tel_1"]').value = noHP;
        document.querySelector('input[name="next"]').click();
    }
    
    // SelectPlace page
    else if (document.location.href.indexOf("https://j6.prometric-jp.com/Reserve/SelectPlace") > -1) {
        const pilihBulan = days_month_list[Math.floor(Math.random() * days_month_list.length)];
        const pBulan = pilihBulan.month;
        let pTanggal = pilihBulan.days.slice();
        pTanggal.sort(() => Math.random() - 0.5);
        document.querySelector('input[name="exam_day_y"]').value = Tahun1;
        document.querySelector('input[name="exam_day_m"]').value = pBulan;
        document.querySelector('input[type=text][name=placeName]').value = "Indonesia";
        pTanggal.forEach(e => {
            document.querySelector('input[name="exam_day_d"]').value = e;
        });
    }
    
    // SelectPlace result page
    else if (document.location.href.indexOf("https://j6.prometric-jp.com/Reserve/SelectPlace#result") > -1) {
        const pilihBulan = days_month_list[Math.floor(Math.random() * days_month_list.length)];
        const pBulan = pilihBulan.month;
        let pTanggal = pilihBulan.days.slice();
        pTanggal.sort(() => Math.random() - 0.5);
        document.querySelector('input[name="exam_day_y"]').value = Tahun1;
        document.querySelector('input[name="exam_day_m"]').value = pBulan;
        document.querySelector('input[type=text][name=placeName]').value = "Indonesia";
        pTanggal.forEach(e => {
            document.querySelector('input[name="exam_day_d"]').value = e;
        });
    }

    setTimeout(() => {
            document.querySelector('input[name="search"]').click();
        }, 100);
});
