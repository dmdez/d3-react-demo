import * as React from "react";
import { pie, arc, PieArcDatum } from "d3-shape";
import styled from "styled-components";

type Props = {
  size?: number;
  data: PieData[];
};

type PieData = {
  name: string;
  value: number;
  color: string;
};

const PiePath = styled("path")`
  &:hover {
    opacity: 0.5;
  }
`;

export default function PieChart({ size = 400, data }: Props) {
  const radius = size / 2;

  const createArc = arc<PieArcDatum<PieData>>()
    .innerRadius(0)
    .outerRadius(radius);

  const arcs = pie<PieData>()
    .value(d => d.value)(data)
    .map(piece => ({
      pathData: createArc(piece),
      centerData: createArc.centroid(piece),
      data: piece.data
    }));

  return (
    <svg width={size} height={size}>
      <g transform={`translate(${radius} ${radius})`}>
        {arcs.map(({ pathData, centerData, data }, i) => (
          <React.Fragment key={i}>
            <PiePath d={pathData || ""} fill={data.color} />
            <path
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              d={pathData || ""}
            />
            <text
              transform={`translate(${centerData})`}
              textAnchor="middle"
              fill="#ffffff"
              style={{ fontSize: 22 }}
            >
              {data.name} ({data.value})
            </text>
          </React.Fragment>
        ))}
      </g>
    </svg>
  );
}
