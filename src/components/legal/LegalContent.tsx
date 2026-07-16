interface LegalContentProps {
  content: string;
}

export default function LegalContent({ content }: LegalContentProps) {
  const paragraphs = content.split("\n").filter(Boolean);

  return (
    <div className="space-y-3 text-neutral-700 leading-relaxed">
      {paragraphs.map((paragraph, idx) => {
        if (paragraph.startsWith("- ")) {
          const items = paragraphs
            .filter((p) => p.startsWith("- "))
            .filter((p, i, arr) => arr.indexOf(p) === i);

          if (paragraph !== items[0]) return null;

          return (
            <ul key={idx} className="list-disc space-y-1 pl-6">
              {items.map((item, itemIdx) => (
                <li key={itemIdx}>{item.slice(2)}</li>
              ))}
            </ul>
          );
        }

        return <p key={idx}>{paragraph}</p>;
      })}
    </div>
  );
}
