import ModalControl from "@/components/ModalControl";
import ModalOutlet from "@/components/ModalOutlet";

export default function Home() {
  return (
    <div className="container h-screen flex flex-col max-w-sm py-16">
      <ModalControl />
      <div className="mt-8 relative flex-1">
        <ModalOutlet />
      </div>
    </div>
  );
}
