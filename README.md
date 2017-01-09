# Directory md-pdf Converter

Converts all markdown files in current directory to pdf files contained in a new directory 'pdfs' which lies in the cwd.

## Usage

### Install module:

Install module and the script on your system by running:
```
npm install --global md-pdf-converter
npm link
```

TRY IT OUT! By running the following command in your terminal.
```
convdir
```

**OR**

### Download repo:

1) Clone this repo:
```
git clone https://github.com/SavageWilliam/md-pdf-converter.git
```

2) Install dependencies:
```
npm install
```

3) Now in the same repo install the script on your system by running:
```
npm link
```

## Preface

Uses the [markdown-pdf](https://www.npmjs.com/package/markdown-pdf) 3rd party node module to convert md files to pdfs.

## Current markdown-pdf module's CLI interface usage:
```
markdown-pdf [options] <markdown-file-path>
```

I want to extend this module and create a module that converts all md files within the current directory into pdf files (if the respective pdf already exists... then overwrite).

## Why?

I can have all of my recent study notes that I've created in markdown readily available on my mobile as pdfs to for easy review by using dropbox to sync the conversion folder.

This new module will be intended to be installed globally so that when running the command 'convdir' all '.md' files in the current directory will be converted.

## Whats next

1) Run the conversion sync and use a more meaningful progress bar to count ticks. [ascii-progress](https://github.com/bubkoo/ascii-progress).
> See progress-bar branch.

2) Change the output directory to a folder on desktop using options. Enabling easier mobile-dropbox-intergration (easier target).

3) If possible I would be able to set a watch method that on a directory executes the conversion when a new markdown file is added/created.

## Dependencies

- [markdown-pdf](https://www.npmjs.com/package/markdown-pdf)
- [ascii-progress](https://github.com/bubkoo/ascii-progress)
