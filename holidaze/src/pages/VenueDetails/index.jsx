import DisplayVenueDetails from  "../../components/DisplayVenueDetails";
import { Helmet } from 'react-helmet';

function VenueDetails() {
    return (
      <div>
        <div className='application'>
          <Helmet>
              <link rel="icon" href="icons/loading.png" />
          </Helmet>
        </div>
        <DisplayVenueDetails />
      </div>
    );
  }
  
  export default VenueDetails;