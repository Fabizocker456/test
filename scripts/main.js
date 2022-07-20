require("units/crypton");
print("test mod setup");

var items = foc( Vars.content.items() );
var liquids = foc( Vars.content.liquids() )
var blocks = foc( Vars.content.blocks() );
var units = foc( Vars.content.units() );
var effects = foc( Vars.content.statusEffects() );
var teams = {
  "sharded" :Team.sharded.icon,
  "crux"    :Team.crux.icon,
  "malis"   :Team.malis.icon,
  "derelict":Team.derelict.icon
};

print(reg("test: [item:copper]"))

// thanks, hoisting!

function foc(o) {
  let arr = [];
  o.each(i=>arr.push(i));
  arr = arr.filter(o=>(o.minfo.mod === null));
  let obj = {};
  arr = arr.map(o=>[o.name, o.emoji()]);
  arr.forEach(o=>{obj[o[0]] = o[1]});
}

function reg(t) {
  let re = /\[(item|liquid|block|unit|effect|team):([a-z\-])\]/
  let m = t.match(t)
  if(m === null){return t;}
  for(let i=0;i<(m.length);i+=3){
    typ = {item: items, liquid: liquids, block: blocks, unit: units,
    effect: effects, team: teams}[m[i+1]];
    val = m[i+2];
    if(!typ.keys().includes(val)){continue;}
    ico = typ[val];
    t = t.replaceAll(m[i], ico);
  }
  return t
}
