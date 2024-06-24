import "@fontsource/inter";
import { Map } from "../components/Map/Map";
import Box from "@mui/joy/Box";

export const Home = () => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        p: 2,
      }}
    >
      <Map></Map>
      {/* <TabMenu></TabMenu> */}
    </Box>
  );
};
