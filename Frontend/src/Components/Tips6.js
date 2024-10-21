import React from 'react';
import { Image, Container } from 'react-bootstrap';
import kutuKebul2 from "../Gambar/kutuKebul2.png";
import "../Style/Tips6.css";

const Tips6 = () => {
  return (
    <Container>
      <h1>Cara Membasmi Kutu Kebul pada Tanaman Cabai</h1>
      <p className="sakinaR">Sakina Rakhma Diah Setiawan</p>
      <p className='date'>Kompas.com - 24/03/2022, 13:07 WIB</p>
      <p className='sumber'>Sumber: <a href=" https://www.kompas.com/homey/read/2022/03/24/130700576/cara-membasmi-kutu-kebul-pada-tanaman-cabai"> https://www.kompas.com/homey/read/2022/03/24/130700576/cara-membasmi-kutu-kebul-pada-tanaman-cabai</a></p>

      <div className="image-container">
        <Image src={kutuKebul2} fluid className="image" />
      </div>
      
      <p className="alinea">
      Kutu kebul (Bemisia tabaci) merupakan hama yang sering menyerang berbagai tanaman sayuran di Indonesia. 
      Dikutip dari laman Cybex Kementerian Pertanian RI, Kamis (24/3/2022), kutu kebul menyerang tanaman apa saja, 
      seperti tanaman palawija, sayuran dan buah-buahan biasanya hama ini berdiam di balik daun atau dibagian bawah daun. 
      Kutu kebul dewasa atau imago mempunyai ukuran tubuh antara 1 hingga 1,5 mm, berwarna putih, 
      dan mempunyai sayap yang ditutupi lapisan lilin bertepung putih.
      </p>

      <p className="alinea2">
      Lama siklus hidup dari kutu daun dari telur, nimfa sampai ke kutu kebul dewasa yakni rata-rata 21 sampai 24 hari. 
      Selama masa hidupnya kutu daun menetap di bagian bawah daun tanaman. Kerusakan langsung pada tanaman disebabkan oleh imago dan 
      nimfa kutu kebul yang menghisap cairan daun mengakibatkan daun tanaman mengalami klorosis, layu, gugur daun dan mati. 
      Helai daun yang mengalami vein clearing, mulai dari daun pucuk berkembang menjadi warna kuning yang jelas, 
      tulang daun menebal dan daun menggulung ke atas (cupping). Infeksi lanjut mengakibatkan daun mengecil dan 
      berwarna kuning terang tanaman kerdil dan tidak berubah.
      </p>

      <p className="alinea3">
      Pertama, gunakan bibit yang sehat dan terbebas dari virus, serta varietas tahan virus. 
      Kedua, cegah kutu kebul sejak persemaian dengan menggunakan sistem persemaian tertutup. 
      Sanitasi lahan dengan menjaga kebersihan lahan dari gulma yang bisa menjadi inang. 
      Berikan pupuk kompos yang mengandung Trichoderma saat pemupukan dasar.
      </p>
    </Container>
  );
};

export default Tips6;
