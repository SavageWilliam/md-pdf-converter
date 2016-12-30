var markdownpdf = require("markdown-pdf");
var fs = require('fs');

var currentDir = process.cwd();

var mdDocs = [];

fs.readdir(currentDir, (err, files) => {

  if(err){console.log(err);return;}

  files.forEach((fileName) => {
    if(fileName.split(".")[1] === 'md') {
      mdDocs.push(fileName);
    }
  })

  var pdfDocs = mdDocs.map( (d) => {
    return "pdfs/" + d.replace(".md", ".pdf") })

  markdownpdf().from(mdDocs).to(pdfDocs, () => {
    pdfDocs.forEach((file) => {
      console.log("Created", file)
    })
  });
});
