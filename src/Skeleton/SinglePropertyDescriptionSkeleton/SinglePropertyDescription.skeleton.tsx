import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export function SinglePropertyDescriptionSkeleton(): JSX.Element {
  return (
    <div className="p-4">
      <div className="w-9/12 my-4">
        <Skeleton height={30} count={3} />
      </div>
      <Skeleton height={100} />
      <div className="grid grid-cols-2 gap-4 my-4">
        <div className="flex flex-col">
          <Skeleton height={20} count={4} className="my-2" />
        </div>
        <div className="flex flex-col">
          <Skeleton height={20} count={4} className="my-2" />
        </div>
      </div>
    </div>
  );
}
