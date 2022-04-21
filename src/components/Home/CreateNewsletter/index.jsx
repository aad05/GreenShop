import React from 'react';
import { data } from '../../../mock/ourBlogPosts';
import { Container, Wrapper } from './style';

export const CreateNewsletter = () => {
  return (
    <Container>
      <Container.Title>Our Blog Posts</Container.Title>
      <Container.Description>
        We are an online plant shop offering a wide range of cheap and trendy
        plants.{' '}
      </Container.Description>
      <Wrapper>
        {data.map(({ id, img, month, name, description, btn }) => (
          <Wrapper.Card key={id}>
            <Wrapper.Img src={img} />
            <Wrapper.Wrap>
              <Wrapper.Month>{month}</Wrapper.Month>
              <Wrapper.Title>{name}</Wrapper.Title>
              <Wrapper.Description>{description}</Wrapper.Description>
            </Wrapper.Wrap>
          </Wrapper.Card>
        ))}
      </Wrapper>
    </Container>
  );
};

export default CreateNewsletter;
