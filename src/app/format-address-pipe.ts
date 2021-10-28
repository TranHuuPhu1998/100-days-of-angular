import { Pipe, PipeTransform } from '@angular/core';

interface AddressLike {
  city: string;
  state: string;
  zip: number;
  country: string;
}

@Pipe({
  name : 'formatAddress'
})
export class FormatAddressPipe implements PipeTransform {
  transform(address: AddressLike , parameter?:string) {
    return (
      "city: "+
      address.city +
      'state:' +
      address.state +
      'zip: ' +
      address.zip +
      'country: ' +
      address.country +
      'parameter: ' + parameter
    );
  }
}
