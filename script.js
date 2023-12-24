// Contoh data tugas
var tugas1 = { nama: "Matematika", deadline: "2023-01-30", status: "Belum selesai" };
var tugas2 = { nama: "Bahasa Indonesia", deadline: "2023-02-15", status: "Belum selesai" };

// Daftar tugas
var daftarTugas = [tugas1, tugas2];

// Tambahkan tugas ke daftar secara dinamis
var daftarTugasElement = document.getElementById("daftar-tugas");
daftarTugas.forEach(function(tugas) {
    var li = document.createElement("li");
    li.innerHTML = `
        <strong>Nama Tugas:</strong> ${tugas.nama}
        <br>
        <strong>Deadline:</strong> ${tugas.deadline}
        <br>
        <strong>Status:</strong> ${tugas.status}
    `;
    daftarTugasElement.appendChild(li);
});
