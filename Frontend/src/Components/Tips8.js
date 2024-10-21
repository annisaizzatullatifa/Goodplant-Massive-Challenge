import React from 'react';
import { Image, Container } from 'react-bootstrap';
import walangSangit from "../Gambar/walangSangit.png";
import "../Style/Tips8.css";

const Tips8 = () => {
  return (
    <Container>
      <h1>Bagaimana Cara Pengendalian Hama Walang Sangit Itu Sendiri?</h1>
      <p className='date'>Agronasa.com - 23 Okt</p>
      <p className='sumber'>Sumber: <a href=" https://www.agronasa.com/hama-walang-sangit/"> https://www.agronasa.com/hama-walang-sangit/</a></p>
      
      <p className="alinea">
      Untuk membasmi hama tersebut yang mengganggu ini, diperlukan beberapa cara untuk melakukan pengendaliannya. 
      Terdapat beberapa cara pengendalian hama tersebut, di antaranya adalah sebagai berikut:
      </p>

      <div className="image-container">
        <Image src={walangSangit} fluid className="image" />
      </div>

      <h2>1. Pengendalian Secara Kultur Teknik</h2>
      <p className="alinea2">
      Sampai saat ini masih belum ada varietas padi yang tahan terhadap hama walang sangit itu sendiri. 
      Hal ini dilihat dari cara hidup serangga tersebut. Salah satu teknik pengendalian yang dapat dilakukan
      yaitu dengan melakukan tanam serempak dalam satu hamparan. Cara ini sangat dianjurkan karena setelah 
      ada tanaman padi berbunga, hama yang satu ini akan segera pindah dari rumput-rumputan atau tanaman 
      sekitar sawah ke pertanaman padi yang pertama kali berbunga.
      </p>

      <p className="alinea3">
      Jika hal tersebut dilakukan, maka penanaman tidak serempak yang berbunga paling awal akan diserang lebih dahulu dan 
      dijadikannya tempat berkembang biak. Tanaman yang paling lambat ditanam akan mendapatkan serangan yang relatif lebih berat. 
      Hal ini dikarenakan hama ini sudah berkembang biak pada pertanaman yang berbunga lebih dahulu. 
      Dianjurkan beda tanam dalam satu hamparan tidak lebih dari 2,5 bulan.
      </p>

      <h2>2. Pengendalian Secara Biologi</h2>
      <p className="alinea4">
      Potensi agens hayati pengendali hama walang sangit masih sangat sedikit diteliti. Namun ternyata, 
      beberapa penelitian telah dilakukan terutama terkait adanya pemanfaatan parasitoid atau 
      pengendali parasit (hama).
      </p>

      <h2>3. Pengendalian Dengan Menggunakan Perilaku Serangga</h2>
      <p className="alinea5">
      Ternyata, serangga yang satu ini rupanya tertarik oleh senyawa (bebauan) yang dikandung tanaman Lycopodium sp. dan 
      Ceratophylum sp. Maka dari itu, hal ini dapat dimanfaatkan untuk menarik hama walang sangit dan 
      kemudian secara fisik dimatikan olehnya. Bau bangkai binatang terutama bangkai kepiting juga efektif 
      untuk menarik hama yang satu ini.
      </p>

      <h2>4. Pengendalian Kimiawi</h2>
      <p className="alinea6">
      Upaya pengendalian hama selanjutnya yang bisa dilakukan oleh para petani adalah dengan cara pengendalian kimiawi. 
      Hal ini dilakukan pada padi setelah berbunga sampai masak susu, ambang kendali untuk walang sangit adalah enam ekor /m2. 
      Banyak insektisida yang cukup efektif, terutama yang dikemas dalam bentuk cair atau tepung. Namun, pengendali hama yang berbentuk granula 
      tidak dapat dianjurkan untuk mengendalikan walang sangit. Insektida anjuran untuk tanaman padi yang cukup efektif terhadap walang sangit adalah 
      yang berbahan aktif fipronil, metolkarb, propoksur, BPMC dan MIPC. Anda juga dapat menggunakan salah satu produk pengendali hama yang satu ini, 
      yaitu Natural BVR, Agro NASA dari PT. Natural Nusantara untuk mengatasi permasalahan yang satu ini.
      </p>
      <br></br>
      <br></br>
    </Container>
  );
};

export default Tips8;
