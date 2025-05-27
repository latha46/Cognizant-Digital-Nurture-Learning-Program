form.addEventListener('submit', function(e) {
  e.preventDefault();
  console.log("Form submission started");

  const formData = {
    name: form.elements['name'].value.trim(),
    email: form.elements['email'].value.trim(),
    event: form.elements['event'].value
  };
  console.log("Collected form data:", formData);

  if (!formData.name || !formData.email || !formData.event) {
    console.warn("Validation failed: missing fields");
    showMessage('Please fill all fields.', 'error');
    return;
  }

  showMessage('Sending registration...', '');
  console.log("Sending fetch request with payload:", JSON.stringify(formData));

  fakeFetch('https://mockapi.io/register', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {'Content-Type': 'application/json'}
  })
  .then(response => {
    console.log("Fetch response received:", response);
    if (response.ok) {
      console.log("Registration successful");
      showMessage('Registration successful! Thank you.', 'success');
      form.reset();
    } else {
      console.error("Fetch response not OK");
      throw new Error('Registration failed.');
    }
  })
  .catch(err => {
    console.error("Fetch error:", err);
    showMessage('Error occurred while submitting. Please try again.', 'error');
  });
});
