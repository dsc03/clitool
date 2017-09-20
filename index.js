'use strict';
const express = require('express');
const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();

const app = express();

const PORT = process.env.port || 8888;

/** VERIFY INITIAL COMMAND PROMPT QUESTION INFO **/
let commandPromptQuestions = {
  type: 'list',
  name: 'command',
  message: 'What operation do you want to perform next?',
  choices: ['this', 'that', 'other', 'next']
};

/** TAKE IN USER INPUTTED COMMAND AND PASS THROUGH SWITCH STATEMENT **/
let commandPrompt = () => {
  prompt(commandPromptQuestions)
    .then(answers => {
      console.log(answers);
    })

    .catch(error => {
      console.log('There was an error with this command! Try again');
      commandPrompt();
    })
  };

app.listen(PORT, () => {
  commandPrompt();
})