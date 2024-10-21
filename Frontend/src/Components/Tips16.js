import React from 'react';
import { Image, Container } from 'react-bootstrap';
import Tomat from "../Gambar/Tomat.jpg";
import "../Style/Tips16.css";

const Tips16 = () => {
  return (
    <Container>
      <h1>Cara Menanam dan Merawat Tanaman Tomat di Pot</h1>
      <p className="anizaP">Aniza Pratiwi, Sakina Rakhma Diah Setiawan</p>
      <p className='date'>Kompas.com - 19/03/2022, 14:58 WIB</p>
      <p className='sumber'>Sumber: <a href=" https://www.kompas.com/homey/read/2022/03/19/145800976/cara-menanam-dan-merawat-tanaman-tomat-di-pot?page=all#page2">  https://www.kompas.com/homey/read/2022/03/19/145800976/cara-menanam-dan-merawat-tanaman-tomat-di-pot?page=all#page2</a></p>

      <br></br>
      <p className="alinea">
      Saat ini, menanam berbagai jenis tanaman di lingkungan rumah menjadi hal yang sering dilakukan banyak orang. 
      Dikutip dari laman Cybex Kementerian Pertanian RI, Sabtu (19/3/2022), menanam tomat di pot atau polybag 
      memiliki beberapa keuntungan, yaitu dapat dilakukan di rumah dengan luasan terbatas, dapat dengan mudah 
      mengontrol perkembangan tanaman, penyebaran atau penularan hama dan dapat menghemat pupuk. 
      Berikut cara menanam tomat di pot atau polybag. 
      </p>

      <div className="image-container">
        <Image src={Tomat} fluid className="image" />
      </div>

      <h2>1. Media Tanam</h2>
      <p className="alinea2">
      Untuk menanam tomat dalam wadah, Anda dapat  memanfaatkan kaleng bekas, ember plastik atau memakai pot atau 
      polybag. Jika Anda menggunakan polybag, gunakan pupuk bokashi dan tanah dengan perbandingan 1:1. 
      </p>

      <h2>2. Persemaian</h2>
      <p className="alinea3">
      Hal pertama yang harus dilakukan adalah semaikan biji tomat terlebih dahulu di dalam kotak pesemaian (tray). 
      Untuk media persemaiannya, campurkan tanah dan pupuk bokasi dengan perbandingan 1:1. Lalu, 
      benih yang ditanamkan ke dalam kotak pesemaian diletakkan di tempat yang teduh sehingga air hujan tidak 
      merusak benih yang masih lemah. Untuk penyiraman, sebaiknya dilakukan dengan penyemprotan. 
      Setelah bibit memiliki lima helai daun, pindahkan bibit ke dalam polybag kecil. Sementara itu, 
      bibit yang telah berumur kurang lebih satu bulan, akan tampak besar dan kuat dengan panjang tanaman kurang 
      lebih 10 cm dapat dipindah ke dalam pot atau polybag.
      </p>

      <h2>3. Penanaman</h2>
      <p className="alinea4">
      Media tanam perlu disiram terlebih dahulu sebelum tanaman dipindahkan. Pindahkan tanaman dari persemaian ke 
      media tanam dengan hati-hati jangan sampai merusak akar tanaman. Pemindahan sebaiknya dilakukan pada sore hari.
      </p>

      <h2>4. Perawatan</h2>
      <p className="alinea5">
      Perawatan tanaman tomat dalam pot atau polybag lebih mudah karena kondisi tanaman lebih terkontrol dan 
      penularan penyakit lewat akar dapat di hindari. Perawatan rutin yang perlu dilakukan antara lain sebagai 
      berikut. 
      </p>

      <p className="alinea6">
      Pertama, periksa tanaman setiap hari dari hama dan penyakit. Jika ada hama, ambil dan matikan dengan 
      cara dipotong. Bila ada tanaman yang layu segera cabut dan buang medianya agar tidak menular pada 
      tanaman lain. Apabila tanaman tampak kurang subur, tambahkan pupuk kompos atau pupuk kandang yang 
      telah matang. Jika tanaman sudah tumbuh besar, beri turus atau pasak untuk membantu tegaknya tanaman 
      tersebut karena batang tomat tidak kokoh berkayu.
      </p>

      <p className="alinea7">
      Siramlah tanaman secara rutin, minimal tiga kali sehari. Perhatikan kadar air dalam media tanam jangan 
      terlalu basah juga. Pemangkasan diperlukan untuk merangsang pertumbuhan buah, meningkatkan penerimaan 
      cahaya matahari, menurunkan tingkat kelembapan disekitar tanaman, meningkatkan kualitas buah serta 
      mengurangi resiko penularan hama dan penyakit tanaman. Pemangkasan dilakukan pada tunas muda, pucuk batang 
      utama, daun dan buah. Pemangkasan terhadap pucuk batang utama dilakukan setelai tangkai bunga yang kelima. 
      Pemangkasan sebaiknya dilakukan setelah tanaman berumur 4-6 minggu sehingga buah tidak kerdil dan pematangan 
      buah tidak terlambat.
      </p>

      <p className="alinea8">
      Kemudian, panen pertama buah tomat umumnya pada umur 90 hari setelah semai. Panen berikutnya setelah 3-5 hari 
      kemudian sampai buahnya habis. Petik buah tomat saat berwarna kuning jingga, karena akan masak sendiri diluar 
      batang Panen buah pada saat pagi atau sore. 
      </p>
      <br></br>
      <br></br>
    </Container>
  );
};

export default Tips16;
