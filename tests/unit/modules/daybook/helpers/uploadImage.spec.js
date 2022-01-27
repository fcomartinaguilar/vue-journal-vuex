import uploadImage from '@/modules/daybook/helpers/uploadImage'
import axios from 'axios'

describe('pruebas en el uploadImage', () => {
    
    test('debe de cargar un archivo y retornar el url', async() => {
        const {data} = await axios.get('https://res.cloudinary.com/currelas82/image/upload/v1643199413/xodxqgreuzoi48jmalwn.png', {
            reponseType: 'arraybuffer'
        })
        const file = new File([ data ], 'foto.jpg')
        const url = await uploadImage( file )
        expect( typeof url).toBe('string')
    });
});