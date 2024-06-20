import "./map.scss";
import { ores } from "../../data/index";
import { useCallback } from "react";

export const Map = () => {
  const renderOres = useCallback(() => {
    return ores.map((ore) => {
      return (
        <polygon
          key={ore.id}
          points={ore.data}
          fill={ore.color}
          fillOpacity={0.7}
          stroke="#000000"
          strokeWidth={2}
        />
      );
    });
  }, []);

  return (
    <svg viewBox="0 0 1343 1004">
      <image
        width={1343}
        height={1004}
        href={process.env.PUBLIC_URL + "/Cardia.jpg"}
      ></image>
      {renderOres()}
    </svg>
  );
};
