Installing Node.js
==================

On Windows, you can get Node.js from https://nodejs.org/en/download/current/, you may need either the 'Current' or 'LTS' version depending on what Moodle requires.  To find this out, edit 'package.json' in Moodle's root and look for something like:

  "engines": {
    "node": ">=14.15.0 <15"
  }

Which states that you need a version greater than 14.15.0 and less than 15.

On Linux, you can follow https://nodejs.org/en/download/package-manager/ to install via a package manager.


Installing Grunt
================
In a shell (Linux - prefix with 'sudo') / 'Node.js Command prompt' (Windows) in the Moodle root directory:

    [sudo] npm install -g grunt-cli

    [sudo] npm install

Running Grunt
=============

On Linux
--------

Navigate to /mod/sandbox/amd then run:

    grunt amd

in a shell.

On Windows
----------

Edit /.eslintrc and change:

    'linebreak-style': ['error', 'unix'],

to:

    'linebreak-style': ['off', 'unix'],

This is because Git manages this for us with 'AutoCrLf' set to 'true' -> see 'Formatting and Whitespace' on 'https://www.git-scm.com/book/en/v2/Customizing-Git-Git-Configuration'.

To run in the Moodle root:

    grunt amd --root=/mod/sandbox

in the Node.js command prompt or Git Bash command prompt.
