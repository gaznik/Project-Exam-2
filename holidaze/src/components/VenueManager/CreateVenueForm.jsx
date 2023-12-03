import { Controller } from 'react-hook-form';
import useCreateVenue from '../../hooks/useCreateVenue';

function CreateVenueForm() {
    const { handleSubmit, control, onSubmit } = useCreateVenue();
  
    return (
        <div className="container mt-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-md-6">
                <h2>General information:</h2>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name *</label>
                  <Controller
                    name="name"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <input {...field} type="text" className="form-control" required />}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description *</label>
                  <Controller
                    name="description"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <input {...field} type="text" className="form-control" required />}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="media" className="form-label">Images (url)</label>
                  <Controller
                    name="media"
                    control={control}
                    defaultValue={[]}
                    render={({ field }) => <input {...field} type="url" className="form-control" />}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="price" className="form-label">Price per night *</label>
                  <Controller
                    name="price"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <input {...field} type="number" className="form-control" required />}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="maxGuests" className="form-label">Max guests *</label>
                  <Controller
                    name="maxGuests"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <input {...field} type="number" className="form-control" required />}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor='rating' className="form-label">Rating</label>
                  <Controller
                    name="rating"
                    control={control}
                    defaultValue={0}
                    render={({ field }) => <input type="number" {...field} className="form-control" />}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <h2>Additional information:</h2>
                <div className="form-check mb-3">
                  <Controller
                    name="meta.wifi"
                    control={control}
                    defaultValue={false}
                    render={({ field }) => (
                      <input type="checkbox" {...field} className="form-check-input" checked={field.value === true} />
                    )}
                  />
                  <label className="form-check-label">Wifi</label>
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
                <label className="form-check-label">Breakfast:</label>
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
                <label className="form-check-label">Pets:</label>
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
        <div className="col-md-6">
            <h2>Location:</h2>
            <div className="mb-3">
                <label className="form-label" htmlFor='location.address'>Address</label>
                <Controller
                    name="location.address"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <input {...field} type="text" />}
                />
            </div>
            <div>
                <label className="form-label" htmlFor='location.zip'>Zip code</label>
                <Controller
                    name="location.zip"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <input {...field} type="text" />}
                />
            </div>
            <div>
                <label className="form-label" htmlFor='location.city'>City</label>
                <Controller
                    name="location.city"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <input {...field} type="text" />}
                />
            </div>
            <div>
                <label className="form-label" htmlFor='location.country'>Country</label>
                <Controller
                    name="location.country"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <input {...field} type="text" />}
                />
            </div>
            <div>
                <label className="form-label" htmlFor='location.continent'>Continent</label>
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
        <button className="native-button" type='submit'>Add venue</button>
    </div>
</form>

        </div>
    )
}

export default CreateVenueForm;
