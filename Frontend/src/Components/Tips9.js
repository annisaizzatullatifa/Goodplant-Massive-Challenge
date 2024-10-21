import React from 'react';
import { Image, Container } from 'react-bootstrap';
import siputBekicot from "../Gambar/siputBekicot.png";
import "../Style/Tips9.css";

const Tips9 = () => {
  return (
    <Container>
      <h1>Ada Siput pada Tanaman? Ini 4 Cara Menyingkirkannya</h1>
      <p className="abdulH">Abdul Haris Maulana, Esra Dopita Maret </p>
      <p className='date'>Kompas.com - 29/11/2021, 16:30 WIB</p>
      <p className='sumber'>Sumber: <a href="  https://www.kompas.com/homey/read/2021/11/29/163000676/ada-siput-pada-tanaman-ini-4-cara-menyingkirkannya">  https://www.kompas.com/homey/read/2021/11/29/163000676/ada-siput-pada-tanaman-ini-4-cara-menyingkirkannya</a></p>
      
      <p className="alinea">
      Munculnya siput atau bekicot pada tanaman di kebun rumah adalah tanda bahaya. 
      Sebab, siput bisa menjadi salah satu hama yang dapat mengganggu proses pertumbuhan tanaman. 
      Untuk itu, keberadaan siput pada tanaman perlu disingkirkan segera. Dilansir dari beberapa sumber, 
      Senin (29/11/2021), berikut ragam cara menyingkirkan siput yang muncul pada tanaman.
      </p>

      <div className="image-container">
        <Image src={siputBekicot} fluid className="image" />
      </div>

      <h2>Semprot dengan larutan bawang putih</h2>
      <p className="alinea2">
      Untuk menjauhkan hingga membasmi siput pada tanaman, kamu dapat menyemprotnya menggunakan larutan bawang putih. 
      Untuk membuatnya, hancurkan tiga siung bawang putih, lalu rendam ke dalam satu sendok makan minyak sayur selama semalaman. 
      Setelah itu, saring cairan yang dihasilkan dari bawang putih dan minyak sayur ke dalam wadah berisi satu liter air. 
      Kemudian, tuangkan campuran bawang putih dan air ke dalam botol semprotan.
      </p>

      <p className="alinea3">
      Selanjutnya, tambahkan satu sendok teh sabun cair, lalu kocok botol sebelum campuran digunakan. 
      Larutan bawang putih dan sabun cuci piring dapat membunuh siput dan menjauhkan siput lain dari tanaman. 
      </p>

      <h2>Cukup taburkan garam</h2>
      <p className="alinea4">
      Cara lain menyingkirkan siput dari tanaman adalah menaburkan garam. 
      Siput yang terkena banyak garam dapat membuat air dari sel kulitnya keluar dalam jumlah banyak 
      sehingga siput kekurangan cairan. Ketika siput kekurangan cairan atau dehidrasi, 
      hal itu pada akhirnya bisa menyebabkan siput mati.
      </p>

      <h2>Manfaatkan cangkang telur</h2>
      <p className="alinea5">
      Pecahkan cangkang telur, lalu taburkan pecahan tersebut pada area tanaman biasa siput muncul. 
      Pecahan cangkang telur yang tajam dapat membuat siput tidak nyaman sehingga menjauhi tanaman. 
      </p>

      <h2>Ambil siput dan pindahkan</h2>
      <p className="alinea6">
      Cara terakhir adalah mengambil siput dari tanaman, lalu masukkan ke sebuah wadah. 
      Kamu bisa membuangnya ke tempat jauh dari tanaman dan rumah Namun, 
      cara satu ini mungkin sedikit menakutkan dan menjijikkan. Namun, apabila kamu tidak takut atau merasa jijik, 
      ini bisa menjadi cara paling sederhana menyingkirkan siput dari tanaman. 
      </p>
    </Container>
  );
};

export default Tips9;
