import Navbar from "@/components/Navbar";
import Landing from "@/components/Landing";
import Services from "@/components/Services";
import AddNewService from "@/components/AddNewService";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import SectionTop from "@/components/SectionTop";

export default function Home() {
  return (
    <main className="relative">
      <SectionTop/>
      <Navbar/>
      <Landing/>
      <Services/>
      <AddNewService/>
      <Testimonials/>
      <Footer/>
    </main>
  );
}
