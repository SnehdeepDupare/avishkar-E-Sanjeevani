"use client";

export default function GetDataPage() {
  const jsonData = localStorage.getItem("jsonData");

  return <pre>{jsonData}</pre>;
}
