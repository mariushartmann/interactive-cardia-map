import { ores, items, bosses, npcs } from "../../data";
import { useCallback, useState } from "react";
import { useAppStore } from "../../store/appStore";
import {
  BossIdentifier,
  DataItem,
  ItemIdentifier,
  NpcIdentifier,
  OreIdentifier,
} from "../../data/model";
import { Button, Modal, ModalClose, ModalDialog, Typography } from "@mui/joy";
import { useTranslation } from "react-i18next";
import { DrawerFilters } from "../Filter/Filter";
import FilterIcon from "@mui/icons-material/Tune";

export const Map = () => {
  const { t } = useTranslation();
  const [showFilters, setShowFilters] = useState(false);
  const { visibleOres, visibleItems, visibleBosses, visibleNpcs } =
    useAppStore();
  const [modalData, setModalData] = useState<DataItem>(ores[0]);
  const [modalOpen, setModalOpen] = useState(false);

  const renderOres = useCallback(() => {
    const renderedOres = ores.filter((o) =>
      o.ids.some((x) => visibleOres.includes(x as OreIdentifier))
    );

    return renderedOres
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
            onClick={() => {
              setModalData(ore);
              setModalOpen(true);
            }}
            style={{ cursor: "pointer" }}
          />
        );
      });
  }, [visibleOres]);

  const renderItems = useCallback(() => {
    const renderedItems = items.filter((i) =>
      i.ids.some((x) => visibleItems.includes(x as ItemIdentifier))
    );

    return renderedItems
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
            onClick={() => {
              setModalData(item);
              setModalOpen(true);
            }}
            style={{ cursor: "pointer" }}
          />
        );
      });
  }, [visibleItems]);

  const renderBosses = useCallback(() => {
    const renderedBosses = bosses.filter((b) =>
      b.ids.some((x) => visibleBosses.includes(x as BossIdentifier))
    );

    return renderedBosses
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
            onClick={() => {
              setModalData(boss);
              setModalOpen(true);
            }}
            style={{ cursor: "pointer" }}
          />
        );
      });
  }, [visibleBosses]);

  const renderNpcs = useCallback(() => {
    const renderedNpcs = npcs.filter((n) =>
      n.ids.some((x) => visibleNpcs.includes(x as NpcIdentifier))
    );

    return renderedNpcs
      .filter((x) => x.data !== null)
      .map((npc) => {
        const point = (npc.data as string).split(",");
        return (
          <image
            key={npc.ids[0]}
            width={28}
            height={28}
            href={process.env.PUBLIC_URL + "/npc.png"}
            x={Number(point[0]) - 14}
            y={Number(point[1]) - 14}
            onClick={() => {
              setModalData(npc);
              setModalOpen(true);
            }}
            style={{ cursor: "pointer" }}
          />
        );
      });
  }, [visibleNpcs]);

  return (
    <>
      <svg
        viewBox="0 0 1343 1004"
        style={{ maxHeight: "100%", maxWidth: "100%" }}
      >
        <image
          width={1343}
          height={1004}
          href={process.env.PUBLIC_URL + "/Cardia.jpg"}
        ></image>
        {renderOres()}
        {renderItems()}
        {renderBosses()}
        {renderNpcs()}
      </svg>
      <Button
        variant="outlined"
        color="neutral"
        startDecorator={<FilterIcon />}
        onClick={() => setShowFilters(true)}
        sx={{
          position: "absolute",
          top: 10,
          right: 10,
          backgroundColor: "#fff",
        }}
      >
        Filters
      </Button>
      <DrawerFilters
        open={showFilters}
        onChange={(v) => setShowFilters(v)}
      ></DrawerFilters>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <ModalDialog layout="center" variant="outlined">
          <ModalClose />
          <Typography level="h4">Here you can find:</Typography>
          {modalData.ids.length > 1 && (
            <ul>
              {modalData.ids.map((id) => (
                <li key={id}>{t(`${modalData.itemType}.${id}`)}</li>
              ))}
            </ul>
          )}
          {modalData.ids.length === 1 && (
            <Typography>
              {t(`${modalData.itemType}.${modalData.ids[0]}`)}
            </Typography>
          )}
        </ModalDialog>
      </Modal>
    </>
  );
};
