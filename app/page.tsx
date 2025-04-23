import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-center bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
        Hello Mats!
      </h1>
    </div>
  );
}
