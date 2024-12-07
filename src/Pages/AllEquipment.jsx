import React from 'react';
import { useLoaderData } from 'react-router-dom';
import EquipmentTable from './EquipmentTable';

const AllEquipment = () => {
  const equipment = useLoaderData();

  return (
    <div>
      {equipment.map(pro => (
        <EquipmentTable key={pro._id} product={pro}></EquipmentTable>
      ))}
    </div>
  );
};

export default AllEquipment;
