const gifts = [
    {id: 'sayangi-aku', name: 'Sayangi Aku', coins: 1, img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/d56945782445b0b8c8658ed44f894c7b~tplv-obj.webp', anim: 'https://assets9.lottiefiles.com/private_files/lf30_editor_g0n4yf.json'},
    {id: 'mawar', name: 'Mawar ', coins: 1, img: 'https://p19-webcast.tiktokcdn.com/img/maliva/webcast-va/eba3a9bb85c33e017f3648eaf88d7189~tplv-obj.png', anim: 'https://assets6.lottiefiles.com/packages/lf20_touohxv0.json', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'},
    {id: 'donat', name: 'Donat ', coins: 30, img: 'https://p19-webcast.tiktokcdn.com/img/maliva/webcast-va/4e7ad6bdf0a1d860c538f38026d4e812~tplv-obj.png', anim: 'https://assets6.lottiefiles.com/packages/lf20_jcikwtux.json', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'},
    {id: 'hati', name: 'Hati ', coins: 100, img: 'https://p19-webcast.tiktokcdn.com/img/maliva/webcast-va/6cd022271dc4669d182cad856384870f~tplv-obj.png', anim: 'https://assets1.lottiefiles.com/packages/lf20_puciaact.json', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'},
    {id: 'topi', name: 'Topi ', coins: 99, img: 'https://p19-webcast.tiktokcdn.com/img/maliva/webcast-va/6c2ab2da19249ea570a2ece5e3377f04~tplv-obj.png', anim: 'https://assets6.lottiefiles.com/packages/lf20_vycvjzyp.json', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3'},
    {id: 'kumis', name: 'Topi & Kumis ', coins: 99, img: 'https://p19-webcast.tiktokcdn.com/img/maliva/webcast-va/2f1e4f3f5c728ffbfa35705b480fdc92~tplv-obj.png', anim: 'https://assets10.lottiefiles.com/packages/lf20_5ngs2ksb.json', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3'},
    {id: 'tiktok', name: 'TikTok ', coins: 1, img: 'https://p19-webcast.tiktokcdn.com/img/maliva/webcast-va/802a21ae29f9fae5abe3693de9f874bd~tplv-obj.png', anim: 'https://assets6.lottiefiles.com/private_files/lf30_5ttm3uyv.json', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3'},
    {id: 'parfum', name: 'Parfum', coins: 10, img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/20b8f61246c7b6032777bb81bf4ee055~tplv-obj.webp', anim: 'https://assets9.lottiefiles.com/private_files/lf30_editor_nhjghk.json'},
    {id: 'kalung', name: 'Kalung Persahabatan', coins: 10, img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/resource/e033c3f28632e233bebac1668ff66a2f.png~tplv-obj.webp', anim: 'https://assets9.lottiefiles.com/private_files/lf30_editor_dhv0hj.json'},
    {id: 'jari-hati', name: 'Jari Hati', coins: 5, img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/a4c4dc437fd3a6632aba149769491f49.png~tplv-obj.webp', anim: 'https://assets9.lottiefiles.com/private_files/lf30_editor_g0n4yf.json'},
    {id: 'menyala', name: 'Menyala', coins: 5, img: 'https://p16-webcast.tiktokcdn.com/img/alisg/webcast-sg/resource/fd3dbf6cd817d07798b2e062423994f0.png~tplv-obj.webp', anim: 'https://assets9.lottiefiles.com/private_files/lf30_editor_g0n4yf.json'},
    {id: 'Music-on-Stage', name: 'Music on Stage', coins: 1, img: 'https://p16-webcast.tiktokcdn.com/img/alisg/webcast-sg/resource/d2a59d961490de4c72fed3690e44d1ec.png~tplv-obj.webp', anim: 'https://assets9.lottiefiles.com/private_files/lf30_editor_g0n4yf.json'},
    {id: 'gg', name: 'GG', coins: 1, img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/3f02fa9594bd1495ff4e8aa5ae265eef~tplv-obj.webp', anim: 'https://assets9.lottiefiles.com/private_files/lf30_editor_g0n4yf.json'},
    {id: 'prajurit-api', name: 'Prajurit Api', coins: 500, img: 'https://p16-webcast.tiktokcdn.com/img/alisg/webcast-sg/resource/ac312f0fd7d455561ae2fda251fff836.png~tplv-obj.webp', anim: 'https://assets9.lottiefiles.com/private_files/lf30_editor_iq3rvd.json'},
    {id: 'rosa', name: 'Rosa', coins: 10, img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/eb77ead5c3abb6da6034d3cf6cfeb438~tplv-obj.webp', anim: 'https://assets9.lottiefiles.com/private_files/lf30_editor_iq3rvd.json'},
    {id: 'kopi', name: 'Kopi', coins: 1, img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/02492214b9bd50fee2d69fd0d089c025~tplv-obj.webp', anim: 'https://assets9.lottiefiles.com/private_files/lf30_editor_iq3rvd.json'},
    {id: 'cinta-kamu', name: 'Cinta Kamu', coins: 1, img: 'https://p16-webcast.tiktokcdn.com/img/alisg/webcast-sg/resource/fc549cf1bc61f9c8a1c97ebab68dced7.png~tplv-obj.webp', anim: 'https://assets9.lottiefiles.com/private_files/lf30_editor_iq3rvd.json'},
  
    {id: 'hebat-banget', name: 'Hebat Banget', coins: 1, img: 'https://p16-webcast.tiktokcdn.com/img/alisg/webcast-sg/resource/e9cafce8279220ed26016a71076d6a8a.png~tplv-obj.webp', anim: 'https://assets9.lottiefiles.com/private_files/lf30_editor_iq3rvd.json'},
    {id: 'tiktok-universe', name: 'Tiktok Universe', coins: 44999, img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/8f471afbcebfda3841a6cc515e381f58~tplv-obj.webp', anim: 'https://assets9.lottiefiles.com/private_files/lf30_editor_g0n4yf.json'}
  ];




  const gifts = [
    { id: 'kopi-1', name: 'Kopi 1', coins: 1, img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/02492214b9bd50fee2d69fd0d089c025~tplv-obj.webp', audio: 'audio/hay.mp3' },
    { id: 'kopi-2', name: 'Kopi 2', coins: 1, img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/02492214b9bd50fee2d69fd0d089c025~tplv-obj.webp', audio: 'audio/hay.mp3' },
    { id: 'kopi-3', name: 'Kopi 3', coins: 1, img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/02492214b9bd50fee2d69fd0d089c025~tplv-obj.webp', audio: 'audio/hay.mp3' },
    { id: 'kopi-4', name: 'Kopi 4', coins: 1, img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/02492214b9bd50fee2d69fd0d089c025~tplv-obj.webp', audio: 'audio/hay.mp3' },
    { id: 'kopi-5', name: 'Kopi 5', coins: 1, img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/02492214b9bd50fee2d69fd0d089c025~tplv-obj.webp', audio: 'audio/hay.mp3' },
    { id: 'kopi-6', name: 'Kopi 6', coins: 1, img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/02492214b9bd50fee2d69fd0d089c025~tplv-obj.webp', audio: 'audio/hay.mp3' },
    { id: 'kopi-7', name: 'Kopi 7', coins: 1, img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/02492214b9bd50fee2d69fd0d089c025~tplv-obj.webp', audio: 'audio/hay.mp3' },
    { id: 'kopi-8', name: 'Kopi 8', coins: 1, img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/02492214b9bd50fee2d69fd0d089c025~tplv-obj.webp', audio: 'audio/hay.mp3' },
    { id: 'kopi-9', name: 'Kopi 9', coins: 1, img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/02492214b9bd50fee2d69fd0d089c025~tplv-obj.webp', audio: 'audio/hay.mp3' },
    { id: 'kopi-10', name: 'Kopi 10', coins: 1, img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/02492214b9bd50fee2d69fd0d089c025~tplv-obj.webp', audio: 'audio/hay.mp3' },
    { id: 'kopi-11', name: 'Kopi 11', coins: 1, img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/02492214b9bd50fee2d69fd0d089c025~tplv-obj.webp', audio: 'audio/hay.mp3' },
    { id: 'kopi-12', name: 'Kopi 12', coins: 1, img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/02492214b9bd50fee2d69fd0d089c025~tplv-obj.webp', audio: 'audio/hay.mp3' },
    { id: 'kopi-13', name: 'Kopi 13', coins: 1, img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/02492214b9bd50fee2d69fd0d089c025~tplv-obj.webp', audio: 'audio/hay.mp3' },
    { id: 'kopi-14', name: 'Kopi 14', coins: 1, img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/02492214b9bd50fee2d69fd0d089c025~tplv-obj.webp', audio: 'audio/hay.mp3' },
    { id: 'kopi-15', name: 'Kopi 15', coins: 1, img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/02492214b9bd50fee2d69fd0d089c025~tplv-obj.webp', audio: 'audio/hay.mp3' },
    { id: 'kopi-16', name: 'Kopi 16', coins: 1, img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/02492214b9bd50fee2d69fd0d089c025~tplv-obj.webp', audio: 'audio/hay.mp3' },
    { id: 'kopi-17', name: 'Kopi 17', coins: 1, img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/02492214b9bd50fee2d69fd0d089c025~tplv-obj.webp', audio: 'audio/hay.mp3' },
    { id: 'kopi-18', name: 'Kopi 18', coins: 1, img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/02492214b9bd50fee2d69fd0d089c025~tplv-obj.webp', audio: 'audio/hay.mp3' },
    { id: 'kopi-19', name: 'Kopi 19', coins: 1, img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/02492214b9bd50fee2d69fd0d089c025~tplv-obj.webp', audio: 'audio/hay.mp3' },
    { id: 'kopi-20', name: 'Kopi 20', coins: 1, img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/02492214b9bd50fee2d69fd0d089c025~tplv-obj.webp', audio: 'audio/hay.mp3' },
    { id: 'kopi-21', name: 'Kopi 21', coins: 1, img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/02492214b9bd50fee2d69fd0d089c025~tplv-obj.webp', audio: 'audio/hay.mp3' },
    { id: 'kopi-22', name: 'Kopi 22', coins: 1, img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/02492214b9bd50fee2d69fd0d089c025~tplv-obj.webp', audio: 'audio/hay.mp3' },
    { id: 'kopi-23', name: 'Kopi 23', coins: 1, img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/02492214b9bd50fee2d69fd0d089c025~tplv-obj.webp', audio: 'audio/hay.mp3' },
    { id: 'kopi-24', name: 'Kopi 24', coins: 1, img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/02492214b9bd50fee2d69fd0d089c025~tplv-obj.webp', audio: 'audio/hay.mp3' },
    { id: 'kopi-25', name: 'Kopi 25', coins: 1, img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/02492214b9bd50fee2d69fd0d089c025~tplv-obj.webp', audio: 'audio/hay.mp3' },
    { id: 'kopi-26', name: 'Kopi 26', coins: 1, img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/02492214b9bd50fee2d69fd0d089c025~tplv-obj.webp', audio: 'audio/hay.mp3' },
    { id: 'kopi-27', name: 'Kopi 27', coins: 1, img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/02492214b9bd50fee2d69fd0d089c025~tplv-obj.webp', audio: 'audio/hay.mp3' },
    { id: 'kopi-28', name: 'Kopi 28', coins: 1, img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/02492214b9bd50fee2d69fd0d089c025~tplv-obj.webp', audio: 'audio/hay.mp3' },
    { id: 'kopi-29', name: 'Kopi 29', coins: 1, img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/02492214b9bd50fee2d69fd0d089c025~tplv-obj.webp', audio: 'audio/hay.mp3' },
    { id: 'kopi-30', name: 'Kopi 30', coins: 1, img: 'https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/02492214b9bd50fee2d69fd0d089c025~tplv-obj.webp', audio: 'audio/hay.mp3' },
    // … sampai kopi-100
  ];
  