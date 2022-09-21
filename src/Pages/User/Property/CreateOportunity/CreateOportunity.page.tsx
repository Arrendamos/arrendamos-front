import {
  PropertyForm,
  PropertyAddressForm,
  PropertyDetailsForm,
  PropertyImageForm,
} from "../../../../Common/Forms";

import { NavBar } from "../../../../Components";

export function CreateOportunityPage() {
  return (
    <>
      <NavBar />
      <PropertyForm />
      <PropertyAddressForm />
      <PropertyDetailsForm />
      <PropertyImageForm />
    </>
  );
}
