"use client";

import WebCamera from "@/components/WebCamera";

function ScannerPage() {
  return (
    <section className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-4 mt-5 pb-24">
      <div className="flex flex-col items-center">
        <h3 className="font-bold text-3xl">QR Code Scanner</h3>
        <p className="text-gray-400">
          Please place your QR Code in front of camera.
        </p>
      </div>
      <WebCamera />

      <p>No result</p>
    </section>
  );
}

export default ScannerPage;
