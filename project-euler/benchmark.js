module.exports = ({
  perform: (label, callback) => {
    console.time(label);
    callback();
    console.log();
    console.timeEnd(label);
    console.log();
  }
})
