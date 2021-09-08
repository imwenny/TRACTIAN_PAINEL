import React from "react";
import { Menu } from "antd";
import Hooks from "./../hooks";
// import HighchartsReact from '@highcharts-react-official';
import { alpha, makeStyles } from "@material-ui/core/styles";
import { Home, ExitToApp, Business, Build } from "@material-ui/icons";
import { AppstoreOutlined, SettingOutlined } from "@ant-design/icons";

const options = {
  title: {
    text: "My chart",
  },
  series: [
    {
      data: [1, 2, 3],
    },
  ],
};

const App = () => (
  <div>
    <HighchartsReact highcharts={Highcharts} options={options} />
  </div>
);

const { SubMenu } = Menu;
export default function Sidebar() {
  const size = Hooks.WindowSize();
  const { data: dataAssets } = Hooks.Search("assets", "");
  const { data: dataEmpresas } = Hooks.Search("companies", "");
  const { data: dataUnidades } = Hooks.Search("units", "");
  function handleClick(e) {}
  return (
    <Menu
      onClick={handleClick}
      style={{
        width: 256,
        height: size[1] - 70,
        transform: "translateZ(10px)",
      }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
    >
      <SubMenu key="sub1" icon={<Build />} title="Máquinas">
        {dataAssets.map((e) => {
          return (
            <Menu.Item
              onClick={() => {
                window.location.href = e.id;
              }}
              key={e.id}
            >
              {e.name}
            </Menu.Item>
          );
        })}
      </SubMenu>

      <SubMenu key="sub2" icon={<Business />} title="Empresas">
        {dataEmpresas.map((e) => {
          return (
            <Menu.Item
              onClick={() => {
                window.location.href = e.id;
              }}
              key={e.id}
            >
              {e.name}
            </Menu.Item>
          );
        })}
      </SubMenu>

      <SubMenu key="sub3" icon={<AppstoreOutlined />} title="Unidades">
        {dataUnidades.map((e) => {
          return (
            <Menu.Item
              onClick={() => {
                window.location.href = e.id;
              }}
              key={e.id}
            >
              {e.name}
            </Menu.Item>
          );
        })}
      </SubMenu>
    </Menu>
  );
}

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));
