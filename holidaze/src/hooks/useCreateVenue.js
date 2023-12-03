import { useForm } from 'react-hook-form';
import createVenue from '../services/handlers/createVenueHandler'; 

function useCreateVenue() {
  const { handleSubmit, control } = useForm();

  const onSubmit = async (data) => {
    try {
      const rating = data.rating ? parseInt(data.rating) : 0;

      const body = {
        name: data.name,
        description: data.description,
        media: data.media.length > 0 ? [data.media] : [],
        price: parseInt(data.price),
        maxGuests: parseInt(data.maxGuests),
        rating: rating,
        meta: {
          wifi: data.meta.wifi || false,
          parking: data.meta.parking || false,
          breakfast: data.meta.breakfast || false,
          pets: data.meta.pets || false,
        },
        location: {
          address: data.location.address,
          city: data.location.city,
          zip: data.location.zip,
          country: data.location.country,
          continent: data.location.continent,
        },
      };

      const response = await createVenue(body);
      if (response) {
        console.log('Success');
      }
    } catch (error) {
      console.error('Something went wrong, try again.', error);
    }
  };

  return {
    handleSubmit,
    control,
    onSubmit,
  };
}

export default useCreateVenue;
