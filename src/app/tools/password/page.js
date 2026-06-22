import ToolLayout from "@/components/ToolLayout";
import PasswordGenerator from "@/components/tools/PasswordGenerator";

export const metadata = {
  title: "Secure Password Generator - Create Strong Passwords | UtilityVerse",
  description: "Create highly secure random passwords locally. Configure length, casing, numbers, and symbols with a live strength indicator.",
  openGraph: {
    title: "Secure Password Generator | UtilityVerse",
    description: "Generate cryptographically secure random passwords locally. 100% private."
  }
};

export default function PasswordPage() {
  return (
    <ToolLayout
      title="Password Generator"
      description="Create secure, randomized passwords locally. Fully configure character inclusions, monitor password strength, and copy generated values with a single click."
    >
      <PasswordGenerator />
    </ToolLayout>
  );
}
