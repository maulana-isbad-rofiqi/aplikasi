import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';

const ayats = [
  { id: '1', text: 'بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ', translation: 'Dengan nama Allah Yang Maha Pengasih, Maha Penyayang' },
  { id: '2', text: 'يٰسۤۚ۝١', translation: 'Yā Sīn.' },
  { id: '3', text: 'وَالْقُرْاٰنِ الْحَكِيْمِۙ۝٢', translation: 'Demi Al-Qur’an yang penuh hikmah' },
  { id: '4', text: 'اِنَّكَ لَمِنَ الْمُرْسَلِيْنَۙ۝٣', translation: 'sesungguhnya engkau (Nabi Muhammad) benar-benar salah seorang dari rasul-rasul' },
  { id: '5', text: 'عَلٰى صِرَاطٍ مُّسْتَقِيْمٍۗ۝٤', translation: '(yang berada) di atas jalan yang lurus' },
  { id: '6', text: 'تَنْزِيْلَ الْعَزِيْزِ الرَّحِيْمِۙ۝٥', translation: '(sebagai wahyu) yang diturunkan oleh (Allah) Yang Mahaperkasa lagi Maha Penyayang' },
  { id: '7', text: 'لِتُنْذِرَ قَوْمًا مَّآ اُنْذِرَ اٰبَاۤؤُهُمْ فَهُمْ غٰفِلُوْنَ۝٦', translation: 'agar engkau (Nabi Muhammad) memberi peringatan kepada suatu kaum yang nenek moyang mereka belum pernah diberi peringatan, sehingga mereka lalai' },
  { id: '8', text: 'لَقَدْ حَقَّ الْقَوْلُ عَلٰٓى اَكْثَرِهِمْ فَهُمْ لَا يُؤْمِنُوْنَ۝٧', translation: 'Sungguh, benar-benar berlaku perkataan (ketetapan takdir) terhadap kebanyakan mereka, maka mereka tidak akan beriman' },
  { id: '9', text: 'اِنَّا جَعَلْنَا فِيْٓ اَعْنَاقِهِمْ اَغْلٰلًا فَهِيَ اِلَى الْاَذْقَانِ فَهُمْ مُّقْمَحُوْنَ۝٨', translation: 'Sesungguhnya Kami telah memasang belenggu di leher mereka, lalu (tangan mereka yang terbelenggu diangkat) ke dagu, karena itu mereka tertengadah' },
  { id: '10', text: 'وَجَعَلْنَا مِنْۢ بَيْنِ اَيْدِيْهِمْ سَدًّا وَّمِنْ خَلْفِهِمْ سَدًّا فَاَغْشَيْنٰهُمْ فَهُمْ لَا يُبْصِرُوْنَ۝٩', translation: 'Dan Kami tutupi mereka dari depan mereka, dan dari belakang mereka, lalu Kami tutupi mereka sehingga mereka tidak dapat melihat' },
  { id: '11', text: 'وَسَوَاۤءٌ عَلَيْهِمْ ءَاَنْذَرْتَهُمْ اَمْ لَمْ تُنْذِرْهُمْ لَا يُؤْمِنُوْنَ۝١٠', translation: 'Sama saja bagi mereka, apakah engkau (Nabi Muhammad) memberi peringatan kepada mereka atau tidak. Mereka (tetap) tidak akan beriman' },
  { id: '12', text: 'اِنَّمَا تُنْذِرُ مَنِ اتَّبَعَ الذِّكْرَ وَخَشِيَ الرَّحْمٰنَ بِالْغَيْبِۚ فَبَشِّرْهُ بِمَغْفِرَةٍ وَّاَجْرٍ كَرِيْمٍ۝١١', translation: 'Sesungguhnya kamu hanya memberi peringatan kepada orang yang mengikuti peringatan dan takut kepada Tuhan Yang Maha Pengasih tanpa melihat-Nya. Maka berilah dia kabar gembira dengan ampunan dan pahala yang mulia' },
  { id: '13', text: 'اِنَّا نَحْنُ نُحْيِ الْمَوْتٰى وَنَكْتُبُ مَا قَدَّمُوْا وَاٰثَارَهُمْۗ وَكُلَّ شَيْءٍ اَحْصَيْنٰهُ فِيْٓ اِمَامٍ مُّبِيْنٍ۝١٢', translation: 'Sesungguhnya Kamilah yang menghidupkan orang-orang yang mati dan Kami (pulalah) yang mencatat apa yang telah mereka kerjakan dan bekas-bekas yang mereka (tinggalkan). Segala sesuatu Kami kumpulkan dalam kitab induk yang nyata (Lauh Mahfuz)' },
  { id: '14', text: 'وَاضْرِبْ لَهُمْ مَّثَلًا اَصْحٰبَ الْقَرْيَةِۘ اِذْ جَاۤءَهَا الْمُرْسَلُوْنَۚ ۝١٣', translation: 'Buatlah suatu perumpamaan bagi mereka (kaum kafir Makkah), yaitu penduduk suatu negeri, ketika para utusan datang kepada mereka"' },
  { id: '15', text: 'اِذْ اَرْسَلْنَآ اِلَيْهِمُ اثْنَيْنِ فَكَذَّبُوْهُمَا فَعَزَّزْنَا بِثَالِثٍ فَقَالُوْٓا اِنَّآ اِلَيْكُمْ مُّرْسَلُوْنَ ۝١٤', translation: '(yaitu) ketika Kami mengutus kepada mereka dua orang utusan, lalu mereka mendustakan keduanya. Kemudian Kami menguatkan dengan (utusan) yang ketiga. Maka, ketiga (utusan itu) berkata, “Sesungguhnya kami adalah orang-orang yang diutus kepadamu.”' },
  { id: '16', text: 'قَالُوْا مَآ اَنْتُمْ اِلَّا بَشَرٌ مِّثْلُنَاۙ وَمَآ اَنْزَلَ الرَّحْمٰنُ مِنْ شَيْءٍۙ اِنْ اَنْتُمْ اِلَّا تَكْذِبُوْنَ ۝١٥', translation: 'Mereka (penduduk negeri) menjawab, “Kamu tidak lain hanyalah manusia seperti kami. (Allah) Yang Maha Pengasih tidak (pernah) menurunkan sesuatu apa pun. Kamu hanyalah berdusta.”' },
  { id: '17', text: 'قَالُوْا رَبُّنَا يَعْلَمُ اِنَّآ اِلَيْكُمْ لَمُرْسَلُوْنَ ۝١٦', translation: 'Mereka (para rasul) berkata, “Tuhan kami mengetahui bahwa sesungguhnya kami benar-benar para utusan(-Nya) kepadamu.' },
  { id: '18', text: 'وَمَا عَلَيْنَآ اِلَّا الْبَلٰغُ الْمُبِيْنُ ۝١٧', translation: 'Adapun kewajiban kami hanyalah menyampaikan (perintah Allah) yang jelas.”' },
  { id: '19', text: 'قَالُوْٓا اِنَّا تَطَيَّرْنَا بِكُمْۚ لَىِٕنْ لَّمْ تَنْتَهُوْا لَنَرْجُمَنَّكُمْ وَلَيَمَسَّنَّكُمْ مِّنَّا عَذَابٌ اَلِيْمٌ ۝١٨', translation: 'Mereka (penduduk negeri) menjawab, “Sesungguhnya kami bernasib malang karenamu. Sungguh, jika kamu tidak berhenti (menyeru kami), niscaya kami merajam kamu dan kamu pasti akan merasakan siksaan yang pedih dari kami.”' },
  { id: '20', text: 'قَالُوْا طَاۤىِٕرُكُمْ مَّعَكُمْۗ اَىِٕنْ ذُكِّرْتُمْۗ بَلْ اَنْتُمْ قَوْمٌ مُّسْرِفُوْنَ ۝١٩', translation: 'Mereka (para rasul) berkata, “Kemalangan kamu itu (akibat perbuatan) kamu sendiri. Apakah karena kamu diberi peringatan, (lalu kamu menjadi malang)? Sebenarnya kamu adalah kaum yang melampaui batas.”' },
  { id: '21', text: 'وَجَاۤءَ مِنْ اَقْصَا الْمَدِيْنَةِ رَجُلٌ يَّسْعٰى قَالَ يٰقَوْمِ اتَّبِعُوا الْمُرْسَلِيْنَۙ ۝٢٠', translation: 'Datanglah dengan bergegas dari ujung kota, seorang laki-laki. Dia berkata, “Wahai kaumku, ikutilah para rasul itu!' },
  { id: '22', text: 'اتَّبِعُوْا مَنْ لَّا يَسْـَٔلُكُمْ اَجْرًا وَّهُمْ مُّهْتَدُوْنَ ۝٢١', translation: 'Ikutilah orang yang tidak meminta imbalan (dalam berdakwah) kepadamu. Mereka adalah orang-orang yang mendapat petunjuk.' },
  { id: '23', text: 'وَمَا لِيَ لَآ اَعْبُدُ الَّذِيْ فَطَرَنِيْ وَاِلَيْهِ تُرْجَعُوْنَ ۝٢٢', translation: 'Apa (alasanku) untuk tidak menyembah (Allah) yang telah menciptakanku dan hanya kepada-Nyalah kamu akan dikembalikan.' },
  { id: '24', text: 'ءَاَتَّخِذُ مِنْ دُوْنِهٖٓ اٰلِهَةً اِنْ يُّرِدْنِ الرَّحْمٰنُ بِضُرٍّ لَّا تُغْنِ عَنِّيْ شَفَاعَتُهُمْ شَيْـًٔا وَّلَا يُنْقِذُوْنِۚ ۝٢٣', translation: 'Mengapa aku (harus) mengambil sembahan-sembahan selain-Nya? Jika (Allah) Yang Maha Pengasih menghendaki bencana terhadapku, pasti pertolongan mereka tidak berguna sama sekali bagi diriku dan mereka (juga) tidak dapat menyelamatkanku.' },
  { id: '25', text: 'اِنِّيْٓ اِذًا لَّفِيْ ضَلٰلٍ مُّبِيْنٍ ۝٢٤', translation: 'Sesungguhnya aku (jika berbuat) begitu, pasti berada dalam kesesatan yang nyata.' },
  { id: '26', text: 'اِنِّيْٓ اٰمَنْتُ بِرَبِّكُمْ فَاسْمَعُوْنِۗ ۝٢٥', translation: 'Sesungguhnya aku telah beriman kepada Tuhanmu. Maka, dengarkanlah (pengakuan)-ku.”' },
  { id: '27', text: 'قِيْلَ ادْخُلِ الْجَنَّةَۗ قَالَ يٰلَيْتَ قَوْمِيْ يَعْلَمُوْنَۙ ۝٢٦', translation: 'Dikatakan (kepadanya), “Masuklah ke surga.” Dia (laki-laki itu) berkata, “Aduhai, sekiranya kaumku mengetahui' },
  { id: '28', text: 'بِمَا غَفَرَ لِيْ رَبِّيْ وَجَعَلَنِيْ مِنَ الْمُكْرَمِيْنَ ۝٢٧', translation: '(bagaimana) Tuhanku mengampuniku dan menjadikanku termasuk orang-orang yang dimuliakan.”' },
  { id: '29', text: 'وَمَآ اَنْزَلْنَا عَلٰى قَوْمِهٖ مِنْۢ بَعْدِهٖ مِنْ جُنْدٍ مِّنَ السَّمَاۤءِ وَمَا كُنَّا مُنْزِلِيْنَ ۝٢٨', translation: 'Setelah dia (dibunuh), Kami tidak menurunkan satu pasukan pun dari langit kepada kaumnya dan Kami tidak perlu menurunkannya.' },
  { id: '30', text: 'اِنْ كَانَتْ اِلَّا صَيْحَةً وَّاحِدَةً فَاِذَا هُمْ خٰمِدُوْنَ ۝٢٩', translation: '(Azab mereka) itu cukup dengan satu teriakan saja. Maka, seketika itu mereka mati.' },
  { id: '31', text: 'يٰحَسْرَةً عَلَى الْعِبَادِۚ مَا يَأْتِيْهِمْ مِّنْ رَّسُوْلٍ اِلَّا كَانُوْا بِهٖ يَسْتَهْزِءُوْنَ ۝٣٠', translation: 'Alangkah besar penyesalan diri para hamba itu. Setiap datang seorang rasul kepada mereka, mereka selalu memperolok-olokkannya.' },
  { id: '32', text: 'اَلَمْ يَرَوْا كَمْ اَهْلَكْنَا قَبْلَهُمْ مِّنَ الْقُرُوْنِ اَنَّهُمْ اِلَيْهِمْ لَا يَرْجِعُوْنَ ۝٣١', translation: 'Tidakkah mereka mengetahui berapa banyak umat sebelum mereka yang telah Kami binasakan. Mereka (setelah binasa) tidak ada yang kembali kepada mereka (di dunia).' },
  { id: '33', text: 'وَاِنْ كُلٌّ لَّمَّا جَمِيْعٌ لَّدَيْنَا مُحْضَرُوْنَࣖ ۝٣٢', translation: 'Tidak ada satu (umat) pun, kecuali semuanya akan dihadirkan kepada Kami (untuk dihisab).' },
  { id: '34', text: 'وَاٰيَةٌ لَّهُمُ الْاَرْضُ الْمَيْتَةُۖ اَحْيَيْنٰهَا وَاَخْرَجْنَا مِنْهَا حَبًّا فَمِنْهُ يَأْكُلُوْنَ ۝٣٣', translation: 'Suatu tanda (kekuasaan-Nya) bagi mereka adalah bumi yang mati (tandus lalu) Kami menghidupkannya dan mengeluarkan darinya biji-bijian kemudian dari (biji-bijian) itu mereka makan.' },
  { id: '35', text: 'وَجَعَلْنَا فِيْهَا جَنّٰتٍ مِّنْ نَّخِيْلٍ وَّاَعْنَابٍ وَّفَجَّرْنَا فِيْهَا مِنَ الْعُيُوْنِۙ ۝٣٤', translation: 'Kami (juga) menjadikan padanya (bumi) kebun-kebun kurma dan anggur serta Kami memancarkan padanya beberapa mata air' },
  { id: '36', text: 'لِيَأْكُلُوْا مِنْ ثَمَرِهٖۙ وَمَا عَمِلَتْهُ اَيْدِيْهِمْۗ اَفَلَا يَشْكُرُوْنَ ۝٣٥', translation: 'agar mereka dapat makan dari buahnya, dan dari hasil usaha tangan mereka. Mengapa mereka tidak bersyukur?' },
  { id: '37', text: 'سُبْحٰنَ الَّذِيْ خَلَقَ الْاَزْوَاجَ كُلَّهَا مِمَّا تُنْۢبِتُ الْاَرْضُ وَمِنْ اَنْفُسِهِمْ وَمِمَّا لَا يَعْلَمُوْنَ ۝٣٦', translation: 'Mahasuci (Allah) yang telah menciptakan semuanya berpasang-pasangan, baik dari apa yang ditumbuhkan oleh bumi dan dari diri mereka sendiri maupun dari apa yang tidak mereka ketahui.' },
  { id: '38', text: 'وَاٰيَةٌ لَّهُمُ الَّيْلُۖ نَسْلَخُ مِنْهُ النَّهَارَ فَاِذَا هُمْ مُّظْلِمُوْنَۙ ۝٣٧', translation: 'Suatu tanda juga (atas kekuasaan Allah) bagi mereka adalah malam. Kami pisahkan siang dari (malam) itu. Maka, seketika itu mereka (berada dalam) kegelapan.' },
  { id: '39', text: 'وَالشَّمْسُ تَجْرِيْ لِمُسْتَقَرٍّ لَّهَاۗ ذٰلِكَ تَقْدِيْرُ الْعَزِيْزِ الْعَلِيْمِۗ ۝٣٨', translation: '(Suatu tanda juga atas kekuasaan Allah bagi mereka adalah) matahari yang berjalan di tempat peredarannya. Demikianlah ketetapan (Allah) Yang Mahaperkasa lagi Maha Mengetahui.' },
  { id: '40', text: 'وَالْقَمَرَ قَدَّرْنٰهُ مَنَازِلَ حَتّٰى عَادَ كَالْعُرْجُوْنِ الْقَدِيْمِ ۝٣٩', translation: '(Begitu juga) bulan, Kami tetapkan bagi(-nya) tempat-tempat peredaran sehingga (setelah ia sampai ke tempat peredaran yang terakhir,) kembalilah ia seperti bentuk tandan yang tua.' },
  { id: '41', text: 'لَا الشَّمْسُ يَنْۢبَغِيْ لَهَآ اَنْ تُدْرِكَ الْقَمَرَ وَلَا الَّيْلُ سَابِقُ النَّهَارِۗ وَكُلٌّ فِيْ فَلَكٍ يَّسْبَحُوْنَ ۝٤٠', translation: 'Tidaklah mungkin bagi matahari mengejar bulan dan malam pun tidak dapat mendahului siang. Masing-masing beredar pada garis edarnya.' },
  { id: '42', text: 'وَاٰيَةٌ لَّهُمْ اَنَّا حَمَلْنَا ذُرِّيَّتَهُمْ فِى الْفُلْكِ الْمَشْحُوْنِۙ ۝٤١', translation: 'Suatu tanda (kebesaran Allah) bagi mereka adalah bahwa Kami mengangkut keturunan mereka dalam kapal yang penuh muatan.' },
  { id: '43', text: 'وَخَلَقْنَا لَهُمْ مِّنْ مِّثْلِهٖ مَا يَرْكَبُوْنَ ۝٤٢', translation: '(Begitu juga) Kami menciptakan untuk mereka dari jenis itu angkutan (lain) yang mereka kendarai.' },
  { id: '44', text: 'وَاِنْ نَّشَأْ نُغْرِقْهُمْ فَلَا صَرِيْخَ لَهُمْ وَلَاهُمْ يُنْقَذُوْنَۙ ۝٤٣', translation: 'Jika Kami menghendaki, Kami akan menenggelamkan mereka. Kemudian, tidak ada penolong bagi mereka dan tidak (pula) mereka diselamatkan.' },
  { id: '45', text: 'اِلَّا رَحْمَةً مِّنَّا وَمَتَاعًا اِلٰى حِيْنٍ ۝٤٤', translation: 'Akan tetapi, (Kami menyelamatkan mereka) karena rahmat yang besar dari Kami dan untuk memberi mereka kesenangan hidup sampai waktu tertentu.' },
  { id: '46', text: 'وَاِذَا قِيْلَ لَهُمُ اتَّقُوْا مَا بَيْنَ اَيْدِيْكُمْ وَمَا خَلْفَكُمْ لَعَلَّكُمْ تُرْحَمُوْنَ ۝٤٥', translation: 'Ketika dikatakan kepada mereka, “Takutlah kamu akan (siksa) yang ada di hadapanmu (di dunia) dan azab yang ada di belakangmu (akhirat) agar kamu mendapat rahmat,” (maka mereka berpaling).' },
  { id: '47', text: 'وَمَا تَأْتِيْهِمْ مِّنْ اٰيَةٍ مِّنْ اٰيٰتِ رَبِّهِمْ اِلَّا كَانُوْا عَنْهَا مُعْرِضِيْنَ ۝٤٦', translation: 'Tidak satu pun dari tanda-tanda (kebesaran) Tuhan datang kepada mereka, kecuali mereka berpaling darinya.' },
  { id: '48', text: 'وَاِذَا قِيْلَ لَهُمْ اَنْفِقُوْا مِمَّا رَزَقَكُمُ اللّٰهُۙ قَالَ الَّذِيْنَ كَفَرُوْا لِلَّذِيْنَ اٰمَنُوْٓا اَنُطْعِمُ مَنْ لَّوْ يَشَاۤءُ اللّٰهُ اَطْعَمَهٗٓۖ اِنْ اَنْتُمْ اِلَّا فِيْ ضَلٰلٍ مُّبِيْنٍ ۝٤٧', translation: 'Apabila dikatakan kepada mereka, “Infakkanlah sebagian rezeki yang diberikan Allah kepadamu,” orang-orang yang kufur itu berkata kepada orang-orang yang beriman, “Apakah pantas kami memberi makan kepada orang-orang yang jika Allah menghendaki, Dia akan memberinya makan? Kamu benar-benar dalam kesesatan yang nyata.”' },
  { id: '49', text: 'وَيَقُوْلُوْنَ مَتٰى هٰذَا الْوَعْدُ اِنْ كُنْتُمْ صٰدِقِيْنَ ۝٤٨', translation: 'Mereka berkata, “Kapankah janji (hari Kebangkitan) ini (terjadi) jika kamu orang-orang benar?”' },
  { id: '50', text: 'مَا يَنْظُرُوْنَ اِلَّا صَيْحَةً وَّاحِدَةً تَأْخُذُهُمْ وَهُمْ يَخِصِّمُوْنَ ۝٤٩', translation: 'Mereka hanya menunggu satu teriakan yang akan membinasakan mereka saat mereka (sibuk) bertengkar (tentang urusan dunia).' },
  { id: '51', text: 'فَلَا يَسْتَطِيْعُوْنَ تَوْصِيَةً وَّلَآ اِلٰٓى اَهْلِهِمْ يَرْجِعُوْنَ ۝٥٠', translation: 'Oleh sebab itu, mereka tidak dapat berwasiat dan tidak dapat kembali kepada keluarganya.' },
  { id: '52', text: 'وَنُفِخَ فِى الصُّوْرِ فَاِذَا هُمْ مِّنَ الْاَجْدَاثِ اِلٰى رَبِّهِمْ يَنْسِلُوْنَ ۝٥١', translation: 'Sangkakala pun ditiup dan seketika itu mereka bergerak cepat dari kuburnya menuju kepada Tuhannya.' },
  { id: '53', text: 'قَالُوْا يٰوَيْلَنَا مَنْۢ بَعَثَنَا مِنْ مَّرْقَدِنَاۜ هٰذَا مَا وَعَدَ الرَّحْمٰنُ وَصَدَقَ الْمُرْسَلُوْنَ ۝٥٢', translation: 'Mereka berkata, “Celakalah kami! Siapakah yang membangkitkan kami dari tempat tidur kami (kubur)?” (Lalu, dikatakan kepada mereka,) “Inilah yang dijanjikan (Allah) Yang Maha Pengasih dan benarlah para rasul(-Nya).”' },
  { id: '54', text: 'اِنْ كَانَتْ اِلَّا صَيْحَةً وَّاحِدَةً فَاِذَا هُمْ جَمِيْعٌ لَّدَيْنَا مُحْضَرُوْنَ ۝٥٣', translation: 'Teriakan itu hanya sekali saja, maka seketika itu mereka semua dihadapkan kepada Kami (untuk dihisab).' },
  { id: '55', text: 'فَالْيَوْمَ لَا تُظْلَمُ نَفْسٌ شَيْـًٔا وَّلَا تُجْزَوْنَ اِلَّا مَا كُنْتُمْ تَعْمَلُوْنَ ۝٥٤', translation: 'Pada hari itu tidak ada sama sekali orang yang dirugikan sedikit pun. Kamu tidak akan diberi balasan, kecuali atas apa yang telah kamu kerjakan.' },
  { id: '56', text: 'اِنَّ اَصْحٰبَ الْجَنَّةِ الْيَوْمَ فِيْ شُغُلٍ فٰكِهُوْنَۚ ۝٥٥', translation: 'Sesungguhnya penghuni surga pada hari itu berada dalam kesibukan (sehingga tidak sempat berpikir tentang penghuni neraka) lagi bersenang-senang.' },
  { id: '57', text: 'هُمْ وَاَزْوَاجُهُمْ فِيْ ظِلٰلٍ عَلَى الْاَرَاۤىِٕكِ مُتَّكِــُٔوْنَۚ ۝٥٦', translation: 'Mereka dan pasangan-pasangannya berada dalam tempat yang teduh sambil berbaring di atas ranjang berkelambu.' },
  { id: '58', text: 'لَهُمْ فِيْهَا فَاكِهَةٌ وَّلَهُمْ مَّا يَدَّعُوْنَۚ ۝٥٧', translation: 'Di (surga) itu mereka memperoleh buah-buahan dan apa saja yang mereka inginkan.' },
  { id: '59', text: 'سَلٰمٌۗ قَوْلًا مِّنْ رَّبٍّ رَّحِيْمٍ ۝٥٨', translation: '(Kepada mereka dikatakan,) “Salam sejahtera” sebagai ucapan dari Tuhan Yang Maha Penyayang.' },
  { id: '60', text: 'وَامْتَازُوا الْيَوْمَ اَيُّهَا الْمُجْرِمُوْنَ ۝٥٩', translation: '(Dikatakan kepada orang-orang kafir,) “Berpisahlah kamu (dari orang-orang mukmin) pada hari ini, wahai para pendurhaka!' },
  { id: '61', text: 'اَلَمْ اَعْهَدْ اِلَيْكُمْ يٰبَنِيْٓ اٰدَمَ اَنْ لَّا تَعْبُدُوا الشَّيْطٰنَۚ اِنَّهٗ لَكُمْ عَدُوٌّ مُّبِيْنٌ ۝٦٠', translation: 'Bukankah Aku telah berpesan kepadamu dengan sungguh-sungguh, wahai anak cucu Adam, bahwa janganlah kamu menyembah setan? Sesungguhnya setan itu musuh yang nyata bagi kamu.' },
  { id: '62', text: 'وَاَنِ اعْبُدُوْنِيْۗ هٰذَا صِرَاطٌ مُّسْتَقِيْمٌ ۝٦١', translation: '(Begitu juga bahwa) sembahlah Aku. Inilah jalan yang lurus.”' },
  { id: '63', text: 'وَلَقَدْ اَضَلَّ مِنْكُمْ جِبِلًّا كَثِيْرًاۗ اَفَلَمْ تَكُوْنُوْا تَعْقِلُوْنَ ۝٦٢', translation: 'Sungguh, ia (setan itu) benar-benar telah menyesatkan sangat banyak orang dari kamu. Maka, apakah kamu tidak mengerti?' },
  { id: '64', text: 'هٰذِهٖ جَهَنَّمُ الَّتِيْ كُنْتُمْ تُوْعَدُوْنَ ۝٦٣', translation: 'Inilah (neraka) Jahanam yang dahulu telah diperingatkan kepadamu.' },
  { id: '65', text: 'اِصْلَوْهَا الْيَوْمَ بِمَا كُنْتُمْ تَكْفُرُوْنَ ۝٦٤', translation: 'Masuklah ke dalamnya pada hari ini karena dahulu kamu mengingkarinya.' },
  { id: '66', text: 'اَلْيَوْمَ نَخْتِمُ عَلٰٓى اَفْوَاهِهِمْ وَتُكَلِّمُنَآ اَيْدِيْهِمْ وَتَشْهَدُ اَرْجُلُهُمْ بِمَا كَانُوْا يَكْسِبُوْنَ ۝٦٥', translation: 'Pada hari ini Kami membungkam mulut mereka. Tangan merekalah yang berkata kepada Kami dan kaki merekalah yang akan bersaksi terhadap apa yang dahulu mereka kerjakan.' },
  { id: '67', text: 'وَلَوْ نَشَاۤءُ لَطَمَسْنَا عَلٰٓى اَعْيُنِهِمْ فَاسْتَبَقُوا الصِّرَاطَ فَاَنّٰى يُبْصِرُوْنَ ۝٦٦', translation: 'Seandainya Kami menghendaki, pastilah Kami akan menghapus penglihatan (membutakan) mereka sehingga mereka berlomba-lomba (mencari) jalan (selamat). Maka, bagaimana mungkin mereka dapat melihat?' },
  { id: '68', text: 'وَلَوْ نَشَاۤءُ لَمَسَخْنٰهُمْ عَلٰى مَكَانَتِهِمْ فَمَا اسْتَطَاعُوْا مُضِيًّا وَّلَا يَرْجِعُوْنَ ۝٦٧', translation: 'Seandainya Kami menghendaki, pastilah Kami akan mengubah bentuk mereka di tempat mereka berada, sehingga mereka tidak sanggup meneruskan perjalanan dan juga tidak sanggup pulang kembali.' },
  { id: '69', text: 'وَمَنْ نُّعَمِّرْهُ نُنَكِّسْهُ فِى الْخَلْقِۗ اَفَلَا يَعْقِلُوْنَ ۝٦٨', translation: 'Siapa yang Kami panjangkan umurnya niscaya Kami balik proses penciptaannya (dari kuat menuju lemah). Maka, apakah mereka tidak mengerti?' },
  { id: '70', text: 'وَمَا عَلَّمْنٰهُ الشِّعْرَ وَمَا يَنْۢبَغِيْ لَهٗۗ اِنْ هُوَ اِلَّا ذِكْرٌ وَّقُرْاٰنٌ مُّبِيْنٌۙ ۝٦٩', translation: 'Kami tidak mengajarkan syair kepadanya (Nabi Muhammad) dan (bersyair) itu tidaklah pantas baginya. (Wahyu yang Kami turunkan kepadanya) itu tidak lain hanyalah pelajaran dan Al-Qur’an yang jelas,' },
  { id: '71', text: 'لِّيُنْذِرَ مَنْ كَانَ حَيًّا وَّيَحِقَّ الْقَوْلُ عَلَى الْكٰفِرِيْنَ ۝٧٠', translation: 'agar dia (Nabi Muhammad) memberi peringatan kepada orang-orang yang hidup (hatinya) dan agar ketetapan (azab) terhadap orang-orang kafir itu menjadi pasti.' },
  { id: '72', text: 'اَوَلَمْ يَرَوْا اَنَّا خَلَقْنَا لَهُمْ مِّمَّا عَمِلَتْ اَيْدِيْنَآ اَنْعَامًا فَهُمْ لَهَا مٰلِكُوْنَ ۝٧١', translation: 'Tidakkah mereka mengetahui bahwa Kami telah menciptakan untuk mereka hewan-hewan ternak dari ciptaan tangan Kami (sendiri), lalu mereka menjadi pemiliknya?' },
  { id: '73', text: 'وَذَلَّلْنٰهَا لَهُمْ فَمِنْهَا رَكُوْبُهُمْ وَمِنْهَا يَأْكُلُوْنَ ۝٧٢', translation: 'Kami menjadikannya (hewan-hewan itu) tunduk kepada mereka. Sebagian di antaranya menjadi tunggangan mereka dan sebagian (lagi) mereka makan.' },
  { id: '74', text: 'وَلَهُمْ فِيْهَا مَنَافِعُ وَمَشَارِبُۗ اَفَلَا يَشْكُرُوْنَ ۝٧٣', translation: 'Pada dirinya (hewan-hewan ternak itu) terdapat berbagai manfaat dan minuman untuk mereka. Apakah mereka tidak bersyukur?' },
  { id: '75', text: 'وَاتَّخَذُوْا مِنْ دُوْنِ اللّٰهِ اٰلِهَةً لَّعَلَّهُمْ يُنْصَرُوْنَۗ ۝٧٤', translation: 'Mereka menjadikan sesembahan selain Allah agar mereka mendapat pertolongan.' },
  { id: '76', text: 'لَا يَسْتَطِيْعُوْنَ نَصْرَهُمْۙ وَهُمْ لَهُمْ جُنْدٌ مُّحْضَرُوْنَ ۝٧٥', translation: '(Sesembahan) itu tidak mampu menolong mereka, padahal (sesembahan) itu adalah tentara yang dihadirkan untuk menjaganya.' },
  { id: '77', text: 'فَلَا يَحْزُنْكَ قَوْلُهُمْۘ اِنَّا نَعْلَمُ مَا يُسِرُّوْنَ وَمَا يُعْلِنُوْنَ ۝٧٦', translation: 'Maka, jangan sampai ucapan mereka membuat engkau (Nabi Muhammad) bersedih hati. Sesungguhnya Kami mengetahui apa yang mereka rahasiakan dan apa yang mereka nyatakan.' },
  { id: '78', text: 'اَوَلَمْ يَرَ الْاِنْسَانُ اَنَّا خَلَقْنٰهُ مِنْ نُّطْفَةٍ فَاِذَا هُوَ خَصِيْمٌ مُّبِيْنٌ ۝٧٧', translation: 'Tidakkah manusia mengetahui bahwa Kami menciptakannya dari setetes mani? Kemudian tiba-tiba saja dia menjadi musuh yang nyata.' },
  { id: '79', text: 'وَضَرَبَ لَنَا مَثَلًا وَّنَسِيَ خَلْقَهٗۗ قَالَ مَنْ يُّحْيِ الْعِظَامَ وَهِيَ رَمِيْمٌ ۝٧٨', translation: 'Dia membuat perumpamaan bagi Kami dan melupakan asal penciptaannya. Dia berkata, “Siapakah yang bisa menghidupkan tulang-belulang yang telah hancur luluh?”' },
  { id: '80', text: 'قُلْ يُحْيِيْهَا الَّذِيْٓ اَنْشَاَهَآ اَوَّلَ مَرَّةٍۗ وَهُوَ بِكُلِّ خَلْقٍ عَلِيْمٌۙ ۝٧٩', translation: 'Katakanlah (Nabi Muhammad), “Yang akan menghidupkannya adalah Zat yang menciptakannya pertama kali. Dia Maha Mengetahui setiap makhluk.' },
  { id: '81', text: 'ࣙالَّذِيْ جَعَلَ لَكُمْ مِّنَ الشَّجَرِ الْاَخْضَرِ نَارًاۙ فَاِذَآ اَنْتُمْ مِّنْهُ تُوْقِدُوْنَ ۝٨٠', translation: '(Dialah) yang menjadikan api untukmu dari kayu yang hijau. Kemudian, seketika itu kamu menyalakan (api) darinya.”' },
  { id: '82', text: 'اَوَلَيْسَ الَّذِيْ خَلَقَ السَّمٰوٰتِ وَالْاَرْضَ بِقٰدِرٍ عَلٰٓى اَنْ يَّخْلُقَ مِثْلَهُمْۗ بَلٰى وَهُوَ الْخَلّٰقُ الْعَلِيْمُ ۝٨١', translation: 'Bukankah Zat yang menciptakan langit dan bumi mampu menciptakan manusia yang serupa mereka itu (di akhirat kelak)? Benar. Dialah yang Maha Banyak Mencipta lagi Maha Mengetahui.' },
  { id: '83', text: 'اِنَّمَآ اَمْرُهٗٓ اِذَآ اَرَادَ شَيْـًٔاۖ اَنْ يَّقُوْلَ لَهٗ كُنْ فَيَكُوْنُ ۝٨٢', translation: 'Sesungguhnya ketetapan-Nya, jika Dia menghendaki sesuatu, Dia hanya berkata kepadanya, “Jadilah!” Maka, jadilah (sesuatu) itu.' },
  { id: '84', text: 'فَسُبْحٰنَ الَّذِيْ بِيَدِهٖ مَلَكُوْتُ كُلِّ شَيْءٍ وَّاِلَيْهِ تُرْجَعُوْنَ ۝٨٣', translation: 'Maka, Mahasuci (Allah) yang di tangan-Nya kekuasaan atas segala sesuatu dan kepada-Nya kamu dikembalikan.' },
];

const SurahYasinScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ScrollView contentContainerStyle={isDarkMode ? styles.darkContainer : styles.lightContainer}>
      <View style={styles.headerContainer}>
        <Text style={isDarkMode ? styles.darkTitle : styles.lightTitle}>Surah Yasin</Text>
        <Text style={isDarkMode ? styles.darkSubtitle : styles.lightSubtitle}>Surah ke-36 dalam Al-Qur'an</Text>
        <Text style={isDarkMode ? styles.darkDescription : styles.lightDescription}>
          Surah Yasin adalah surah ke-36 dalam Al-Qur'an yang dikenal sebagai "Jantung Al-Qur'an". Surah ini mengandung banyak ajaran dan hikmah yang sangat penting bagi umat Islam.
        </Text>
        <TouchableOpacity onPress={toggleTheme} style={styles.themeToggleButton}>
          <Text style={styles.themeToggleText}>{isDarkMode ? '🌞' : '🌙'}</Text>
        </TouchableOpacity>
      </View>
      {ayats.map((ayat) => (
        <View key={ayat.id} style={isDarkMode ? styles.darkAyatContainer : styles.lightAyatContainer}>
          <Text style={isDarkMode ? styles.darkAyatText : styles.lightAyatText}>{ayat.text}</Text>
          <Text style={isDarkMode ? styles.darkTranslation : styles.lightTranslation}>{ayat.translation}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  lightContainer: {
    flexGrow: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  darkContainer: {
    flexGrow: 1,
    padding: 10,
    backgroundColor: '#333',
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
    position: 'relative',
  },
  lightTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  darkTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#F5F5F5',
    marginBottom: 5,
  },
  lightSubtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#666',
    marginBottom: 10,
  },
  darkSubtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#AAA',
    marginBottom: 10,
  },
  lightDescription: {
    fontSize: 16,
    color: '#444',
    marginBottom: 15,
  },
  darkDescription: {
    fontSize: 16,
    color: '#DDD',
    marginBottom: 15,
  },
  themeToggleButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 5,
    borderRadius: 20,
    backgroundColor: 'transparent',
  },
  themeToggleText: {
    fontSize: 18,
    color: '#007BFF',
  },
  lightAyatContainer: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  darkAyatContainer: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#444',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
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
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  darkTranslation: {
    fontSize: 14,
    color: '#CCC',
    marginTop: 5,
  },
});

export default SurahYasinScreen;
