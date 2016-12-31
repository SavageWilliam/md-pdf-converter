/*   back and forth progress bar   */
var ProgressBar = require('ascii-progress');


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


module.exports = bar, forward, backward;
