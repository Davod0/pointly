
interface FeatureListProps {
  point1: string;
  point2: string;
  point3: string;
  point4: string;
}

const FeatureList = ({ point1, point2, point3, point4 }: FeatureListProps) => {
  const points = [point1, point2, point3, point4];

  return (
    <ul className="mb-10 space-y-3">
      {points.map((point, idx) => (
        <li key={idx} className="flex items-center">
          <span className="w-2 h-2 bg-violet-800 rounded-full mr-3"></span>
          <span className="text-gray-700">{point}</span>
        </li>
      ))}
    </ul>
  );
};

export default FeatureList;
