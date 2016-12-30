### Making your new scripts executable

Rather than having to type...

`path/to/convdir.js`

We could just run `convdir` in our terminal anywhere in our directory tree and know it will work just like unix `cat`, `ls`, and `grep`!

You can do that in node and it only takes a few simple steps!

1. Add this to the top line of the file:

```
#!/usr/bin/env node
```

3. Adjust your `package.json` as follows:

* remove the main entry: this is only used for modules that will be used through the module system (e.g. var _ = require('underscore');).

* add preferGlobal and set it to true, which means if someone installs this module through npm and doesn’t use the --global option, they will be warned that the module is designed to be installed globally.

* add the bin object, which maps commands to files. This means when this module is installed, npm will set up the named executables to execute their assigned javascript files. Don't name them after existing commands like ls, grep, etc, it needs to be unique.

Your `package.json` should now look like this:

```javascript
{
  "name": "node-shell-workshop",
  "version": "1.0.0",
  "description": "learn how to shell script with node",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "your lovely selves",
  "license": "ISC",
  "preferGlobal": true,
  "bin": {
    "convdir": "convdir.js"
  }
}
```

4. Now in the same repo you can run `npm link` to install the script on your system. This creates a symlink to your project so that you can run the project whilst working on it, with no need to keep reinstalling it over and over again.

5. Now... move into a different directory and try out...

```
convdir
```

## Printing colorful text in terminal when run node js script

[HERE](https://coderwall.com/p/yphywg/printing-colorful-text-in-terminal-when-run-node-js-script)
