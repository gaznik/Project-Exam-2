import { Link } from "react-router-dom";
import fetchData from '../../services/api/useDataRetrieval.js';
import { PROFILE_VENUES_URL } from "../../utils/constants.js";


function DisplayMyVenues() {
    const { data, loading, throwError } = fetchData(PROFILE_VENUES_URL)

    if (loading) {
        return (
            <div>
                <p>Loading your venues ...</p>
            </div>
        )
    }
    if (!loading && throwError) {
        return <div>Something went wrong... </div>
    }


    return (
        <div>
            {data.map((venue) => {
                return (
                    <div key={venue.id}>
                        <Link to={`/venues/${venue.id}`}>
                            <div>
                                {venue.media.length >= 0 ? <div>

                                </div> : ""}
                                <h3>{venue.name}</h3>
                            </div>

                        </Link>
                    </div>
                )
            })}
        </div>)
}


export default DisplayMyVenues;