import ToolLayout from "@/components/ToolLayout";
import WordCounter from "@/components/tools/WordCounter";

export const metadata = {
  title: "Word & Character Counter - Real-time Analysis | UtilityVerse",
  description: "Count words, characters, sentences, paragraphs, and spaces in real-time. Estimate reading times instantly with our clean writing analysis tool.",
  openGraph: {
    title: "Word & Character Counter | UtilityVerse",
    description: "Analyze your writing in real-time. Get detailed counts and estimated reading time."
  }
};

export default function WordCounterPage() {
  return (
    <ToolLayout
      title="Word Counter"
      description="Analyze text metrics in real-time. Count words, characters, sentences, paragraphs, and spaces, and get estimated reading time instantly."
    >
      <WordCounter />
    </ToolLayout>
  );
}
