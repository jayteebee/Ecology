"use client"

import { InlineWidget } from 'react-calendly';

const CalendlyForm = () => {
  return (
    <div className='h-full'>
            <h1 className='h2 text-center mb-4'>Arrange A Call</h1>
      <InlineWidget styles={{
  height: '900px'
}} url="https://calendly.com/jethro-z-nh/chat" />
    </div>
  );
};

export default CalendlyForm;
