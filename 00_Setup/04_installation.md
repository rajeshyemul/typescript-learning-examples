# Installation

TypeScript is a powerful language that enhances JavaScript by adding static type checking, enabling developers to catch errors during development rather than at runtime. As a strict superset of JavaScript, TypeScript allows you to write plain JavaScript with optional extra features. This guide will walk you through the installation, configuration, and basic usage of TypeScript.

TypeScript validates your JavaScript code ahead of time using static type checking. While browsers interpret JavaScript, TypeScript helps catch errors before the code is executed. You can write plain JavaScript in a .ts file, with additional features being completely optional.

- Before installing TypeScript, ensure you have **Node.js** installed on your computer.
  
## Step-by-Step Installation Guide

Step 1: Install TypeScript
1. Open Command Prompt: Go to the Start menu and open the command prompt
2. Use NPM to Install TypeScript: Run the following command to install TypeScript globally:
   
   `npm install --global typescript`
3. Verify Installation: Check the installed version of TypeScript by running
   `tsc -v`
    Here tsc is a typescript compiler and the -v flag indicates that we are displaying the version of the typescript.

Step 2: Install a Specific Version of TypeScript
    To install a specific version of TypeScript, use the following command:
    `npm install --global typescript@4.x.x`
    Replace x.x with the desired version number

Step 3: Uninstall TypeScript
    If you need to uninstall TypeScript, use the following command:
    `npm uninstall --global typescript`
    