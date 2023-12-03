import UpdateVenueForm from "../../components/VenueManager/UpdateVenueForm";
import { Helmet, HelmetProvider } from 'react-helmet-async';

function UpdateVenuePage() {
    return (
        <HelmetProvider>
            <div className="application">
                <Helmet>
                    <meta charset="utf-8" />
                    <link rel="icon" href="icons/loading.png" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Update venue | Holidaze</title>
                    <meta name="description" content="Edit your venue listing with updating information" />
                </Helmet>
                <h1>Edit venue</h1>
                <UpdateVenueForm />
            </div>
        </HelmetProvider>
    );
}

export default UpdateVenuePage;
