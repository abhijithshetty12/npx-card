#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const https = require('https');
const chalk = require('chalk');
const inquirer = require('inquirer');
const clear = require('clear');
const open = require('open');
const ora = require('ora');
const cliSpinners = require('cli-spinners');
const { displayCard } = require('./src/content');
const { primary } = require('./src/data');

clear();

displayCard();

const fetchPdf = (url, fileStream, spinner, targetPath) => {
  https.get(url, (response) => {
    if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
      fetchPdf(response.headers.location, fileStream, spinner, targetPath);
      return;
    }

    if (response.statusCode !== 200) {
      fs.unlink(targetPath, () => {});
      spinner.fail(chalk.red(`Failed to download resume. Server responded with status code: ${response.statusCode}`));
      return;
    }

    response.pipe(fileStream);

    fileStream.on('finish', () => {
      fileStream.close(() => {
        spinner.succeed(chalk.green('Resume downloaded successfully!'));
        console.log(`\n📍 Saved to: ${chalk.bold.underline(targetPath)}\n`);
        open(targetPath);
      });
    });
  }).on('error', (err) => {
    fs.unlink(targetPath, () => {});
    spinner.fail(chalk.red('Failed to download resume.'));
    console.error(err.message);
  });
};

const downloadResume = () => {
  const spinner = ora({
    text: chalk.cyan('Downloading resume (PDF)...'),
    spinner: cliSpinners.dots
  }).start();

  const targetPath = path.join(process.cwd(), 'abhijithshetty-resume.pdf');
  const fileStream = fs.createWriteStream(targetPath);

  fetchPdf('https://abhijithshetty.vercel.app/resume.pdf', fileStream, spinner, targetPath);
};

const questions = [
  {
    type: 'list',
    name: 'action',
    message: chalk.bold.cyan('What would you like to do?'),
    choices: [
      {
        name: `📧  ${chalk.bold('Send an email')}`,
        value: () => {
          open('https://mail.google.com/mail/?view=cm&fs=1&to=abhijithshetty2006@gmail.com');
          console.log(chalk.green('\n✓ Opening your default email client...\n'));
        }
      },
      {
        name: `📄  ${chalk.bold('Download Resume')}`,
        value: downloadResume
      },
      {
        name: `👋  ${chalk.gray('Exit')}`,
        value: () => {
          console.log(chalk.gray('\nThanks for stopping by! Have a great day 🚀\n'));
        }
      }
    ]
  }
];

const promptModule = inquirer.createPromptModule();

promptModule(questions).then((answers) => {
  answers.action();
});