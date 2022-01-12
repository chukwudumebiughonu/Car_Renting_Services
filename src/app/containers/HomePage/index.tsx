import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { BookCard } from '../../components/bookCard';
import { Navbar } from '../../components/navbar';
import { TopSection } from './topSection';
<<<<<<< HEAD
import { Marginer } from '../../components/marginer'
=======
>>>>>>> 205630a87289054965114d3314a0f07af45e6bac


const PageContainer = styled.div`
  ${tw`flex flex-col items-center w-full h-full overflow-x-hidden `}
`;

export function HomePage() {
    return <PageContainer>
        < Navbar />
      <TopSection />
<<<<<<< HEAD
      <Marginer direction='vertical' margin='2em' />
=======
>>>>>>> 205630a87289054965114d3314a0f07af45e6bac
      <BookCard/>
    </PageContainer>; 
}