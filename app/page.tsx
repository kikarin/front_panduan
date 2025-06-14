import SearchSection from "@/components/SearchSection";
import PanduanPage from "@/components/PanduanPage";
import PanduanTerbaru from "@/components/PanduanTerbaru";

export default function HomePage() {
  return (
    <>
      <main>
        <SearchSection />
        <PanduanPage />
        <PanduanTerbaru />
        {/* Tambahkan section lainnya di sini */}
      </main>
    </>
  );
}
