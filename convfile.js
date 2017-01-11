#!/usr/bin/env node
var markdownpdf = require("markdown-pdf");
var ProgressBar = require('ascii-progress');
var fs = require('fs');

if(!process.argv[2]){
  console.log("\x1b[35m", "Please enter the path to the file you want to convert.");
}

var md = process.argv[2];
var pdf = md.replace(".md", ".pdf");

console.log("\x1b[33m", "Converting", md);

markdownpdf().from(md).to(pdf, () => {
  console.log("\x1b[32m", "Created", pdf);
});
