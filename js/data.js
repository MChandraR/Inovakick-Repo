let newbalance = [
    {
        "id" : "NB001",
        "nama_produk" : "New balance 57/40 Grey",
        "harga" : "Rp.550k",
        "image" : "images/newbalance/Variant1.jpeg"
    },
    {
        "id" : "NB002",
        "nama_produk" : "New Balance 990 v5 grey",
        "harga" : "Rp.550k",
        "image" : "images/newbalance/990_v5_grey.jpeg"
    },
    {
        "id" : "NB003",
        "nama_produk" : "New Balance 1906 D proctection",
        "harga" : "Rp.575k",
        "image" : "images/newbalance/1906_D_protection.jpeg"
    },
    {
        "id" : "NB004",
        "nama_produk" : "New Balance 991 england grey",
        "harga" : "Rp.600k",
        "image" : "images/newbalance/991_england_grey.jpeg"
    },
    {
        "id" : "NB005",
        "nama_produk" : "New Balance 2002r Marble Head Grey",
        "harga" : "Rp.575k",
        "image" : "images/newbalance/2002r_marble_head_grey.jpeg"
    }
];

let adidas = [
    {
        "id" : "ADS001",
        "nama_produk" : "Adidas Hamburg Navy",
        "harga" : "Rp.500k",
        "image" : "images/adidas/hamburg_navy.jpeg"
    },
    {
        "id" : "ADS002",
        "nama_produk" : "Adidas Samba White List Black",
        "harga" : "Rp.500k",
        "image" : "images/adidas/samba_white_list_black.jpeg"
    },
    {
        "id" : "ADS003",
        "nama_produk" : "Adidas Samba Ronie List Hijau",
        "harga" : "Rp.575k",
        "image" : "images/adidas/samba_ronie_listhijau.jpeg"
    },
    {
        "id" : "ADS004",
        "nama_produk" : "Adidas Samba Og List Pink",
        "harga" : "Rp.550k",
        "image" : "images/adidas/samba_og_listpink.jpeg"
    },
    {
        "id" : "ADS005",
        "nama_produk" : "Adidas Campus Cream Grenn",
        "harga" : "Rp.550k",
        "image" : "images/adidas/campus_cream_green.jpeg"
    }
];

let nike = [
    {
        "id" : "NK001",
        "nama_produk" : "Air Jordan 3 Travis Scot",
        "harga" : "Rp.550k",
        "image" : "images/nike/3_travis_scot.jpeg"
    },
    {
        "id" : "NK002",
        "nama_produk" : "Nike Air Max 97 Full Blackk",
        "harga" : "Rp.500k",
        "image" : "images/nike/air_max_97_fullblack.jpeg"
    },
    {
        "id" : "NK003",
        "nama_produk" : "Nike Sb Dunk X Stussy",
        "harga" : "Rp.550k",
        "image" : "images/nike/sb_dunk_x_stussy.jpeg"
    },
    {
        "id" : "NK004",
        "nama_produk" : "Nike Air Jordan Travis Scott",
        "harga" : "Rp.550k",
        "image" : "images/nike/travis_scot.jpeg"
    },
    {
        "id" : "NK005",
        "nama_produk" : "Nike Sb Dunk X Jarritos",
        "harga" : "Rp.550k",
        "image" : "images/nike/sb_dunk_x_jarritos.jpeg"
    }
];


let nbList = document.getElementById("nbList");
let adsList = document.getElementById("adsList");
let nkList = document.getElementById("nkList");

for(let idx in newbalance){
    console.log(newbalance[idx]);
    nbList.innerHTML += 
    '<div class="swiper-slide">'+
    '<div class="product-card position-relative">'+
       ' <div class="image-holder">'+
        '<img src="'+newbalance[idx].image+'" alt="product-item" class="img-fluid">'+
        '</div>'+
        '<div class="cart-concern position-absolute">'+
        '<div class="cart-button d-flex">'+
'            <a href="https://wa.me/6281310756915?text=Hallo%20Apakah%20Produk%20ini%20ready%0AProduk%20:%20'+newbalance[idx].nama_produk+'%0AHarga%20:%20'+newbalance[idx].harga+'%20?"'+
'             class="btn btn-medium btn-black">Order Sekarang'+
'    <svg class="cart-outline">'+
'    <use xlink:href="#cart-outline"></use></svg></a></div> </div>'+
'        <div class="card-detail d-flex justify-content-between align-items-baseline pt-3">'+
'        <h3 class="card-title text-uppercase">'+
'            <a href="#">'+newbalance[idx].nama_produk+'</a></h3>'+
'        <span class="item-price text-primary">'+newbalance[idx].harga+'</span>'+
'        </div></div> </div>'
}

for(let idx in adidas){
    console.log(adidas[idx]);
    adsList.innerHTML += 
    '<div class="swiper-slide">'+
    '<div class="product-card position-relative">'+
       ' <div class="image-holder">'+
        '<img src="'+adidas[idx].image+'" alt="product-item" class="img-fluid">'+
        '</div>'+
        '<div class="cart-concern position-absolute">'+
        '<div class="cart-button d-flex">'+
'            <a href="https://wa.me/6281310756915?text=Hallo%20Apakah%20Produk%20ini%20ready%0AProduk%20:%20'+adidas[idx].nama_produk+'%0AHarga%20:%20'+adidas[idx].harga+'%20?"'+
'             class="btn btn-medium btn-black">Order Sekarang'+
'    <svg class="cart-outline">'+
'    <use xlink:href="#cart-outline"></use></svg></a></div> </div>'+
'        <div class="card-detail d-flex justify-content-between align-items-baseline pt-3">'+
'        <h3 class="card-title text-uppercase">'+
'            <a href="#">'+adidas[idx].nama_produk+'</a></h3>'+
'        <span class="item-price text-primary">'+adidas[idx].harga+'</span>'+
'        </div></div> </div>'
}

for(let idx in nike){
    console.log(nike[idx]);
    nkList.innerHTML += 
    '<div class="swiper-slide">'+
    '<div class="product-card position-relative">'+
       ' <div class="image-holder">'+
        '<img src="'+nike[idx].image+'" alt="product-item" class="img-fluid">'+
        '</div>'+
        '<div class="cart-concern position-absolute">'+
        '<div class="cart-button d-flex">'+
'            <a href="https://wa.me/6281310756915?text=Hallo%20Apakah%20Produk%20ini%20ready%0AProduk%20:%20'+nike[idx].nama_produk+'%0AHarga%20:%20'+nike[idx].harga+'%20?"'+
'             class="btn btn-medium btn-black">Order Sekarang'+
'    <svg class="cart-outline">'+
'    <use xlink:href="#cart-outline"></use></svg></a></div> </div>'+
'        <div class="card-detail d-flex justify-content-between align-items-baseline pt-3">'+
'        <h3 class="card-title text-uppercase">'+
'            <a href="#">'+nike[idx].nama_produk+'</a></h3>'+
'        <span class="item-price text-primary">'+nike[idx].harga+'</span>'+
'        </div></div> </div>'
}