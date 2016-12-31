#!/usr/bin/env node
var markdownpdf = require("markdown-pdf");
var ProgressBar = require('ascii-progress');

var bar = require('./progress-bar');
var forward = require('./progress-bar');
var backward = require('./progress-bar');
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

  if(mdFiles.length === 0){console.log("\x1b[35m", "No markdown files in this directory");return;}

  mdFiles.forEach((file) => {
    console.log("\x1b[33m", "Converting", file);
  })

  var pdfFiles = mdFiles.map( (d) => {
    return "pdfs/" + d.replace(".md", ".pdf") })

  var bar = bar;

  forward();

  markdownpdf().from(mdFiles).to(pdfFiles, () => {
    pdfFiles.forEach((file) => {
      console.log("\x1b[32m", "Created", file);
    })
    bar.tick(100);
    process.exit();
  });
});



/*  //options for markdownpdf()
 var options = {
   out: '~/Desktop'
 }
 */
