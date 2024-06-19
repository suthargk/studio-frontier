import { useOutletContext, useParams } from 'react-router-dom';

const PlantDetail = () => {
  const params = useParams();
  const { plants } = useOutletContext();
  const plantDetail = plants.find((plant) => plant.id === +params.plantId);

  return (
    <div className="mt-10 flex justify-center items-center">
      <div className="max-w-[400px]">
        <h2 className="font-semibold">Plant Bio</h2>
        <p className="text-gray-600 text-xs">{plantDetail.bio}</p>
      </div>
    </div>
  );
};

export default PlantDetail;
