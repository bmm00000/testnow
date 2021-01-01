# Summary

"testnow" is a testing CLI framework based on Node.js. It is also able to test browser-based JavaScript apps with JSDOM.

"testnow" recursively collects and runs every file in a project that has a name ending in ".test.js". Then it displays a report of the results of the tests in the terminal.

This repository includes two examples of projects to test, browser-based and node-based, respectively.

Watch demo:

# Main technologies

Node.js, JSDOM, Chalk

# Getting started

Make sure you have installed Node.js in your system.

## Clone this repository

`git clone https://github.com/bmm00000/testnow.git`

## Install dependencies

`cd testnow`

`npm install`

## Test browser-based project example

`cd browser-project-to-test`

`testnow`

## Test Node-based project example

`cd node-project-to-test`

`testnow`
