"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

interface Data {
  session_id: string;
  meds: string[];
  date: string;
}

function ScannerPage() {
  const generateSessionId = (): string => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const sessionIdLength = 6;
    let sessionId = "";
    for (let i = 0; i < sessionIdLength; i++) {
      sessionId += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return sessionId;
  };

  const getTodayDate = (): string => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    return mm + "/" + dd + "/" + yyyy;
  };

  const [data, setData] = useState<Data>({
    session_id: generateSessionId(),
    meds: [],
    date: getTodayDate(),
  });

  const addOrRemoveMed = (med: string) => {
    if (data.meds.includes(med)) {
      setData((prevData) => ({
        ...prevData,
        meds: prevData.meds.filter((item) => item !== med),
      }));
    } else {
      setData((prevData) => ({
        ...prevData,
        meds: [...prevData.meds, med],
      }));
    }
  };

  const handleSubmit = (): string => {
    const newSessionId = generateSessionId();
    const newDate = getTodayDate();
    setData((prevData) => ({
      ...prevData,
      session_id: newSessionId,
      date: newDate,
    }));
    const jsonData = JSON.stringify(data);
    console.log(jsonData);
    return jsonData;
  };

  return (
    <section className="max-w-6xl mx-auto flex flex-col gap-4 mt-5 pb-24 px-5">
      <div className="">
        <h3 className="font-bold text-3xl">Buy Medicines</h3>
        <p className="text-gray-500">
          Select the medicines you want to purchase.
        </p>
      </div>

      <div className="max-w-3xl flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <p>Medicine A</p>
          <Button
            className="bg-blue-500 hover:bg-blue-400"
            onClick={() => addOrRemoveMed("A")}
          >
            {data.meds.includes("A") ? "Remove" : "Add"}
          </Button>
        </div>

        <Separator />

        <div className="flex items-center justify-between">
          <p>Medicine B</p>
          <Button
            className="bg-blue-500 hover:bg-blue-400"
            onClick={() => addOrRemoveMed("B")}
          >
            {data.meds.includes("B") ? "Remove" : "Add"}
          </Button>
        </div>

        <Separator />

        <Button
          className="bg-blue-500 hover:bg-blue-400 self-end mt-5"
          onClick={handleSubmit}
        >
          Proceed
        </Button>
      </div>
    </section>
  );
}

export default ScannerPage;
