import {
  PropertyForm,
  PropertyLocationInfoForm,
  PropertyFeaturesForm,
  PropertyImageForm,
} from "../../../../Common/Forms";

export function CreatePropertyAdminPage() {
  return (
    <>
      <PropertyForm />
      <PropertyLocationInfoForm />
      <PropertyFeaturesForm />
      <PropertyImageForm />
    </>
  );
}
