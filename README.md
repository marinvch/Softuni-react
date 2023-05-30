# My App

## Description

This is a basic forum application built with the MERN stack (MongoDB, Express, React, Node.js). It allows users to perform CRUD operations, like and dislike posts, and includes login and registration functionality. Users can create, edit, and delete posts, as well as add comments to specific posts.

## Demo

You can check out the demo of this application [here](http://forum.marinvch.eu).

## Tech Stack

The application is built using the following technologies:

- Express
- Mongoose
- React
- React-Material-UI

## Architecture
```
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│ ├── favicon.ico
│ ├── index.html
│ ├── logo192.png
│ ├── logo512.png
│ ├── manifest.json
│ └── robots.txt
└── src
├── Api
│ └── index.js
├── Components
│ ├── Auth
│ │ ├── Styles
│ │ │ ├── Login.css
│ │ │ └── Register.css
│ │ ├── Login.js
│ │ └── Register.js
│ ├── Comment
│ │ ├── Styles
│ │ │ └── CreateComment.css
│ │ └── CreateComment.js
│ ├── Post
│ │ ├── Styles
│ │ │ ├── CreateComment.css
│ │ │ ├── Post.css
│ │ │ └── Viewpost.css
├── ...
```

## Installation and Usage

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the development server using `npm start`.
4. Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.
5. Make any necessary edits to the code, and the page will automatically reload.

## Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in the development mode.
- `npm test`: Launches the test runner in interactive watch mode.
- `npm run build`: Builds the app for production.
- `npm run eject`: Ejects the app from Create React App.

For more information, please refer to the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

## Known Issues and Future Development

- Validation needs to be improved.
- More functionality can be added to comments and user profiles.

## Contributing

If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature/bug fix.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request, explaining your changes.

## Contact

If you have any questions or need further assistance, feel free to contact me at marinvch@gmail.com.

Enjoy the app!
