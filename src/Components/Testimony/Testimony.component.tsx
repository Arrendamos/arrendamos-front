import { AvatarCircle } from '../../Atoms'
import { SimpleTitleParagraph, TestimonyData, testimonyItem } from "../../Interfaces";
import { TestimonyInfo } from "../../Utils/Data/Testimonies";
import { AiFillStar } from "react-icons/ai";

import './style.css';

export function TestimonyComponent(): JSX.Element {

    const testimonysData: TestimonyData = TestimonyInfo;
    const infoPage: SimpleTitleParagraph = testimonysData.data;


    return (
        <div className="my-4 p-4 font-lato">
            <h1 className='tittle-text text-center'>{infoPage.tittle}</h1>
            <h3 className='simple-text text-center w-2/6 mx-auto'>{infoPage.subTittle}</h3>
            <div className="testimonies-container flex justify-between py-8 px-12">
                {testimonysData.testimonies.map((testimony: testimonyItem, index: number) => {
                    return <TestimonyCard key={index} {...testimony} />
                })
                }
            </div>

        </div>
    )
}

function TestimonyCard(props: testimonyItem): JSX.Element {
    const { name, testimony, rol, stars } = props;
    return (
        <div className="testimony-card font-lato text-center text-pursianBlue">
            <img src="https://via.placeholder.com/350x200" alt="" className='img-testimony' />
            <div className='relative bottom-8 h-16'>
                <AvatarCircle />
            </div>
            <h1 className="testimony-name">{name}</h1>
            <p className="testimony-rol">{rol}</p>
            <p className="testimony-text">{testimony}</p>
            <hr />
            <div className='flex justify-center mt-4 mb-9'>
                {Stars(stars)}
            </div>
        </div>
    )
}

function Stars(stars: number): JSX.Element {

    let starsArray: JSX.Element[] = [];

    for (let i = 0; i < 5; i++) {
        if (i < stars) {
            starsArray.push(<AiFillStar key={i} className='star-selected' />)
        }
        else starsArray.push(<AiFillStar key={i} className='star' />)

    }

    return (
        <>
            {starsArray}
        </>
    )
}