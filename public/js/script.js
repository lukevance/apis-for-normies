async function submitWebhookForm() {
    const userId = document.getElementById('userId').value;
    const webhookUrl = document.getElementById('webhookUrl').value;
    const time = document.getElementById('time').value;
  
    console.log(JSON.stringify({ userId, webhookUrl, time }));
  
    if (!userId || !webhookUrl || !time) {
        alert('All fields are required!');
        return;
    }
  
    try {
        const response = await fetch('/webhook-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId, webhookUrl, time }),
        });
  
        if (response.redirected) {
            window.location.href = response.url; // Redirect to the new page if the server sends a redirect response
        } else {
            const result = await response.text();
            alert(result);
        }
    } catch (error) {
        console.error('Error scheduling webhook:', error);
        alert('An error occurred while scheduling the webhook.');
    }
  }