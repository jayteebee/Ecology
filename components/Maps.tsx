
// import React from 'react';
// import { MAP_HEADER } from '@/public/content/content';

// const Maps: React.FC = () => {
//   return (
//     <div className="flex justify-center gap-5 flex-wrap mx-auto mb-6 mt-6">
//       <div className="text-center">
//         <h2 className="h2 mb-4">{MAP_HEADER[0].HEADER}</h2>
//         <iframe title="By Train" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d39727.07729024622!2d-2.543228!3d51.514274!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48719048d3523e8d%3A0x915c1ab91ecb9ff4!2sBristol%20Parkway!5e0!3m2!1sen!2suk!4v1711012653290!5m2!1sen!2suk" width="400" height="300" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-lg"></iframe>
//       </div>

//       {/* <div className="text-center">
//         <h2 className="h2 mb-4">{MAP_HEADER[1].HEADER}</h2>
//         <iframe title="By Plane" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1274925.2698226038!2d-2.717168!3d51.383053!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48718ea8a8ed263f%3A0xd844daddcc2849c4!2sBristol%20Airport!5e0!3m2!1sen!2suk!4v1711012743941!5m2!1sen!2suk" width="400" height="300" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-lg"></iframe>
//       </div>       */}

//       <div className="text-center">
//         <h2 className="h2 mb-4">{MAP_HEADER[2].HEADER}</h2>
//         <iframe title="By Car" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1240.660681062971!2d-2.569779!3d51.54400600000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487191102927a8cd%3A0x6c5da47db2a5bedb!2s2530%20Aztec%20West!5e0!3m2!1sen!2suk!4v1711012296741!5m2!1sen!2suk" width="400" height="300" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-lg"></iframe>
//       </div>



//     </div>
//   );
// }

// export default Maps;

import React from 'react';
import { MAP_HEADER } from '@/public/content/content';

const Maps: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center mx-auto mb-6 mt-6">

      <h2 className="h2 mb-6">{MAP_HEADER[3].HEADER}</h2>

      <div className="flex justify-center gap-5 flex-wrap w-full">
        <div className="text-center">
          <h2 className="h2 mb-4">{MAP_HEADER[0].HEADER}</h2>
          <iframe title="By Train" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d39727.07729024622!2d-2.543228!3d51.514274!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48719048d3523e8d%3A0x915c1ab91ecb9ff4!2sBristol%20Parkway!5e0!3m2!1sen!2suk!4v1711012653290!5m2!1sen!2suk" width="400" height="300" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-lg"></iframe>
        </div>


        <div className="text-center">
          <h2 className="h2 mb-4">{MAP_HEADER[2].HEADER}</h2>
          <iframe title="By Car" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1240.660681062971!2d-2.569779!3d51.54400600000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487191102927a8cd%3A0x6c5da47db2a5bedb!2s2530%20Aztec%20West!5e0!3m2!1sen!2suk!4v1711012296741!5m2!1sen!2suk" width="400" height="300" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-lg"></iframe>
        </div>
      </div>
    </div>
  );
}

export default Maps;
