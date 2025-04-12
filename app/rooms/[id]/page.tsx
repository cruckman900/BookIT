import { RoomDetails } from "@/app/components/room/RoomDetails";
import Error from "@/app/error";

interface Props {
    params: { id: string }
}

const getRoom = async (id: string) => {
    const res = await fetch(`${process.env.API_URL}/api/rooms/${id}`);
    return res.json();
}

export default async function RoomDetailsPage({ params }: Props) {
    const { id } = await params;
    const data = await getRoom(id);

    if (data?.message) {
        return <Error error={data} />
    }

    return (<RoomDetails data={data} />);
}

export async function generateMetadata({ params }: Props) {
    const { id } = await params;
    const data = await getRoom(id);

    return {
        title: data?.room?.name,
    }
}