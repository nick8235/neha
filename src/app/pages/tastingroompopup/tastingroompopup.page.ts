import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tastingroompopup',
  templateUrl: './tastingroompopup.page.html',
  styleUrls: ['./tastingroompopup.page.scss'],
})
export class TastingroompopupPage implements OnInit {
  countryData : any[];
  country : any;
countrySelected: any;
  constructor(public alertCtrl:AlertController) { 
    this.countryData =  [
      {
        "id": 1,
        "name": "Afghanistan"
      },
      {
        "id": 2,
        "name": "Albania"
      },
      {
        "id": 3,
        "name": "Algeria"
      },
      {
        "id": 4,
        "name": "American Samoa"
      },
      {
        "id": 5,
        "name": "Andorra"
      },
      {
        "id": 6,
        "name": "Angola"
      },
      {
        "id": 7,
        "name": "Anguilla"
      },
      {
        "id": 8,
        "name": "Antarctica"
      },
      {
        "id": 9,
        "name": "Antigua and Barbuda"
      },
      {
        "id": 10,
        "name": "Argentina"
      },
      {
        "id": 11,
        "name": "Armenia"
      },
      {
        "id": 12,
        "name": "Aruba"
      },
      {
        "id": 13,
        "name": "Australia"
      },
      {
        "id": 14,
        "name": "Austria"
      },
      {
        "id": 15,
        "name": "Azerbaijan"
      },
      {
        "id": 16,
        "name": "Bahamas"
      },
      {
        "id": 17,
        "name": "Bahrain"
      },
      {
        "id": 18,
        "name": "Bangladesh"
      },
      {
        "id": 19,
        "name": "Barbados"
      },
      {
        "id": 20,
        "name": "Belarus"
      },
      {
        "id": 21,
        "name": "Belgium"
      },
      {
        "id": 22,
        "name": "Belize"
      },
      {
        "id": 23,
        "name": "Benin"
      },
      {
        "id": 24,
        "name": "Bermuda"
      },
      {
        "id": 25,
        "name": "Bhutan"
      },
      {
        "id": 26,
        "name": "Bolivia"
      },
      {
        "id": 27,
        "name": "Bosnia and Herzegovina"
      },
      {
        "id": 28,
        "name": "Botswana"
      },
      {
        "id": 29,
        "name": "Bouvet Island"
      },
      {
        "id": 30,
        "name": "Brazil"
      },
      {
        "id": 31,
        "name": "British Indian Ocean Territories"
      },
      {
        "id": 32,
        "name": "Brunei Darussalam"
      },
      {
        "id": 33,
        "name": "Bulgaria"
      },
      {
        "id": 34,
        "name": "Burkina Faso"
      },
      {
        "id": 35,
        "name": "Burundi"
      },
      {
        "id": 36,
        "name": "Cambodia"
      },
      {
        "id": 37,
        "name": "Cameroon"
      },
      {
        "id": 38,
        "name": "Canada"
      },
      {
        "id": 39,
        "name": "Cape Verde"
      },
      {
        "id": 40,
        "name": "Cayman Islands"
      },
      {
        "id": 41,
        "name": "Central African Republic"
      },
      {
        "id": 42,
        "name": "Chad"
      },
      {
        "id": 43,
        "name": "Chile"
      },
      {
        "id": 44,
        "name": "China, People's Republic of"
      },
      {
        "id": 45,
        "name": "Christmas Island"
      },
      {
        "id": 46,
        "name": "Cocos Islands"
      },
      {
        "id": 47,
        "name": "Colombia"
      },
      {
        "id": 48,
        "name": "Comoros"
      },
      {
        "id": 49,
        "name": "Congo"
      },
      {
        "id": 50,
        "name": "Cook Islands"
      },
      {
        "id": 51,
        "name": "Costa Rica"
      },
      {
        "id": 52,
        "name": "Cote D'ivoire"
      },
      {
        "id": 53,
        "name": "Croatia"
      },
      {
        "id": 54,
        "name": "Cuba"
      },
      {
        "id": 55,
        "name": "Cyprus"
      },
      {
        "id": 56,
        "name": "Czech Republic"
      },
      {
        "id": 57,
        "name": "Denmark"
      },
      {
        "id": 58,
        "name": "Djibouti"
      },
      {
        "id": 59,
        "name": "Dominica"
      },
      {
        "id": 60,
        "name": "Dominican Republic"
      },
      {
        "id": 61,
        "name": "East Timor"
      },
      {
        "id": 62,
        "name": "Ecuador"
      },
      {
        "id": 63,
        "name": "Egypt"
      },
      {
        "id": 64,
        "name": "El Salvador"
      },
      {
        "id": 65,
        "name": "Equatorial Guinea"
      },
      {
        "id": 66,
        "name": "Eritrea"
      },
      {
        "id": 67,
        "name": "Estonia"
      },
      {
        "id": 68,
        "name": "Ethiopia"
      },
      {
        "id": 69,
        "name": "Falkland Islands"
      },
      {
        "id": 70,
        "name": "Faroe Islands"
      },
      {
        "id": 71,
        "name": "Fiji"
      },
      {
        "id": 72,
        "name": "Finland"
      },
      {
        "id": 73,
        "name": "France"
      },
      {
        "id": 74,
        "name": "France, Metropolitan"
      },
      {
        "id": 75,
        "name": "French Guiana"
      },
      {
        "id": 76,
        "name": "French Polynesia"
      },
      {
        "id": 77,
        "name": "French Southern Territories"
      },
      {
        "id": 78,
        "name": "FYROM"
      },
      {
        "id": 79,
        "name": "Gabon"
      },
      {
        "id": 80,
        "name": "Gambia"
      },
      {
        "id": 81,
        "name": "Georgia"
      },
      {
        "id": 82,
        "name": "Germany"
      },
      {
        "id": 83,
        "name": "Ghana"
      },
      {
        "id": 84,
        "name": "Gibraltar"
      },
      {
        "id": 85,
        "name": "Greece"
      },
      {
        "id": 86,
        "name": "Greenland"
      },
      {
        "id": 87,
        "name": "Grenada"
      },
      {
        "id": 88,
        "name": "Guadeloupe"
      },
      {
        "id": 89,
        "name": "Guam"
      },
      {
        "id": 90,
        "name": "Guatemala"
      },
      {
        "id": 91,
        "name": "Guinea"
      },
      {
        "id": 92,
        "name": "Guinea-Bissau"
      },
      {
        "id": 93,
        "name": "Guyana"
      },
      {
        "id": 94,
        "name": "Haiti"
      },
      {
        "id": 95,
        "name": "Heard Island And Mcdonald Islands"
      },
      {
        "id": 96,
        "name": "Honduras"
      },
      {
        "id": 97,
        "name": "Hong Kong"
      },
      {
        "id": 98,
        "name": "Hungary"
      },
      {
        "id": 99,
        "name": "Iceland"
      },
    ]}
  ngOnInit() {
  }
  

  
}