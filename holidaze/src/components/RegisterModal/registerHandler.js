import { REGISTER_URL } from '../../utils/api/constants';

async function registerHandler(user) {
    try {
        const response = await fetch(REGISTER_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        const responseData = await response.json();
        
        if (response.ok) {
            const { name } = responseData;
            console.log('Successful registration:', name);
            
            return { name };
        } else {
            console.error('Registration failed:', responseData);
            return { success: false, error: 'That did not quite work, try again.' };
        } 
    } catch (error) {
        console.error(error);

        return { success: false, error: 'That did not quite work, try again.' };
    }
}

export default registerHandler;
