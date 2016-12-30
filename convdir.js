#!/usr/bin/env node
var markdownpdf = require("markdown-pdf");
var ProgressBar = require("ascii-progress")
var fs = require('fs');
var path = require('path');

/*PROGRESS BAR*/

var bar = new ProgressBar({
  schema: ' [:filled.gradient(red,magenta):blank] :current/:total :percent :elapseds :etas'
});



/*MD CONVERSION*/
var currentDir = process.cwd();

var mdDocs = '';

fs.readdir(currentDir, (err, files) => {

  if(err){console.log(err);return;}

  files.forEach((fileName) => {
    if(fileName.split(".")[1] === 'md') {

      mdDocs = (fileName);
      const rawFsPath = path.join(__dirname, mdDocs);
      console.log('mdpath: ', rawFsPath);

      var pdfDocs =  "pdfs/" + mdDocs.replace(".md", ".pdf");
      const pdfTargetFsPath = path.join(__dirname, pdfDocs);
      console.log('pdfpath: ', pdfTargetFsPath);

      convertMd(mdDocs, pdfDocs)
    }
  })
});


var convertMd = (mdDocs, pdfDocs) => {
  const rawFsPath = path.join(__dirname, mdDocs);
  const pdfTargetFsPath = path.join(__dirname, pdfDocs);
  fs.createReadStream(rawFsPath)
  .pipe(markdownpdf())
  .pipe(fs.createWriteStream(pdfTargetFsPath));
  bar.tick();
  console.log("\x1b[32m", "Created", pdfDocs);
};
