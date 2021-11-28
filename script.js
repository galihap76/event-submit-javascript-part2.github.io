//buat variabel
let input = document.getElementsByTagName('input')[0];
let form = document.getElementsByTagName('form')[0];

//ketika tombol kirim di tekan
form.addEventListener('submit', function(e){
    //apapun yang di ketikan oleh user
    if(input.value){
        //buat variabel untuk membuat panjangKalimat
        let panjangKalimat = input.value;
        //jika panjangKalimat lebih besar dari 6
        if(panjangKalimat.length > 6){
            //tampikan pesan
            alert('Maaf username jangan terlalu panjang!');
            //tolak untuk kirim
            e.preventDefault();
            //selain program bernilai benar
        }else{
            //tampilkan pesan kebenaran
        alert('Anda berhasil masuk ke website game!');
    }
  }
});