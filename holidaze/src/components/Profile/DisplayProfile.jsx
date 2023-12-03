import { PROFILE_DATA_URL } from '../../utils/constants';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GetData from '../../services/api/useDataRetrieval';
import updateAvatar from '../../services/handlers/updateAvatarHandler';
import MyBookings from './MyBookings';
import BecomeVenueManager from '../../components/VenueManager/BecomeVenueManager';
import DisplayMyVenues from '../../components/VenueManager/DisplayMyVenues';

function DisplayProfile() {
    const avatarPlaceholder = '/icons/user.png';

    const { data } = GetData(PROFILE_DATA_URL);
    const { name, avatar: initialAvatar, venueManager } = data;

    const [avatar, setAvatar] = useState(initialAvatar || '');
    
    useEffect(() => {
        setAvatar(initialAvatar || '');
    }, [initialAvatar]);

    const handleChange = (e) => {
        const { value } = e.target;
        setAvatar(value);
    };

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await updateAvatar({ avatar });
        } catch (error) {
            console.error('Error updating avatar:', error);
        }
    };

    return (
        <div>
            <div>
                {avatar ? <img src={avatar} alt={name} /> : <img src={avatarPlaceholder} alt={name} />}
                <h1>{name}</h1>
            </div>
            <div>
                <form>
                    <label htmlFor='avatar'>Update avatar (url)</label>
                    <div>
                        <input
                            type='url'
                            name='avatar'
                            value={avatar}
                            onChange={handleChange}
                        />
                        <button onClick={handleClick}>Update avatar</button>
                    </div>
                </form>
            </div>
            <div>
                <h2>My bookings</h2>
                <div>
                    <MyBookings />
                </div>
            </div>
            {venueManager ? (
                <div>
                    <h2>My venues</h2>
                    <Link to="/createVenue">Create new venue listing</Link>
                    <div>
                        <DisplayMyVenues />
                    </div>
                </div>
            ) : (
                <div>
                    <p>Rent out your venue? </p>
                    <button onClick={BecomeVenueManager}>Become a venue manager.</button>
                </div>
            )}
        </div>
    );
}

export default DisplayProfile;
