import Login from "../components/login/login";

export default function Home() {
  return (
    <div>
      <Login />
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
