import AvatarIcon from '../../Assets/Icons/Avatar/AvatarIcon.png'

import './style.css';

export function AvatarCircleAtom(): JSX.Element {
    return (
        <div className="avatar-circle">
            <img src={AvatarIcon} alt="icon" width="100" />
        </div>
    )
}