import ToolLayout from "@/components/ToolLayout";
import AgeCalculator from "@/components/tools/AgeCalculator";

export const metadata = {
  title: "Age Calculator - Calculate Exact Age Online | UtilityVerse",
  description: "Calculate your exact age down to the day. Computes years, months, days, next birthday countdown, and fun lifetime statistics based on your date of birth.",
  openGraph: {
    title: "Age Calculator | UtilityVerse",
    description: "Calculate your age in years, months, and days, along with next birthday countdown and fun stats."
  }
};

export default function AgePage() {
  return (
    <ToolLayout
      title="Age Calculator"
      description="Calculate your exact age down to the day. Computes years, months, and days based on your birth date with absolute accuracy."
    >
      <AgeCalculator />
    </ToolLayout>
  );
}
