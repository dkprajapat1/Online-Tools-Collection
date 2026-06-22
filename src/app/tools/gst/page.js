import ToolLayout from "@/components/ToolLayout";
import GstCalculator from "@/components/tools/GstCalculator";

export const metadata = {
  title: "GST Calculator - Calculate Add/Remove GST Online | UtilityVerse",
  description: "Calculate Goods and Services Tax (GST) in seconds. Toggle between inclusive (remove GST) and exclusive (add GST) modes with our clean online utility.",
  openGraph: {
    title: "GST Calculator | UtilityVerse",
    description: "Calculate GST amounts, net, and gross prices easily in your browser. 100% private."
  }
};

export default function GstPage() {
  return (
    <ToolLayout
      title="GST Calculator"
      description="Perform quick tax calculations. Effortlessly calculate GST payable or base amounts by toggling between Add GST (exclusive) and Remove GST (inclusive) modes."
    >
      <GstCalculator />
    </ToolLayout>
  );
}
