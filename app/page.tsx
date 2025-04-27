import Home from "../components/Home";
import Error from "./error";

export const metadata = {
  title: "HomePage - BookIT"
}

const getRooms = async (searchParams: string) => {
  const params = await searchParams;

  const urlParams = new URLSearchParams(params);
  const queryString = urlParams.toString();
  const res = await fetch(`${process.env.API_URL}/api/rooms?${queryString}`, { 
    cache: 'no-cache' 
  });
  return res.json();
}

export default async function HomePage({ searchParams }: { searchParams: string }) {
  const data = await getRooms(searchParams);

  if(data?.message) {
    return <Error error={data} />
  }
  console.log(data);

  return ( <Home data={data} /> );
}
