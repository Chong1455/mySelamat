import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";

const SopTextScreen = (props) => {
  return (
    <ScrollView style={styles.screen}>
      <Text style={styles.title}>
        Pelan Pemulihan Negara (PPN) - SOP {"\n"}FASA 1
      </Text>
      <Text style="description">
        Tempoh: 5 Julai 2021
        {"\n"}
        {"\n"}
        Kawalan Pergerakan:
        {"\n"}
        <Text>{"\u2022"}</Text>
        <Text style={{ paddingLeft: 5 }}>
          Tiada rentas sempadan negeri dan daerah (berdasarkan sempadan daerah
          ditetapkan Kerajaan Negeri).
        </Text>
        {"\n"}
        <Text>{"\u2022"}</Text>
        <Text style={{ paddingLeft: 5 }}>
          PDRM bertanggungjawab melaksanakan kawalan ke atas kawasan tempatan
          jangkitan dengan bantuan ATM, APM & RELA. Laluan keluar masuk kawasan
          PPN ditutup dan dikawal kemasukan oleh PDRM.
        </Text>
        {"\n"}
        <Text>{"\u2022"}</Text>
        <Text style={{ paddingLeft: 5 }}>
          Dua (2) orang sahaja wakil isi rumah dibenarkan keluar hanya untuk
          mendapatkan bekalan makanan, ubat, penokok diet dan keperluan asas
          dalam radius tidak melebihi 10 kilometer dari kediamannya.
        </Text>
      </Text>
      <Text style={styles.title}>{"\n"}FASA 2</Text>
      <Text style="description">
        Tempoh:
        {"\n"}
        Bermula pada 5 Julai 2021 (mulai 12.01 pagi) - Kelantan, Terengganu,
        Pahang, Perak dan Perlis
        {"\n"}
        Bermula pada 7 Julai 2021 (mulai 12.01 pagi) - Pulau Pinang
        {"\n"}
        Bermula pada 10 Julai 2021 (mulai 12.01 pagi) - Sabah Bermula pada 14
        Julai 2021 (mulai 12.01 pagi) - Sarawak
        {"\n"}
        {"\n"}
        Kawalan Pergerakan:
        {"\n"}
        <Text>{"\u2022"}</Text>
        <Text style={{ paddingLeft: 5 }}>
          Maksimum tiga (3) orang sahaja termasuk pesakit dibenarkan keluar
          untuk mendapatkan perkhidatan jagaan kesihatan, perbatan, ujian
          saringan, program vaksinasi, keselamatan atau kecemasan dalam radius
          tidak melebihi 10 kilometer dari kediamannya.
        </Text>
        {"\n"}
        <Text>{"\u2022"}</Text>
        <Text style={{ paddingLeft: 5 }}>
          Bilangan penumpang dalam teksi dan e-hailing dihadkan kepada dua (2)
          orang sahaja termasuk pemandu, penumpang mesti duduk di belakang.
        </Text>
        {"\n"}
        <Text>{"\u2022"}</Text>
        <Text style={{ paddingLeft: 5 }}>
          Bilangan orang yang dibenarkan di dalam Kenderaan Jabatan atau Kereta
          Rasmi Jawatan adalah berdasarkan kapasiti kenderaan.
        </Text>
      </Text>
    </ScrollView>
  );
};

SopTextScreen.navigationOptions = {
  headerTitle: "SOP Text",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 18,
    marginVertical: 2,
    fontFamily: "open-sans-bold",
  },
  description: {
    fontSize: 14,
    marginVertical: 2,
    fontFamily: "open-sans",
  },
});

export default SopTextScreen;
