type SingleQuestionProps = {
  questionId: string;
  question: string;
  options: string[];
};

export default function SingleQuestion({
  question,
  options,
}: SingleQuestionProps) {
  return (
    <div className="p-4 border rounded-lg shadow-sm">
      <h3 className="font-semibold mb-2">{question}</h3>
      <div className="space-y-2">
        {options.map((opt) => (
          <label key={opt} className="block">
            <input type="radio" name={question} value={opt} className="mr-2" />
            {opt}
          </label>
        ))}
      </div>
    </div>
  );
}
