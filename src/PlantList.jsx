import { Link, useOutletContext } from 'react-router-dom';

const PlantList = () => {
  const { plants } = useOutletContext();

  return (
    <div className="flex flex-col gap-4 max-w-[400px] min-w-[400px] mt-10 ">
      {plants.map((plant) => {
        return (
          <Link
            to={`plant/${plant.id}`}
            key={plant.id}
            className="cursor-pointer"
          >
            <div className="rounded-xl w-full bg-green-200 p-4 relative">
              <div className="space-y-2">
                <h3 className="font-medium text-xs">{plant.category}</h3>
                <h2 className="text-xl font-medium">{plant.name}</h2>
                <div className="absolute -top-8 -right-8 w-28 h-28">
                  <img src={plant.image} alt={plant.name} />
                </div>
              </div>

              <div className="mt-4">
                <h4 className="text-sm font-medium">${plant.price}</h4>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default PlantList;
