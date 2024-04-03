"use client";
import { useSearchParams } from "next/navigation";

export default function GetDataPage() {
  const params = useSearchParams();

  return <pre>{params}</pre>;
}
