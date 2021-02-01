// npm i faker
// npm i @types/faker
import faker from 'faker';
import { Mappable } from './CustomMap';

// export default red; // Would export the entire file with this value

// esport makes available the class to any source
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string {
    return `User name: ${this.name}`;
  }

  constructor(_optionalArgs?: string) {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}
