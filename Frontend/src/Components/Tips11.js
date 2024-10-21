import React from 'react';
import { Image, Container } from 'react-bootstrap';
import labuSiam from "../Gambar/labuSiam.jpg";
import "../Style/Tips11.css";

const Tips11 = () => {
  return (
    <Container>
      <h1>Cara Menanam Labu Siam di Rumah dengan Benar</h1>
      <p className="rizkyS">Rizky Setiawan</p>
      <p className='date'>Orami.co.id - 01 June 2021</p>
      <p className='sumber'>Sumber: <a href=" https://www.orami.co.id/magazine/cara-menanam-labu-siam"> https://www.orami.co.id/magazine/cara-menanam-labu-siam</a></p>
      
      <p className="alinea">
      Labu siam (Sechium edule) adalah sejenis tanaman yang termasuk dalam keluarga labu Cucurbitaceae. 
      Tanaman ini awalnya berasal dari Meksiko tengah dan berbagai bagian Amerika Latin tetapi 
      sekarang tumbuh di seluruh dunia. Jika Moms punya pekarangan yang cukup luas, tak ada salahnya menanamnya, 
      terlebih cara menanam labu siam juga mudah.
      </p>

      <div className="image-container">
        <Image src={labuSiam} fluid className="image" />
      </div>

      <h2>1. Pembibitan</h2>
      <p className="alinea2">
      Untuk pembibitan, Moms perlu menyiapkan sebuah polybag kecil yang kemudian diisi dengan tanah yang lembap dan 
      kemudian langsung membenamkan benih di sana. Moms juga bisa menggunakan biji labu siam yang sudah tua sebagai 
      benihnya. Setelah itu, siram dengan air secukupnya lalu biarkan hingga benih tumbuh menjadi kecambah atau 
      tunas kecil. Saat tunas tersebut telah tumbuh hingga 30 cm lebih, maka bibit telah siap untuk ditanam.
      </p>

      <h2>2. Penanaman</h2>
      <p className="alinea3">
      Cara menanam labu siam bisa dilakukan di pot berukuran besar lalu diisi dengan tanah yang bagus. 
      Moms bisa membuat lubang sebesar 40 cm x 40 cm dengan kedalaman sekitar 20 cm dan 
      kemudian memindahkan bibit labu siam ke dalam lubang tersebut. Namun harus memindahkannya 
      secara hati-hati supaya akar tanaman tidak rusak. Setelah itu, lubang tanam ditutup menggunakan lapisan tanah 
      lain dan disirami dengan air secukupnya. Karena labu siam adalah jenis tanaman yang merambat, maka Moms perlu 
      memasang bambu di samping tanaman. Namun, pastikan bambu tersebut berdiri dengan kuat dan kokoh sehingga ia 
      bisa menopang rambatan tanaman labu siam. Bibit labu siam bisa diperoleh dari buah labu siam yang telah busuk. Kemudian disemaikan pada tanah pot kecil atau polybag. Bibit labu siam bisa diperoleh dari buah labu siam yang telah bertunas dan berakar. Semaian pada tanah, pot kecil atau polybag. Tanam dalam pot yang berisi tanah dengan bagian tunasnya tetap berdiri tegak ke atas.
      </p>

      <h2>3. Penyiangan</h2>
      <p className="alinea4">
      Setelah memahami cara menanam labu siam, maka Moms juga harus melakukan perawatan. Perawatan pertama adalah 
      penyiangan yang merupakan perawatan tanaman dengan cara membersihkan dan membuang langsung gulma ataupun 
      rumput liar yang muncul di sekitar tanaman. Penyiangan ini penting untuk mencegah hama atau penyakit tanaman.
      </p>

      <h2>4. Penyiraman dan Pengarahan Sulur</h2>
      <p className="alinea5">
      Moms wajib melakukan penyiraman secara rutin dan jangan sampai tanaman kekeringan karena kekurangan air. 
      Saat tanaman labu siam telah mengeluarkan sulur atau rambatan, maka Moms perlu mengarahkan sulur tersebut 
      dengan cara melilitkannya ke bambu yang telah dipasang di samping tunas. Namun, pastikan ia merambat dengan 
      baik dan benar agar bambu bisa menyanggah beban tanaman ketika telah berbuah. Labu siam yang tumbuh tinggi 
      akan mencari tempat rambatan jadi Moms membutuhkan teralis atau bambu untuk menopang sulurnya yang merambat.
      </p>

      <h2>5. Pemangkasan</h2>
      <p className="alinea6">
      Salah satu cara menanam labu siam yang terkadang dilupakan adalah pemangkasan. Moms perlu memangkas bagian 
      cabang tanaman ketika usianya telah memasuki 3 hingga 6 minggu. Caranya, ujung cabang yang telah tua dipotong 
      beserta daun-daun yang sudah tua. Ini perlu dilakukan agar tunas baru bisa tumbuh dan menyebar dengan baik 
      sehingga kelak akan menghasilkan pertumbuhan buah yang berkualitas dan merata.
      </p>

      <h2>6. Pemanenan</h2>
      <p className="alinea7">
      Setelah serangkaian cara menanam labu siam dan melakukan perawatan serta pengendalian hama, 
      Moms bisa masuk ke tahap pemanenan. Umumnya, labu siam siap dipanen tahap pertama pada usianya yang mencapai 
      3 hingga 5 bulan setelah penanaman. Moms bisa menggunakan pisau untuk memotong labu siam dari tangkainya. 
      Namun, pastikan buah tidak terjatuh karena labu siam memiliki kulit yang halus sehingga mudah lecet yang 
      kemudian akan mengurangi kualitas dan mutu dari labu siam. Setelah melakukan panen pertama, Moms bisa 
      melakukan panen berikutnya setiap satu minggu sekali. Masa produktivitas tanaman labu siam bisa berkisar 
      3 hingga 4 tahun. Setelah itu, Moms bisa melakukan penanaman baru jika ingin memilikinya kembali.
      </p>
      <br></br>
      <br></br>
    </Container>
  );
};

export default Tips11;
