import { FC } from 'react';
import { BarChart, Bar} from 'recharts';

const data = [
  { name: '#FF0000', uv: 4000, pv: 2400},
];

export const AlzheimersBarChart: FC = () => {

    return (
        <BarChart style={{ marginLeft: 'auto' }} width={80} height={70} data={data} layout="horizontal">
            <Bar dataKey="pv" fill="#FF0000" />
            <Bar dataKey="uv" fill="#32CD32" />
        </BarChart>
      );
}