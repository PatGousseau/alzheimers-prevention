import { FC } from "react";
import { BarChart, Bar } from "recharts";

interface Props {
  affectSize: number;
}

export const AlzheimersBarChart: FC<Props> = ({ affectSize }) => {
  const data = [{ name: "Affect Size", value: affectSize }];

  return (
    <BarChart width={40} height={70} data={data}>
      <Bar dataKey="value" fill={affectSize >= 0 ? "#FF0000": "#32CD32"} />
    </BarChart>
  );
};

export default AlzheimersBarChart;
