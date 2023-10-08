import NavBar from "@/components/NavBar";
import Home from "@/components/Home";
import Footer from "@/components/Footer";

export default function Main() {
  return (
    <main className="flex h-screen w-screen bg-base">
      <div className="flex h-screen w-screen flex-col bg-main-texture">
        <Home />
        <Footer />
      </div>
    </main>
  );
}
