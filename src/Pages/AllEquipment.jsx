import React from 'react';
import { useLoaderData } from 'react-router-dom';
import EquipmentTable from './EquipmentTable';

const AllEquipment = () => {
  const equipment = useLoaderData();

  return (
    <div>
      <h1 className="text-center text-4xl font-bold my-10">
        All Sports Equipment
      </h1>
      {equipment.map(pro => (
        <EquipmentTable key={pro._id} product={pro}></EquipmentTable>
      ))}
    </div>
  );
};

export default AllEquipment;
