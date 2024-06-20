import "./Map.scss";
import { ores } from "../../data/index";
import { useCallback } from "react";
import { useAppStore } from "../../store/appStore";

export const Map = () => {
  const { visibleOres } = useAppStore();

  const renderOres = useCallback(() => {
    const renderesOres = ores.filter((o) =>
      o.ids.some((x) => visibleOres.includes(x))
    );

    return renderesOres
      .filter((x) => x.data !== null)
      .map((ore) => {
        return (
          <polygon
            key={ore.ids[0]}
            points={ore.data as string}
            fill={ore.color}
            fillOpacity={0.6}
            stroke="#000000"
            strokeWidth={2}
          />
        );
      });
  }, [visibleOres]);

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
