const yaml = require('js-yaml');
const fs = require('fs');
const util = require('util');

try {
  const doc = yaml.load(fs.readFileSync('dog.yaml'));
  console.log(util.inspect(doc));
} catch (e) {
  console.log(e);
}