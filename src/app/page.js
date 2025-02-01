import React from "react";
import NavHeader from "../components/nav";
import ContentLists from "./_services/content-lists";

export default function Home() {
  return (
    <div>
      <NavHeader />
      <main className="main-content">
        <ContentLists />
      </main>
    </div>
  );
}