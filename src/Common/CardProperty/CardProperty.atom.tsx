import { CardPropertyPropsI } from "../../Interfaces";
import { useNavigate } from "react-router-dom";

import { BsShareFill, BsFillSuitHeartFill } from "react-icons/bs";
import { FormattedNumber, IntlProvider } from "react-intl";

import { RectangleImageSkeleton } from "../../Skeleton";

import "./style.css";

type CardPropertyProps = {
  card: CardPropertyPropsI;
  urlName: string;
};
export function CardPropertyAtom(props: CardPropertyProps): JSX.Element {
  const { card, urlName } = props;
  const navigation = useNavigate();
  const _openSingleProperty = (id: string) => {
    navigation(`/single-${urlName}/${id}`);
  };
  return (
    <div className="card-property my-4 mx-8 pb-2">
      {card.image ? (
        <img
          src={card.image}
          alt=""
          onClick={() => _openSingleProperty(card.id)}
        />
      ) : (
        <RectangleImageSkeleton />
      )}
      <div className="box-info-property font-lato">
        <div className="flex justify-between">
          <p className="name-property text-greenCyan">{card.name}</p>
          <div className="icons-card-property text-greenCyan mt-4 mr-2">
            <div className="circle">
              <BsShareFill />
            </div>
            <div className="circle">
              <BsFillSuitHeartFill />
            </div>
          </div>
        </div>
        {card.price > 0 ? (
          <p className="price-property text-greenCyan">
            $
            <IntlProvider locale="es">
              <FormattedNumber
                value={card.price}
                // eslint-disable-next-line react/style-prop-object
                style="decimal"
                minimumFractionDigits={0}
              />
            </IntlProvider>
          </p>
        ) : null}
        <div className="grid grid-rows-2 px-4 pb-0 simple-text info-property">
          <div>
            <p>
              {card.area} m<sup>2</sup>
            </p>
            <span className="dot"></span>
            <p>{card.bathroom} Baños</p>
            <span className="dot"></span>
            <p>{card.parking} Parqueaderos</p>
          </div>
          <div>
            <p>{card.neighborhood}</p>
            <span className="dot"></span>
            <p>{card.city}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
