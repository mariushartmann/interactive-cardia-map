import { useTranslation } from "react-i18next";
import { AppStore, useAppStore } from "../../store/appStore";
import { useCallback, useMemo, useState } from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Checkbox from "@mui/joy/Checkbox";
import Stack from "@mui/joy/Stack";
import Tooltip from "@mui/joy/Tooltip";
import SearchIcon from "@mui/icons-material/Search";
import {
  AllDetailsIdentifier,
  BossIdentifier,
  DetailData,
  DetailDataType,
  ItemIdentifier,
  NpcIdentifier,
  OreIdentifier,
  bossIdentifier,
  itemIdentifier,
  npcIdentifier,
  oreIdentifier,
} from "../../data/model";
import {
  bossIcons,
  bosses,
  itemIcons,
  items,
  npcs,
  oreIcons,
  ores,
} from "../../data";
import {
  Accordion,
  AccordionDetails,
  AccordionGroup,
  AccordionSummary,
  Input,
  List,
  ListItem,
} from "@mui/joy";

const iconData = {
  ore: oreIcons,
  item: itemIcons,
  boss: bossIcons,
  npc: {},
};

const storeKeys = {
  ore: "visibleOres",
  item: "visibleItems",
  boss: "visibleBosses",
  npc: "visibleNpcs",
} as { [key: string]: keyof AppStore };

type IDrawerFiltersTabDetailsProps = {};

export const DrawerFiltersTabDetails = ({}: IDrawerFiltersTabDetailsProps) => {
  const { t } = useTranslation();
  const appStore = useAppStore();
  const [search, setSearch] = useState("");
  const visibleObjects = useMemo(() => {
    return [
      ...appStore.visibleOres,
      ...appStore.visibleItems,
      ...appStore.visibleBosses,
      ...appStore.visibleNpcs,
    ] as AllDetailsIdentifier[];
  }, [
    appStore.visibleBosses,
    appStore.visibleItems,
    appStore.visibleNpcs,
    appStore.visibleOres,
  ]);

  const updateVisibility = useCallback(
    (type: DetailDataType, id: AllDetailsIdentifier, value: boolean) => {
      let store: AllDetailsIdentifier[] = appStore.visibleOres;
      let func: (value: any[]) => void = appStore.setVisibleOres;

      switch (type) {
        case "plant":
          break;
        case "item":
          store = appStore.visibleItems;
          func = appStore.setVisibleItems;
          break;
        case "boss":
          store = appStore.visibleBosses;
          func = appStore.setVisibleBosses;
          break;
        case "npc":
          store = appStore.visibleNpcs;
          func = appStore.setVisibleNpcs;
          break;
        default:
      }

      const index = store.indexOf(id);
      if (value) {
        if (index === -1) func([...store, id]);
        return;
      }
      const newStore = [...store];
      newStore.splice(index, 1);
      if (index !== -1) func([...newStore]);
    },
    [appStore]
  );

  const updateVisibilityOres = useCallback(
    (id: OreIdentifier, value: boolean) => updateVisibility("ore", id, value),
    [updateVisibility]
  );

  const updateVisibilityItems = useCallback(
    (id: ItemIdentifier, value: boolean) => updateVisibility("item", id, value),
    [updateVisibility]
  );

  const updateVisibilityBosses = useCallback(
    (id: BossIdentifier, value: boolean) => updateVisibility("boss", id, value),
    [updateVisibility]
  );

  const updateVisibilityNpcs = useCallback(
    (id: NpcIdentifier, value: boolean) => updateVisibility("npc", id, value),
    [updateVisibility]
  );

  const renderOres = useCallback(() => {
    return (
      <>
        <List sx={{ display: "flex", flexDirection: "column" }}>
          {oreIdentifier.map((ore) => {
            const icon = process.env.PUBLIC_URL + oreIcons[ore];
            const isVisible = appStore.visibleOres.indexOf(ore) !== -1;
            const data = ores.find((x) => x.ids.includes(ore));

            const checkbox = (
              <ListItem
                key={ore}
                variant={data?.data !== null && isVisible ? "soft" : "plain"}
                color="primary"
                onClick={() => updateVisibilityOres(ore, !isVisible)}
                sx={{ display: "flex", py: 0.25, mb: 0.25, gap: 2 }}
              >
                <Checkbox
                  overlay
                  label={t(`ore.${ore}`)}
                  checked={data?.data !== null && isVisible}
                  readOnly
                  disabled={data?.data === null}
                  variant="outlined"
                />
                <Box
                  sx={{
                    ml: "auto",
                    height: 24,
                    width: 24,
                  }}
                >
                  <img src={icon} alt={ore} height="100%" width="100%" />
                </Box>
                <Box
                  sx={{
                    ml: 1,
                    backgroundColor: data?.color,
                    height: 16,
                    width: 16,
                    borderRadius: "50%",
                    border: "1px solid black",
                  }}
                ></Box>
              </ListItem>
            );

            return data?.data === null ? (
              <Tooltip
                key={ore}
                title="Found in Cardia Cave"
                color="warning"
                variant="soft"
              >
                {checkbox}
              </Tooltip>
            ) : (
              checkbox
            );
          })}
        </List>
      </>
    );
  }, [appStore.visibleOres, t, updateVisibilityOres]);

  const renderItems = useCallback(() => {
    return (
      <>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {itemIdentifier.map((item) => {
            const icon = process.env.PUBLIC_URL + itemIcons[item];
            const isVisible = appStore.visibleItems.indexOf(item) !== -1;
            const data = items.find((x) => x.ids.includes(item));

            const checkbox = (
              <ListItem
                key={item}
                variant={data?.data !== null && isVisible ? "soft" : "plain"}
                color="primary"
                onClick={() => updateVisibilityItems(item, !isVisible)}
                sx={{ display: "flex", py: 0.25, mb: 0.25, gap: 2 }}
              >
                <Checkbox
                  overlay
                  label={t(`item.${item}`)}
                  checked={data?.data !== null && isVisible}
                  readOnly
                  disabled={data?.data === null}
                  variant="outlined"
                />
                <Box
                  sx={{
                    ml: "auto",
                    height: 24,
                    width: 24,
                  }}
                >
                  <img src={icon} alt={item} height="100%" width="100%" />
                </Box>
              </ListItem>
            );

            return data?.data === null ? (
              <Tooltip
                key={item}
                title="Found in Cardia Cave"
                color="warning"
                variant="soft"
              >
                {checkbox}
              </Tooltip>
            ) : (
              checkbox
            );
          })}
        </Box>
      </>
    );
  }, [appStore.visibleItems, t, updateVisibilityItems]);

  const renderBosses = useCallback(() => {
    return (
      <>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {bossIdentifier.map((boss) => {
            const icon = process.env.PUBLIC_URL + bossIcons[boss];
            const isVisible = appStore.visibleBosses.indexOf(boss) !== -1;
            const data = bosses.find((x) => x.ids.includes(boss));

            const checkbox = (
              <ListItem
                key={boss}
                variant={data?.data !== null && isVisible ? "soft" : "plain"}
                color="primary"
                onClick={() => updateVisibilityBosses(boss, !isVisible)}
                sx={{ display: "flex", py: 0.25, mb: 0.25, gap: 2 }}
              >
                <Checkbox
                  overlay
                  label={t(`boss.${boss}`)}
                  checked={data?.data !== null && isVisible}
                  readOnly
                  disabled={data?.data === null}
                  variant="outlined"
                />
                <Box
                  sx={{
                    ml: "auto",
                    height: 24,
                    width: 24,
                  }}
                >
                  <img src={icon} alt={boss} height="100%" width="100%" />
                </Box>
              </ListItem>
            );

            return data?.data === null ? (
              <Tooltip
                key={boss}
                title="Found in Cardia Cave"
                color="warning"
                variant="soft"
              >
                {checkbox}
              </Tooltip>
            ) : (
              checkbox
            );
          })}
        </Box>
      </>
    );
  }, [appStore.visibleBosses, t, updateVisibilityBosses]);

  const renderNpcs = useCallback(() => {
    return (
      <>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {npcIdentifier.map((npc) => {
            const isVisible = appStore.visibleNpcs.indexOf(npc) !== -1;
            const data = npcs.find((x) => x.ids.includes(npc));

            const checkbox = (
              <ListItem
                key={npc}
                variant={data?.data !== null && isVisible ? "soft" : "plain"}
                color="primary"
                onClick={() => updateVisibilityNpcs(npc, !isVisible)}
                sx={{ display: "flex", py: 0.25, mb: 0.25, gap: 2 }}
              >
                <Checkbox
                  overlay
                  label={t(`npc.${npc}`)}
                  checked={data?.data !== null && isVisible}
                  readOnly
                  disabled={data?.data === null}
                  variant="outlined"
                />
              </ListItem>
            );

            return data?.data === null ? (
              <Tooltip
                key={npc}
                title="Found in Cardia Cave"
                color="warning"
                variant="soft"
              >
                {checkbox}
              </Tooltip>
            ) : (
              checkbox
            );
          })}
        </Box>
      </>
    );
  }, [appStore.visibleNpcs, t, updateVisibilityNpcs]);

  const renderVisibilityButtons = useCallback(
    (showFunc: () => void, hideFunc: () => void) => {
      return (
        <Stack
          direction="row"
          justifyContent="space-between"
          useFlexGap
          spacing={1}
        >
          <Button
            size="sm"
            variant="outlined"
            onClick={showFunc}
            sx={{ flexGrow: 1, py: 0, minHeight: "unset", height: 24 }}
          >
            All
          </Button>
          <Button
            size="sm"
            variant="outlined"
            onClick={hideFunc}
            sx={{ flexGrow: 1, py: 0, minHeight: "unset", height: 24 }}
          >
            None
          </Button>
        </Stack>
      );
    },
    []
  );

  const renderAsAccordion = useCallback(() => {
    return (
      <AccordionGroup>
        <Accordion>
          <AccordionSummary>Ores</AccordionSummary>
          <AccordionDetails>
            <Box sx={{ display: "flex", gap: 1, mb: 1 }}>
              {renderVisibilityButtons(
                appStore.setVisibleOresAll,
                appStore.setVisibleOresNone
              )}
            </Box>
            {renderOres()}
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>Items</AccordionSummary>
          <AccordionDetails>
            <Box sx={{ display: "flex", gap: 1, mb: 1 }}>
              {renderVisibilityButtons(
                appStore.setVisibleItemsAll,
                appStore.setVisibleItemsNone
              )}
            </Box>
            {renderItems()}
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>Bosses</AccordionSummary>
          <AccordionDetails>
            <Box sx={{ display: "flex", gap: 1, mb: 1 }}>
              {renderVisibilityButtons(
                appStore.setVisibleBossesAll,
                appStore.setVisibleBossesNone
              )}
            </Box>
            {renderBosses()}
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>NPCs</AccordionSummary>
          <AccordionDetails>
            <Box sx={{ display: "flex", gap: 1, mb: 1 }}>
              {renderVisibilityButtons(
                appStore.setVisibleNpcsAll,
                appStore.setVisibleNpcsNone
              )}
            </Box>
            {renderNpcs()}
          </AccordionDetails>
        </Accordion>
      </AccordionGroup>
    );
  }, [
    appStore.setVisibleBossesAll,
    appStore.setVisibleBossesNone,
    appStore.setVisibleItemsAll,
    appStore.setVisibleItemsNone,
    appStore.setVisibleNpcsAll,
    appStore.setVisibleNpcsNone,
    appStore.setVisibleOresAll,
    appStore.setVisibleOresNone,
    renderBosses,
    renderItems,
    renderNpcs,
    renderOres,
    renderVisibilityButtons,
  ]);

  const renderSearchResults = useCallback(() => {
    const filter = (
      ids: AllDetailsIdentifier[],
      data: DetailData,
      translationKey: string
    ) => {
      const filteresIds = ids.filter(
        (x) =>
          t(`${translationKey}.${x}`)
            .toLowerCase()
            .indexOf(search.toLowerCase()) !== -1
      );
      return filteresIds.map((id) => ({
        key: id,
        data: data.find((x) => x.ids.includes(id)),
      }));
    };
    const oreData = filter(oreIdentifier as any, ores, "ore");
    const itemData = filter(itemIdentifier as any, items, "item");
    const bossData = filter(bossIdentifier as any, bosses, "boss");
    const npcData = filter(npcIdentifier as any, npcs, "npc");

    const checkboxArr = [...oreData, ...itemData, ...bossData, ...npcData].sort(
      (a, b) => (a.key < b.key ? -1 : 1)
    );

    return (
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {checkboxArr.map((item) => {
          if (!item.data) return null;
          const iconSet = iconData[item.data.itemType as keyof typeof iconData];
          const foundIcon =
            item.key in iconSet
              ? process.env.PUBLIC_URL +
                iconSet[item.key as keyof typeof iconSet]
              : undefined;
          const isVisible = visibleObjects.indexOf(item.key) !== -1;
          const data = items.find((x) => x.ids.includes(item.key));

          const checkbox = (
            <ListItem
              key={item.key}
              variant={data?.data !== null && isVisible ? "soft" : "plain"}
              color="primary"
              onClick={() =>
                updateVisibility(item.data!.itemType, item.key, !isVisible)
              }
              sx={{ display: "flex", py: 0.25, mb: 0.25, gap: 2 }}
            >
              <Checkbox
                overlay
                label={t(`${item.data!.itemType}.${item.key}`)}
                checked={data?.data !== null && isVisible}
                readOnly
                disabled={data?.data === null}
                variant="outlined"
              />
              {foundIcon && (
                <Box
                  sx={{
                    ml: "auto",
                    height: 24,
                    width: 24,
                  }}
                >
                  <img
                    src={foundIcon}
                    alt={item.key}
                    height="100%"
                    width="100%"
                  />
                </Box>
              )}
            </ListItem>
          );

          return data?.data === null ? (
            <Tooltip
              key={item.key}
              title="Found in Cardia Cave"
              color="warning"
              variant="soft"
            >
              {checkbox}
            </Tooltip>
          ) : (
            checkbox
          );
        })}
      </Box>
    );
  }, [search, t, updateVisibility, visibleObjects]);

  return (
    <>
      <Input
        startDecorator={<SearchIcon />}
        placeholder="Search…"
        variant="soft"
        sx={{ mb: 1 }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {(!search || search.length < 1) && renderAsAccordion()}
      {(search || search.length > 0) && renderSearchResults()}
    </>
  );
};
