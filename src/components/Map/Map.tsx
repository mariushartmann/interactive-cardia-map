import "./Map.scss";
import { ores, items } from "../../data";
import { useCallback } from "react";
import { useAppStore } from "../../store/appStore";

export const Map = () => {
  const { visibleOres, visibleItems } = useAppStore();

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

  const renderItems = useCallback(() => {
    const renderesItems = items.filter((i) =>
      i.ids.some((x) => visibleItems.includes(x))
    );

    return renderesItems
      .filter((x) => x.data !== null)
      .map((item) => {
        const point = (item.data as string).split(",");
        return (
          <image
            key={item.ids[0]}
            width={30}
            height={22.5}
            href={process.env.PUBLIC_URL + "/item.png"}
            x={Number(point[0]) - 15}
            y={Number(point[1]) - 11}
          />
        );
      });
  }, [visibleItems]);

  return (
    <svg viewBox="0 0 1343 1004">
      <image
        width={1343}
        height={1004}
        href={process.env.PUBLIC_URL + "/Cardia.jpg"}
      ></image>
      {renderOres()}
      {renderItems()}
    </svg>
  );
};
