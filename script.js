function tampilkanFakta() {

    const fakta = document.getElementById("fakta");

    fakta.style.display = "block";

    fakta.innerHTML =
        "💡 Fakta: AI dapat digunakan dalam berbagai bidang seperti kesehatan, transportasi, pendidikan, keuangan, dan industri.";
}


function jawaban(benar) {

    const hasil = document.getElementById("hasilKuis");

    if (benar) {

        hasil.innerHTML =
            "✅ Jawaban benar! Computer Vision dapat digunakan untuk mengenali wajah dan menganalisis gambar.";

        hasil.style.color = "green";

    } else {

        hasil.innerHTML =
            "❌ Jawaban kurang tepat. Coba pilih jawaban lainnya.";

        hasil.style.color = "red";
    }
}