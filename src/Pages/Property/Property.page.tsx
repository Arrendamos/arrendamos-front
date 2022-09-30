import {
  NavBar,
  Filters,
  FeaturedProperty,
  Properties,
  Footer,
} from "../../Components";

export function PropertyPage(): JSX.Element {
  return (
    <>
      <NavBar />
      {/* <Filters /> */}
      <Properties />
      <Footer />
    </>
  );
}
