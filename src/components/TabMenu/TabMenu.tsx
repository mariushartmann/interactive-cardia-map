import { useCallback } from "react";
import { useAppStore } from "../../store/appStore";
import {
  Accordion,
  AccordionDetails,
  AccordionGroup,
  AccordionSummary,
  Box,
  Button,
  Card,
  Checkbox,
  Tab,
  TabList,
  TabPanel,
  Tabs,
  Tooltip,
} from "@mui/joy";
import { useTranslation } from "react-i18next";
import {
  BossIdentifier,
  bossIdentifier,
  ItemIdentifier,
  itemIdentifier,
  OreIdentifier,
  oreIdentifier,
  AllIdentifier,
  DataType,
} from "../../data/model";
import { ores, items, bosses } from "../../data";

export const TabMenu = () => {
  const { t } = useTranslation();
  const appStore = useAppStore();

  const showAll = () => {
    appStore.setVisibleOresAll();
    appStore.setVisibleItemsAll();
    appStore.setVisibleBossesAll();
  };

  const showNone = () => {
    appStore.setVisibleOresNone();
    appStore.setVisibleItemsNone();
    appStore.setVisibleBossesNone();
  };

  const updateVisibility = useCallback(
    (type: DataType, id: AllIdentifier, value: boolean) => {
      let store: AllIdentifier[] = appStore.visibleOres;
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

  const renderOres = useCallback(() => {
    return (
      <>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {oreIdentifier.map((ore) => {
            const isVisible = appStore.visibleOres.indexOf(ore) !== -1;
            const data = ores.find((x) => x.ids.includes(ore));

            const checkbox = (
              <Box
                key={ore}
                sx={{ display: "flex", py: 0.25, mb: 0.25, gap: 2 }}
              >
                <Checkbox
                  label={t(`ore.${ore}`)}
                  checked={data?.data === null ? false : isVisible}
                  onChange={(e) => updateVisibilityOres(ore, e.target.checked)}
                  disabled={data?.data === null}
                  variant="outlined"
                />
                <Box
                  sx={{
                    ml: "auto",
                    backgroundColor: data?.color,
                    height: 16,
                    width: 16,
                    borderRadius: "50%",
                    border: "1px solid black",
                  }}
                ></Box>
              </Box>
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
        </Box>
      </>
    );
  }, [appStore.visibleOres, t, updateVisibilityOres]);

  const renderItems = useCallback(() => {
    return (
      <>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {itemIdentifier.map((item) => {
            const isVisible = appStore.visibleItems.indexOf(item) !== -1;
            const data = items.find((x) => x.ids.includes(item));

            return (
              <Box
                key={item}
                sx={{ display: "flex", py: 0.25, mb: 0.25, gap: 2 }}
              >
                <Checkbox
                  label={t(`item.${item}`)}
                  checked={data?.data === null ? false : isVisible}
                  onChange={(e) =>
                    updateVisibilityItems(item, e.target.checked)
                  }
                  disabled={data?.data === null}
                  variant="outlined"
                />
              </Box>
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
            const isVisible = appStore.visibleBosses.indexOf(boss) !== -1;
            const data = bosses.find((x) => x.ids.includes(boss));

            return (
              <Box
                key={boss}
                sx={{ display: "flex", py: 0.25, mb: 0.25, gap: 2 }}
              >
                <Checkbox
                  label={t(`boss.${boss}`)}
                  checked={data?.data === null ? false : isVisible}
                  onChange={(e) =>
                    updateVisibilityBosses(boss, e.target.checked)
                  }
                  disabled={data?.data === null}
                  variant="outlined"
                />
              </Box>
            );
          })}
        </Box>
      </>
    );
  }, [appStore.visibleBosses, t, updateVisibilityBosses]);

  const renderVisibilityButtons = useCallback(
    (showFunc: () => void, hideFunc: () => void) => {
      return (
        <>
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
        </>
      );
    },
    []
  );

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "25%",
        minWidth: 300,
      }}
    >
      <Tabs sx={{ height: "100%", overflow: "hidden" }}>
        <TabList>
          <Tab variant="plain" color="primary">
            {t("tab_objectives")}
          </Tab>
          <Tab variant="plain" color="primary">
            {t("tab_details")}
          </Tab>
        </TabList>
        <TabPanel
          value={0}
          sx={{
            overflowY: "auto",
            p: 0,
            my: 2,
          }}
        >
          Panel 1
        </TabPanel>
        <TabPanel
          value={1}
          sx={{
            overflowY: "auto",
            p: 0,
            my: 2,
          }}
        >
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
          </AccordionGroup>
        </TabPanel>
        <Box sx={{ display: "flex", gap: 1, mt: "auto" }}>
          <Button variant="outlined" onClick={showAll} sx={{ flexGrow: 1 }}>
            All
          </Button>
          <Button variant="outlined" onClick={showNone} sx={{ flexGrow: 1 }}>
            None
          </Button>
        </Box>
      </Tabs>
    </Card>
  );
};
