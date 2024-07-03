import { useTranslation } from "react-i18next";
import { useAppStore } from "../../store/appStore";
import { useCallback } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemContent,
  Typography,
} from "@mui/joy";
import { mining } from "../../data/mining";
import { oreIcons } from "../../data";
import { OreIdentifier } from "../../data/model";

type IDrawerFiltersTabObjectiveProps = {};

export const DrawerFiltersTabObjective =
  ({}: IDrawerFiltersTabObjectiveProps) => {
    const { t } = useTranslation();
    const appStore = useAppStore();

    const updateVisibilityOres = useCallback(
      (visibleOres: OreIdentifier[]) => {
        appStore.setVisibleItemsNone();
        appStore.setVisibleBossesNone();
        appStore.setVisibleNpcsNone();

        appStore.setVisibleOres(visibleOres);
      },
      [appStore]
    );

    const renderMining = useCallback(() => {
      return (
        <>
          <Typography level="h4">Mining</Typography>
          <List>
            {mining.map((row) => {
              const icons = row.details.map(
                (x) => process.env.PUBLIC_URL + oreIcons[x as OreIdentifier]
              );
              return (
                <ListItem key={row.id}>
                  <ListItemButton
                    color="neutral"
                    variant="soft"
                    onClick={() =>
                      updateVisibilityOres(row.details as OreIdentifier[])
                    }
                  >
                    <ListItemContent
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                      }}
                    >
                      {icons.map((icon) => {
                        return (
                          <Box
                            key={icon}
                            sx={{
                              ml: "auto",
                              height: 24,
                              width: 24,
                            }}
                          >
                            <img
                              src={icon}
                              alt={icon}
                              height="100%"
                              width="100%"
                            />
                          </Box>
                        );
                      })}
                    </ListItemContent>
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </>
      );
    }, []);

    return <>{renderMining()}</>;
  };
