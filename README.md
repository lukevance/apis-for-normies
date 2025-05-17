# Welcome to APIs for Normies! 👋

Hey there! This repository holds the super simple web app used in the "APIs for Normies" tutorial. It's here to help you see how APIs and webhooks work in a real, albeit tiny, application. Think of it as your playground to connect the dots! 🪄

> If you haven't gone through the first 2 parts of [the tutorial](https://provolove.notion.site/APIs-for-Normies-169e51fa9e9b81dfb610e00fecf1a84a), I recommend you do that first. If you're relatively familiar with using APIs and webhooks to build web apps (what are you doing here?) feel free to jump in and run the app!

This app is designed to be your trusty sidekick as you go through the tutorial. It lets you:

* **Connect APIs to user-friendly forms and buttons:** You can make calls to get info and send data – just like we practiced!
* **Listen for events via webhook whispers:** See how apps can get notifications (webhooks) when something cool happens.

Basically, it's a hands-on way to make all those API and webhook concepts from the tutorial click!

## Ready to Play? 🕹️

Before we dive in, make sure you've got these goodies installed on your computer:

* **Node.js and npm:** This app speaks JavaScript, so you'll need Node.js to run it. npm comes along for the ride and helps manage things. Grab them from [Node.js Downloads](https://nodejs.org/).

## Let's Get This Party Started! 🎉

> Note: If you don't have root access on the device you're using to read this, don't worry! It's 2025, you can run this app from a browser on your iPad, Chromebook or the library desktop! There are lots of great online tools for this, my favorite is [Repl.it](https://repl.it) but you can also fork this repo and run it from [Github Codespaces](https://github.com/features/codespaces).

1.  **Grab the Code:** First things first, let's get the app onto your computer. You can do this by either:
    ```bash
    git clone https://github.com/lukevance/apis-for-normies.git
    ```
    ...or by downloading the ZIP file from the top of the page if you're not a Git ninja (yet!).

2.  **Step Inside the App Folder:** Navigate into the directory where you just cloned or unzipped the files:
    ```bash
    cd apis-for-normies
    ```

3.  **Install the Magic Ingredients:** This app relies on a few helpful tools. Let's install them using npm:
    ```bash
    npm install
    ```
    This command will fetch and install everything we need.

4.  **Time for a Little Secret Setup:**
    * Make a copy of the file named `.example.env` and rename the copy to `.env`.
    * Open up the `.env` file. You'll see a line that looks something like `API_BASE_URL=...`. Replace the `...` with the API address we're using in the tutorial:
        ```bash
        API_BASE_URL=https://this-is-not-the-real-url.com/api
        # We'll adjust some of the other settings later in the tutorial! 😉
        ```
    * Don't forget to save your changes!

## Fire It Up! 🔥

1.  **Start the Engine:** In your terminal, run this command to get the app going:
    ```bash
    npm start
    ```
    This will launch the web server – keep an eye on your terminal for any messages!

2.  **Take a Peek:** Open your favorite web browser and head over to `http://localhost:8080/`. You should see a super simple webpage with a couple text boxes and a button waiting for you.

3. **Follow the instructions:** Head over to [APIs for Normies](https://provolove.notion.site/APIs-for-Normies-169e51fa9e9b81dfb610e00fecf1a84a) for the final steps!

## Contributing? 🤔

If you have ideas for improving this tutorial or adding to it, feel free to open an issue or a pull request! 😊

## License

MIT License - go ahead and explore! 🤓
