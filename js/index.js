document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('userForm');
    form.addEventListener('submit', async function (event) {
      event.preventDefault(); // Prevent default form submission
  
      const userId = '123'; // Replace this with dynamic value if needed
      const userInput = document.getElementById('userInput').value;
      const apiUrl = `/user/${userId}/app-setup`;
  
      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userInput }),
        });
  
        if (response.ok) {
          const data = await response.json();
          alert('Data submitted successfully: ' + data.message);
        } else {
          alert('Failed to submit data. Please try again.');
        }
      } catch (error) {
        console.error('Error submitting data:', error);
        alert('An error occurred while submitting the data.');
      }
    });
  });
  