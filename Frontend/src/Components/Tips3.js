import React from 'react';
import { Image, Container } from 'react-bootstrap';
import penyakitBusuk from "../Gambar/penyakitBusuk.png";
import "../Style/Tips3.css";

const Tips3 = () => {
  return (
    <Container>
      <h1>Catat, Ini Cara Mengatasi Busuk Buah pada Tanaman Cabai</h1>
      <p className="anizaP">Aniza Pratiwi, Sakina Rakhma Diah Setiawan </p>
      <p className='date'>Kompas.com - Diperbarui 10/09/2022, 14:13 WIB</p>
      <p className='sumber'>Sumber: <a href="https://www.kompas.com/homey/read/2021/12/15/114700776/catat-ini-cara-mengatasi-busuk-buah-pada-tanaman-cabai?page=all#page2">https://www.kompas.com/homey/read/2021/12/15/114700776/catat-ini-cara-mengatasi-busuk-buah-pada-tanaman-cabai?page=all#page2</a></p>

      <p className="alinea"> Cabai menjadi bahan yang sering digunakan untuk berbagai masakan. 
      Harga cabai terkadang bisa merendah atau bahkan melambung tinggi. 
      Untuk itu, beberapa orang menanam cabai sendiri di rumah mereka agar dapat menggunakannya saat masa panen tiba. 
      Akan tetapi, tidak semudah dibayangkan, menanam dan merawat tanaman cabai hingga berbuah terkadang memiliki 
      beberapa masalah salah satunya busuk buah. 
      </p>

      <div className="image-container">
        <Image src={penyakitBusuk} fluid className="image" />
      </div>

      <p className="alinea2">
      Dikutip dari laman Cybex Kementerian Pertanian RI yang diperbarui pada Sabtu (10/9/2022), 
      busuk buah adalah salah satu jenis penyakit yang berasal dari organisme penganggu tanaman penyebab penyakit.
      </p>

      <p className="alinea3">
      Busuk buah biasanya akan menyerang dari beberapa tanaman terutamanya tanaman cabai. 
      Busuk buah biasanya akan menyerang tanaman cabai yang masih muda, tua dan sudah hampir matang sempurna.
      </p>

      <p className="alinea4">  
      Ketika tanaman cabai sudah menunjukan beberapa gejala, maka sudah lama terinfeksi penyakit busuk buah tersebut. 
      Penyakit busuk buah tersebut akan mengakibatkan penurunan kualitas buah, produktivitas menurun, 
      kegagalan panen bahkan akan mempercepat kematian tanaman.
      </p>

      <p className="alinea5">  
      Penyakit busuk buah pada tanaman cabai dapat di kelompokan menjadi dua bagian yaitu penyakit busuk buah disebabkan terinfeksi bakteri, 
      dan penyakit busuk di akibatkan lalat buah.
      </p>

      <h2>Busuk akibat infeksi bakteri</h2>

      <p className="alinea6">  
      Penyakit busuk yang diakibatkan bakteri, biasanya disebabkan oleh bakteri Erwinia carotovora.   
      Bakteri ini akan menyerang tanaman cabai yang masih berbuah muda dan sudah hampir matang, 
      yang akan menunjukan gejala awal yaitu tangkai buah akan membusuk atau kering, 
      pangkal ujung berwarna kecoklatan hitaman, dan kelopak buah akan mengalami perubahan warna.
      </p>

      <p className="alinea7">  
      Penyakit busuk yang diakibatkan infeksi bakteri ini jika tidak diatasi akan 
      mengakibatkan buah akan mengalami kebusukan yang parah, kegagalan panen, 
      dan bahkan buah cabai menjadi berjatuhan.
      </p>

      <p className="alinea8">  
      Ada beberapa cara mengendalikannya, yakni sebagai berikut. Menggunakan bibit unggulan tahan terhadap bakteri, 
      Melakukan sanitasi dengan menjaga kebersihan lingkunan dan lahan tanaman, Melakukan penanaman tidak terlalu rapat, 
      terutamanya pada musim penghujan, melakukan pemusnahan buah yang sudah terinfeksi atau membuangnya pada daerah yang jauh, 
      Menggunakan metode penanaman mulsa plastik, untuk mengurangi kelembabapan media tanah, dan Melakukan penyemprotan dengan bakterisida, 
      terutamanya agrimycin, kuprocat, plantomycin dan lainnya sesuai dengan dosis yang ditentukan.
      </p>
    </Container>
  );
};

export default Tips3;
