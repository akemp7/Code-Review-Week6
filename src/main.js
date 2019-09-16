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
      if (`${body["data"][0]}` === []){
        return $('.results').text("No doctors meet your criteria");
      } else {
        let practice = `${body["data"][0]["practices"][0]["name"]}`;
        let patient = `${body["data"][0]["practices"][0]["accepts_new_patients"]}`;
        let addressStreet = `${body["data"][0]["practices"][0]["visit_address"]["street"]}`;
        let addressStreet2 = `${body["data"][0]["practices"][0]["visit_address"]["street2"]}`;
        let zipCode = `${body["data"][0]["practices"][0]["visit_address"]["zip"]}`;
        let number = `${body["data"][0]["practices"][0]["phones"][0]["number"]}`;
        let output = practice + patient + addressStreet + addressStreet2 + zipCode + number;
        $('.results').append(output);
      }
    }, function(error) {
      $('.error').append(`There was an error processing your request: ${error.message}`)
  });

    promiseName.then(function(response){
    let body = JSON.parse(response);
      if (`${body["data"][0]}` === ""){
        return $('.results').text("No doctors meet your criteria");
      } else {
        let practice = `${body["data"][0]["practices"][0]["name"]}`;
        let patient = `${body["data"][0]["practices"][0]["accepts_new_patients"]}`;
        let addressStreet = `${body["data"][0]["practices"][0]["visit_address"]["street"]}`;
        let addressStreet2 = `${body["data"][0]["practices"][0]["visit_address"]["street2"]}`;
        let zipCode = `${body["data"][0]["practices"][0]["visit_address"]["zip"]}`;
        let number = `${body["data"][0]["practices"][0]["phones"][0]["number"]}`;
        let output = practice + patient + addressStreet + addressStreet2 + zipCode + number;
        $('.results').append(output);
      }
    }, function(error) {
      $('.error').append(`There was an error processing your request: ${error.message}`)
    });
  });
});
