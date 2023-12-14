import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import Image from "next/image";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: "50px",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "100px",
    backgroundColor: "rgb(191 219 254)",
  },
  description: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  heading: {
    fontWeight: "bold",
    marginRight: "4px",
  },
  main: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

interface Props {
  patientName: string;
  patientAge: string;
  doctorName: string;
  symptoms: string;
  prescription: string;
  qrSrc: string;
}

function PdfDocument({
  patientName,
  patientAge,
  doctorName,
  symptoms,
  prescription,
  qrSrc,
}: Props) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Image src="/assets/logo.png" alt="QR" height={100} width={100} />
          <Text> E-Sanjeevani</Text>
        </View>

        <View style={styles.main}>
          <View>
            <View style={styles.description}>
              <Text style={styles.heading}>Patient Name:</Text>
              <Text>{patientName}</Text>
            </View>
            <View style={styles.description}>
              <Text style={styles.heading}>Patient Age:</Text>
              <Text>{patientAge}</Text>
            </View>
            <View style={styles.description}>
              <Text style={styles.heading}>Doctor Name:</Text>
              <Text>{doctorName}</Text>
            </View>
            <View style={styles.description}>
              <Text style={styles.heading}>Symptoms:</Text>
              <Text>{symptoms}</Text>
            </View>
            <View style={styles.description}>
              <Text style={styles.heading}>Prescription:</Text>
              <Text>{prescription}</Text>
            </View>
          </View>

          <Image src={qrSrc} alt="QR" height={200} width={200} />
        </View>
      </Page>
    </Document>
  );
}

export default PdfDocument;
