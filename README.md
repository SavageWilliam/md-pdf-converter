# md-pdf-converter
Uses the 'markdown-pdf' 3rd party node module to convert md files to a pdf.

markdown-pdf CLI interface usage:
```
Usage: markdown-pdf [options] <markdown-file-path>
```

I want to extend this module and create a module that converts all md files within a specific directory into pdf files (if a conversion already exists... then overwrite).

If possible I would have a watch method that executes the program when a md file is added.

I can have all of my recent study notes that I've created in markdown readily available on my mobile as pdfs to for easy review by using dropbox to sync the conversion folder.

This new module will be intended to be installed globally so that when running the command 'dir-md-pdf' all '.md' files in the current directory will be converted.
