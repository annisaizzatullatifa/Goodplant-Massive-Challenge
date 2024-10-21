import React from 'react';
import { Image, Container } from 'react-bootstrap';
import ulatDaun2 from "../Gambar/ulatDaun2.png";
import "../Style/Tips.css";

const Tips = () => {
  return (
    <Container>
      <h1>Cara Mengusir Ulat Daun, Guna Cegah Tanaman Rusak!</h1>
      <p className="chrismonica">Chrismonica</p>
      <p className='date'>Orami.co.id - 13 Maret 2024</p>
      <p className='sumber'>Sumber: <a href="https://www.orami.co.id/magazine/ulat-daun">https://www.orami.co.id/magazine/ulat-daun/</a></p>

      <h2>1. Ciri-ciri Tanaman Terkena Hama Ulat</h2>

      <p className="alinea">Cara pertama yang perlu Moms lakukan sebelum mengusir ulat-ulat pada tanaman, yakni dengan mengidentifikasinya. 
        Meski banyak ulat daun melakukan kamuflase, Moms tetap bisa mengetahui ciri-ciri tanaman yang terserang hama ulat. 
        Berikut ciri-cirinya:
      </p>

      <div className="image-container">
        <Image src={ulatDaun2} fluid className="image" />
      </div>

      <ul>
        <li><b>Periksa bagian batang atau daun tanaman</b></li>
        <p className="alinea2">Adanya serangan lalat penggorok daun ditandai oleh adanya bintik-bintik putih sebagai tanda tusukan ovipositor dan 
          berupa liang korokan larva yang berkelok-kelok dari bagian atas daun. Serangan berat, 
          seluruh helaian daun penuh dengan korokan sehingga daun menjadi kering, berwarna coklat, dan timbul efek seperti terbakar. 
          Larva penggorok daun dapat masuk sampai ke dalam umbi batang dan akan menyebabkan kerusakan yang parah pada musim kemarau.
        </p>

        <li><b>Ulat memakan dedaunan dari bagian tepi hingga ke dalam</b></li>
        <p className="alinea3">
        Apabila Moms menemukan daun yang berlubang atau bergerigi, 
        kemungkinan besar tanaman tersebut telah dimakan ulat.
        </p>
        
        <li><b>Periksa bagian batang atau daun tanaman</b></li>
        <p className="alinea4">  
        Biasanya, tanaman yang terserang hama ulat juga ditandai dengan adanya kotoran ulat atau frass. 
        Kotoran ulat biasanya bergerombol dan bentuk bulat, seperti biji merica.
        </p>
      </ul>

      <h2>2. Ambil Ulat dari Tanaman</h2>
      <p className="alinea5">  
      Jika Moms sudah mengetahui ciri-ciri tanaman yang terserang hama ulat daun, 
      Moms bisa mengusirnya dengan cara menyusuri setiap bagian batang dan daun tanaman. 
      Ketika Moms mendapati ulat, gunakanlah sarung tangan untuk mengambilnya dan letakkan 
      dalam ember berisi air sabun. Nantinya, ulat daun akan mati. 
      Basmi juga telur-telurnya sebelum menetas menjadi ulat. 
      Dengan cara mencuci setiap helai daun atau batang tanaman Moms yang menjadi tempat menempelnya telur ulat. 
      Selain itu, Moms bisa meletakkan kardus atau kertas timah di tanah sekitar tanaman untuk mencegah hama ulat yang merusak tanaman.
      </p>

      <h2>3. Gunakan Cairan Insektisida</h2>
      <p className="alinea6">  
      Apabila Moms merasa geli atau jijik untuk mengambil ulat satu per satu dari tanaman, 
      bisa juga mengusirnya dengan cairan insektisida. Pilihlah insektisida organik khusus 
      untuk mengendalikan ulat yang mengandung bahan aktif:
      </p>

      <ul>
        <li>BT (<i>Bacillus Thuringiensis</i>)</li>
        <li><i>Spinosad</i></li>
        <li><i>Piretrin</i></li>
        <li>Minyak Nimba</li>
        <li><i>Azadirachtin</i></li>
      </ul>

      <p className="alinea7">  
      <i>Bacillus Thuringiensis</i> merupakan bakteri alami yang biasa hidup di tanah. 
      Bakteri ini mengandung protein beracun yang sangat ampuh untuk membunuh ulat bulu dan larva nyamuk. 
      Ketika terinfeksi bakteri ini, saluran cerna hama ulat pada daun akan beraksi sehingga mereka berhenti mengonsumsi dedaunan hingga akhirnya mati. 
      Meski beracun bagi hewan, cairan ini tidak berbahaya bagi manusia.
      Moms tetap bisa menggunakannya pada tanaman organik yang dikonsumsi. 
      Namun pastikan bahwa hasil kebun organik tersebut dicuci hingga benar-benar bersih sebelum dikonsumsi. 
      Moms bisa menemukan cairan insektisida di toko tanaman, baik <i>online</i> maupun <i>offline</i>.
      Jangan lupa untuk mengikuti instruksi yang tertera dalam kemasan insektisida sebelum menggunakannya, ya.
      </p>

      <h2>Bahan Alami Mengusir Ulat pada Tanaman</h2>
      <p className="alinea8">  
      Apabila tidak ingin menggunakan cairan insektisida untuk mengusir ulat karena khawatir dapat merusak tanaman, 
      maka Moms bisa memanfaatkan bahan-bahan alami berikut ini.
      </p>

      <ul className='ul1'>
        <li>Air dan Sabun</li>
        <li>Minyak Nimba</li>
        <li>Cuka</li>
        <li>Lada dan Bawang Putih</li>
      </ul>
    </Container>
  );
};

export default Tips;
