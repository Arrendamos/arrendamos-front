import { SimpleTitleParagraph, TestimonyData } from "../../Interfaces";
import { TestimonyInfo } from "../../Utils/Data/Testimonies";


export function TestimonyComponent(): JSX.Element {
    
    const partnersData: TestimonyData = TestimonyInfo;
    const infoPage: SimpleTitleParagraph = partnersData.data;


    return (
        <div className="my-4 p-4 font-lato">
            <h1 className='tittle-text text-center'>{infoPage.tittle}</h1>
            <h3 className='simple-text text-center w-2/6 mx-auto'>{infoPage.subTittle}</h3>
        </div>
    )
}