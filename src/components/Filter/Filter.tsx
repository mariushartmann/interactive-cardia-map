import {
  Button,
  DialogContent,
  DialogTitle,
  Divider,
  Drawer,
  ModalClose,
  Sheet,
  Stack,
  Tab,
  TabList,
  TabPanel,
  Tabs,
  tabClasses,
} from "@mui/joy";
import { DrawerFiltersTabDetails } from "./TabDetails";
import { useTranslation } from "react-i18next";
import { useAppStore } from "../../store/appStore";

type IDrawerFiltersProps = {
  open: boolean;
  onChange: (newValue: boolean) => void;
};

export const DrawerFilters = ({ open, onChange }: IDrawerFiltersProps) => {
  const { t } = useTranslation();
  const appStore = useAppStore();

  const showAll = () => {
    appStore.setVisibleOresAll();
    appStore.setVisibleItemsAll();
    appStore.setVisibleBossesAll();
    appStore.setVisibleNpcsAll();
  };

  const showNone = () => {
    appStore.setVisibleOresNone();
    appStore.setVisibleItemsNone();
    appStore.setVisibleBossesNone();
    appStore.setVisibleNpcsNone();
  };

  return (
    <Drawer
      size="md"
      variant="plain"
      anchor="right"
      open={open}
      onClose={() => onChange(false)}
      slotProps={{
        content: {
          sx: {
            bgcolor: "transparent",
            p: { md: 3, sm: 0 },
            boxShadow: "none",
          },
        },
      }}
    >
      <Sheet
        sx={{
          borderRadius: "md",
          p: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          height: "100%",
          overflow: "auto",
        }}
      >
        <DialogTitle>Filters</DialogTitle>
        <ModalClose />
        <Divider sx={{ mt: "auto" }} />
        <DialogContent sx={{ gap: 2 }}>
          <Tabs
            aria-label="tabs"
            defaultValue={0}
            sx={{ bgcolor: "transparent" }}
          >
            <TabList
              disableUnderline
              sx={{
                p: 0.5,
                gap: 0.5,
                borderRadius: "xl",
                bgcolor: "background.level1",
                [`& .${tabClasses.root}[aria-selected="true"]`]: {
                  boxShadow: "sm",
                  bgcolor: "background.surface",
                },
              }}
            >
              <Tab disableIndicator>Objectives</Tab>
              <Tab disableIndicator>Details</Tab>
            </TabList>
            <TabPanel value={0}>Panel 1</TabPanel>
            <TabPanel value={1}>
              <DrawerFiltersTabDetails />
            </TabPanel>
          </Tabs>
        </DialogContent>

        <Divider sx={{ mt: "auto" }} />
        <Stack
          direction="row"
          justifyContent="space-between"
          useFlexGap
          spacing={1}
        >
          <Button variant="outlined" onClick={showNone}>
            Hide all
          </Button>
          <Button variant="outlined" onClick={showAll}>
            Show all
          </Button>
        </Stack>
      </Sheet>
    </Drawer>
  );
};
