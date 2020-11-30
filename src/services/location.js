import Geocoder from "react-native-geocoder";
import RNLocation from 'react-native-location';
import GetLocation from 'react-native-get-location'

export async function getLocation() {
    let granted = await RNLocation.requestPermission({
        ios: "whenInUse",
        android: {
            detail: "fine"
        }
    })
    let location = null;
    if (granted) {
      location = await GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 15000,
      })
    }
    return location;
}

export async function getLocationData({longitude, latitude}) {
    // Position Geocoding
    var location = {
        lat: latitude,
        lng: longitude
    };


    // res is an Array of geocoding object (see below)
    // [
    //     {
    //       "adminArea": "New York",
    //       "country": "United States",
    //       "countryCode": "US",
    //       "feature": null,
    //       "formattedAddress": "1000 5th Ave, New York, NY 10028, USA",
    //       "locale": "en_GB",
    //       "locality": "New York",
    //       "position": {
    //         "lat": 40.7801306,
    //         "lng": -73.9630265
    //       },
    //       "postalCode": "10028",
    //       "streetName": "5th Avenue",
    //       "streetNumber": "1000",
    //       "subAdminArea": "New York County",
    //       "subLocality": "Manhattan"
    //     }
    // ]
    let countries = [];
    let res = await Geocoder.geocodePosition(location);
    countries = res;
    return countries;
}
