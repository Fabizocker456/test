// require("units/crypton");
print("--- test mod setup");

print(""+foc(Vars.content.items())["copper"])
print(reg("test: [item:copper]"))

// thanks, hoisting!

function foc(o) {
  let arr = [];
  o.each(i=>arr.push(i));
  arr = arr.filter(o=>(o.minfo.mod === null));
  let obj = {"nil":"•"};
  arr = arr.map(o=>[o.name, o.emoji()]);
  arr.forEach(o=>{obj[o[0]] = o[1]});
  return obj;
}

function reg(t) {
  let re = /\[(item|liquid|block|unit|effect|team):([a-z\-]+)\]/
  let m = t.match(re)
  print("string: '"+t+"', matches: "+m+"")
  if(m === null){return t;}
  for(let i=0;i<(m.length);i+=3){
    let styp = m[i+1]
    print("type: "+styp)
    let typ = {
      "item": foc(Vars.content.items()),
      "liquid": foc(Vars.content.liquids())
    }
    if(!Object.keys(typ).includes(styp)){continue;}
    let ctyp = typ[styp];
    let val = m[i+2];
    if(!Object.keys(ctyp).includes(val)){continue;}
    let ico = ctyp[val];
    t = t.replace(m[i], ico);
  }
  return t
}
print("---")
