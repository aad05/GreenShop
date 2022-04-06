import React from 'react';
import {} from './style';
import { useParams } from 'react-router-dom';

const ParamsComponent = () => {
  const { id, type } = useParams();
  return (
    <div>
      Use Params {id} {type}
    </div>
  );
};

export default ParamsComponent;
