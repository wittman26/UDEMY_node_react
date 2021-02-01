import { Company } from './Company';
import { User } from './User';

// Defines a model to be followed for the method addMarker
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  //   color: string;
  markerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(idMapDiv: string) {
    this.googleMap = new google.maps.Map(document.getElementById(idMapDiv), {
      center: {
        lat: 0,
        lng: 0,
      },
      zoom: 1,
    });
  }

  /* Could receive a parameter of type User o Company
    | operator means that only parameters that are in both clases will be referenced
    //   addMarker(mappable: User | Company): void {
  */
  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener('click', () => {
      const infowindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });

      infowindow.open(this.googleMap, marker);
    });
  }
}
