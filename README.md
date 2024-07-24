# Quran Recitation App

This is a simple Node.js application for listing and playing Quran recitations from various reciters using YouTube videos.

## Features

- List of Quran reciters
- Play recitations from YouTube

## Technologies Used

- Node.js
- Express.js
- HTML, CSS, JavaScript

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [Docker](https://www.docker.com/get-started) (if you want to run the app in a container)

### Installing

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/quran-recitation-app.git
    cd quran-recitation-app
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the application:

    ```bash
    npm start
    ```

The application should now be running at `http://localhost:3000`.

## Running the Application in Docker

You can also run the application inside a Docker container.

1. Build the Docker image:

    ```bash
    docker build -t quran-recitation-app .
    ```

2. Run the Docker container:

    ```bash
    docker run -p 3000:3000 quran-recitation-app
    ```

The application should now be running at `http://localhost:3000`.

Alternatively, you can use Docker Compose:

1. Start the application using Docker Compose:

    ```bash
    docker-compose up --build
    ```

The application should now be running at `http://localhost:3000`.

## Project Structure

