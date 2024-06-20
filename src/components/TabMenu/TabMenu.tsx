import { useCallback } from "react";
import { useAppStore } from "../../store/appStore";
import {
  Box,
  Button,
  Card,
  Checkbox,
  Tab,
  TabList,
  TabPanel,
  Tabs,
  Tooltip,
  Typography,
} from "@mui/joy";
import { useTranslation } from "react-i18next";
import { itemIdentifier, oreIdentifier } from "../../data/model";
import { ores, items } from "../../data";

export const TabMenu = () => {
  const { t } = useTranslation();
  const {
    visibleOres,
    setVisibleOres,
    setVisibleOresAll,
    setVisibleOresNone,
    visibleItems,
    setVisibleItems,
    setVisibleItemsAll,
    setVisibleItemsNone,
  } = useAppStore();

  const showAll = () => {
    setVisibleOresAll();
    setVisibleItemsAll();
  };

  const showNone = () => {
    setVisibleOresNone();
    setVisibleItemsNone();
  };

  const updateVisibilityOres = useCallback(
    (id: string, value: boolean) => {
      const index = visibleOres.indexOf(id);
      if (value) {
        if (index === -1) setVisibleOres([...visibleOres, id]);
        return;
      }
      visibleOres.splice(index, 1);
      if (index !== -1) setVisibleOres([...visibleOres]);
    },
    [visibleOres, setVisibleOres]
  );

  const updateVisibilityItems = useCallback(
    (id: string, value: boolean) => {
      const index = visibleItems.indexOf(id);
      if (value) {
        if (index === -1) setVisibleItems([...visibleItems, id]);
        return;
      }
      visibleItems.splice(index, 1);
      if (index !== -1) setVisibleItems([...visibleItems]);
    },
    [visibleItems, setVisibleItems]
  );

  const renderOres = useCallback(() => {
    return (
      <>
        <Typography typography="h3">Ores</Typography>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {oreIdentifier.map((ore) => {
            const isVisible = visibleOres.indexOf(ore) !== -1;
            const data = ores.find((x) => x.ids.includes(ore));

            const checkbox = (
              <Box
                key={ore}
                sx={{ display: "flex", py: 0.25, mb: 0.25, gap: 2 }}
              >
                <Checkbox
                  label={t(`ores.${ore}`)}
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
  }, [visibleOres, t, updateVisibilityOres]);

  const renderItems = useCallback(() => {
    return (
      <>
        <Typography typography="h3">Items</Typography>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {itemIdentifier.map((item) => {
            const isVisible = visibleItems.indexOf(item) !== -1;
            const data = items.find((x) => x.ids.includes(item));

            return (
              <Box
                key={item}
                sx={{ display: "flex", py: 0.25, mb: 0.25, gap: 2 }}
              >
                <Checkbox
                  label={t(`items.${item}`)}
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
  }, [visibleItems, t, updateVisibilityItems]);

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
            display: "flex",
            flexDirection: "column",
            gap: 2,
            overflowY: "auto",
            padding: 0,
          }}
        >
          Panel 1
        </TabPanel>
        <TabPanel
          value={1}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            overflowY: "auto",
            p: 0,
            pl: 2,
            my: 2,
          }}
        >
          {renderOres()}
          {renderItems()}
        </TabPanel>
        <Box sx={{ display: "flex", gap: 1, mt: "auto" }}>
          <Button onClick={showAll}>All</Button>
          <Button onClick={showNone}>None</Button>
        </Box>
      </Tabs>
    </Card>
  );
};
