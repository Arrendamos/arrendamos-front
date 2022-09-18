import { PropertyForm, PropertyAddressForm, PropertyDetailsForm, PropertyImageForm } from "../../../../Common/Forms";

export function CreatePropertyAdminPage() {
    return (
        <>
            <PropertyForm />
            <PropertyAddressForm />
            <PropertyDetailsForm />
            <PropertyImageForm />
        </>
    );
}