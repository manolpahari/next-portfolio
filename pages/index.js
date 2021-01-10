import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">
        <a>Go to about page</a>
      </Link>
      <p>Welcome to home page</p>
    </div>
  );
};
export default Home;
