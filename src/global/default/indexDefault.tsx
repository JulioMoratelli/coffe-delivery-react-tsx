import { Outlet } from "react-router-dom";
import { Header } from "../header/header";
import { LayoutContainer } from "./stylesDefault";


export function DefaultLayout() {
    return (
      <LayoutContainer>
        <Header />
        <Outlet />
      </LayoutContainer>
    )
  }