"use client"

// import { InlineWidget, useCalendlyEventListener } from 'react-calendly';
// import { CALENDAR_HEADER } from '@/public/content/content';
// import { lintrk } from 'nextjs-linkedin-insight-tag'


// const CalendlyForm = () => {

//   useCalendlyEventListener({
//     onEventScheduled: (e) => window.lintrk('track', { conversion_id: 16159908 });
//   });

//   return (
//     <div className="flex justify-center items-center "> {/* Use min-h-screen to ensure it takes at least the full height */}
//       {/* Use responsive width utilities: 
//           w-full for mobile to use the full width.
//           max-w-none for desktop to remove the max-width restriction. */}
//       <div className="w-full max-w-4xl px-4 sm:px-6 lg:max-w-none">
//         <h1 
//           className="h2 text-center mb-4" 
//           style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)" }}
//         >
//           {CALENDAR_HEADER.HEADER}
//         </h1>
//         <div style={{ width: '100%' }}>
//           <InlineWidget 
//             styles={{ height: '75vh', width: '100%' }} 
//             url="https://calendly.com/thermal-vision-research/quick-chat" 
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CalendlyForm;

import React from 'react';
import { InlineWidget, useCalendlyEventListener } from 'react-calendly';
import { CALENDAR_HEADER } from '@/public/content/content';
import { sendGTMEvent } from '@next/third-parties/google'


declare global {
  interface Window {
    lintrk: any;
  }
}

const CalendlyForm = () => {
  // Setting up the event listener for Calendly events
  useCalendlyEventListener({
    onEventScheduled: (e) => {
      // Trigger the LinkedIn Insight Tag event when an event is scheduled
     // sendGTMEvent({ event: 'buttonClicked', value: 'xyz' }) 
      window.lintrk('track', { conversion_id: 16159916  }); // ecologists booking a call 2
      window.lintrk('track', { conversion_id: 16159980 }); // booked appt

      console.log('Event Scheduled:', e.data.payload);
    }
  });

  return (
    <div className="flex justify-center items-center"> {/* Use min-h-screen to ensure it takes at least the full height */}
      {/* Use responsive width utilities: 
          w-full for mobile to use the full width.
          max-w-none for desktop to remove the max-width restriction. */}
      <div className="w-full max-w-4xl px-4 sm:px-6 lg:max-w-none">
        <h1
          className="h2 text-center mb-4"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)" }}
        >
          {CALENDAR_HEADER.HEADER}
        </h1>
        <div style={{ width: '100%' }}>
          <InlineWidget
            styles={{ height: '75vh', width: '100%' }}
            url="https://calendly.com/thermal-vision-research/quick-chat"
          />
        </div>
      </div>
    </div>
  );
};

export default CalendlyForm;
