import React, { useState } from 'react';
import Locationpermission from '../components/Locationpermission';
import Mapcomponent from '../components/Mapcomponent';
function Home() {
   
  const [showModal , setshowModal] = useState(true);
  return (
    <div>
     {
      showModal && (
        <Locationpermission 
        onEnableLocation={()=>setshowModal(false)}
        onManualSearch={()=>setshowModal(false)}/>
      )
     }
    </div>
  )
}

export default Home
