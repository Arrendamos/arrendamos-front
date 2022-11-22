import {
  OportunityInfoForm,
  PropertyFeaturesForm,
  OportunityLocationInfoForm,
  PropertyCloseLocationForm,
  OportunityImageForm,
  OportunityImageIconForm,
  ShortRegisterUserForm,
} from "../../../../Common/Forms";

import { NavBar } from "../../../../Components";

export function CreateOportunityPage() {
  return (
    <>
      <NavBar />
      <OportunityInfoForm />
      {/* <PropertyFeaturesForm /> */}
      <OportunityLocationInfoForm />
      {/* <PropertyCloseLocationForm /> */}
      <OportunityImageForm />
      <OportunityImageIconForm />
      <ShortRegisterUserForm />
    </>
  );
}
