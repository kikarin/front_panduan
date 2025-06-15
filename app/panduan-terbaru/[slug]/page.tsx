import PanduanDetail from "@/components/PanduanDetailTerbaru";
import { allArticlesData } from "@/data/panduanTerbaru";

export default function DetailTerbaru({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const guide = allArticlesData[slug];

  if (!guide) {
    return (
      <div className="p-10 text-center text-red-500">Panduan tidak ditemukan.</div>
    );
  }

  return <PanduanDetail {...guide} />;
}
