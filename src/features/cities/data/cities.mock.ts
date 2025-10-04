
import { City } from '../types/city.types';

const cityNames = ['Jakarta Pusat', 'Jakarta Selatan', 'Bandung', 'Surabaya', 'Yogyakarta', 'Medan', 'Semarang', 'Makassar', 'Bekasi', 'Depok'];


export const cities: City[] = cityNames.map((name, index)=>{
    // const officeCount = officeSpaces. filter( (space) => space. location === name). length;

    const officesCount = Math.floor(Math.random() * 200) + 50; // Random offices count between 50 and 250

    return {
        id: index + 1,
        name,
        officesCount,
        image: `/assets/images/thumbnails/thumbnails-${(index % 7) + 1}.png`,
        slug: name.toLowerCase().replace(/ /g, '-'),
    }

})