import { FormattedNumber, IntlProvider } from "react-intl";

export function PriceStyleAtom({ number }: any): JSX.Element {
    return (
        <>
            $<IntlProvider locale='es'>
                <FormattedNumber
                    value={number}
                    // eslint-disable-next-line react/style-prop-object
                    style="decimal"
                    minimumFractionDigits={0} />
            </IntlProvider>
        </>
    )
}