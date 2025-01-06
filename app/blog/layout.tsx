import Providers from "@/lib/providers";
import { getBLogName } from "@/lib/requests";

export async function generateMetadata() {
  const data = await getBLogName();
}
export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getBLogName();
  return (
    <>
      <Providers>
        <main className="px-4 container max-w-7xl">{children}</main>
      </Providers>
    </>
  );
}
