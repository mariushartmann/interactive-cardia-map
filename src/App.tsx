import "./App.scss";
import "@fontsource/inter";
import { Map } from "./components/Map/Map";
import { Card } from "@mui/joy";
import { TabMenu } from "./components/TabMenu/TabMenu";

export const App = () => {
  return (
    <div className="App">
      <Card sx={{ display: "flex", flexDirection: "row", height: "100vh" }}>
        <Map></Map>
        <TabMenu></TabMenu>
      </Card>
    </div>
  );
};
