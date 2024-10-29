import React, { useContext, useEffect, useState } from 'react';
import Locationpermission from '../components/Locationpermission';
import Mapcomponent from '../components/Mapcomponent';
import { LocationContext } from '../context/LocationContext';
import AddressForm from '../components/AddressForm';
function Home() {
   const [location , setLocation]=useContext(LocationContext);
  const [showModal , setShowModal] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            setLocation({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            });
        },
        () => setShowModal(true)
    );
}, [setLocation]);
  return (
    <div>
     {
      showModal && (
        <Locationpermission 
        onEnableLocation={()=>setShowModal(false)}
        onManualSearch={()=>setShowModal(false)}/>
      )
     }
      <Mapcomponent onLocationSelected={setLocation} />
      {location && <AddressForm location={location} />}
    </div>
  )
}

export default Home
