import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 mt-5 pb-24">
      <div className="flex flex-col items-center gap-5 ">
        <div className="relative h-96 w-full">
          <Image
            src="/assets/diagnos1.jpeg"
            alt="QR Code Image"
            fill
            priority
            className="object-contain"
          />
        </div>

        <Link href="/buy">
          <button className="bg-blue-500 rounded-lg px-6 py-2 text-white ">
            Buy Medicines
          </button>
        </Link>
      </div>

      <div className="relative h-96 w-full">
        <Image
          src="/assets/E-Sanjeevni.png"
          alt="E-Sanjeevni Image"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="flex flex-col items-center gap-5 ">
        <div className="relative h-96 w-full">
          <Image
            src="/assets/diagnos.png"
            alt="QR Code Image"
            fill
            priority
            className="object-contain"
          />
        </div>

        <Link href="/prescription">
          <button className="bg-blue-500 rounded-lg px-6 py-2 text-white">
            Prescription
          </button>
        </Link>
      </div>
    </section>
  );
}
