import React from 'react';
import { Image, Container } from 'react-bootstrap';
import bayam from "../Gambar/bayam.jpg";
import "../Style/Tips10.css";

const Tips10 = () => {
  return (
    <Container>
      <h1>Cara Menanam Bayam di Pot, dari Benih hingga Dipanen</h1>
      <p className="sakinaR">Sakina Rakhma Diah Setiawan</p>
      <p className='date'>Kompas.com - 18/04/2021, 10:27 WIB</p>
      <p className='sumber'>Sumber: <a href=" https://www.kompas.com/homey/read/2021/04/18/102747976/cara-menanam-bayam-di-pot-dari-benih-hingga-dipanen">   https://www.kompas.com/homey/read/2021/04/18/102747976/cara-menanam-bayam-di-pot-dari-benih-hingga-dipanen</a></p>
      
      <p className="alinea">
      Menanam sayuran di rumah bisa menjadi alternatif selain merawat tanaman hias. 
      Ada banyak sayuran yang mudah ditanam dan dirawat, serta hasilnya bisa langsung diolah menjadi hidangan. 
      Bila rumah Anda sempit sehingga tidak ada pekarangan rumah yang memadai atau Anda tinggal di apartemen, 
      jangan kecil hati. Anda tetap bisa menanam sayuran di pot.
      </p>

      <div className="image-container">
        <Image src={bayam} fluid className="image" />
      </div>

      <p className="alinea2">
      Menanam bayam di pot bisa menjadi solusi. Bayam adalah sayuran yang mudah ditanam, kaya nutrisi, 
      dan tumbuh cepat. Dilansir dari Gardening Know How, Minggu (18/4/2021), berikut cara menanam bayam di pot, 
      mulai dari benih hingga dipanen.Menanam bayam dalam pot atau wadah lain sangat ideal. 
      Ini memungkinkan Anda memanen semua daunnya sebelum hama serangga memakan bayam sebelum Anda mendapatkannya. 
      </p>

      <p className="alinea3">
      Menanam bayam dalam pot juga akan menggagalkan nematoda serta hama dan penyakit lain yang ditularkan melalui tanah. 
      Bayam yang ditanam dalam pot juga mudah diakses. Bayam yang ditanam di pot bisa diletakkan di ambang jendela atau 
      tepat di luar pintu dapur di balkon. Bayam hanya membutuhkan waktu antara 40-45 hari untuk mencapai potensi panennya. 
      Hal ini sering kali memungkinkan penanaman berturut-turut tergantung pada iklim atau cuaca di daerah Anda.
      </p>

      <p className="alinea4">
      Bayam cenderung tumbuh dalam suhu yang cukup hangat. Berikan naungan untuk tanaman jika suhu udara mencapai lebih dari 26 derajat Celsius. 
      Keunggulan dari bayam yang ditanam dalam wadah adalah ia dapat dengan mudah dipindahkan. Selain itu, carilah varietas yang tahan panas 
      jika Anda tinggal di daerah yang lebih hangat. Bayam bisa ditanam dari biji atau benih. Pertama, pilih pot atau wadah berukuran 6-12 inci (15-30 cm). 
      Tanam benih di tanah yang telah dicampur dengan kompos untuk membantu penyimpanan air dan tempatkan di bawah sinar matahari penuh. 
      Tingkat pH tanah harus sekitar 6 sampai 7. Taburkan benih dengan jarak 3 cm di dalam ruangan dan sekitar tiga minggu sebelum memindahkannya ke luar. 
      Ketika ukurannya sudah mencapai 5 cm, tipiskan menjadi 5-8 cm.
      </p>

      <h2>Perawatan bayam di dalam pot</h2>
      <p className="alinea5">
      Anda bisa menanam bayam sendiri atau bersama dengan tanaman lain yang memiliki kebutuhan serupa. 
      Tanaman seperti petunia atau marigold, dapat disisipkan di antara bayam. 
      Pastikan untuk menyisakan ruang yang cukup untuk pertumbuhan di antara tanaman. 
      Anda juga bisa menanam kacang polong di tengah wadah besar dan menanam bayam di sekitarnya.
      </p>

      <p className="alinea6">
      Bayam membutuhkan kelembaban yang konsisten, jadi pastikan Anda sering menyiramnya. 
      Pupuk bayam dengan pupuk yang mengandung banyak nitrogen atau gunakan emulsi ikan organik atau tepung biji kapas. 
      Caranya, masukkan pupuk ke dalam tanah sebelum menanam. Kemudian, sebarkan lagi pupuk di sekitar pangkal tanaman dan 
      lakukan dengan lembut ke dalam tanah. Hati-hati, bayam memiliki akar yang dangkal sehingga mudah rusak.
      </p>
      <br></br>
      <br></br>
    </Container>
  );
};

export default Tips10;
