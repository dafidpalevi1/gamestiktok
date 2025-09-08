const giftDisplay = document.getElementById('gift-display');
const giftImg = document.getElementById('gift-img');
const giftMessage = document.getElementById('gift-message');
const giftButtonsContainer = document.getElementById('gift-buttons');

let currentAudio = null;

// Data semua gift
const gifts = [
  {
    id: 'sayangi-aku',
    name: 'Sayangi Aku',
    coins: 1,
    img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/d56945782445b0b8c8658ed44f894c7b~tplv-obj.webp',
    audio: 'audio/hay.mp3'
  },
  {
    id: 'mawar',
    name: 'Mawar',
    coins: 1,
    img: 'https://p19-webcast.tiktokcdn.com/img/maliva/webcast-va/eba3a9bb85c33e017f3648eaf88d7189~tplv-obj.png',
    audio: 'audio/velocity.mp3'
  },
  {
    id: 'tiktok',
    name: 'Tiktok',
    coins: 1,
    img: 'https://p19-webcast.tiktokcdn.com/img/maliva/webcast-va/802a21ae29f9fae5abe3693de9f874bd~tplv-obj.png',
    audio: 'audio/hay.mp3'
  },
  {
    id: 'cinta-kamu',
    name: 'Cinta Kamu',
    coins: 1,
    img: 'https://p16-webcast.tiktokcdn.com/img/alisg/webcast-sg/resource/fc549cf1bc61f9c8a1c97ebab68dced7.png~tplv-obj.webp',
    audio: 'audio/hay.mp3'
  },
  {
    id: 'kopi',
    name: 'Kopi',
    coins: 1,
    img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/02492214b9bd50fee2d69fd0d089c025~tplv-obj.webp',
    audio: 'audio/hay.mp3'
  },
  { id: 'gg', name: 'GG', coins: 1, img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/3f02fa9594bd1495ff4e8aa5ae265eef~tplv-obj.webp', audio: 'audio/hay.mp3' },
  { id: 'hebat-banget', name: 'Hebat Banget', coins: 1, img: 'https://p16-webcast.tiktokcdn.com/img/alisg/webcast-sg/resource/e9cafce8279220ed26016a71076d6a8a.png~tplv-obj.webp', audio: 'audio/hay.mp3' },
  { id: 'kerucut-es-krim', name: 'Kerucut Es Krim', coins: 1, img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/968820bc85e274713c795a6aef3f7c67~tplv-obj.webp', audio: 'audio/hay.mp3' },
  { id: 'jumat-berkah', name: 'Jumat Berkah', coins: 1, img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/resource/b6d700a7b8c423443672e14bb3c88b7b.png~tplv-obj.webp', audio: 'audio/hay.mp3' },
  { id: 'es-jeruk', name: 'Es Jeruk', coins: 1, img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/7244832db46b7ea5d7d6e280719ddea2~tplv-obj.webp', audio: 'audio/hay.mp3' },
  { id: 'sayap-peri', name: 'Sayap Peri', coins: 1, img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/resource/e504dc2f313b8c6df9e99a848e1b3a99.png~tplv-obj.webp', audio: 'audio/hay.mp3' },
  { id: 'headphone', name: 'Headphone', coins: 1, img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/resource/d250b93197c151c45a08ab5f4db805d6.png~tplv-obj.webp', audio: 'audio/hay.mp3' },
  { id: 'kecup-jauh', name: 'Kecup Jauh', coins: 1, img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/resource/cdb55940740d5c83879b2934f9a7d08e.png~tplv-obj.webp', audio: 'audio/hay.mp3' },
  { id: 'pelukan-erat', name: 'Pelukan Erat', coins: 1, img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/resource/9578adce6e3da2d211583212bdfd1b0e.png~tplv-obj.webp', audio: 'audio/hay.mp3' },
  { id: 'gorengan', name: 'Gorengan', coins: 1, img: 'https://p16-webcast.tiktokcdn.com/img/alisg/webcast-sg/resource/003103053dbf1fc8c01a81fcec61a28a.png~tplv-obj.webp', audio: 'audio/hay.mp3' },
  { id: 'go-popular', name: 'Go Popular', coins: 1, img: 'https://p16-webcast.tiktokcdn.com/img/alisg/webcast-sg/resource/b342e28d73dac6547e0b3e2ad57f6597.png~tplv-obj.webp', audio: 'audio/hay.mp3' },
  { id: 'sorakan-klub', name: 'Sorakan Klub', coins: 1, img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/resource/6a934c90e5533a4145bed7eae66d71bd.png~tplv-obj.webp', audio: 'audio/hay.mp3' },
  { id: 'jari-hati', name: 'Jari Hati', coins: 5, img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/a4c4dc437fd3a6632aba149769491f49.png~tplv-obj.webp', audio: 'audio/hay.mp3' },
  { id: 'nasi-padang', name: 'Nasi Padang', coins: 5, img: 'https://p16-webcast.tiktokcdn.com/img/alisg/webcast-sg/resource/bd6e927cd68db696f2a27d4e2c7d0c34.png~tplv-obj.webp', audio: 'audio/hay.mp3' },
  { id: 'kekuatan-klub', name: 'Kekuatan Klub', coins: 9, img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/resource/fb8da877eabca4ae295483f7cdfe7d31.png~tplv-obj.webp', audio: 'audio/hay.mp3' },
  { id: 'rosa', name: 'Rosa', coins: 10, img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/eb77ead5c3abb6da6034d3cf6cfeb438~tplv-obj.webp', audio: 'audio/hay.mp3' },
  { id: 'kalung-persahabatan', name: 'Kalung Persahabatan', coins: 10, img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/resource/e033c3f28632e233bebac1668ff66a2f.png~tplv-obj.webp', audio: 'audio/hay.mp3' },
  { id: 'tiket-perjalanan', name: 'Tiket Perjalanan', coins: 10, img: 'https://p16-webcast.tiktokcdn.com/img/alisg/webcast-sg/resource/551ecaf639c5e02354f9e7c1a763ec72.png~tplv-obj.webp', audio: 'audio/hay.mp3' },
  { id: 'aku-cinta-kamu', name: 'Aku Cinta Kamu', coins: 10, img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/beaaa3a78a00b5b20661b00924ab0e7f~tplv-obj.webp', audio: 'audio/hay.mp3' },
  { id: 'parfum', name: 'Parfum', coins: 20, img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/20b8f61246c7b6032777bb81bf4ee055~tplv-obj.webp', audio: 'audio/hay.mp3' },
  { id: 'Donat', name: 'Donat', coins: 30, img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/4e7ad6bdf0a1d860c538f38026d4e812~tplv-obj.webp', audio: 'audio/hay.mp3' },
  { id: 'buket-bunga', name: 'Buket Bunga', coins: 30, img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/b158b8493b51a3f30c59710c39d1dc96~tplv-obj.webp', audio: 'audio/hay.mp3' },
  { id: 'origami', name: 'Origami', coins: 99, img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/0f158a08f7886189cdabf496e8a07c21~tplv-obj.webp', audio: 'audio/hay.mp3' },
  { id: 'mahkota-mungil', name: 'Mahkota Mungil', coins: 99, img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/cf3db11b94a975417043b53401d0afe1~tplv-obj.webp', audio: 'audio/hay.mp3' },
  { id: 'topi', name: 'Topi', coins: 99, img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/6c2ab2da19249ea570a2ece5e3377f04~tplv-obj.webp', audio: 'audio/hay.mp3' },
  { id: 'top-dan-kumis', name: 'Topi dan Kumis', coins: 99, img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/2f1e4f3f5c728ffbfa35705b480fdc92~tplv-obj.webp', audio: 'audio/hay.mp3' },
  { id: 'busur-dewa-asmara', name: 'Busur Dewa Asmara', coins: 99, img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/resource/f6dd3172f50e4f4ff8d7a6bbce9d4150.png~tplv-obj.webp', audio: 'audio/hay.mp3' },
  { id: 'lukisan-cinta', name: 'Lukisan Cinta', coins: 99, img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/resource/de6f01cb2a0deb2da24cb5d1ecf9a23b.png~tplv-obj.webp', audio: 'audio/hay.mp3' },
  { id: 'permen-karet', name: 'Permen Karet', coins: 99, img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/resource/52ebbe9f3f53b5567ad11ad6f8303c58.png~tplv-obj.webp', audio: 'audio/hay.mp3' },
  { id: 'tanda-cinta', name: 'Tanda Cinta', coins: 99, img: 'https://p16-webcast.tiktokcdn.com/img/alisg/webcast-sg/resource/582475419a820e0b0dbc964799b6146e.png~tplv-obj.webp', audio: 'audio/hay.mp3' },
  {
    id: 'tiktok-universe',
    name: 'Tiktok Universe',
    coins: 44999,
    img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/8f471afbcebfda3841a6cc515e381f58~tplv-obj.webp',
    audio: 'audio/donat.mp3'
  }
];

// Fungsi acak array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Fungsi render gift
function renderGifts() {
  giftButtonsContainer.innerHTML = "";

  const fixedGifts = gifts.filter(g => g.id === 'mawar' || g.id === 'sayangi-aku');
  const randomGifts = gifts.filter(g => g.id !== 'mawar' && g.id !== 'sayangi-aku');

  const finalGifts = [...fixedGifts, ...shuffle(randomGifts)];

  finalGifts.forEach(gift => {
    const btn = document.createElement('div');
    btn.className = 'gift-btn';
    btn.onclick = () => showGift(gift.id);

    btn.innerHTML = `
      <img src="${gift.img}" alt="${gift.name}">
      <div class="gift-name">${gift.name}</div>
      <div class="gift-coins">
        <img src="https://app.streamtoearn.io/assets/images/coin.png" alt="Coin" class="coin-img">
        <div class="coin-number">${gift.coins}</div>
      </div>
    `;

    giftButtonsContainer.appendChild(btn);
  });
}

// Fungsi menampilkan gift
function showGift(giftId) {
  const gift = gifts.find(g => g.id === giftId);
  if (!gift) return;

  giftImg.src = gift.img;
  giftMessage.textContent = `Terima kasih sudah memberikan gift ${gift.name}!`;
  giftDisplay.classList.remove('hidden');

  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  if (gift.audio) {
    currentAudio = new Audio(gift.audio);
    currentAudio.play();

    currentAudio.onended = () => {
      giftDisplay.classList.add('hidden');
      renderGifts(); // 🔥 setelah musik selesai → acak ulang tombol gift
    };
  }
}

// Pertama kali render
renderGifts();
