import Image from "next/image";

export default function MyImage() {
  return (
    <div
      className="rounded-full mx-32 bg-green-400 h-40 w-40
                flex items-center justify-center drop-shadow-2x m-3"
    >
      <Image
        src="/photo.svg"
        alt="Image of Santiago Gaona"
        className="w-auto h-full -ml-50 rounded-full"
        width={800}
        height={100}
      />
    </div>
  );
}
