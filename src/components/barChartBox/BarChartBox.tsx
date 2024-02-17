import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import "./barChartBox.scss";

type Props = {
  title: string;
  chartData: object[];
  dataKey: string;
  color: string;
};

const BarChartBox = (props: Props) => {
  return (
    <div className="barChartBox">
      <h1>{props.title}</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={150}>
          <BarChart data={props.chartData}>
            <Tooltip
              contentStyle={{ background: "#0e1521", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "none" }}
            />
            <XAxis dataKey="name" />
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartBox;
