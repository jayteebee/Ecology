"use client"

import { InlineWidget } from 'react-calendly';

const CalendlyForm = () => {
  return (
    <div>
            <h1 className='h2 text-center mb-4'>Arrange A Call</h1>
      <InlineWidget url="https://calendly.com/jethro-z-nh/chat" />
    </div>
  );
};

export default CalendlyForm;
