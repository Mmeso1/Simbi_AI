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
    <div className="p-4">
      <h3 className="font-medium mb-2 text-xl text-[#1E1E2F]">{question}</h3>
      <div className="space-y-2">
        {options.map((opt) => (
          <label
            key={opt}
            className="block font-normal text-base text-[#1E1E2F]"
          >
            <input type="radio" name={question} value={opt} className="mr-2" />
            {opt}
          </label>
        ))}
      </div>
    </div>
  );
}
