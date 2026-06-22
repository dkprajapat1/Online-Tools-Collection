import ToolLayout from "@/components/ToolLayout";
import QrGenerator from "@/components/tools/QrGenerator";

export const metadata = {
  title: "QR Code Generator - Create QR Codes Online | UtilityVerse",
  description: "Generate high-quality custom QR codes client-side. Convert any URL or plain text into a downloadable PNG code image instantly and privately.",
  openGraph: {
    title: "QR Code Generator | UtilityVerse",
    description: "Generate and download custom QR codes locally in your browser. 100% private."
  }
};

export default function QrPage() {
  return (
    <ToolLayout
      title="QR Generator"
      description="Convert text, strings, or URLs into standard QR Code graphics. Download high-resolution PNG image files instantly without hitting external server APIs."
    >
      <QrGenerator />
    </ToolLayout>
  );
}
