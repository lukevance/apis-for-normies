# Replit

## Your First Node App
Click “Create App” and don’t get distracted by the “Create with Replit Agent” yes it’s pretty awesome and can basically build an app for you but…let’s get our basic understanding of how things work first! Then we can conquer the world.

Select “Choose a Template” and search for Node.js

Give it a title like “How does Node work” and click “Create App”

When Repl loads your app, it will likely display an “Assistant” on the left and a blank page titled “index.js” on the right.

ℹ️ Note “Index” is not a magic word, it’s just a common naming convention for the starting point in your application. You might add a file like “API_handler” or “payments_module” but everything in your app would be linked back to single starting point, the “index”.

Click the + next to Index.js to open a new tab in your online editor and then search for “shell” this is the equivalent of the “Terminal” app on your computer. 

In the new “Shell” tab, let’s make sure that node and npm were installed properly:

Push the cmd + space keys together

Type “Terminal” and hit enter

If it takes a few seconds to load just wait

Then type the command below and hit enter

```
node -v
```

Next type the command below and hit enter

```
npm -v
```

Both commands should display a version number of which software is running. If either throw an error message:

- click the help icon in the bottom left of the Repl window
- ask your favorite AI chatbot, 
- or if you’re still stuck Slack me @luke 😊 or reach out via Github.

## Copy the Sample App
Click "Create App" and select the "Import from Github" tab

Select "from URL" and enter the url below:

https://github.com/lukevance/apis-for-normies.git

Once the repository is shown in the search results, scroll down and click the "Import from Github" button

Wait for the app to load ...🍿

## Setup the App
Once the app has loaded you will see a "Configure your App" panel. You shouldn't need to make any changes, just scroll down and click "Confirm and close"

In the "Files" panel on the left, make a copy of the .example.env file and call it .env. This file will contain some “secret” environment variables or information that your app needs to run.

Open the .env and update the values so it looks like this:

```
API_BASE_URL=https://apis-for-normies.up.railway.app
USER_ID=
```

> ✅ Changes are autosaved in Repl.it so you're all set!

Open the "Shell" tab near the bottom and you should see a prompt that says 
```
~workspace
```
As you learned above, node and npm are pre-installed in this virtual terminal, so no need to install anything!

Just to make sure everything is working, type the following command in your Terminal (replacing {UserId} with the number you got back in part 1 (from the POST /users API call) and hit enter:
```
npm run node-check -- {UserID}
```
Check the scoreboard for your updated score!

## Run the User Interface
At the top of the page click the big green "Run" button

Once the app is running, the UI should be showing in the "Webview" tab. If not, in the "Console" tab below the code view and click the hyperlink at the end of the log that begins:
```
Port :8080 opened on {...}.replit.dev
```
You should see a very basic website with a form and a button on it. You should be able to easily tell what the app is going to do: send data from the form to the /user/{id}/webhook API we called back in part 2!

Now, we are going to use this app to both make an API call to the tutorial API but the app is also listening for webhooks! 
- Click the hyperlink in the 'Webview" ending in repl.co
- Copy the "Dev URL" above the QR code
- This is now going to be your "Webhook URL" in the step below

Go back to the "Webview" tab and enter your User ID, Webhook URL, and a number of seconds less than 30.

Click "Schedule Webhook"

If it worked, the page will reload and you should see a success message!

Wait the number of seconds and then look at the "Console" tab below the webview. You should see that our app logged the incoming webhook and responded with a 200 so the API knows we were listening.

And finally…check the scoreboard!