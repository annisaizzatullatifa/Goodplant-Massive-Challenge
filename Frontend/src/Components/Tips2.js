import React from 'react';
import { Image, Container } from 'react-bootstrap';
import lalatPenggorok from "../Gambar/lalatPenggorok.png";
import "../Style/Tips2.css";

const Tips2 = () => {
  return (
    <Container>
      <h1>Pengendalian Lalat Penggorok Daun (Liriomyza chinensis) <br></br>pada Bawang Merah yang Ramah Lingkungan</h1>
      <p className="arifM">Arif Meftah Hidayat</p>
      <p className='date'>Anakagronomy.com - Jum'at, 13 Januari 2017</p>
      <p className='sumber'>Sumber: <a href="https://www.anakagronomy.com/2017/01/pengendalian-lalat-penggorok-daun.html">https://www.anakagronomy.com/2017/01/pengendalian-lalat-penggorok-daun.html</a></p>

      <h2>Biologi Lalat Penggorok</h2>

      <p className="alinea"> Lalat betina menyisipkan telur di bawah epidermis daun. 
      Setiap lalat betina mampu menghasilkan sekitar 50-300 butir telur. 
      Belatung selanjutnya membuat lubang korokan pada daun dan menuju ke umbi. 
      Kepompong terbentuk dan terdapat di atas permukaan tanah. Daur hidup lalat penggorok daun adalah sekitar 3 minggu.
      </p>

      <div className="image-container">
        <Image src={lalatPenggorok} fluid className="image" />
      </div>

      <h2>Gejala Serangan</h2>
      <p className="alinea2">Adanya serangan lalat penggorok daun ditandai oleh adanya bintik-bintik putih sebagai tanda tusukan ovipositor dan berupa liang korokan larva yang berkelok-kelok dari bagian atas daun. 
        Serangan berat, seluruh helaian daun penuh dengan korokan sehingga daun menjadi kering, berwarna coklat, dan timbul efek seperti terbakar. Larva penggorok daun dapat masuk sampai ke dalam umbi batang dan 
        akan menyebabkan kerusakan yang parah pada musim kemarau.
      </p>

      <h2>Pengendalian</h2>
      <p className="alinea3">
      Secara umum, pengendalian dilakukan dengan cara pencegahan melalui teknis budidaya yang tepat, pengendalian secara fisik/mekanis, 
      pengendalian secara biologis, dan pengendalian dengan menggunakan perangkap. Teknis budidaya yang dapat mengendalikan perkembangan 
      lalat penggorok daun diantaranya adalah penggunaan varietas toleran seperti Filipina, pengairan serta pemupukan yang cukup, 
      rotasi tanaman selain bawang-bawangan, dan karantina tanaman yang sudah terserang penyakit atau menujukkan gejala terserang hama.
      </p>

      <p className="alinea4">  
      Pengendalian secara fisik atau mekanis dilakukan dengan cara mengambil daun yang sudah menunjukkan gajala terserang kemudian memusnahkan daun tersebut. 
      Secara fisik, pengendalian juga dapat dilakukan dengan menggunakan perangkap. Perangkap alami dipasang dengan menanam tanaman kacang merah di sekitar pertanaman bawang. 
      Perangkap lain adalah mulsa plastik perak yang diletakkan sebelum tanam untuk menghalangi larva jatuh ke tanah, perangkap berupa kelambu/kasa, dan perangkap berupa lampu.
      </p>

      <p className="alinea5">  
      Pengendalian dengan cara biologi yaitu degnan memanfaatkan parasitoid berupa <i>Hemiptarsenus varicornis</i>, 
      <i> Opius sp.</i>, dan <i>Gronotoma sp</i>.
      </p>
    </Container>
  );
};

export default Tips2;
