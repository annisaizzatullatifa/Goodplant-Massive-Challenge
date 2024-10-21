import React from 'react';
import { Image, Container } from 'react-bootstrap';
import antraknosa from "../Gambar/antraknosa.png";
import "../Style/Tips4.css";

const Tips4 = () => {
  return (
    <Container>
      <h1>Antraknosa: Cara mengidentifikasi, mencegah, <br></br>dan mengobati jamur berbahaya</h1>
      <p className="bioP">Bioprotectionportal.com </p>
      <p className='sumber'>Sumber: <a href="https://bioprotectionportal.com/id/resources/anthracnose-how-to-identify-prevent-treat-the-harmful-fungi/">https://bioprotectionportal.com/id/resources/anthracnose-how-to-identify-prevent-treat-the-harmful-fungi/</a></p>

      <p className="alinea">Antraknosa adalah nama umum penyakit ini. 
      Hal ini juga dikenal sebagai hawar coklat (kopi dan teh), mati pucuk (jeruk), 
      busuk buah, kanker batang, atau noda air mata. Lebih banyak nama termasuk hawar daun, 
      pucuk, atau ranting. Ini karena sering terlihat pertama kali pada daun, pucuk, dan ranting. 
      Nama ilmiahnya yang disukai adalah <i>Glomerella cingulata</i>. Namun, 
      juga dikenal sebagai <i>Colletotrichum gloeosporioides</i>.
      </p>

      <div className="image-container">
        <Image src={antraknosa} fluid className="image" />
      </div>

      <h2>Apa penyebab antraknosa?</h2>
      <p className="alinea2">
      Singkatnya, antraknosa disebabkan oleh jamur. 
      Ini adalah kelompok umum jamur atau penyakit tanaman/patogen yang menyebabkan kerusakan pada banyak spesies tanaman yang berbeda. 
      Apa yang menyebabkan antraknosa menyebar dan menyerang tanaman? Ada banyak cara penyebaran jamur. 
      Misalnya melalui cuaca lembab, tetesan air, dan serasah daun. Ini membuat pengendalian antraknosa cukup rumit. 
      Identifikasi dini antraknosa sangat penting.
      </p>

      <h2>Apa penyebab antraknosa?</h2>
      <p className="alinea3">
      Antraknosa dapat terlihat berbeda pada tanaman yang berbeda. 
      Umumnya, Anda dapat mengidentifikasi penyakit antraknosa oleh lesi atau 'goresan' yang gelap dan cekung. 
      Pastikan untuk memperhatikan lesi pada daun dan batang khususnya. Ini termasuk lesi pada pertumbuhan baru; 
      jika antraknosa tumbuh pada daun muda, dapat membuatnya melengkung dan terlihat menyimpang. 
      Antraknosa sendiri seringkali terlihat seperti banyak titik. Titik-titik ini kira-kira seukuran kepala pin. 
      Mereka dapat bervariasi dalam warna dan mulai dari kuning hingga coklat hingga hitam.
      </p>

      <h2>Antraknosa dan buah-buahan dan sayuran</h2>
      <p className="alinea4">  
      Pada buah-buahan dan sayuran, Anda mungkin pertama kali melihat antraknosa pada daun atau buahnya sendiri. 
      Mereka muncul sebagai titik-titik kecil, berwarna kuning atau coklat atau hitam seperti dijelaskan di atas. 
      Seiring waktu, bintik-bintik ini menjadi lebih gelap warnanya - dari coklat tua menjadi hitam. 
      Mereka sering menjadi lebih besar, menyebar ke lebih banyak daun. Berikan perhatian khusus pada bagian bawah daun. 
      Jika daun masih sangat muda saat terinfeksi, daunnya bisa melengkung dan terdistorsi. 
      Dalam beberapa kasus, hanya sebagian dari setiap daun yang mati. Daun yang lebih tua dapat menahan infeksi, 
      tetapi lesi masih dapat terlihat.
      </p>

      <h2>Antraknosa dan pohon</h2>
      <p className="alinea5">  
      Pada pohon, lesi dapat tersebar di sepanjang atau di sekitar urat daun. 
      Namun, ini tergantung pada spesies pohon. Daun yang terinfeksi rontok lebih awal, 
      bahkan selama musim tanam. Antraknosa akan menyebar ke seluruh pohon. Saat melakukannya, 
      dedaunan akan sering jatuh dari bawah ke atas. Ini berarti daun terakhir yang jatuh akan berada di atas. 
      Terkadang sebatang pohon benar-benar kehilangan semua daunnya. Antraknosa terutama menyerang daun pohon. 
      Namun pada beberapa spesies juga dapat menyerang ranting, dahan, dan batang. 
      Lihat UP ICM untuk informasi lebih lanjut tentang antraknosa di taman dan lanskap. 
      Terkadang antraknosa dapat disalahartikan sebagai penyakit bercak daun lainnya. 
      Lihat CABI Kompendium Spesies Invasif. Ini adalah alat yang berguna untuk identifikasi penyakit.
      </p>

      <h2>Bagaimana cara mencegah penyakit antraknosa?</h2>
      <p className="alinea6">  
      Antraknosa sulit diobati. Ini dapat mempengaruhi tanaman yang tumbuh di dalam rumah kaca maupun di luar ruangan. 
      Pencegahan adalah obat terbaik. Ada banyak cara untuk mencegah penyebaran penyakit antraknosa. 
      Misalnya, jamur antraknosa hidup di sisa-sisa tanaman. Jadi, salah satu cara terbaik untuk menghentikan penyebarannya adalah 
      dengan merapikan materi tanaman yang mati. Udara dan sinar matahari membantu mencegah penyebaran antraknosa. 
      Dengan jarak tanam yang cukup jauh, Anda dapat memiliki sirkulasi udara yang lebih baik. 
      Ini juga dapat membantu lebih banyak sinar matahari mencapai tanaman.
      </p>

      <p className="alinea7">  
      Pemangkasan juga penting. Ini membantu membersihkan daun dan ranting mati yang disukai antraknosa. 
      Perhatikan juga faktor lingkungan. Mata air yang basah mungkin berarti Anda perlu melakukan tindakan pencegahan ekstra. 
      Beberapa tanaman tahan terhadap antraknosa. Anda dapat membantu mencegah penyakit dengan memilih tanaman yang tahan terhadapnya.
      </p>
      <br></br>
      <br></br>
    </Container>
  );
};

export default Tips4;
