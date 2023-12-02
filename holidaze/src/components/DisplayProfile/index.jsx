import { PROFILE_DATA_URL } from '../../utils/constants';
import { useState } from 'react';
import GetData from '../../services/api/useDataRetrieval'
import updateAvatar from '../../services/handlers/updateAvatarHandler';
import MyBookings from './MyBookings';

function DisplayProfile() {
    const avatarPlaceholder = '/icons/user.png';

    const { data } = GetData(PROFILE_DATA_URL);
    const { name, avatar, venueManager, _count } = data;

    const [formData, setFormData] = useState({
        avatar: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleClick = async (e) => {
        const avatar = formData.avatar;
        e.preventDefault();
        try {
            await updateAvatar({ avatar });
            // Handle any post-update actions or state changes
        } catch (error) {
            console.error('Error updating avatar:', error);
            // Handle error state or show error message
        }
    };

    if(_count) {
        if(venueManager === true) {
            return (
                <div>
                    <div>
                        {avatar !== '' ? <img src={avatar} alt={name} /> : <img src={avatarPlaceholder} alt={name} />}
                        <h1>{name}</h1>
                    </div>
                    <div>
                        <form>
                            <label htmlFor='avatar'>Update avatar (url)</label>
                            <div>
                                <input 
                                    type='url' 
                                    name='avatar' 
                                    value={formData.avatar}
                                    onChange={handleChange}
                                />
                                <button onClick={handleClick}>Update avatar</button>
                            </div>
                        </form>
                    </div>
                    <div>
                        <h2>My bookings</h2>
                        <div>
                            
                        </div>
                    </div>
                    <div>
                        <h2>My venues</h2>
                        <div>
                            
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <div>
                        {avatar !== '' ? <img src={avatar} alt={name} /> : <img src={avatarPlaceholder} alt={name} />}
                        <h1>{name}</h1>
                    </div>
                    <div>
                        <form>
                            <label htmlFor='avatar'>Update avatar (url)</label>
                            <div>
                                <input 
                                    type='url' 
                                    name='avatar' 
                                    value={formData.avatar}
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
                    <div>
                        <p>Rent out your venue? </p>
                        <button >Become a venue manager.</button>
                    </div>
                </div>
            )
        }
    }
}

export default DisplayProfile;
