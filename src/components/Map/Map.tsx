import "./Map.scss";
import { ores, items, bosses } from "../../data";
import { useCallback } from "react";
import { useAppStore } from "../../store/appStore";
import {
  BossIdentifier,
  ItemIdentifier,
  OreIdentifier,
} from "../../data/model";

export const Map = () => {
  const { visibleOres, visibleItems, visibleBosses } = useAppStore();

  const renderOres = useCallback(() => {
    const renderesOres = ores.filter((o) =>
      o.ids.some((x) => visibleOres.includes(x as OreIdentifier))
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
      i.ids.some((x) => visibleItems.includes(x as ItemIdentifier))
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

  const renderBosses = useCallback(() => {
    const renderesBosses = bosses.filter((b) =>
      b.ids.some((x) => visibleBosses.includes(x as BossIdentifier))
    );

    return renderesBosses
      .filter((x) => x.data !== null)
      .map((boss) => {
        const point = (boss.data as string).split(",");
        return (
          <image
            key={boss.ids[0]}
            width={32}
            height={32}
            href={process.env.PUBLIC_URL + "/boss.png"}
            x={Number(point[0]) - 16}
            y={Number(point[1]) - 16}
          />
        );
      });
  }, [visibleBosses]);

  return (
    <svg viewBox="0 0 1343 1004">
      <image
        width={1343}
        height={1004}
        href={process.env.PUBLIC_URL + "/Cardia.jpg"}
      ></image>
      {renderOres()}
      {renderItems()}
      {renderBosses()}
    </svg>
  );
};
