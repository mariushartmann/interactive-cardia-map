import { ores, items, bosses, npcs } from "../../data";
import { MouseEvent, useCallback, useMemo, useRef, useState } from "react";
import { useAppStore } from "../../store/appStore";
import {
  BossIdentifier,
  DetailDataItem,
  ItemIdentifier,
  NpcIdentifier,
  OreIdentifier,
} from "../../data/model";
import { Button, Modal, ModalClose, ModalDialog, Typography } from "@mui/joy";
import { useTranslation } from "react-i18next";
import { DrawerFilters } from "../Filter/Filter";
import FilterIcon from "@mui/icons-material/Tune";
import ReactDomServer from "react-dom/server";
import OreIcon from "@mui/icons-material/Hardware";
import ItemIcon from "@mui/icons-material/Inventory";
import BossIcon from "@mui/icons-material/ReportGmailerrorred";
import NpcIcon from "@mui/icons-material/Person";

const tooltipIcons = {
  ore: <OreIcon />,
  item: <ItemIcon />,
  boss: <BossIcon />,
  npc: <NpcIcon />,
};

export const Map = () => {
  const { t } = useTranslation();
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [showFilters, setShowFilters] = useState(false);
  const { visibleOres, visibleItems, visibleBosses, visibleNpcs } =
    useAppStore();
  const [modalData, setModalData] = useState<DetailDataItem>(ores[0]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentTooltipData, setCurrentTooltipData] = useState<DetailDataItem>(
    ores[0]
  );

  const tooltipContent = useMemo(() => {
    let content = <></>;
    if (currentTooltipData.ids.length > 1)
      content = (
        <ul style={{ padding: 0, margin: 0 }}>
          {currentTooltipData.ids.map((x) => {
            return (
              <span key={x} style={{ display: "flex", alignItems: "center" }}>
                {(tooltipIcons as any)[currentTooltipData.itemType]}{" "}
                {t(`${currentTooltipData.itemType}.${x}`)}
              </span>
            );
          })}
        </ul>
      );
    else
      content = (
        <span style={{ display: "flex", alignItems: "center" }}>
          {(tooltipIcons as any)[currentTooltipData.itemType]}{" "}
          {t(`${currentTooltipData.itemType}.${currentTooltipData.ids[0]}`)}
        </span>
      );

    return ReactDomServer.renderToStaticMarkup(content);
  }, [currentTooltipData.ids, currentTooltipData.itemType, t]);

  const showTooltip = useCallback(
    (
      e: MouseEvent<SVGElement, globalThis.MouseEvent>,
      data: DetailDataItem
    ) => {
      if (!tooltipRef.current) return;

      setCurrentTooltipData(data);
      tooltipRef.current.style.display = "block";
      tooltipRef.current.style.left = e.pageX + 10 + "px";
      tooltipRef.current.style.top = e.pageY + 10 + "px";
    },
    []
  );

  const hideTooltip = useCallback(() => {
    if (!tooltipRef.current) return;

    tooltipRef.current.style.display = "none";
  }, []);

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
            onMouseMove={(e) => showTooltip(e, ore)}
            onMouseOut={(e) => hideTooltip()}
            style={{ cursor: "pointer" }}
          />
        );
      });
  }, [hideTooltip, showTooltip, visibleOres]);

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
            onMouseMove={(e) => showTooltip(e, item)}
            onMouseOut={(e) => hideTooltip()}
            style={{ cursor: "pointer" }}
          />
        );
      });
  }, [hideTooltip, showTooltip, visibleItems]);

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
            onMouseMove={(e) => showTooltip(e, boss)}
            onMouseOut={(e) => hideTooltip()}
            style={{ cursor: "pointer" }}
          />
        );
      });
  }, [hideTooltip, showTooltip, visibleBosses]);

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
            onMouseMove={(e) => showTooltip(e, npc)}
            onMouseOut={(e) => hideTooltip()}
            style={{ cursor: "pointer" }}
          />
        );
      });
  }, [hideTooltip, showTooltip, visibleNpcs]);

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
      <div
        ref={tooltipRef}
        dangerouslySetInnerHTML={{ __html: tooltipContent }}
        style={{
          position: "absolute",
          display: "none",
          padding: "12px 18px",
          borderRadius: 6,
          backgroundColor: "#fff",
          borderWidth: 1,
          borderColor:
            "var(--variant-outlinedBorder, var(--joy-palette-neutral-outlinedBorder, var(--joy-palette-neutral-300, #CDD7E1)))",
          boxShadow:
            "var(--joy-shadowRing, 0 0 #000),0px 1px 5px -1px rgba(var(--joy-shadowChannel, 21 21 21) / var(--joy-shadowOpacity, 0.3))",
        }}
      ></div>
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
