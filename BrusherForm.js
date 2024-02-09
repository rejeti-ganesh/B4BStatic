const scriptURL = 'https://script.google.com/macros/s/AKfycbx3SXXXKpjQu_d4-iNsOS10S-2xvhpVoK_38LdF2HZVgROn4BBiV3px03MOiDow74AqLw/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})