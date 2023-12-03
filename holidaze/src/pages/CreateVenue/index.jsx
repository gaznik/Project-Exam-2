import CreateVenueForm from "../../components/VenueManager/CreateVenueForm";
import { Helmet, HelmetProvider } from 'react-helmet-async';

function CreateVenue() {
    return (
        <HelmetProvider>
            <div className="application">
                <Helmet>
                    <meta charset="utf-8" />
                    <link rel="icon" href="icons/loading.png" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Add a new venue | Holidaze</title>
                    <meta name="description" content="Add a new venue so people can book their stay." />
                </Helmet>
                <h1>Add new venue</h1>
                <CreateVenueForm />
            </div>
        </HelmetProvider>
    );
}

export default CreateVenue;
