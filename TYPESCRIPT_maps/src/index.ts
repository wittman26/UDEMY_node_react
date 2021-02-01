// npm install -g parcel-bundler
// parcel index.html
console.log('Hello again and again');

import { Company } from './Company';
import { CustomMap } from './CustomMap';
// Notation {} describes one element of the file
import { User } from './User';

// import redConst from './User'; // the name could be any using default in the file
// console.log(redConst); // red

const user = new User();
console.log(user);

const company = new Company();
console.log(company);

// This object hides the property googleMaps by creating it as private
const customMap = new CustomMap('map');

// It's not necessary to add mor code to check if user
// accomplish the model of the interface
customMap.addMarker(user);
customMap.addMarker(company);
