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
      $('.results').append(`${body["data"][0]["practices"][0]["name"]}`);
      $('.results').append(`${body["data"][0]["practices"][0]["accepts_new_patients"]}`);
      $('.results').append(`${body["data"][0]["practices"][0]["visit_address"]["street"]}`);
      $('.results').append(`${body["data"][0]["practices"][0]["visit_address"]["street2"]}`);
      $('.results').append(`${body["data"][0]["practices"][0]["visit_address"]["zip"]}`);
      $('.results').append(`${body["data"][0]["practices"][0]["phones"][0]["number"]}`);
    }, function(error) {
      $('.error').append(`There was an error processing your request: ${error.message}`)
    }); 


    if (`${body["data"][0]}` === '[]'){
      return $('.results').text("No results found");
  }

    promiseName.then(function(response){
      let body = JSON.parse(response);
      $('.results').append(`${body["data"][0]["practices"][0]["name"]}`);
      $('.results').append(`${body["data"][0]["practices"][0]["accepts_new_patients"]}`);
      $('.results').append(`${body["data"][0]["practices"][0]["visit_address"]["street"]}`);
      $('.results').append(`${body["data"][0]["practices"][0]["visit_address"]["street2"]}`);
      $('.results').append(`${body["data"][0]["practices"][0]["visit_address"]["zip"]}`);
      $('.results').append(`${body["data"][0]["practices"][0]["phones"][0]["number"]}`);
    }, function(error) {
      $('.error').append(`There was an error processing your request:${error.message}`)
    });
  });
});
