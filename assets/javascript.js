// Moment script
var m = moment();
// Day, date, time
$("#currentDay").text(moment().format('LLLL'));

var formEl = $('#project-form');
var typeInputEl = $('#project-type')
var nameInputEl = $('#project-name');
var dateInputEl = $('#datepicker');
var skillsListEl = $('#skills-list');

var printSkills = function (name,type,date) {
  var listEl = $('<li>');
  var info =name + "," + type
  var listDetail = info.concat(' on ', date);
  console.log(listDetail);
  listEl.addClass('list-group-item').text(listDetail);
  listEl.appendTo(skillsListEl);
};

var handleFormSubmit = function (event) {
  event.preventDefault();
  console.log("handleFormSubmit");

  var nameInput = nameInputEl.val();
  var typeInput = typeInputEl.val();
  var dateInput = dateInputEl.val();

  if (!nameInput || !dateInput || !typeInput) {
    console.log('You need to fill out the form!');
    return;
  }


  printSkills(nameInput, typeInput, dateInput);

  nameInputEl.val('');
  typeInputEl.val('');
  dateInputEl.val('');
  
   
};
console.log(formEl);
formEl.submit(handleFormSubmit);



// Datepicker widget
$(function () {
  $('#datepicker').datepicker({
    changeMonth: true,
    changeYear: true,
  });
});

var projectForm = document.getElementById('project-form');
projectForm.addEventListener('submit', function(event) {
event.preventDefault(); 


var modal = document.getElementById('exampleModal');
var modalInstance = bootstrap.Modal.getInstance(modal);
modalInstance.hide();
});

$(function() {
  $('#exampleModal').on('shown.bs.modal', function() {
    var availableTags = [
      'ActionScript',
      'AppleScript',
      'Asp',
      'BASIC',
      'C',
      'C++',
      'Clojure',
      'COBOL',
      'ColdFusion',
      'Erlang',
      'Fortran',
      'Groovy',
      'Haskell',
      'Java',
      'JavaScript',
      'Lisp',
      'Perl',
      'PHP',
      'Python',
      'Ruby',
      'Scala',
      'Scheme'
    ];
    $('#project-type').autocomplete({
      source: availableTags
    });
  });
});
   

