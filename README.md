## Prerequisite
- NodeJS cli
- NPM

## How to run this project:
1. ```npm install``` to download the required dependencies.
2. ```npm run dev``` to start the project.

## About this project:
This application allows users to retrieve weather information for any city by searching for its name.

The search results are saved in a history list, which users can view and manage. Users have the option to delete any historical records from this list.

Additionally, users can customize their experience by switching between different themes using a toggle feature.

## Folder structure:
### /app
- contains the core source code of this project
#### /app/api
- contains files responsible for API calls
#### /app/components
- contains all React components used to build the project.
#### /app/contexts
- includes context files for managing and passing data across multiple component levels
#### /app/models
- contains TypeScript interfaces for defining types.
#### /app/reducers
- includes reducer functions used throughout the project.
#### /app/utilities
- contains utility functions and code shared across multiple components
### /public
- stores static assets such as images used in the project.