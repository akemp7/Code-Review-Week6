import {treatmentSearch} from './scripts';
import 'bootstrap';
import $ from 'jquery';
import './styles.css'

$(document).ready(function(event){
  $('#medIssue').submit(function(event){
    event.preventDefault();
    let medicalIssue = $('input[name=medicalIssue]').val();
    let treatment = new treatmentSearch();
    let promise = treatment.getTreatment(medicalIssue);


    promise.then(function(response){
      let body = JSON.parse(response);
      console.log(`${body.data.practices.name}`);
    });
  });
});
