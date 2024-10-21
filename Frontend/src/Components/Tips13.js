import React from 'react';
import { Image, Container } from 'react-bootstrap';
import selada from "../Gambar/selada.jpg";
import "../Style/Tips13.css";

const Tips13 = () => {
  return (
    <Container>
      <h1>Cara Menanam Selada dengan Metode Hidroponik</h1>
      <p className='date'>Bibitbunga.com - 01 June 2021</p>
      <p className='sumber'>Sumber: <a href="https://bibitbunga.com/cara-menanam-selada-dengan-metode-hidroponik/">https://bibitbunga.com/cara-menanam-selada-dengan-metode-hidroponik/</a></p>

      <br></br>
      <p className="alinea">
      Salah satu tanaman yang paling sering ditanam menggunakan metode hidoponik adalah selada (Lactuca sativa). 
      Selada mencapai usia siap panennya selama sebulan lebih. Oleh karena itu, 
      selada sering dijadikan tanaman yang ditanam menggunakan metode hidroponik. 
      Baca juga ulasan mengenai cara menanam selada di pot atau polybag.
      </p>

      <div className="image-container">
        <Image src={selada} fluid className="image" />
      </div>

      <h2>Tahap-tahap Menanam Selada dengan Metode Hidroponik</h2>
      <p className="alinea2">Nah, untuk menanam selada dengan metode hidroponik, perhatikan langkah-langkah berikut:</p>

      <h2>Tahap Penyemaian:</h2>
      <ol>
        <li className="alinea3">
        Isi wadah penyemaian menggunakan  media tanam yang bukan tanah, 
        misalnya kompos, sekam bakar, atau cocopeat. <br></br>Basahilah media tanam hingga menjadi lembap. 
        Jangan terlalu basah, agar biji bisa mengeluarkan akar. <br></br>Lubangilah media tanam menggunakan jari 
        sedalam 0.5 – 1 cm.
        </li>

        <li className="alinea4">
        Isi tiap lubang dengan dua atau tiga biji selada. Tutup kembali menggunakan media tanam. 
        Sirami menggunakan semprotan. <br></br>Pastikan media semai selalu lembap saat kegiatan penyemaian berlangsung. 
        Untuk hasil terbaik, <br></br>simpan di tempat bersuhu 15-20 derajat Celsius.
        </li>

        <li className="alinea5">
        Simpan di tempat yang terkena sinar matahari.
        </li>

        <li className="alinea6">
        Setelah tinggi selada mencapai 5 cm, selada bisa ditanam secara mandiri.
        </li>
      </ol>

      <h2>Alat yang dibutuhkan untuk membuat media hidroponik:</h2>
      <ul>
        <li className="alinea7">
        Tanaman selada yang telah disemaikan
        </li>

        <li className="alinea8">
        Baskom (dengan kedalaman 15 cm)
        </li>

        <li className="alinea9">
        Sterofom (tebalnya sektar 2.5 cm)
        </li>

        <li className="alinea10">
        Net pot (5 cm)
        </li>

        <li className="alinea11">
        Pisau (cutter)
        </li>

        <li className="alinea12">
        Spidol (marker)
        </li>

        <li className="alinea13">
        Air
        </li>

        <li className="alinea14">
        Nutrisi tanaman
        </li>
      </ul>

      <h2>Cara membuat media tanam:</h2>
      <ol>
        <li className="alinea15">
        Siapkan wadah seperti baskom atau wadah lainnya yang memiliki kedalaman 15 cm.
        </li>

        <li className="alinea16">
        Potonglah sterofom sesuai ukuran baskom. Lebihkan sedikit agar sterofom tidak tenggelam. 
        <br></br>Sterofom berfungsi sebagai penyangga pot tanaman.
        </li>

        <li className="alinea17">
        Lubangilah sterofom sebesar net pot. Pastikan bagian atas net pot nantinya tersangga oleh sterofom. 
        <br></br>Jadi, lubangilah sterofom sebesar bagian bawah net pot, bukan diameter atas net pot. 
        <br></br>Lubang yang paling pinggir usahakan jaraknya 10 cm dari bibir baskom. 
        <br></br>Tiap lubang satu sama lain memiliki jarak sekitar 20 cm. 
        Gunakan spidol untuk menandai setiap lubang.
        </li>

        <li className="alinea18">
        Masukkan net pot pada setiap lubang di sterofom.
        </li>

        <li className="alinea19">
        Isi baskom dengan air dan campuran nutrisi khusus tanaman hidroponik. 
        Ketinggian air sekitar 3 cm dari bibir baskom.
        </li>

        <li className="alinea20">
        Letakkan sterofom yang telah diisi net pot di atas baskom.
        </li>

        <li className="alinea21">
        Pindahkan tanaman selada ke dalam net pot. Satu net pot satu tanaman. 
        Selipkan akarnya ke dalam lubang net pot agar <br></br>akarnya bisa menjuntai dalam air. 
        Hati-hati agar akarnya tidak patah.
        </li>

        <li className="alinea22">
        Simpan baskom di tempat yang terkena sinar matahari penuh. 
        Jika Anda menanam di lokasi di dalam rumah yang tidak <br></br>terkena sinar matahari, 
        gunakanlah lampu florescent, setidaknya 14 jam sehari.
        </li>

        <li className="alinea23">
        Selada membutuhkan waktu panen lima sampai enam minggu setelah ditanam dari biji. 
        Tambahkanlah air jika air <br></br>dalam baskom berkurang.
        </li>

        <li className="alinea24">
        Setelah selada dipanen, gunakan sisa air dalam baskom untuk menyiram tanaman lain di kebun Anda.
        </li>
      </ol>

      <p className="alinea25">
      Itulah cara menanam selada dengan metode hidroponik. Apakah Anda tertarik untuk mencobanya? 
      </p>
      <br></br>
      <br></br>
    </Container>
  );
};

export default Tips13;
