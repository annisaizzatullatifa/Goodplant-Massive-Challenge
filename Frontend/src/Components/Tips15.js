import React from 'react';
import { Image, Container } from 'react-bootstrap';
import bawangMerah2 from "../Gambar/bawangMerah2.jpg";
import "../Style/Tips15.css";

const Tips15 = () => {
  return (
    <Container>
      <h1>Simak, Cara Menanam Bawang Merah di Rumah</h1>
      <p className="anizaP">Aniza Pratiwi, Sakina Rakhma Diah Setiawan</p>
      <p className='date'>Kompas.com - 25/11/2020, 11:48 WIB</p>
      <p className='sumber'>Sumber: <a href="https://www.kompas.com/homey/read/2020/11/25/114800076/simak-cara-menanam-bawang-merah-di-rumah"> https://www.kompas.com/homey/read/2020/11/25/114800076/simak-cara-menanam-bawang-merah-di-rumah</a></p>

      <br></br>
      <p className="alinea">
      Menanam berbagai tumbuhan kini menjadi salah satu hobi yang digemari banyak orang di rumah. 
      Mulai dari tanaman hias, tanaman obat, hingga tanaman sayuran seperti bawang merah. 
      Bawang merah termasuk anggota keluarga tanaman allium, yang dikenal sebagai bawang ganda, 
      yakni jenis yang dapat menghasilkan dua atau lebih umbi per tanaman. Dilansir dari The Spruce, 
      Rabu (25/11/2020), bawang merah umumnya lebih kecil dari umbi bawang putih, namun tergantung pada varietas 
      dan kondisi di mana umbi tersebut tumbuh.
      </p>

      <div className="image-container">
        <Image src={bawangMerah2} fluid className="image" />
      </div>

      <h2>Menanam bawang merah</h2>
      <p className="alinea2">
      Bawang merah bisa ditanam saat cuaca hangat. Pisahkan setiap umbi dan tanam tepat di bawah permukaan tanah, 
      sekitar 4 hingga 6 inci menghadap ke atas. Berbeda dengan bawang putih yang memiliki bentuk lebih besar, 
      bawang merah cenderung menyebar sedikit menjadi 5 atau 6 kelompok, sehingga membutuhkan lebih banyak ruang 
      daripada bawang putih. Sebab, ketika Anda menanam bawang merah ini, mereka akan bertunas kembali sehingga 
      membutuhkan ruang yang lebih luas.
      </p>

      <h2>Perawatan bawang merah</h2>
      <p className="alinea3">
      Untuk hasil yang terbaik, tanam bawang merah di bawah sinar matahari penuh. Jika hal itu tidak memungkinkan, 
      bawang merah bisa ditanam dengan sinar matahari yang tidak penuh.
      </p>

      <h2>Tanah</h2>
      <p className="alinea4">
      Bawang merah menyukai pH tanah yang asam, sekitar 5,0 hingga 7,0. 
      Beri mereka tanah yang subur tetapi memiliki drainase yang baik 
      dengan banyak bahan organik.
      </p>

      <h2>Air</h2>
      <p className="alinea5">
      Bawang merah membutuhkan air yang banyak, pastikan tanahnya memiliki drainase yang baik sehingga 
      tidak tergenang air. Sebab jika bawang merah tergenang air akan menyebabkan pembusukan.
      </p>

      <h2>Suhu dan Kelembaban</h2>
      <p className="alinea6">
      Bawang merah dapat tumbuh subur pada suhu tanah dari 35 hingga 90 derajat celcius. 
      Asalkan disiram secara teratur dan berada di tanah yang dikeringkan dengan baik, 
      bawang merah tidak terlalu sensitif terhadap kelembaban.
      </p>

      <h2>Pupuk</h2>
      <p className="alinea7">
      Bawang merah umumnya tidak membutuhkan pupuk. Namun tidak ada salahnya untuk memberikan bahan organik 
      untuk menyuburkan bawang merah.
      </p>

      <h2>Masa Panen</h2>
      <p className="alinea8">
      Bawang merah siap panen dalam tiga hingga enam bulan. Anda dapat memotong beberapa pucuk hijau 
      untuk digunakan sebagai daun bawang, tetapi biarkan sebagian batang utuh untuk memberi makan umbi. 
      Bawang merah akan memberikan tanda bahwa mereka siap dipanen ketika pucuknya mulai menguning 
      dan berguguran.
      </p>
      <br></br>
      <br></br>
    </Container>
  );
};

export default Tips15;
