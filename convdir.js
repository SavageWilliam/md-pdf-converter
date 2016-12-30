#!/usr/bin/env node

var markdownpdf = require("markdown-pdf");
var fs = require('fs');

var currentDir = process.cwd();

var mdFiles = [];

fs.readdir(currentDir, (err, files) => {

  if(err){console.log(err);return;}

  files.forEach((fileName) => {
    if(fileName.split(".")[1] === 'md') {
      mdFiles.push(fileName);
    }
  })

  if(mdFiles.length === 0){console.log("No markdown files in this directory");return;}

  var pdfFiles = mdFiles.map( (d) => {
    return "pdfs/" + d.replace(".md", ".pdf") })

  var options = {
    out: '~/Desktop'
  }
  markdownpdf(options).from(mdFiles).to(pdfFiles, () => {
    pdfFiles.forEach((file) => {
      console.log("\x1b[32m", "Created", file)
    })
  });
});
