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
      console.log(body);
    });

    promiseName.then(function(response){
      let body = JSON.parse(response);
      console.log(body);
    });
  });
});
