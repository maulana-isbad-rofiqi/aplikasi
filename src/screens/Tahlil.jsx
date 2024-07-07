import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image, Modal } from 'react-native';

const tahlilText = "Tahlil adalah sebuah amalan yang dilakukan dengan mengucapkan kalimat ‘Laa ilaaha illallaah’ (Tiada Tuhan selain Allah). Amalan ini memiliki banyak manfaat dan keutamaan dalam agama Islam. Tahlil sering dibaca dalam berbagai kesempatan, baik dalam doa sehari-hari maupun dalam acara-acara keagamaan.";

const ayats = [
  { id: '1', text: 'إِلَى حَضْرَةِ النَّبِيِّ الْمُصْطَفَى سَيِّدِنَا مُحمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ وَاٰلِهِ وَأَزْوَاجِهِ وَأَوْلَادِهِ وَذُرِّيَّاتِهِ الْفَــاتِحَةُ', translation: 'Kepada yang terhormat Nabi Muhammad ﷺ, segenap keluarga, istri-istrinya, anak-anaknya, dan keturunannya. Bacaan Al-Fatihah ini kami tujukan kepada Allah dan pahalanya untuk mereka semua. Al-Fatihah…' },
  { id: '2', text: 'ثُمَّ إِلَى حَضْرَةِ إِخْوَانِهِ مِنَ الْأَنْبِيَاءِ وَالْمُرْسَلِيْنَ وَالْأَوْلِيَاءِ وَالشُّهَدَاءِ وَالصَّالِحِيْنَ وَالصَّحَابَةِ وَالتَّابِعِيْنَ وَالْعُلَمَاءِ الْعَامِلِيْنَ وَالْمُصَنِّفِيْنَ الْمُخْلِصِيْنَ وَجَمِيْعِ الْمَلَائِكَةِ الْمُقَرَّبِيْنَ، خُصُوْصًا إِلَى سَيِّدِنَا الشَّيْخِ عَبْدِ الْقَادِرِ الْجِيْلَانِي وَخُصُوْصًا إِلَى مُؤَسِّسِيْ جَمْعِيَّةِ نَهْضَةِ الْعُلَمَاءِ الْفَــاتِحَةُ', translation: 'Lalu kepada segenap saudara beliau dari kalangan pada nabi, rasul, wali, syuhada, orang-orang saleh, sahabat, tabi‘in, ulama al-amilin (yang mengamalkan ilmunya), ulama penulis yang ikhlas, semua malaikat Muqarrabin, terkhusus kepada Syekh Abdul Qadir al-Jilani dan para pendiri organisasi Nahdlatul Ulama. Bacaan Al-Fatihah ini kami tujukan kepada Allah dan pahalanya untuk mereka semua. Al-Fatihah.' },
  { id: '3', text: 'ثُمَّ إِلَى جَمِيْعِ أَهْلِ الْقُبُوْرِ مِنَ الْمُسْلِمِيْنَ وَالْمُسْلِمَاتِ وَالْمُؤْمِنِيْنَ وَالْمُؤْمِنَاتِ مِنْ مَشَارِقِ الْأَرْضِ إِلَى مَغَارِبِهَا بَرِّهَا وَبَحْرِهَا خُصُوْصًا إِلَى اٰبَائِنَا وَأُمَّهَاتِنَا وَأَجْدَادِنَا وَجَدَّاتِنَا وَمَشَايِخِنَا وَمَشَايِخِ مَشَايِخِنَا وَأَسَاتِذَةِ أَسَاتِذَتِنَا وَلِمَنْ أَحْسَنَ إِلَيْنَا وَلِمَنِ اجْتَمَعْنَا هٰهُنَا بِسَبَبِهِ الْفَاتِحَةُ', translation: 'Kemudian kepada semua ahli kubur Muslimin, Muslimat, Mukminin, Mukminat dari Timur ke Barat, baik di laut dan di darat, khususnya bapak kami, ibu kami, kakek kami, nenek kami, guru kami, pengajar dari guru kami, mereka yang telah berbuat baik kepada kami, dan bagi ahli kubur/arwah yang menjadi sebab kami berkumpul di sini. Bacaan Al-Fatihah ini kami tujukan kepada Allah dan pahalanya untuk mereka semua. Al-Fatihah.' },
  { id: '4', text: 'بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ قُلْ هُوَ اللّٰهُ اَحَدٌۚ، اَللّٰهُ الصَّمَدُۚ، لَمْ يَلِدْ وَلَمْ يُوْلَدْۙ، وَلَمْ يَكُنْ لَّهٗ كُفُوًا اَحَـــــدٌ ×٣', translation: 'Dengan menyebut nama Allah yang maha pengasih lagi maha penyayang. Katakanlah (Muhammad), “Dialah Allah, Yang Maha Esa. Allah tempat meminta segala sesuatu. (Allah) tidak beranak dan tidak pula diperanakkan. Dan tidak ada sesuatu yang setara dengan Dia.” (3 kali).' },
  { id: '5', text: 'لَا إِلٰهَ إِلَّا اللهُ وَاللهُ أَكْبَرُ', translation: 'Tiada tuhan yang layak disembah kecuali Allah. Allah maha besar.' },
  { id: '6', text: 'بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ قُلْ اَعُوْذُ بِرَبِّ الْفَلَقِۙ، مِنْ شَرِّ مَـــا خَلَقَۙ، وَمِنْ شَرِّ غَاسِقٍ اِذَا وَقَبَۙ، وَمِنْ شَرِّ النَّفّٰثٰتِ فِى الْعُقَدِۙ، وَمِنْ شَرِّ حَاسِدٍ اِذَا حَسَدَ', translation: 'Dengan menyebut nama Allah yang maha pengasih lagi maha penyayang. Katakanlah, “Aku berlindung kepada Tuhan yang menguasai subuh (fajar), dari kejahatan (makhluk yang) Dia ciptakan, dan dari kejahatan malam apabila telah gelap gulita, dan dari kejahatan (perempuan-perempuan) penyihir yang meniup pada buhul-buhul (talinya), dan dari kejahatan orang yang dengki apabila dia dengki.”' },
  { id: '7', text: 'لَا إِلٰهَ إِلَّا اللهُ وَاللهُ أَكْبَرُ', translation: 'Tiada tuhan yang layak disembah kecuali Allah. Allah maha besar.' },
  { id: '8', text: 'بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ قُلْ اَعُوْذُ بِرَبِّ النَّاسِۙ، مَلِكِ النَّـــاسِۙ، اِلٰهِ النَّاسِۙ، مِنْ شَرِّ الْوَسْوَاسِ ەۙ الْخَنَّاسِۖ، الَّذِيْ يُوَسْوِسُ فِيْ صُدُوْرِ النَّاسِۙ، مِنَ الْجِنَّةِ وَالنَّــاسِ', translation: 'Dengan menyebut nama Allah yang maha pengasih lagi maha penyayang. Katakanlah, “Aku berlindung kepada Tuhannya manusia, raja manusia, sembahan manusia, dari kejahatan (bisikan) setan yang bersembunyi, yang membisikkan (kejahatan) ke dalam dada manusia, dari (golongan) jin dan manusia.”' },
  { id: '9', text: 'لَا إِلٰهَ إِلَّا اللهُ وَاللهُ أَكْبَرُ', translation: 'Tiada tuhan yang layak disembah kecuali Allah. Allah maha besar.' },
  { id: '10', text: 'بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ، اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَۙ، الرَّحْمٰنِ الرَّحِيْمِۙ، مٰلِكِ يَوْمِ الدِّيْنِۗ، اِيَّاكَ نَعْبُدُ وَاِيَّاكَ نَسْتَعِيْنُۗ، اِهْدِنَا الصِّرَاطَ الْمُسْتَقِيْمَۙ، صِرَاطَ الَّذِيْنَ اَنْعَمْتَ عَلَيْهِمْ ەۙ غَيْرِ الْمَغْضُوْبِ عَلَيْهِمْ وَلَا الضَّاۤلِّيْنَ', translation: 'Dengan menyebut nama Allah yang maha pengasih lagi maha penyayang. Segala puji bagi Allah, Tuhan semesta alam. Yang maha pengasih lagi maha penyayang. Yang menguasai hari pembalasan. Hanya kepada-Mu kami menyembah. Hanya kepada-Mu pula kami memohon pertolongan. Tunjukkanlah kami ke jalan yang lurus, yaitu jalan orang-orang yang telah Kauanugerahi nikmat kepada mereka, bukan jalan mereka yang dimurkai dan bukan pula jalan mereka yang sesat. Semoga Kaukabulkan permohonan kami.' },
  { id: '11', text: 'بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ، الۤــــــمّۤۚ، ذٰلِكَ الْكِتٰبُ لَا رَيْبَۛ فِيْهِۛ هُدًى لِّلْمُتَّقِيْنَۙ، الَّذِيْنَ يُؤْمِنُوْنَ بِالْغَيْبِ وَيُقِيْمُوْنَ الصَّلٰوةَ وَمِمَّا رَزَقْنٰهُمْ يُنْفِقُوْنَۙ، وَالَّذِيْنَ يُؤْمِنُوْنَ بِمَآ اُنْزِلَ اِلَيْكَ وَمَآ اُنْزِلَ مِنْ قَبْلِكَ ۚ وَبِالْاٰخِرَةِ هُمْ يُوْقِنُوْنَۗ، اُولٰۤىِٕكَ عَلٰى هُدًى مِّنْ رَّبِّهِمْۙ وَاُولٰۤىِٕكَ هُمُ الْمُفْلِحُوْنَ', translation: 'Dengan menyebut nama Allah yang maha pengasih lagi maha penyayang. Alif lam mim. Demikian itu kitab ini tidak ada keraguan padanya. Sebagai petunjuk bagi mereka yang bertakwa. Yaitu mereka yang beriman kepada yang ghaib, yang mendirikan shalat, dan menafkahkan sebagian rezeki yang kami anugerahkan kepada mereka. Dan mereka yang beriman kepada kitab Al-Qur’an yang telah diturunkan kepadamu (Muhammad ﷺ) dan kitab-kitab yang telah diturunkan sebelumnya, serta mereka yakin akan adanya kehidupan akhirat. Mereka itulah yang tetap mendapat petunjuk dari tuhannya. Merekalah orang orang yang beruntung.' },
  { id: '12', text: 'وَإِلٰهُكُمْ إِلٰهٌ وَّاحِدٌ لَا إِلٰهَ إِلَّا هُوَ الرَّحْمٰنُ الرَّحِيمُ', translation: 'Artinya, “Dan Tuhan kalian adalah Tuhan yang maha esa. Tiada tuhan yang layak disembah kecuali Dia yang maha pengasih lagi maha penyayang.”' },
  { id: '13', text: 'اَللّٰهُ لَآ اِلٰهَ اِلَّا هُوَۚ اَلْحَيُّ الْقَيُّوْمُ ەۚ لَا تَأْخُذُهٗ سِنَةٌ وَّلَا نَوْمٌۗ لَهٗ مَا فِى السَّمٰوٰتِ وَمَا فِى الْاَرْضِۗ مَنْ ذَا الَّذِيْ يَشْفَعُ عِنْدَهٗٓ اِلَّا بِاِذْنِهٖۗ يَعْلَمُ مَا بَيْنَ اَيْدِيْهِمْ وَمَا خَلْفَهُمْۚ وَلَا يُحِيْطُوْنَ بِشَيْءٍ مِّنْ عِلْمِهٖٓ اِلَّا بِمَا شَاۤءَۚ وَسِعَ كُرْسِيُّهُ السَّمٰوٰتِ وَالْاَرْضَۚ وَلَا يَـُٔوْدُهٗ حِفْظُهُمَاۚ وَهُوَ الْعَلِيُّ الْعَظِيْمُ', translation: 'Allah, tiada yang layak disembah kecuali Dia yang hidup kekal lagi berdiri sendiri. Tidak mengantuk dan tidak tidur. Milik-Nya apa yang ada di langit dan di bumi. Tiada yang dapat memberikan syafaat di sisi-Nya kecuali dengan izin-Nya. Dia mengetahui apa yang ada di hadapan dan di belakang mereka. Mereka tidak mengetahui sesuatu dari ilmu-Nya kecuali apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dia tidak merasa berat menjaga keduanya. Dia maha tinggi lagi maha agung.' },
  { id: '14', text: 'لِلّٰهِ مَا فِى السَّمٰوٰتِ وَمَا فِى الْاَرْضِۗ وَاِنْ تُبْدُوْا مَا فِيْٓ اَنْفُسِكُمْ اَوْ تُخْفُوْهُ يُحَاسِبْكُمْ بِهِ اللّٰهُۗ فَيَغْفِرُ لِمَنْ يَّشَاۤءُ وَيُعَذِّبُ مَنْ يَّشَاۤءُۗ وَاللّٰهُ عَلٰى كُلِّ شَيْءٍ قَدِيْرٌ، اٰمَنَ الرَّسُوْلُ بِمَآ اُنْزِلَ اِلَيْهِ مِنْ رَّبِّهٖ وَالْمُؤْمِنُوْنَۗ كُلٌّ اٰمَنَ بِاللّٰهِ وَمَلٰۤىِٕكَتِهٖ وَكُتُبِهٖ وَرُسُلِهٖۗ لَا نُفَرِّقُ بَيْنَ اَحَدٍ مِّنْ رُّسُلِهٖۗ وَقَالُوْا سَمِعْنَا وَاَطَعْنَا غُفْرَانَكَ رَبَّنَا وَاِلَيْكَ الْمَصِيْرُ، لَا يُكَلِّفُ اللّٰهُ نَفْسًا اِلَّا وُسْعَهَاۗ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْۗ رَبَّنَا لَا تُؤَاخِذْنَآ اِنْ نَّسِيْنَآ اَوْ اَخْطَأْنَاۚ رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَآ اِصْرًا كَمَا حَمَلْتَهٗ عَلَى الَّذِيْنَ مِنْ قَبْلِنَاۚ رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهٖۚ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا ×٧ أَنْتَ مَوْلَانَا فَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ', translation: 'Hanya milik Allah segala yang ada di langit dan yang ada di bumi. Jika kamu menyatakan atau merahasiakan apa saja yang di hatimu, maka kamu dengan itu semua tetap akan diperhitungkan oleh Allah. Dia akan mengampuni dan menyiksa orang yang dikehendaki. Allah maha kuasa atas segala sesuatu. Rasulullah dan orang-orang yang beriman mempercayai apa saja yang diturunkan kepadanya dari Tuhannya. Semuanya beriman kepada Allah, para malaikat-Nya, kitab-kitab-Nya, dan kepada para utusan-Nya. ‘Kami tidak membeda-bedakan seorang rasul dari lainnya.’ Mereka berkata, ‘Kami mendengar dan kami menaati. Ampunan-Mu, wahai Tuhan kami, yang kami harapkan. Hanya kepada-Mu tempat kembali.’ Allah tidak membebani seseorang kecuali dengan kemampuannya. Ia mendapat balasan atas apa yang dia perbuat dan siksaan dari apa yang dia lakukan. ‘Tuhan kami, janganlah Kau siksa kami jika kami terlupa atau salah. Tuhan kami, jangan Kau tanggungkan pada kami dengan beban berat sebagaimana Kaubebankan kaum sebelum kami. Jangan pula Kaubebankan pada kami sesuatu yang kami tidak mampu. Ampunilah kami. Kasihanilah kami. Kau pemimpin kami. Tolonglah kami menghadapi golongan kafir.' },
  { id: '15', text: 'ارْحَمْنَا، يَا أَرْحَمَ الرَّاحِمِيْنَ ×٧', translation: 'Kasihani kami, wahai Tuhan yang maha kasih x7' },
  { id: '16', text: 'رَحْمَةُ اللهِ وَبَرَكَاتُهُ عَلَيْكُمْ أَهْلَ الْبَيْتِ إِنَّهُ حَمِيْدٌ مَّجِيْدٌ', translation: 'Dan rahmat Allah serta berkah-Nya (kami harapkan) melimpah di atas kamu sekalian wahai ahlul bait. Sungguh Dia maha terpuji lagi maha pemurah.' },
  { id: '17', text: 'إِنَّمَا يُريِدُ اللهُ لِيُذْهِبَ عَنْكُمُ الرِّجْسَ أَهْلَ الْبَيْتِ وَيُطَهِّرَكُمْ تَطْهِيْرًا', translation: 'Sungguh Allah berkehendak menghilangkan segala kotoran padamu, wahai ahlul bait, dan menyucikanmu sebersih-bersihnya.' },
  { id: '18', text: 'إِنَّ اللهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ، يَا أَيُّهَا الَّذِيْنَ أٰمَنُوْا صَلُّوْا عَلَيْهِ وَسَلِّمُوْا تَسْلِيْمًا', translation: 'Sungguh Allah dan para malaikat-Nya bershalawat untuk nabi. Wahai orang-orang yang beriman, bacalah shalawat untuknya dan ucapkanlah salam penghormatan kepadanya.' },
  { id: '19', text: 'اَللّٰهُمَّ صَلِّ أَفْضَلَ الصَّلَاةِ عَلَى أَسْعَدِ مَخْلُوْقَاتِكَ نُوْرِ الْهُدَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى اٰلِهِ وَصَحْبِهِ وَسَلِّمْ، عَدَدَ مَعْلُوْمَاتِكَ وَمِدَادَ كَلِمَاتِكَ كُلَّمَا ذَكَرَكَ الذَّاكِرُوْنَ وَغَفَلَ عَنْ ذِكْرِكَ الْغَافِلُوْنَ', translation: 'Ya Allah, tambahkanlah rahmat dan kesejahteraan untuk makhluk paling bahagia, cahaya petunjuk, pemimpin dan tuan kami, Nabi Muhammad ﷺ, serta keluarganya, sebanyak pengetahuan-Mu dan sebanyak tinta kalimat-kalimat-Mu pada saat dzikir orang-orang yang ingat dan pada saat lengah orang-orang yang lalai berzikir kepada-Mu.' },
  { id: '20', text: 'اَللّٰهُمَّ صَلِّ أَفْضَلَ الصَّلَاةِ عَلَى أَسْعَدِ مَخْلُوْقَاتِكَ شَمْسِ الضُّحَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى اٰلِهِ وَصَحْبِهِ وَسَلِّمْ، عَدَدَ مَعْلُوْمَاتِكَ وَمِدَادَ كَلِمَاتِكَ كُلَّمَا ذَكَرَكَ الذَّاكِرُوْنَ وَغَفَلَ عَنْ ذِكْرِكَ الْغَافِلُوْنَ', translation: 'Ya Allah, tambahkanlah rahmat dan kesejahteraan untuk makhluk paling bahagia, matahari dhuha, pemimpin dan tuan kami, Nabi Muhammad ﷺ, serta keluarganya, sebanyak pengetahuan-Mu dan sebanyak tinta kalimat-kalimat-Mu pada saat dzikir orang-orang yang ingat dan pada saat lengah orang-orang yang lalai berzikir kepada-Mu.' },
  { id: '21', text: 'اَللّٰهُمَّ صَلِّ أَفْضَلَ الصَّلَاةِ عَلَى أَسْعَدِ مَخْلُوْقَاتِكَ بَدْرِ الدُّجَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى اٰلِهِ وَصَحْبِهِ وَسَلِّمْ، عَدَدَ مَعْلُوْمَاتِكَ وَمِدَادَ كَلِمَاتِكَ كُلَّمَا ذَكَرَكَ الذَّاكِرُوْنَ وَغَفَلَ عَنْ ذِكْرِكَ الْغَافِلُوْنَ', translation: 'Ya Allah, tambahkanlah rahmat dan kesejahteraan untuk makhluk paling bahagia, purnama kegelapan, pemimpin dan tuan kami, Nabi Muhammad ﷺ, serta keluarganya, sebanyak pengetahuan-Mu dan sebanyak tinta kalimat-kalimat-Mu pada saat dzikir orang-orang yang ingat dan pada saat lengah orang-orang yang lalai berzikir kepada-Mu.' },
  { id: '22', text: 'وَسَلِّمْ وَرَضِيَ اللهُ تَعَالَى عَنْ سَادَاتِنَا أَصْحَابِ رَسُوْلِ اللهِ أَجْمَعِيْنَ', translation: 'Semoga Allah yang maha suci dan tinggi meridhai seluruh sahabat Rasulullah.' },
  { id: '23', text: 'حَسْبُنَا اللهُ وَنِعْمَ الْوَكِيْلُ، نِعْمَ الْمَوْلَى وَنِعْمَ النَّصِيْرُ', translation: 'Cukup Allah bagi kami. Dia sebaik-baik wakil (Surat Ali Imran ayat 173). Dia sebaik-baik pemimpin dan penolong (Surat Al-Anfal ayat 40).' },
  { id: '24', text: 'وَلَاحَوْلَ وَلَا قُوَّةَ إِلَّا بِاللهِ العَلِيِّ الْعَظِيْمِ', translation: 'Tidak ada daya dan kekuatan kecuali dengan pertolongan Allah yang maha tinggi dan agung.' },
  { id: '25', text: 'أَسْتَغْفِرُ اللهَ الْعَـــظِيْمَ ×٣', translation: 'Saya mohon ampun kepada Allah yang maha agung (3 kali).' },
  { id: '26', text: 'أَفْضَلُ الذِّكْرِ فَاعْلَمْ أَنَّهُ لَا إِلٰهَ إِلَّا اللهُ، حَيٌّ مَوْجُوْدٌ', translation: 'Sebaik-baik dzikir–ketahuilah–adalah lafal ‘Lâ ilâha illallâh’, tiada tuhan selain Allah, Dzat yang Mahahidup dan Wujud.' },
  { id: '27', text: 'لَا إِلٰهَ إِلَّا اللهُ، حَيٌّ مَعْبُوْدٌ', translation: 'Tiada tuhan selain Allah, Dzat yang mahahidup dan disembah.”' },
  { id: '28', text: 'لَاَ إِلٰهَ إِلَّا اللهُ، حَيٌّ بَاقٍ', translation: 'Tiada tuhan selain Allah, Dzat yang Mahahidup dan kekal.' },
  { id: '29', text: 'لَا إِلٰهَ إِلَّا اللهُ ×١٠٠', translation: 'Tiada tuhan selain Allah (100 kali).' },
  { id: '30', text: 'اَللّٰهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ اَللّٰهُمَّ صَلِّ عَلَيْهِ وَسَلِّمْ ×٢', translation: 'Ya Allah, limpahkan rahmat takzim dan keselamatan kepada pemimpin kami, Nabi Muhammad (2 kali).' },
  { id: '31', text: 'سُبْحَــانَ اللهِ عَدَدَ مَـــا خَلَقَ اللهُ ×٧', translation: 'Mahasuci Allah sebanyak makhluk yang Allah ciptakan (7 kali).' },
  { id: '32', text: 'سُبحَانَ اللهِ وَبِحَمْدِهِ سُبْحَانَ اللهِ الْعَظِيْمِ ×٣٣', translation: 'Mahasuci Allah dengan segala pujian untuk-Nya. Mahasuci Allah yang Mahaagung (33 kali)' },
  { id: '33', text: 'اَللّٰهُمَّ صَلِّ عَلَى حَبِيْبِكَ سَيِّدِنَا مُحَمَّدٍ وَعَلَى اٰلِهِ وَصَحْبِهِ وَسَلِّمْ ×٢', translation: 'Ya Allah, limpahkan rahmat takzim dan keselamatan kepada kekasih-Mu, pemimpin kami, Nabi Muhammad, berikut keluarga dan sahabatnya (2 kali).' },
  { id: '34', text: 'اَللّٰهُمَّ صَلِّ عَلَى حَبِيْبِكَ سَيِّدِنَا مُحَمَّدٍ وَعَلَى اٰلِهِ وَصَحْبِهِ وَبَارِكْ وَسَلِّمْ أَجْمَعِيْنَ', translation: 'Ya Allah, limpahkanlah rahmat kepada kekasih-Mu, pemimpin kami, Nabi Muhammad, berikut keluarga dan sahabatnya. Limpahkanlah pula berkah dan keselamatan kepada mereka semua.' },
];

const Tahlil = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showTranslation, setShowTranslation] = useState(true);
  const [tasbihCount, setTasbihCount] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleTranslation = () => {
    setShowTranslation(!showTranslation);
  };

  const incrementTasbih = () => {
    setTasbihCount(tasbihCount + 1);
  };

  const resetTasbih = () => {
    setTasbihCount(0);
    hideModal();
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  return (
    <View style={isDarkMode ? styles.darkContainer : styles.lightContainer}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.header}>
          <Text style={isDarkMode ? styles.darkTitle : styles.lightTitle}>Tahlil</Text>
          <Text style={isDarkMode ? styles.darkDescription : styles.lightDescription}>{tahlilText}</Text>
          <View style={styles.headerButtons}>
            <TouchableOpacity onPress={toggleTranslation} style={styles.toggleButton}>
              <Text style={styles.toggleButtonText}>{showTranslation ? '👁️' : '🙈'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleTheme} style={styles.toggleButton}>
              <Text style={styles.toggleButtonText}>{isDarkMode ? '🌞' : '🌙'}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.ayatContainer}>
          {ayats.map((ayat) => (
            <View key={ayat.id} style={isDarkMode ? styles.darkAyatItem : styles.lightAyatItem}>
              <Text style={isDarkMode ? styles.darkAyatText : styles.lightAyatText}>{ayat.text}</Text>
              {showTranslation && <Text style={isDarkMode ? styles.darkTranslation : styles.lightTranslation}>{ayat.translation}</Text>}
            </View>
          ))}
        </View>
      </ScrollView>
      {}
      <View style={styles.footer}>
        <TouchableOpacity onPress={showModal} style={styles.footerButton}>
          <Image source={require('../assets/images/reset.png')} style={styles.footerImage} />
        </TouchableOpacity>
        <Text style={[styles.tasbihCount, { color: isDarkMode ? '#F5F5F5' : '#333' }]}>{tasbihCount}</Text>
        <TouchableOpacity onPress={incrementTasbih} style={styles.tasbihButton}>
          <Image source={require('../assets/images/tasbih.png')} style={styles.tasbihImage} />
        </TouchableOpacity>
      </View>
      {}
      <Modal
        transparent={true}
        visible={isModalVisible}
        onRequestClose={hideModal}
        animationType="fade"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Konfirmasi Reset</Text>
            <Text style={styles.modalText}>Apakah Anda yakin ingin mereset jumlah tasbih?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity onPress={resetTasbih} style={[styles.modalButton, styles.resetButton]}>
                <Text style={styles.modalButtonText}>Reset Tasbih</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={hideModal} style={[styles.modalButton, styles.cancelButton]}>
                <Text style={styles.modalButtonText}>Batal</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  lightContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  darkContainer: {
    flex: 1,
    backgroundColor: '#333',
    padding: 16,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  header: {
    alignItems: 'center',
    marginBottom: 16,
    position: 'relative',
    backgroundColor: 'transparent',
  },
  lightTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  darkTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#F5F5F5',
    marginBottom: 8,
  },
  lightDescription: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginHorizontal: 8,
  },
  darkDescription: {
    fontSize: 16,
    color: '#DDD',
    textAlign: 'center',
    marginHorizontal: 8,
  },
  headerButtons: {
    position: 'absolute',
    top: 10,
    right: 10,
    flexDirection: 'row',
  },
  toggleButton: {
    marginLeft: 10,
    padding: 5,
    borderRadius: 20,
    backgroundColor: 'transparent',
  },
  toggleButtonText: {
    fontSize: 18,
    color: '#007BFF',
  },
  ayatContainer: {
    marginTop: 16,
  },
  lightAyatItem: {
    marginBottom: 12,
  },
  darkAyatItem: {
    marginBottom: 12,
  },
  lightAyatText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
  },
  darkAyatText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#F5F5F5',
  },
  lightTranslation: {
    fontSize: 16,
    color: '#555',
  },
  darkTranslation: {
    fontSize: 16,
    color: '#CCC',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    paddingHorizontal: 8,
    paddingVertical: 8,
    backgroundColor: 'transparent',
  },
  footerButton: {
    backgroundColor: 'transparent',
    padding: 8,
  },
  footerImage: {
    width: 24,
    height: 24,
  },
  tasbihButton: {
    backgroundColor: 'transparent',
    padding: 8,
  },
  tasbihCount: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 12,
  },
  tasbihImage: {
    width: 24,
    height: 24,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#FFF',
    padding: 24,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  modalText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 16,
    textAlign: 'center',
  },
  modalButtons: {
    flexDirection: 'row',
    marginTop: 8,
  },
  modalButton: {
    padding: 12,
    borderRadius: 5,
    marginHorizontal: 8,
    width: 120,
    alignItems: 'center',
  },
  resetButton: {
    backgroundColor: '#FF4D4D',
  },
  cancelButton: {
    backgroundColor: '#007BFF',
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Tahlil;
