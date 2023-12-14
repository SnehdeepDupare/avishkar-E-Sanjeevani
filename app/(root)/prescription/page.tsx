import PrescriptionForm from "@/components/forms/PrescriptionForm";
import { currentUser } from "@clerk/nextjs";

async function Prescription() {
  const user = await currentUser();

  return (
    <section className="max-w-6xl mx-auto mt-5 px-5">
      <PrescriptionForm firstName={user?.firstName} lastName={user?.lastName} />
    </section>
  );
}

export default Prescription;
