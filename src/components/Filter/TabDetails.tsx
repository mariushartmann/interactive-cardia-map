import { useTranslation } from "react-i18next";
import { useAppStore } from "../../store/appStore";
import { useCallback } from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Checkbox from "@mui/joy/Checkbox";
import Stack from "@mui/joy/Stack";
import Tooltip from "@mui/joy/Tooltip";
import {
  AllIdentifier,
  BossIdentifier,
  DataType,
  ItemIdentifier,
  OreIdentifier,
  bossIdentifier,
  itemIdentifier,
  oreIdentifier,
} from "../../data/model";
import { bosses, itemIcons, items, oreIcons, ores } from "../../data";
import {
  Accordion,
  AccordionDetails,
  AccordionGroup,
  AccordionSummary,
  List,
  ListItem,
} from "@mui/joy";

type IDrawerFiltersTabDetailsProps = {};

export const DrawerFiltersTabDetails = ({}: IDrawerFiltersTabDetailsProps) => {
  const { t } = useTranslation();
  const appStore = useAppStore();

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
        <AccordionDetails>Coming soon</AccordionDetails>
      </Accordion>
    </AccordionGroup>
  );
};
