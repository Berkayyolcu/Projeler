   function dijitalSaat() {
        var dt = new Date();    // DATE() ile yeni bir tarih nesnesi oluşturuldu.
        var saat = dt.getHours();
        var dakika = dt.getMinutes();
        var saniye = dt.getSeconds();
 
        dakika = Tik(dakika);
        saniye = Tik(saniye);
 
        document.getElementById('dt').innerHTML = saat + ":" + dakika;
        document.getElementById('dt_saniye').innerHTML = saniye;
 
        // her 1 saniyede bir yenileme yapılıyor.
        var time
        time = setInterval('dijitalSaat()', 1000);

        var date = dt.toLocaleDateString();

       // document.getElementById('dt_date').innerHTML = gun + "/" + ay+"/"+yil;

        document.getElementById('dt_date').innerHTML = date;
    }
 
    function Tik(tikDegeri) {
        if (tikDegeri < 10) {
            tikDegeri = "0" + tikDegeri;
        }
        return tikDegeri;
    }