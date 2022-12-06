import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { CardPropertyPropsI } from "../../Interfaces";

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

  const [image, setImage] = useState<string>("");

  useEffect(() => {
    if (card.image) {
      setTimeout(() => {
        setImage(card.image as string);
      }, 1000);
    }
  }, [card]);

  const _openSingleProperty = (id: string) => {
    navigation(`/single-${urlName}/${id}`);
  };

  return (
    <div className="card-property pb-2">
      {image !== "" ? (
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
          <p className="name-property text-primaryColor">{card.name}</p>
          <div className="icons-card-property text-primaryColor mt-4 mr-2">
            <div className="circle">
              <BsShareFill />
            </div>
            <div className="circle">
              <BsFillSuitHeartFill />
            </div>
          </div>
        </div>
        {card.price ? (
          card.price > 0 ? (
            <p className="price-property text-primaryColor">
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
          ) : null
        ) : null}
        <div className="flex px-6 pb-0 simple-text info-property">
          <div>
            <p>{card.city}</p>
          </div>
          <div>
            <span className="dot"></span>
            <p>
              {card.area} m<sup>2</sup>
            </p>
          </div>
          {card.bathroom ? (
            <div>
              <span className="dot"></span>
              <p>{card.bathroom} Baños</p>
            </div>
          ) : null}
          {card.parking ? (
            <div>
              <span className="dot"></span>
              <p>{card.parking} Parqueaderos</p>
            </div>
          ) : null}
          <div>
            <span className="dot"></span>
            <p>{card.neighborhood}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
