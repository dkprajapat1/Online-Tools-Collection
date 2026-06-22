import ToolLayout from "@/components/ToolLayout";
import EmiCalculator from "@/components/tools/EmiCalculator";

export const metadata = {
  title: "EMI Calculator - Loan & Mortgage EMI Calculator | UtilityVerse",
  description: "Calculate your monthly EMI payments, total interest payable, and overall loan repayment costs with our clean mathematical EMI calculator.",
  openGraph: {
    title: "EMI Loan Calculator | UtilityVerse",
    description: "Plan your loans with precision. Compute monthly payments, interest, and totals instantly."
  }
};

export default function EmiPage() {
  return (
    <ToolLayout
      title="EMI Calculator"
      description="Estimate monthly loan repayments (Equated Monthly Installments) for home, car, or personal loans. Use visual sliders to configure amounts, rates, and tenures."
    >
      <EmiCalculator />
    </ToolLayout>
  );
}
