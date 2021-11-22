import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend,
} from "recharts";
import { colors } from "../../utils";

const RadarStats = ({ detail, dataStats, types }) => {
  return (
    <RadarChart outerRadius={80} width={400} height={250} data={dataStats}>
      <PolarGrid />
      <PolarAngleAxis dataKey="pokemon" />
      <PolarRadiusAxis angle={60} domain={[0, 150]} />
      <Radar
        name={detail && detail.name}
        dataKey="A"
        stroke={types && colors[types[0].type.name]}
        fill={types && colors[types[0].type.name]}
        fillOpacity={0.6}
      />
      <Legend />
    </RadarChart>
  );
};

export default RadarStats;
