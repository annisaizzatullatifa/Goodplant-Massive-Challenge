import React from 'react';
import { Image, Container } from 'react-bootstrap';
import kacangPanjang2 from "../Gambar/kacangPanjang2.jpg";
import "../Style/Tips17.css";

const Tips17 = () => {
  return (
    <Container>
      <h1>Cara Menanam Kacang Panjang di Pekarangan Rumah</h1>
      <p className="sitiN">Siti Nur Aeni</p>
      <p className='date'>Kompas.com - 24/05/2023, 20:39 WIB</p>
      <p className='sumber'>Sumber: <a href="  https://agri.kompas.com/read/2023/05/24/203947884/begini-cara-menanam-kacang-panjang-di-pekarangan-rumah"> https://agri.kompas.com/read/2023/05/24/203947884/begini-cara-menanam-kacang-panjang-di-pekarangan-rumah</a></p>

      <br></br>
      <p className="alinea">
      Kacang panjang termasuk sayuran kacang-kacangan yang mudah ditanam. Sayuran ini bahkan bisa ditanam di 
      pekarangan rumah. Menanam kacang panjang di pekarangan rumah tidak berbeda jauh dengan budidaya kacang 
      panjang di lahan luas. Dikutip dari Cybext Kementerian Pertanian, Rabu (24/5/2023), berikut penjelasan 
      selengkapnya.
      </p>

      <div className="image-container">
        <Image src={kacangPanjang2} fluid className="image" />
      </div>

      <h2>Pengolahan lahan tanam</h2>
      <p className="alinea2">
      Lahan pekarangan yang hendak ditanami perlu diolah terlebih dahulu sampai gembur. Kemudian buat lubang tanam 
      dengan kedalaman sekitar 10 cm. Setelah itu, masukkan pupuk kandang pada lubang tanam tersebut. Di atas pupuk 
      kandang tambahkan pupuk KCl sebanyak 1 sendok makan. Lalu, tutup kembali lubang tanam dengan tanah setebal 3 m. 
      Berikutnya, gali kembali lubang tanam tersebut namun kedalamannya cukup 2 cm saja sebagai tempat penanaman.
      </p>

      <h2>Penanaman benih</h2>
      <p className="alinea3">
      Cara menanam kacang panjang di pekarangan rumah yaitu letakkan biji atau benih kacang panjang pada lubang tanam. 
      Jumlah benih per lubang tanam cukup 3 atau 4 biji saja. Setelah itu, tutup tipis lubang tanam dan tunggu 
      beberapa hari sampai benih tumbuh menjadi bibit atau tanaman muda.
      </p>

      <h2>Perawatan tanaman</h2>
      <p className="alinea4">
      Merawat kacang panjang yang ditanam di pekarangan rumah sebenarnya tidak sulit. Lakukan penyiraman secara 
      rutin agar tanaman tumbuh dengan baik. Selain itu, buat juga lanjaran atau ajir sebagai tempat rambatan 
      tanaman. Lanjaran dapat terbuat dari bilah bambu atau kayu.
      </p>

      <h2>Panen</h2>
      <p className="alinea5">
      Tanaman kacang panjang mulai berbunga saat berumur 35 hari dan bisa dipanen saat berumur 50 hari. 
      Cara panennya cukup dengan memetik kacang panjang yang sudah siap panen dan letakkan pada keranjang 
      bersih. 
      </p>
      <br></br>
      <br></br>
    </Container>
  );
};

export default Tips17;
