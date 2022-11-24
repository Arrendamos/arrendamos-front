import AvatarIcon from "../../Assets/Icons/Avatar/AvatarIcon.png";

import "./style.css";

type AvatarCircleProps = {
  image?: string;
};

export function AvatarCircleAtom(props: AvatarCircleProps): JSX.Element {
  const { image } = props;
  return (
    <div className="avatar-circle">
      {image ? (
        <img src={image} alt="icon" width="100" />
      ) : (
        <img src={AvatarIcon} alt="icon" width="100" />
      )}
    </div>
  );
}
