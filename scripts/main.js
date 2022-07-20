// scru dis!

var cst = {"key":"value"}

const emo = (d) => {
  return "[°-°]"
  d = d.slice(1, d.length - 1)
  d = d.split(":")
  let k = d[0]
  let v = d[1]
  let basics = {
    "item": Vars.content.item,
    "liquid": Vars.content.liquid,
    "block": Vars.content.block,
    "unit": Vars.content.unit,
    "effect": Vars.content.statusEffect
  }
  if(Object.keys(basics).includes(k)){
    let ba = basics[k](v)
    if(ba === null){return "[?]"}
    if(ba.minfo.mod !== null){return "[!]"}
    return ba.emoji().length ? ba.emoji() : "[.]"
  }
  else{
    teams = {"sharded": Team.sharded, "crux":Team.crux,
    "malis":Team.malis, "derelict":Team.derelict}
    if(!Object.keys(teams).includes(v)){return "[?]"}
    return teams[v].emoji
  }
}

const reg = (t) => {
  let re = /\[[a-z]+:[a-z\-]+\]/
  for(let i = 0; i < t.length; i++){
    mt = t.match(re)
    if(!mt){break;}
    t = t.replace(mt, emo(mt))
  }
  return t
}

Events.on(ContentInitEvent, ()=>{
  print(reg("test [item:copper] [unit:atrax] [item:copper]"))
})
