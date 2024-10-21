import React from 'react';
import { Image, Container } from 'react-bootstrap';
import lalatBuah from "../Gambar/lalatBuah.png";
import "../Style/Tips7.css";

const Tips7 = () => {
  return (
    <Container>
      <h1>5 Cara Ampuh Mengusir Lalat Buah Tanpa Meracuni Makanan</h1>
      <p className="diva">Diva Lufiana Putri, Inten Esti Pratiwi</p>
      <p className='date'>Kompas.com - 27/08/2022, 07:30 WIB</p>
      <p className='sumber'>Sumber: <a href=" https://www.kompas.com/tren/read/2022/08/27/073000565/5-cara-ampuh-mengusir-lalat-buah-tanpa-meracuni-makanan?page=2"> https://www.kompas.com/tren/read/2022/08/27/073000565/5-cara-ampuh-mengusir-lalat-buah-tanpa-meracuni-makanan?page=2</a></p>
      
      <p className="alinea">
      Lalat buah merupakan hama kecil yang kerap hadir di dalam rumah. 
      Biasanya, serangga ini mengerubungi buah yang terlalu lama matang dan 
      diletakkan di ruang terbuka seperti meja dapur. Meski berukuran mini dan tampak tak berbahaya, 
      lalat buah bisa menjadi media penyebaran kuman. Dilansir dari WebMD, 
      bakteri yang mungkin dibawa lalat buah antara lain salmonella, E. coli dan listeria. 
      Ketiganya bisa menyebabkan keracunan makanan, bahkan di beberapa kasus bisa mengancam jiwa. 
      Namun, cara mengusir lalat buah tidak semudah dengan menyemprot cairan pembasmi serangga. 
      Pasalnya, cairan maupun semprotan pembasmi serangga akan membuat buah dan makanan yang dihinggapi lalat tak lagi bisa dikonsumsi.
      </p>

      <div className="image-container">
        <Image src={lalatBuah} fluid className="image" />
      </div>

      <h2>Cara mengusir lalat buah</h2>
      <p className="alinea2">
      Berikut cara ampuh mengusir lalat buah tanpa meracuni makanan:
      </p>

      <h2>1. Perangkap dari cuka apel</h2>
      <p className="alinea3">
      Dikutip dari Kompas.com, cuka apel adalah salah satu aroma yang menarik perhatian lalat buah. 
      Oleh karena itu, bahan ini bisa digunakan menjadi perangkap untuk membasmi lalat buah. Pertama,
      masukkan beberapa sendok makan cuka apel, beberapa tetes sabun cuci piring, 
      dan satu sendok makan gula ke dalam mangkuk. Kemudian, campurkan bahan-bahan tersebut dan letakkan di meja, 
      dekat dengan buah-buahan. Gula dan cuka apel akan menarik perhatian lalat buah. Di sisi lain, 
      sabun cuci piring akan menjebak serangga ini hingga tenggelam.
      </p>

      <h2>2. Perangkap lilin</h2>
      <p className="alinea4">
      Adapun caranya, siapkan lilin dan letakkan di wadah berisi sedikit air. 
      Kemudian, nyalakan lilin dan tunggu sampai lalat buah berpaling dari makanan ke lilin. 
      Serangga ini akan mendekat ke arah api, terbakar, dan jatuh ke dalam air.
      </p>

      <h2>3. Gunakan merica atau bubuk cabai</h2>
      <p className="alinea5">
      Dilansir dari Kompas.com, bau pedas dari merica atau bubuk cabai sangat tidak disukai lalat buah. 
      Serangga ini pun akan menjauh jika mencium bau pedas. Caranya, campur bubuk cabai atau merica dengan air, 
      dan masukkan ke dalam botol semprot. Kemudian, semprot area dapur atau meja tempat buah-buahan berada. 
      Selain itu, bisa juga meletakkan cairan ini di dekat buah-buahan, agar lalat tak kembali datang.
      </p>

      <h2>4. Letakkan kapur barus</h2>
      <p className="alinea6">
      Kapur barus bisa mengusir lalat buah. Sebab, aroma menyengat dari kamper akan membantu menutupi aroma wangi buah-buahan. 
      Gerus kapur barus hingga menjadi butiran-butiran halus, dan masukkan ke mangkuk kecil. Selanjutnya, 
      letakkan di dekat buah-buahan yang sudah ranum. Namun, pastikan agar mangkuk berisi butiran kapur barus ini 
      tak bisa dijangkau oleh anak-anak maupun hewan peliharaan.
      </p>

      <h2>5. Bersihkan tempat berkembang biak lalat buah</h2>
      <p className="alinea7">
      Carilah area yang berpotensi menjadi tempat lalat buah berkembang biak. 
      Periksa dan pastikan semua tumpahan lengket serta buah dan sayuran busuk tak ada di dalam rumah. 
      Selain buah dan sayuran terlampau matang, lalat buah juga senang bertelur di kain lap dan kain pel, 
      serta kaleng kosong yang tergeletak. Tak lupa, bersihkan pula saluran pembuangan air yang menjadi jalur masuk lalat buah. 
      Caranya, tuangkan air mendidih ke dalam saluran air. Langkah ini bisa mematikan lalat buah, 
      sebelum berhasil masuk ke dalam rumah dan hinggap di makanan. Saat lalat buah berhasil diusir, 
      segera selamatkan buah dan sayuran matang dengan memasukkannya ke dalam lemari pendingin. 
      Namun, jika tetap ingin meletakkan buah di tempat terbuka, jangan lupa untuk menutupnya dengan tudung saji.
      </p>
      <br></br>
      <br></br>
    </Container>
  );
};

export default Tips7;
