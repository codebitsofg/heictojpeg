"use client";

import { json } from "stream/consumers";
import MobilePage from "../../components/MobilePage/MobilePage";
import Hero from "../../components/Hero";
import Features from "../../components/Features";
import Header from "../../components/Header";
import Integrate from "../../components/Integrate";
import Templates from "../../components/Templates";
import SaveTime from "../../components/SaveTime";
import Benefits from "../../components/Benefits";
import Footer from "../../components/Footer";
import FormSubmission from "../../components/FormSubmission";

function Home() {
  return (
    <>
      <Header />
      <FormSubmission />
      <Hero />
      <Features />
      <Integrate />
      <Templates />
      <Benefits />
      <SaveTime />
      <Footer />
    </>
  );
}

export default Home;
