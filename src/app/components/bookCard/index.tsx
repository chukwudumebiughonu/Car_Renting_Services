import React, { useState } from 'react';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Button } from '../button';
import { Marginer } from '../marginer';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';



const CardContainer = styled.div`
  min-height:4.3em;
  box-shadow:0 1.3px  12px -3px rgba(0, 0, 0, 0.4);
  ${tw`flex items-center justify-center pt-1 pb-1 pl-2 pr-2 bg-white rounded-md md:pt-2 md:pb-2 md:pl-9 md:pr-9`}; 

`;

const ItemContainer = styled.div`
 ${tw`relative flex`};
`;

const Icon = styled.span`
${tw`mr-1 text-xs text-red-500 fill-current md:text-base md:mr-3`};
`;

const Name = styled.span`
  ${tw`text-xs text-gray-600 cursor-pointer md:text-sm`}
`;

const smallicon = styled.span`

`;

const LineSeperator = styled.span`
  width: 2px;
  height: 45%;
  ${tw`ml-2 mr-2 bg-gray-300 md:mr-5 md:ml-5`};
`;


const DateCalendar = styled(Calendar)`
  position: absolute;
  max-width: none;
  top: 3.5em;
  left: -2em;
`;

export function BookCard() {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [isStartCalendarOpen, setStartCalendarOpen] = useState(false);  
   
  const [returnDate, setReturnDate] = useState<Date>(new Date());
  const [isReturnCalendarOpen, setReturnCalendarOpen] = useState(false);  

  const toggleStartDateCalendar = () => {
    setStartCalendarOpen(!isStartCalendarOpen);
    if(isReturnCalendarOpen) setReturnCalendarOpen(false);
  }
  
  const toggleReturnDateCalendar = () => {
    setReturnCalendarOpen(!isReturnCalendarOpen);
    if(isStartCalendarOpen) setStartCalendarOpen(false);
  }
    return (
        <CardContainer >
        <ItemContainer>
            <Icon>
                <FontAwesomeIcon icon={ faCalendarAlt } />
            </Icon>
           <Name onClick={toggleStartDateCalendar}>Pick Up Date</Name>
          { isStartCalendarOpen && <DateCalendar value={ startDate } onChange={ setStartDate as any }/> }
        </ItemContainer>
        <LineSeperator/>  
         <ItemContainer>
            <Icon>
                <FontAwesomeIcon icon= {faCalendarAlt} />
            </Icon>
            <Name onClick={toggleReturnDateCalendar}>Return Date</Name>
            {isReturnCalendarOpen && 
              <DateCalendar value={ returnDate } onChange={ setReturnDate as any}/>
              }
        </ItemContainer>
        <Marginer direction='horizontal' margin='2em' />
        <Button text='Book your ride'/>
    </CardContainer>
)
}