"use client"

import { InlineWidget } from 'react-calendly';
import { CALENDAR_HEADER } from '@/public/content/content';

const CalendlyForm = () => {
  return (
<div className="flex justify-center items-center h-screen">
  <div style={{ width: '100%', maxWidth: '600px' }}> {/* Ensure this container dictates the width */}
    <h1 className=' h2 text-center mb-4' style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)" }}>
      {CALENDAR_HEADER.HEADER}
    </h1>
    <InlineWidget styles={{ height: '75vh', width: '100%' }} url="https://calendly.com/thermal-vision-research/quick-chat" />
  </div>
</div>

  );
};

export default CalendlyForm;

