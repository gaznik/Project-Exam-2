import { useForm, Controller } from 'react-hook-form';
import useCreateVenue from '../../hooks/useCreateVenue';

function CreateVenueForm() {
    const { handleSubmit, control, onSubmit } = useCreateVenue();
  
    return (
        <div>
<form onSubmit={handleSubmit(onSubmit)}>
    <div>
        <h2>General information:</h2>
        <div>
            <label htmlFor="name">Name *</label>
            <Controller
                name="name"
                control={control}
                defaultValue=""
                render={({ field }) => <input {...field} type="text" required />}
            />
        </div>
        <div>
            <label htmlFor="description">Description *</label>
            <Controller
                name="description"
                control={control}
                defaultValue=""
                render={({ field }) => <input {...field} type="text" required />}
            />
        </div>
        <div>
            <label htmlFor="media">Images (url)</label>
            <Controller
                name="media"
                control={control}
                defaultValue={[]}
                render={({ field }) => <input {...field} type="url" />}
            />
        </div>
        <div>
            <label htmlFor="price">Price per night *</label>
            <Controller
                name="price"
                control={control}
                defaultValue=""
                render={({ field }) => <input {...field} type="number" required />}
            />
        </div>
        <div>
            <label htmlFor="maxGuests">Max guests *</label>
            <Controller
                name="maxGuests"
                control={control}
                defaultValue=""
                render={({ field }) => <input {...field} type="number" required />}
            />
        </div>
        <div>
            <label htmlFor='rating'>Rating</label>
            <Controller
                name="rating"
                control={control}
                defaultValue={0}
                render={({ field }) => <input type="number" {...field} />}
            />
        </div>
    </div>
    <div>
        <div>
            <h2>Additional information:</h2>
            <div>
                <label>Wifi:</label>
                <Controller
                    name="meta.wifi"
                    control={control}
                    defaultValue={false}
                    render={({ field }) => (
                        <input type="checkbox" {...field} checked={field.value === true} />
                    )}
                />
            </div>
            <div>
                <label>Parking:</label>
                <Controller
                    name="meta.parking"
                    control={control}
                    defaultValue={false}
                    render={({ field }) => (
                        <input type="checkbox" {...field} checked={field.value === true} />
                    )}
                />
            </div>
            <div>
                <label>Breakfast:</label>
                <Controller
                    name="meta.breakfast"
                    control={control}
                    defaultValue={false}
                    render={({ field }) => (
                        <input type="checkbox" {...field} checked={field.value === true} />
                    )}
                />
            </div>
            <div>
                <label>Pets:</label>
                <Controller
                    name="meta.pets"
                    control={control}
                    defaultValue={false}
                    render={({ field }) => (
                        <input type="checkbox" {...field} checked={field.value === true} />
                    )}
                />
            </div>
        </div>
        <div>
            <h2>Location:</h2>
            <div>
                <label htmlFor='location.address'>Address</label>
                <Controller
                    name="location.address"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <input {...field} type="text" />}
                />
            </div>
            <div>
                <label htmlFor='location.zip'>Zip code</label>
                <Controller
                    name="location.zip"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <input {...field} type="text" />}
                />
            </div>
            <div>
                <label htmlFor='location.city'>City</label>
                <Controller
                    name="location.city"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <input {...field} type="text" />}
                />
            </div>
            <div>
                <label htmlFor='location.country'>Country</label>
                <Controller
                    name="location.country"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <input {...field} type="text" />}
                />
            </div>
            <div>
                <label htmlFor='location.continent'>Continent</label>
                <Controller
                    name="location.continent"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <input {...field} type="text" />}
                />
            </div>
        </div>
    </div>
    <div>
        <button type='submit'>Add venue</button>
    </div>
</form>

        </div>
    )
}

export default CreateVenueForm;
