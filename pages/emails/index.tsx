import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";
import EmailInbox from "@/components/EmailInbox/EmailInbox";

export default function index() {
  return (
    <div style={{ color: "white", display: "flex", alignItems: "center" }}>
      <Sidebar />
      <EmailInbox />
    </div>
  );
}
