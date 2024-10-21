import React from 'react';
import { Image, Container } from 'react-bootstrap';
import kutuPutih from "../Gambar/kutuPutih.png";
import "../Style/Tips5.css";

const Tips5 = () => {
  return (
    <Container>
      <h1>Cara Membasmi Kutu Putih pada Tanaman Pepaya Pakai Air Sabun</h1>
      <p className="sakinaR">Sakina Rakhma Diah Setiawan</p>
      <p className='date'>Kompas.com - 15/02/2022, 08:59 WIB</p>
      <p className='sumber'>Sumber: <a href="https://www.kompas.com/homey/read/2022/02/15/085900076/cara-membasmi-kutu-putih-pada-tanaman-pepaya-pakai-air-sabun">https://www.kompas.com/homey/read/2022/02/15/085900076/cara-membasmi-kutu-putih-pada-tanaman-pepaya-pakai-air-sabun</a></p>

      <p className="alinea">Jika Anda memiliki tanaman pepaya di kebun atau halaman rumah, 
      coba perhatikan buah pepaya, daun, serta barangnya. Apakah ada bercak-bercak putih bertekstur halus seperti kapas yang mungil? 
      Jika ya, maka tanaman pepaya Anda diserang hama kutu putih atau kutu kebul. 
      Serangan hama ini terutama pada tanaman pepaya yang sedang berbuah dengan gejala buah pepaya menjadi berwarna hitam. 
      Dikutip dari laman Cybex Kementerian Pertanian RI, Selasa (15/2/2022), apabila terjadi serangan berat, 
      buah pepaya akan membusuk dan keriput. Bila kutu putih menyerang daun, maka akan menunjukkan gejala kerdil dan 
      memberi pengaruh terhadap proses pertumbuhan tanaman.
      </p>

      <div className="image-container">
        <Image src={kutuPutih} fluid className="image" />
      </div>

      <p className="alinea2">
      Jika kutu putih menyerang batang, maka akan terlihat gejala kehitam-hitaman pada batang yang terkena. 
      Serangan berat akan mengakibatkan buah gugur dan batang membusuk serta dalam waktu tidak begitu lama batang akan mati.
      </p>

      <h2>Cara membasmi kutu putih pada pohon pepaya</h2>
      <p className="alinea3">
      Dalam satu minggu, kutu putih bisa berkembang biak hingga menutupi penuh pada satu daun atau satu buah. 
      Dengan demikian, jika Anda melihat serangan kutu putih, maka harus segera dilakukan tindakan. 
      Kutu adalah termasuk serangga, sehingga penanggulangannya tentunya dengan pestisida golongan insektisida. 
      Akan tetapi, kutu putih terlindungi oleh lapisan lilin, sehingga penanggulangannya tidak mudah. 
      Sebelum dilakukan penyemprotan dengan insektisida, Anda harus melemahkan lapisan lilin tersebut. 
      Salah satunya adalah menggunakan larutan air deterjen.
      </p>

      <p className="alinea4">  
      Penyemprotan dengan deterjen ini sebaiknya dilakukan pada pagi hari. 
      Dengan penyemprotan menggunakan detergen tersebut lapisan lilin akan rontok walau tidak seluruhnya.
      </p>
    </Container>
  );
};

export default Tips5;
