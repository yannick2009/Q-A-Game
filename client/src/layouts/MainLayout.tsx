import { ReactElement } from "react";
import "./styles/MainLayout.scss";

type MainLayoutProps = {
  children: ReactElement;
};

export default function MainLayout({
  children,
}: MainLayoutProps): React.ReactElement {
  return <section className="main-layout">{children}</section>;
}
