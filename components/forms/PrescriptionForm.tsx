"use client";

import { useState } from "react";
import QRCode from "qrcode";
import PdfDocument from "../PdfDocument";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";

interface Props {
  firstName: string | null | undefined;
  lastName: string | null | undefined;
}

function PrescriptionForm({ firstName, lastName }: Props) {
  const [patientName, setPatientName] = useState("");
  const [patientAge, setPatientAge] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [prescription, setPrescription] = useState("");

  const doctorName = `Dr. ${firstName} ${lastName}`;

  const [qrSrc, setQrSrc] = useState("");
  const [open, setOpen] = useState(false);

  const generateQRCode = () => {
    QRCode.toDataURL(prescription).then(setQrSrc);

    setOpen(!open);
  };

  return (
    <>
      <div>
        <h1 className="font-bold text-3xl">Patient Info</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-5">
          <input
            type="text"
            placeholder="Patient Name"
            className="presription-input"
            onChange={(e) => setPatientName(e.target.value)}
            value={patientName}
            required
          />
          <input
            type="number"
            placeholder="Patient Age"
            className="presription-input"
            onChange={(e) => setPatientAge(e.target.value.toString())}
            value={patientAge}
            required
          />
        </div>
      </div>
      <div className="mt-5">
        <h1 className="font-bold text-3xl">Prescription</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-5">
          <input
            type="text"
            placeholder="Doctor Name"
            className="presription-input"
            disabled
            value={doctorName}
            required
          />
          <input
            type="text"
            placeholder="Symptoms"
            className="presription-input"
            onChange={(e) => setSymptoms(e.target.value)}
            value={symptoms}
            required
          />
        </div>

        <input
          type="text"
          placeholder="Prescription"
          className="presription-input w-full mt-5"
          onChange={(e) => setPrescription(e.target.value)}
          value={prescription}
          required
        />
      </div>
      <div className="w-full text-right">
        <button
          className="bg-blue-500 rounded-lg px-6 py-2 text-white mt-5 "
          onClick={generateQRCode}
        >
          Print
        </button>
      </div>

      {open && (
        <PdfDocument
          patientName={patientName}
          patientAge={patientAge}
          doctorName={doctorName}
          symptoms={symptoms}
          prescription={prescription}
          qrSrc={qrSrc}
        />
      )}
    </>
  );
}

export default PrescriptionForm;
