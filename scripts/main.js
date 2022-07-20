require("units/crypton");

// scru dis!

var cst = {"key":"value"}

Events.on(ContentInitEvent, ()=>{

  const foc = (o) => {
    let arr = [];
    o.each(i=>arr.push(i));
    arr = arr.filter(o=>(o.minfo.mod === null));
    let obj = {"nil":"•"};
    arr = arr.map(o=>[o.name, o.emoji()]);
    arr.forEach(o=>{obj[o[0]] = o[1]});
    return obj;
  }

  const reg = (t) => {
    let re = /\[(item|liquid|block|unit|effect|team):([a-z\-]+)\]/
    let m = [];
    while(1){
      let lt = t
      let lm = lt.match(re)
      if(lm){lm.forEach(m.push)}
      else{break}
    }
    print("string: '"+t+"', matches: "+m+"")
    if(!m){return t;}
    for(let i=0;i<(m.length);i+=3){
      let styp = m[i+1]
      print("type: "+styp)
      let typ = {
        "item"  : foc(Vars.content.items()),
        "liquid": foc(Vars.content.liquids()),
        "block" : foc(Vars.content.blocks()),
        "unit"  : foc(Vars.content.units()),
        "effect": foc(Vars.content.statusEffects()),
        "team"  : {
          "sharded" : Team.sharded.emoji,
          "crux"    : Team.crux.emoji,
          "malis"   : Team.malis.emoji,
          "derelict": Team.derelict.emoji
        }
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
  cst["reg"]=reg
  cst["foc"]=foc

  print(reg("test [item:copper] [unit:atrax] [item:copper]"))
})
