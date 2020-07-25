//membuat array siswa
let siswa =
[
    {nama_depan: "Jack", nama_belakang: "Ma"},
    {nama_depan: "Johnny", nama_belakang: "English"},
    {nama_depan: "John", nama_belakang: "Cena"},
]

/*map digunakan untuk scan data satu persatu,
sis merupakan variabel yang menunjukkan objek yang di scan,
index menunjukkan posisi dari objek yang di scan*/
siswa.map(
    (sis, index) => {
        //tampil nama depan dan nama belakang pada array siswa
        console.log(sis.nama_depan + " " + sis.nama_belakang);
    }
)