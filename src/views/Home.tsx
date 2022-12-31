import { Modal } from "../components/global/Modal";
import { useQrCode } from "../hooks/useQrCode";
import { CardsSection } from "../partials/home/CardsSection";

export const Home = () => {
  const { qrCode, connected, isLoading } = useQrCode();
  return (
    <>
      <Modal connected={connected} qrCode={qrCode} isLoading={isLoading} />
      <div className="container lg:h-screen bg-slate-100 p-20">
        <CardsSection />
      </div>
    </>
  );
};
