import React from 'react';
import { Wrapper } from './style';
import { useParams } from 'react-router-dom';
import { data } from '../../mock/Categories/data';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import Description from './Description';

const ParamsComponent = () => {
  const { id, type } = useParams();
  const useParamsData = data[type].find((value) => value.id === +id);
  return (
    <div>
      <Wrapper>
        <Wrapper.Container>
          <LeftSide data={useParamsData} />
          <RightSide data={useParamsData} />
        </Wrapper.Container>
        <Description />
      </Wrapper>
    </div>
  );
};

export default ParamsComponent;
