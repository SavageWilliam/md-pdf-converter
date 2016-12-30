var markdownpdf = require("markdown-pdf");
var fs = require('fs');

var currentDir = process.cwd();
console.log(currentDir);


var mdDocs = [];


fs.readdir(currentDir, function(err, files){
  if(err){console.log(err);return;}
  files.forEach(function(fileName) {
    if(fileName.split(".")[1] === 'md') {
      console.log(fileName);
      mdDocs.push(fileName);
      console.log(mdDocs);
    }
  })
  var pdfDocs = mdDocs.map(function (d) { return "pdfs/" + d.replace(".md", ".pdf") })
  console.log('here');
  console.log(mdDocs);
  console.log(pdfDocs);

  markdownpdf().from(mdDocs).to(pdfDocs, function () {
    pdfDocs.forEach(function (d) { console.log("Created", d) })
  });


});
