import NavBar from "@/components/NavBar";
import Home from "@/components/Home";
import Footer from "@/components/Footer";

export default function Main() {
  return (
    <main className="bg-base flex h-screen w-screen">
      <div className="bg-main-texture flex h-screen w-screen flex-col">
        <Home />
        <Footer />
      </div>
    </main>
  );
}
