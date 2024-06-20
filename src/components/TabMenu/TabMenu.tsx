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
import { oreIdentifier } from "../../data/model";
import { ores } from "../../data";

export const TabMenu = () => {
  const { t } = useTranslation();
  const { visibleOres, setVisibleOres, setVisibleOresAll, setVisibleOresNone } =
    useAppStore();

  const updateVisibility = useCallback(
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
                  onChange={(e) => updateVisibility(ore, e.target.checked)}
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
  }, [visibleOres, t, updateVisibility]);

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "25%",
        minWidth: 270,
      }}
    >
      <Tabs sx={{ height: "100%" }}>
        <TabList>
          <Tab variant="plain" color="primary">
            {t("tab_objectives")}
          </Tab>
          <Tab variant="plain" color="primary">
            {t("tab_details")}
          </Tab>
        </TabList>
        <TabPanel value={0}>Panel 1</TabPanel>
        <TabPanel value={1} sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ flexGrow: 1, overflowY: "auto" }}>{renderOres()}</Box>
          <Box sx={{ display: "flex", gap: 1, mt: "auto" }}>
            <Button onClick={setVisibleOresAll}>All</Button>
            <Button onClick={setVisibleOresNone}>None</Button>
          </Box>
        </TabPanel>
      </Tabs>
    </Card>
  );
};
