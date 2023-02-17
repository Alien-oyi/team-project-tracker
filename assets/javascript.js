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

formEl.on('submit', handleFormSubmit);

var exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', event => {
  modalTitle.textContent = `Submit-form`
})
// Datepicker widget
$(function () {
  $('#datepicker').datepicker({
    changeMonth: true,
    changeYear: true,
  });
});