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
    }
  })

  if(mdFiles.length === 0){console.log("\x1b[35m", "No markdown files in this directory");return;}

  var pdfFiles = mdFiles.map( (d) => {
    return "pdfs/" + d.replace(".md", ".pdf") })
 /*
  var options = {
    out: '~/Desktop'
  }
  */
  markdownpdf().from(mdFiles).to(pdfFiles, () => {
    pdfFiles.forEach((file) => {
      bar = bar.completed;
      console.log("\x1b[32m", "Created", file);

    })

    process.exit();
  });
});

/*back and forth progress bar*/
var bar = new ProgressBar({
  schema:' :title [:bar.cyan] :percent.yellow'
});

function forward() {
  bar.tick(1, { title: 'Converting ' });
  if (bar.current > 70 && bar.current <99) {
    backward();
  } else {
    setTimeout(forward, 10);
  }
}

function backward() {
  bar.tick(-1, { title: 'md --> pdf' });
  if (bar.current === 1) {
    forward();
  } else {
    setTimeout(backward, 7);
  }
}

forward();
