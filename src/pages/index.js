import Classe from "../components/classe/classe";
import Aboutus from "../components/aboutus/aboutus";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Pricing from "../components/pricing/pricing";
import Features from "../components/features/features";
import Learning from "../components/learning/learning";

export default function Home() {
  return (
    <div className="bg-[#0c0c0c]">
      <Header />
      <Learning />
      <Features />
      <Pricing />
      <Classe />
      <Aboutus />
      <Footer />
    </div>
  );
}
