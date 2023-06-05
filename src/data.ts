import { Tag } from "./app/shared/models/tag";
import { Wine } from "./app/shared/models/wine";

export const sample_wine : Wine[] = [
  {
    id:'1',
    name: 'Muscat Ottonel',
    price: 50,
    favourite: true,
    stars: 5,
    imageUrl: '/assets/poza1.jpg',
    tags:['White'],
    kind:'Ottonel',
    description:''
    },
    {
    id:'2',
    name: 'Mustoasa de Maderat',
    price: 55,
    favourite: false,
    stars: 4,
    imageUrl: '/assets/poza2.jpg',
    tags:['Red'],
    kind:'Ottonel',
    description:''
    },
    {
    id:'3',
    name: 'Cabernet Sauvignon',
    price: 65,
    favourite: true,
    stars: 4.5,
    imageUrl: '/assets/poza3.jpg',
    tags:['Red'],
    kind:'Ottonel',
    description:''
    },
    {
    id:'4',
    name: 'Feteasca Regala',
    price: 60,
    favourite: false,
    stars: 4,
    imageUrl: '/assets/poza4.jpg',
    tags:['White'],
    kind:'Ottonel',
    description:''
    },
    {
    id:'5',
    name: 'Chasselas',
    price: 50,
    favourite: false,
    stars: 4.5,
    imageUrl: '/assets/poza5.jpg',
    tags:['Red'],
    kind:'Ottonel',
    description:''
    },
    {
    id:'6',
    name: 'Feteasca Regala 2',
    price: 70,
    favourite: true,
    stars: 4.5,
    imageUrl: '/assets/poza6.jpg',
    tags:['Red'],
    kind:'Ottonel',
    description:''
    },
    {
    id:'7',
    name: 'Coniac',
    price: 100,
    favourite: true,
    stars: 5,
    imageUrl: '/assets/poza7.jpg',
    tags:['White'],
    kind:'Ottonel',
    description:''
    },
    {
    id:'8',
    name: 'Bundle',
    price: 500,
    favourite: true,
    stars: 5,
    imageUrl: '/assets/poza8.jpg',
    tags:['White','Red'],
    kind:'Ottonel',
    description:''
    }
]

export const sample_tags : Tag[] = [
  {name: 'All', count : 8},
  {name: 'Red', count: 5},
  {name: 'White', count : 4}
]
