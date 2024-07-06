import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';

const doaText = "Doa adalah permohonan atau permintaan yang disampaikan kepada Allah dengan penuh harapan. Dalam Islam, doa merupakan bentuk ibadah yang sangat dianjurkan. Doa bisa dilakukan dalam berbagai kesempatan dan keadaan, baik dalam keadaan bahagia maupun dalam kesulitan.";
const arabicText = "﴾ الدعاء ﴿";

const doaAyats = [
  { id: '1', text: ' أَعُوْذُ بِاللهِ مِنَ الشَّيْطَانِ الرَّجِيْمِ، بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ، الْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَ، حَمْدَ الشَّاكِرِيْنَ حَمْدَ النَّاعِمِيْنَ، حَمْدًا يُّوَافِي نِعَمَهُ وَيُكَافِئُ مَزِيْدَهُ، يَا رَبَّنَا لَكَ الْحَمْدُ كَمَا يَنْبَغِيْ لِجَلَالِ وَجْهِكَ وَعَظِيْمِ سُلْطَانِكَ، اللّٰهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَّعَلَى اٰلِ سَيِّدِنَا مُحِمَّدٍ', translation: 'Doa Aku berlindung diri kepada Engkau dari setan yang di rajam. Dengan nama Allah yang Maha Pengasih lagi Maha Penyayang. Segala puji bagi Allah, Tuhan seru sekalian alam, sebagaimana orang-orang yang bersyukur dan orang yang memperoleh nikmat sama memuji, dengan pujian yang sesuai dengan nikmatnya dan memungkinkan di tambah nikmatnya. Tuhan kami, hanya Engkau segala puji, sebagaimana yang patut terhadap kemuliaan Engkau dan keagungan Engkau. Ya Allah tambahkanlah kesejahteraan dan keselamatan kepada penghulu kami Nabi Muhammad dan kepada keluarganya.' },
  { id: '2', text: 'اَللّٰهُمَّ تَقَبَّلْ وَأَوْصِلْ ثَوَابَ مَا قَرَاْنَاهُ مِنَ الْقُرْآنِ الْعَظِيْمِ وَمَا هَلَّلْنَا وَمَا سَبَّحْنَا وَمَا اسْتَغْفَرْنَا وَمَا صَلَّيْنَا عَلَى سَيِّدِنَا مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ هَدِيَّةً وَاصِلَةً وَرَحْمَةً نَازِلَةً وَبَرَكَةً شَامِلَةً إِلَى حَضَرَةِ حَبِيْبِنَا وَشَفِيْعِنَا وَقُرَّةِ أَعْيُنِنَا سَيِّدِنَا وَمَوْلَانَا مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ، وَإِلَى جَمِيْعِ إِخْوَانِهِ مِنَ الْأَنْبِيَاءِ وَالْمُرْسَلِيْنَ وَالْأَوْلِيَاءِ وَالشُّهَدَاءِ وَالصَّالِحِيْنَ وَالصَّحَابَةِ وَالتَّابِعِيْنَ وَالْعُلَمَاءِ الْعَامِلِيْنَ وَالْمُصَنِّفِيْنَ الْمُخْلِصِيْنَ وَجَمِيْعِ الْمُجَاهِدِيْنَ فِي سَبِيْلِ اللهِ رَبِّ الْعَلَمِيْنَ وَالْمَلَائِكَةِ الْمُقَرَّبِيْن، خُصُوْصًا إِلَى سَيِّدِنَا الشَّيْخِ عَبْدِ الْقَادِرِ الْجِيْلَانِيّ، ثُمَّ إِلَى أَرْوَاحِ جَمِيْعِ أَهْلِ الْقُبُوْرِ مِنَ الْمُسْلِمِيْنَ وَالْمُسْلِمَاتِ وَالْمُؤْمِنِيْنَ وَالْمُؤْمِنَاتِ مِنْ مَشَارِقِ الْأَرْضِ وَمَغَارِبِهَا بَرِّهَا وَبَحْرِهَا خُصُوْصًا إِلَى آبَائِنَا وَاُمَّهَاتِنَا وَأَجْدَادِنَا وَجَدَّاتِنَا، وَنَخَصُّ خَصُوْصًا إِلَى مَنِ اجْتَمَعْنَا هٰهُنَا بِسَبَبِهِ وَلِأَجْلِهِ', translation: 'Ya Allah, terimalah dan sampaikanlah pahala ayat-ayat Quranul ‘adhim yang telah kami baca, tahlil kami, tasbih dan istighfar kami, dan bacaan shalawat kami kepada penghulu kami Nabi Muhammad dan kepada keluarganya. Sebagai hadiah yang bisa sampai, rahmat yang turun, dan berkah yang cukup kepada kekasih kami, penolong dan buah mata kami, penghulu dan pemimpin kami, yaitu Nabi Muhammad ﷺ, kepada semua temannya dari para Nabi dan para Utusan, kepada para wali, pahlawan yang gugur (Syuhada), orang-orang yang salih, para sahabat, dan tabi’in (para pengikutnya); kepada para ulama yang mengamalkan ilmunya, para pengarang yang ikhlas, kepada semua pejuang di jalan Allah (membela agama-Nya), Allah raja seru sekalian alam; dan kepada para Malaikat muqarrabin, terutama Syekh Abdul Qadir al-Jilani, kemudian kepada ahli kubur, muslim yang laki-laki dan yang perempuan, mukmin yang laki-laki dan yang perempuan, dari dunia timur dan barat di darat dan di laut, terutama lagi kepada bapak-bapak kami, ibu-ibu kami, nenek-nenek kami yang laki-laki dan yang perempuan, lebih terutama lagi kepada orang yang menyebabkan kami sekalian berkumpul di sini dan untuk keperluannya.' },
  { id: '3', text: 'اَللّٰهُمَّ اغْفِرْ لَهُمْ وَارْحَمْهُمْ وَعَافِهِمْ وَاعْفُ عَنْهُمْ، اَللّٰهُمَّ أَنْزِلِ الرَّحْمَةَ وَالْمَغْفِرَةَ عَلَى أَهْلِ الْقُبُوْرِ مِنْ أَهْلِ لَا إِلٰهَ إِلَّا اللهُ مُحَمَّدٌ رَّسُوْلُ اللهِ', translation: 'Ya Allah ampunilah mereka, kasihanilah mereka, dan maafkanlah mereka. Ya Allah turunkanlah rahmat, dan ampunan kepada ahlul kubur yang ahli mengucapkan “Laa ilaaha illaallah, Muhammadur rasulullah” (Tidak ada tuhan selain Allah, Muhammad Utusan Allah).' },
  { id: '4', text: 'رَبَّنَا أَرِنَا الْحَقَّ حَقًّا وَّارْزُقْنَا اتِّبَاعَهُ، وَأَرِنَا الْبَاطِلَ بَاطِلًا وَّارْزُقْنَا اجْتِنَابَهُ، رَبَّنَا اٰتِنَا فِي الدُّنْيَا حَسَنَةً وَّفِي الْآخِرَةِ حَسَنَةً وَّقِنَا عَذَابَ النَّارِ، سُبْحَانَ رَبِّكَ رَبِّ الْعِزَّةِ عَمَّا يَصِفُوْنَ وَسَلَامٌ عَلَى الْمُرْسَلِيْنَ وَالْحَمْدُ لِلّٰهِ رَبِّ الْعَلَمِيْنَ، اَلْفَاتِحَة', translation: 'Tuhan kami, tunjukkanlah kami kebenaran dengan jelas, jadikanlah kami pengikutnya, tunjukkanlah kami perkara batil dengan jelas, dan jadikanlah kami menjauhinya. Tuhan kami, berikanlah kami kebaikan di dunia dan kebaikan di akhirat, dan jagalah kami dari siksa api neraka, Maha Suci Tuhanku, tuhan yang bersih dari sifat yang di berikan oleh orang-orang kafir, semoga keselamatan tetap melimpahkan kepada para Utusannya dan segala puji bagi Allah Tuhan seru sekalian Alam. Al Fatihah.' },
];

const DoaScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ScrollView style={isDarkMode ? styles.darkContainer : styles.lightContainer}>
      <View style={styles.headerContainer}>
        <Text style={isDarkMode ? styles.darkHeaderText : styles.lightHeaderText}>Doa</Text>
        <TouchableOpacity onPress={toggleTheme} style={styles.themeToggleButton}>
          <Text style={styles.themeToggleText}>{isDarkMode ? '🌞' : '🌙'}</Text>
        </TouchableOpacity>
      </View>
      <Text style={isDarkMode ? styles.darkIntroduction : styles.lightIntroduction}>{doaText}</Text>
      <Text style={isDarkMode ? styles.darkArabicText : styles.lightArabicText}>{arabicText}</Text>
      {doaAyats.map((ayat) => (
        <View key={ayat.id} style={styles.ayatContainer}>
          <Text style={isDarkMode ? styles.darkAyatText : styles.lightAyatText}>{ayat.text}</Text>
          <Text style={isDarkMode ? styles.darkTranslation : styles.lightTranslation}>{ayat.translation}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  lightContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  darkContainer: {
    flex: 1,
    backgroundColor: '#333',
    padding: 16,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 16,
    position: 'relative',
  },
  lightHeaderText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  darkHeaderText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#F5F5F5',
    marginBottom: 8,
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
  lightIntroduction: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
    textAlign: 'center',
  },
  darkIntroduction: {
    fontSize: 16,
    color: '#F5F5F5',
    marginBottom: 16,
    textAlign: 'center',
  },
  lightArabicText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 16,
  },
  darkArabicText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',  // Putih untuk mode gelap
    textAlign: 'center',
    marginBottom: 16,
  },
  ayatContainer: {
    marginBottom: 12,
    alignItems: 'center',
  },
  lightAyatText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
    textAlign: 'center',
  },
  darkAyatText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#F5F5F5',
    marginBottom: 4,
    textAlign: 'center',
  },
  lightTranslation: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
  },
  darkTranslation: {
    fontSize: 16,
    color: '#CCC',
    textAlign: 'center',
  },
});

export default DoaScreen;
