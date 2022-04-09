import React, { useState } from 'react';
import { Wrapper } from './style';

const Description = () => {
  const [headerActivve, setHeaderActive] = useState(1);
  return (
    <Wrapper id='description'>
      <Wrapper.Header>
        <Wrapper.Header.Title
          onClick={() => setHeaderActive(1)}
          active={headerActivve === 1}
        >
          Product Description
        </Wrapper.Header.Title>
        <Wrapper.Header.Title
          onClick={() => setHeaderActive(2)}
          active={headerActivve === 2}
          left
        >
          Reviews (19)
        </Wrapper.Header.Title>
      </Wrapper.Header>
      <Wrapper.Description>
        The ceramic cylinder planters come with a wooden stand to help elevate
        your plants off the ground. The ceramic cylinder planters come with a
        wooden stand to help elevate your plants off the ground. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est
        tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare
        lectus quis justo gravida semper.
      </Wrapper.Description>
      <Wrapper.Description bigger>
        The ceramic cylinder planters come with a wooden stand to help elevate
        your plants off the ground. The ceramic cylinder planters come with a
        wooden stand to help elevate your plants off the ground. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est
        tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare
        lectus quis justo gravida semper. The ceramic cylinder planters come
        with a wooden stand to help elevate your plants off the ground. The
        ceramic cylinder planters come with a wooden stand to help elevate your
        plants off the ground. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non
        est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida
        semper. The ceramic cylinder planters come with a wooden stand to help
        elevate your plants off the ground. The ceramic cylinder planters come
        with a wooden stand to help elevate your plants off the ground. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue
        nec est tristique auctor. Donec non est at libero vulputate rutrum.
        Morbi ornare lectus quis justo gravida semper.
      </Wrapper.Description>
      <Wrapper.Title>Living Room:</Wrapper.Title>
      <Wrapper.Description>
        The ceramic cylinder planters come with a wooden stand to help elevate
        your plants off the ground. The ceramic cylinder planters come with a
        wooden stand to help elevate your plants off the ground. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.
      </Wrapper.Description>
      <Wrapper.Title>Dining Room:</Wrapper.Title>
      <Wrapper.Description>
        The ceramic cylinder planters come with a wooden stand to help elevate
        your plants off the ground. The ceramic cylinder planters come with a
        wooden stand to help elevate your plants off the ground. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.
      </Wrapper.Description>
      <Wrapper.Title>Office:</Wrapper.Title>
      <Wrapper.Description>
        The ceramic cylinder planters come with a wooden stand to help elevate
        your plants off the ground. The ceramic cylinder planters come with a
        wooden stand to help elevate your plants off the ground. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.
      </Wrapper.Description>
    </Wrapper>
  );
};

export default Description;
