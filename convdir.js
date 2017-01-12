#!/usr/bin/env node
var markdownpdf = require("markdown-pdf");
var ProgressBar = require('ascii-progress');
var fs = require('fs');

var currentDir = process.cwd();

var mdFiles = [];

fs.readdir(currentDir, (err, files) => {

  if(err){console.log(err);return;}

  files.forEach((fileName) => {
    if(fileName.split(".")[1] === 'md') {
      mdFiles.push(fileName);
      console.log("\x1b[33m", "Converting", fileName);
    }
  })

  if(mdFiles.length === 0){console.log("\x1b[35m", "No markdown files in this directory");return;}

  var pdfFiles = mdFiles.map( (d) => {
    return "pdfs/" + d.replace(".md", ".pdf")
  });

  forward();

  markdownpdf().from(mdFiles).to(pdfFiles, () => {
    pdfFiles.forEach((file) => {
      console.log("\x1b[32m", "Created", file);
    })
    bar.tick(100);
    process.exit();
  });
});

/**** back and forth progress bar ****/

var bar = new ProgressBar({
  schema:' :title [:bar.cyan] :percent.yellow'
});

function forward() {
  bar.tick(1, { title: 'Converting.yellow ' });
  if (bar.current > 65) {
    backward();
  } else {
    setTimeout(forward, 8);
  }
}

function backward() {
  bar.tick(-1, { title: 'md --> pdf' });
  if (bar.current === 1) {
    forward();
  } else {
    setTimeout(backward, 4);
  }
}
