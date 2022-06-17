import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export function CardSkeleton(): JSX.Element {
    return (
        <div className='px-4 mx-4 my-8'>
            <Skeleton height={150} borderRadius={20} />
            <div className='my-4 px-2'>
                <Skeleton count={2} />
            </div>
        </div>
    );
}