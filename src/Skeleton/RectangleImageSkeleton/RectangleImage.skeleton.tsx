import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export function RectangleImageSkeleton(): JSX.Element {
  return (
    <div className="p-4">
      <Skeleton height={200} width="85vw" borderRadius={20} />
    </div>
  );
}
