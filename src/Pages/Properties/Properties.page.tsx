import {
  NavBar,
  Filters,
  FeaturedProperty,
  Properties,
  Footer,
} from "../../Components";

export function PropertiesPage(): JSX.Element {
  return (
    <>
      <NavBar />
      {/* <Filters /> */}
      <Properties />
      <Footer />
    </>
  );
}
