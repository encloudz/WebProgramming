'use strict';

/*
 * Load the model data of the problem 2 of cs142's project4.
 * We load into the property cs142models.statesModel a function that returns  an array of
 * strings with the names of the states.
 *
 * See README.md for more details
 */

var cs142models;

if (cs142models === undefined) {
   cs142models = {};
}

cs142models.statesModel = function() {
   return [
      'Arkhangai',	
      'Bayankhongor',
      'Bayan-Ulgii',
      'Bulgan',
      'Darkhan-Uul',
      'Dornod',
      'Dornogovi',
      'Dundgovi',
      'Govi-Altai',
      'Govisümber',
      'Khentii',
      'Khovd',
      'Khuvsgul',
      'Orkhon',
      'Selenge',
      'Sükhbaatar',
      'Tuv',
      'Umnugovi',
      'Uvs',
      'Uvurkhangai',
      'Zavkhan'
   ];
};

