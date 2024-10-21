import React from 'react';
import { Image, Container } from 'react-bootstrap';
import jamurTiram from "../Gambar/jamurTiram.jpg";
import "../Style/Tips12.css";

const Tips12 = () => {
  return (
    <Container>
      <h1>Cara Menanam Jamur Tiram Dengan Mudah Panduan Lengkap untuk Pemula</h1>
      <p className="joseM">Jose Mario</p>
      <p className='date'>biotifor.or.id </p>
      <p className='sumber'>Sumber: <a href="  https://www.biotifor.or.id/cara-menanam-jamur-tiram/">  https://www.biotifor.or.id/cara-menanam-jamur-tiram/</a></p>
      
      <div className="image-container">
        <Image src={jamurTiram} fluid className="image" />
      </div>

      <h2>Penyiapan Awalnya</h2>
      <p className="alinea">
      Saat sebelum Anda mengawali proses penanaman jamur tiram, ada langkah-langkah penyiapan awalnya yang penting Anda kerjakan. 
      Beberapa langkah ini termasuk:
      </p>

      <ul>
        <li><b>Penyiapan Substrat</b></li>
        <p className="alinea2">
        Substrata ialah media tempat jamur tumbuh. Anda bisa memakai jerami, serbuk gergaji, 
        atau bahan organik yang lain sebagai substrat. Pastikan substrat itu steril.
        </p>

        <li><b>Penyemaian Bibit Jamur</b></li>
        <p className="alinea3">
        Mengambil bibit jamur tiram dan sebar secara rata di atas substrat yang sudah dipersiapkan. 
        Pastikan untuk jaga kebersihan sepanjang proses ini.
        </p>
        
        <li><b>Penutupan dengan Plastik</b></li>
        <p className="alinea4">  
        Masukan substrat yang sudah ditanam bibit jamur ke kantong ikat kuat dan plastik. 
        Ini akan membuat keadaan yang lembab yang dibutuhkan untuk perkembangan jamur tiram.
        </p>

        <li><b>Peletakan di Lokasi yang Pas</b></li>
        <p className="alinea5">  
        Taruh kantong plastik di lokasi yang teduh dengan temperatur sekitaran 24-27 derajat Celsius. 
        Pastikan kantong plastik masih tetap lembab.
        </p>
      </ul>

      <h2>Perawatan Harian</h2>
      <ol>
        <li><b>Penyiraman</b></li>
        <p className="alinea6">
        Siram substrat dengan teratur sama air bersih. Pastikan substrat tidak begitu terlampau kering atau basah.
        </p>

        <li><b>Sirkulasi</b></li>
        <p className="alinea7">
        Membuka kantong plastik dengan periodik untuk pastikan perputaran udara yang baik. 
        Ini akan menghambat perkembangan jamur yang berlebihan.
        </p>
        
        <li><b>Awasi Perkembangan</b></li>
        <p className="alinea8">  
        Perhatikan perkembangan jamur secara rutin. Umumnya, jamur tiram mulai akan tumbuh sesudah sejumlah minggu.
        </p>
      </ol>

      <h2>Panen Jamur Tiram</h2>
      <ol>
        <li><b>Waktu Panen</b></li>
        <p className="alinea9">
        Anda mulai dapat memetik jamur tiram saat ukuran capai sekitaran 5 sampai 7 centimeter. 
        Pakai pisau tajam untuk menggunting jamur dari substrat.
        </p>

        <li><b>Panen Periodik</b></li>
        <p className="alinea10">
        Terus panen jamur dengan berkala. Makin kerap Anda memetiknya, 
        makin banyak jamur yang hendak tumbuh Cara Menanam Jamur Tiram.
        </p>
      </ol>

      <h2>Permasalahan Umum</h2>
      <p className="alinea11">
      Menangani Permasalahan Jamur tiram bisa hadapi permasalahan seperti gempuran jamur penyakit atau lain. 
      Cari info cara menangani permasalahan itu secara cepat.
      </p>
      <br></br>
      <br></br>
    </Container>
  );
};

export default Tips12;
