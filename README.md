# weekend-health-challenge

These instructions will guide you on how to set up and run the project on your local machine for development and testing purposes.

Prerequisites
Ensure you have Node.js installed on your machine. This project uses Node.js to run the TypeScript application. You can download and install Node.js from nodejs.org.

Installation
Clone the Repository

Begin by cloning the repository to your local machine. You can do this by running the following command in your terminal:

bash
Copy code
git clone https://github.com/yourusername/weekend-health-challenge.git
cd weekend-health-challenge
Install Dependencies

Next, install the necessary dependencies using npm. In the project directory, run:

Copy code
npm install
Run the Application

To run the application, you need to compile and execute the TypeScript files. This project uses ts-node to run TypeScript files directly without pre-compilation to JavaScript. Run the following command in the terminal:

bash
Copy code
npx ts-node src/findWords.ts
Testing
To test the application, simply execute the file with test cases included in the script as shown in the "Run the Application" section. The output will display whether the input strings can form the words from the dictionary provided.
