# Directory md-pdf Converter

Converts *all* markdown files in the current directory to pdf files.

## Usage

### Install module:
```
npm install --global md-pdf-converter
```

Now install the script on your system by running:
```
npm link
```

Try it out! Run following command:
```
$ convdir
```

## Preface

Uses the [markdown-pdf](https://www.npmjs.com/package/markdown-pdf) 3rd party module which converts md files to pdfs.

## markdown-pdf's CLI interface usage:
```
markdown-pdf [options] <markdown-file-path>
```

md-pdf-converter is an extension of this module that converts all md files within the current directory into pdf files (if the respective pdf already exists then it's overwritten).

## Why?

I like pdfs, I can now have all of my recent study notes that I've created in markdown readily available on my mobile as pdfs to for easy reading with one easy command. 'convdir'.

This new module will is intended to be installed globally so that when running the command 'convdir' all '.md' files in the current directory will be converted.

## Whats next

1) Implement a more meaningful progress bar to count ticks on each conversion. See [ascii-progress](https://github.com/bubkoo/ascii-progress).

2) Change the output directory to a folder on desktop using options. Enabling easier mobile-dropbox-sync.

3) If possible I would be able to set a watch method that on a directory executes the conversion when a new markdown file is created.

## Third-party Dependencies

- [markdown-pdf](https://www.npmjs.com/package/markdown-pdf)
- [ascii-progress](https://github.com/bubkoo/ascii-progress)

Check out the [repo](https://github.com/SavageWilliam/md-pdf-converter) and contribute :)
