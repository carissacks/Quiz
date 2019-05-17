// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false, //kalo gamau ditampilin, jadi true
  firebaseConfig: { // diambil dari firebase yang digunakan 
    apiKey: "AIzaSyBqTpp58Z0DgIVCdAzru0Tz8RvAvscrfIA",
    authDomain: "uas-pti.firebaseapp.com",
    databaseURL: "https://uas-pti.firebaseio.com",
    projectId: "uas-pti",
    storageBucket: "uas-pti.appspot.com",
    messagingSenderId: "172419034340"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
