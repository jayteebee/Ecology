"use client"

import { InlineWidget } from 'react-calendly';
import { CALENDAR_HEADER } from '@/public/content/content';

const CalendlyForm = () => {
  return (
    <div className='h-full'>
            <h1 className='h2 text-center mb-4'>{CALENDAR_HEADER.HEADER}</h1>
      <InlineWidget styles={{
  height: '900px'
}} url="https://calendly.com/thermal-vision-research/quick-chat" />
    </div>
  );
};

export default CalendlyForm;
