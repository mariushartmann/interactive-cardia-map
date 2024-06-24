import { ores, items, bosses } from "../../data";
import { useCallback, useState } from "react";
import { useAppStore } from "../../store/appStore";
import {
  BossIdentifier,
  DataItem,
  ItemIdentifier,
  OreIdentifier,
} from "../../data/model";
import { Button, Modal, ModalClose, ModalDialog, Typography } from "@mui/joy";
import { useTranslation } from "react-i18next";
import { DrawerFilters } from "../Filter/Filter";
import FilterIcon from "@mui/icons-material/Tune";

export const Map = () => {
  const { t } = useTranslation();
  const [showFilters, setShowFilters] = useState(false);
  const { visibleOres, visibleItems, visibleBosses } = useAppStore();
  const [modalData, setModalData] = useState<DataItem>(ores[0]);
  const [modalOpen, setModalOpen] = useState(false);

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
            onClick={() => {
              setModalData(boss);
              setModalOpen(true);
            }}
            style={{ cursor: "pointer" }}
          />
        );
      });
  }, [visibleBosses]);

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
