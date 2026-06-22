import ToolLayout from "@/components/ToolLayout";
import JsonFormatter from "@/components/tools/JsonFormatter";

export const metadata = {
  title: "JSON Formatter & Validator - Free Online Tool | UtilityVerse",
  description: "Format, validate, and prettify raw JSON code instantly. Fast and secure local processing in your browser with detailed syntax error feedback.",
  openGraph: {
    title: "JSON Formatter & Validator | UtilityVerse",
    description: "Format and validate JSON data locally in your browser. 100% private."
  }
};

export default function JsonPage() {
  return (
    <ToolLayout
      title="JSON Formatter"
      description="Prettify, validate, format, and parse raw JSON code. Fast rendering, detailed syntax validation messages, and immediate local browser copy operations."
    >
      <JsonFormatter />
    </ToolLayout>
  );
}
