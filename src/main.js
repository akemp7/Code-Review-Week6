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
    let promiseIssue = treatment.getTreatment(medicalIssue, doctorName);

    promiseIssue.then(function(response){
      let body = JSON.parse(response);
      if(`${body.meta.count}` === 0){
        $('.results').append('There were no doctors for your search result')
      } else {
        body.data.forEach(function(doctor){
          console.log(body);
          $('.results').append(`<li> Name: ${doctor.profile.first_name} ${doctor.profile.last_name}</li>`);
          doctor.practices.forEach(function(practice){
            $('.results').append(`<li> Practice: ${practice.name}</li>`);
            $('.results').append(`<li> Address: ${practice.visit_address.street} ${practice.visit_address.zip}</li>`);
            $('.results').append(`<li> Accepts New Patients: ${practice.accepts_new_patients}</li>`);
              $('.results').append(`<li> Phone Number: ${practice.phones[0].number}</li>`);
          });
        });
      }
      });
    });
  });
