import Image from "next/image";

export default function Home(props: any) {
  return (
    <div>
      <p>{props.username}</p>
    </div>
  );
}

export async function getServerSideProps() {
  return { props: { username: process.env.USERNAME } };
}
