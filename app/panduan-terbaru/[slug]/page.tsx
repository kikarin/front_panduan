import PanduanDetail from "@/components/PanduanDetailTerbaru";
import { allArticlesData } from "@/data/panduanTerbaru";

export function generateStaticParams() {
  return Object.keys(allArticlesData).map((slug) => ({ slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function DetailTerbaru({ params }: Props) {
  const { slug } = await params; // Await the params promise
  const guide = allArticlesData[slug];

  if (!guide) {
    return (
      <div className="p-10 text-center text-red-500">
        Panduan tidak ditemukan.
      </div>
    );
  }

  return <PanduanDetail {...guide} />;
}