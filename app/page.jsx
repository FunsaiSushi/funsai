import Bento from "./ui/Bento";
import Doors from "./ui/Doors";
import VertexBackground from "./ui/VertexBackground";

export default function Page() {
  return (
    <div>
      <Doors />
      <div className="relative container mx-auto min-h-screen flex justify-center items-center max-w-6xl">
        <div className="w-full z-10">
          <Bento />
        </div>
      </div>
      <VertexBackground
        className="absolute top-0 left-0 w-full h-full z-[-99]"
        color="rgba(255, 255, 255, 0.2)"
      />
    </div>
  );
}
