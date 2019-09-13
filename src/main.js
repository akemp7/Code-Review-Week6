import {treatmentSearch} from './scripts';
import 'bootstrap';
import $ from 'jquery';
import './styles.css'

$(document).ready(function(event){
  $('#medIssue').submit(function(event){
    event.preventDefault();
    let medicalIssue = $('input[name=medicalIssue]').val();
    let doctorName = $('input[name=doctor]').val();
    let treatment = new treatmentSearch();
    let promiseIssue = treatment.getTreatment(medicalIssue);
    let promiseName = treatment.getDoctorName(doctorName);

    promiseIssue.then(function(response){
      let body = JSON.parse(response);
      console.log(`${body.data[0].practices.name}`);
      console.log(`${body.data[0].practices.accepts_new_patients}`);
      console.log(`${body.data[0].practices.visit_address}`)
      console.log(`${body.data[0].practices.phones.number}`)
    }, function(error) {
      $('.error').append(`There was an error processing your request: ${error.message}`)
    });


  //   // if (body === '[]'){
  //     return $('.results').text("No results found");
  // }

    promiseName.then(function(response){
      let body = JSON.parse(response);
      console.log(`${body.data[0].practices.name}`);
      console.log(`${body.data[0].practices.accepts_new_patients}`);
      console.log(`${body.data[0].practices.visit_address}`)
      console.log(`${body.data[0].practices.phones.number}`)
    }, function(error) {
      $('.error').append(`There was an error processing your request:${error.message}`)
    });
  });
});
