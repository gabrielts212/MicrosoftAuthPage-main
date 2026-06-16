import Register from "../components/register/register";

export default function Home() {
  return (
    <div>
      <Register />
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const token = req.cookies?.authorization;

  if (token) {
    return {
      redirect: {
        destination: "/home",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
