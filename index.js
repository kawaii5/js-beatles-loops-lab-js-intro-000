// add solution here
function theBeatlesPlay (musicians, instruments) {
  let play = [];
  for(let i = 0; i < musicians.length; ++i) {
    play.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return play;
}

function johnLennonFacts (facts) {
  let newFacts = [];
  for(let i = 0; i < facts.length; ++i) {
    newFacts.push(facts[i]+'!!!');
  }
  return newFacts;
}
