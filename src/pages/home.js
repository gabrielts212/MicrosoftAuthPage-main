import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import HomeSections from "../components/home/home";

export default function HomePage() {
  return (
    <div className="bg-[#0c0c0c]">
      <Header />
      <HomeSections />
      <Footer />
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const token = req.cookies?.authorization;

  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
