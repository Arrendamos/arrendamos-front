import {
  PropertyForm,
  PropertyFeaturesForm,
  PropertyLocationInfoForm,
  PropertyImageForm,
  PropertyImageIconForm,
  ShortRegisterUserForm,
} from "../../../../Common/Forms";

import { NavBar } from "../../../../Components";

export function CreateOportunityPage() {
  return (
    <>
      <NavBar />
      <PropertyForm />
      <PropertyFeaturesForm />
      <PropertyLocationInfoForm />
      <PropertyImageForm />
      <PropertyImageIconForm />
      <ShortRegisterUserForm />
    </>
  );
}
