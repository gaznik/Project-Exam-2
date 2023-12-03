import { useForm, Controller } from 'react-hook-form';
import useUpdateVenue from '../../hooks/useUpdateVenue';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import updateVenue from '../../services/handlers/updateVenueHandler';
import { VENUES_URL } from '../../utils/constants';

function UpdateVenueForm() {
  const { handleSubmit, control, setValue } = useForm();
  const { id } = useParams();
  const UpdateVenue = `${VENUES_URL}/${id}`;
  const { data, loading, throwError } = useUpdateVenue(`${UpdateVenue}?_bookings=true&_owner=true`);

  useEffect(() => {
    if (data) {
      setValue('name', data.name || '');
      setValue('description', data.description || '');
      setValue('media', data.media || []);
      setValue('price', data.price || 0);
      setValue('maxGuests', data.maxGuests || 0);
      setValue('rating', data.rating || 0);

      if (data.location) {
        setValue('location.address', data.location.address || '');
        setValue('location.city', data.location.city || '');
        setValue('location.zip', data.location.zip || '');
        setValue('location.country', data.location.country || '');
        setValue('location.continent', data.location.continent || '');
      }
    }
  }, [data, setValue]);

  const onSubmit = async (formData) => {
    try {
      const response = await updateVenue(UpdateVenue, formData);
      if (response) {
        console.log('Success! Your venue is updated.');
      } else {
        console.error('Something went wrong, try again.');
      }
    } catch (error) {
      console.log(error);
    }
  };
    
        if (loading) {
            return (
                <div >
                    <img src='/icons/loading.png' alt='Loading' className="w-6 animate-spin" />
                </div>
            )
        }
    
        if (!loading && throwError) {
            console.log(throwError);
            return (
                <div>
                    Something went wrong, try again.
                </div>
            )
        }
    return (
        <div>
                <h1>Update venue</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div>
                        <h2>General information: </h2>
                        <div className='flex flex-col'>
                            <label htmlFor="name">Name *</label>
                            <Controller
                            name="name"
                            control={control}
                            defaultValue=""
                            render={({ field }) => <input {...field} type="text"  required />}
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="description" >Description *</label>
                            <Controller
                            name="description"
                            control={control}
                            defaultValue=""
                            render={({ field }) => <input {...field} type="text" required />}
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="media" >Images (url)</label>
                            <Controller
                                name="media"
                                control={control}
                                defaultValue={[]}
                                render={({ field }) => (
                                <input {...field} type="url"  />
                                )} />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="price">Price per night *</label>
                            <Controller
                            name="price"
                            control={control}
                            defaultValue=''
                            render={({ field }) => <input {...field} type="number" required />}
                            />
                        </div>               
                        <div className='flex justify-between my-2'>
                            <label htmlFor="maxGuests">Max guests *</label>
                            <Controller
                            name="maxGuests"
                            control={control}
                            defaultValue='maxGuestsValue'
                            render={({ field }) => <input {...field} type="number" required />}
                            />
                        </div>
                        <div className='flex justify-between my-2'>
                            <label htmlFor='rating' >Rating</label>
                            <Controller
                            name="rating"
                            control={control}
                            defaultValue={0}
                            render={({ field }) => <input type="number"  {...field} />}
                            />
                        </div>
                    </div>
                    <div>
                        <div className='mt-10 md:mt-5'>
                            <h2 >Additional information: </h2>
                            <div className='flex justify-between my-2'>
                                <label htmlFor='meta.wifi' >Wifi:</label>
                                <Controller
                                name="meta.wifi"
                                control={control}
                                defaultValue={false}
                                render={({ field }) => (
                                    <input type="checkbox" {...field} checked={field.value === true} />
                                )}
                                />
                            </div>
                            <div className='w-24 flex justify-between my-2'>
                                <label htmlFor='meta.parking' >Parking:</label>
                                <Controller
                                name="meta.parking"
                                control={control}
                                defaultValue={false}
                                render={({ field }) => (
                                    <input type="checkbox" {...field} checked={field.value === true} />
                                )}
                                />
                            </div>
                            <div className='w-24 flex justify-between my-2'>
                                <label htmlFor='meta.breakfast'>Breakfast: </label>
                                <Controller
                                name="meta.breakfast"
                                control={control}
                                defaultValue={false}
                                render={({ field }) => (
                                    <input type="checkbox" {...field} checked={field.value === true} />
                                )}
                                />
                            </div>
                            <div className='w-24 flex justify-between my-2'>
                                <label htmlFor='meta-pets'>Pets:</label>  
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
                        <div className='mt-10'>
                            <h2>Location: </h2>
                            <div className='flex flex-col'>
                                <label>Address</label>
                                <Controller
                                name="location.address"
                                control={control}
                                defaultValue=""
                                render={({ field }) => <input {...field} type="text" />}
                                />
                            </div>
                            <div className='flex justify-between'>
                                <div className='flex flex-col'>
                                    <label htmlFor='location.zip'>Zip code</label>
                                    <Controller
                                    name="location.zip"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => <input {...field} type="text" />}
                                    />
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor='location.city'>City</label>
                                    <Controller
                                    name="location.city"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => <input {...field} type="text" />}
                                    />
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <label>Country</label>
                                <Controller
                                name="location.country"
                                control={control}
                                defaultValue=""
                                render={({ field }) => <input {...field} type="text" />}
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label >Continent</label>
                                <Controller
                                name="location.continent"
                                control={control}
                                defaultValue=""
                                render={({ field }) => <input {...field} type="text" />}
                                />
                            </div>
                        </div>
                    </div>
                </div>


                <div className='flex justify-between mt-8 md:pb-10'>
                    <button type='submit'>Update Venue</button>
                </div>


            </form>
        </div>
    )
}



export default UpdateVenueForm;