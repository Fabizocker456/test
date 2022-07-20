// scru dis!

var cst = {"key":"value"}

const emo = (k,v) => {
  let basics = {
    "item": o=>Vars.content.item(o),
    "liquid": Vars.content.liquid,
    "block": Vars.content.block,
    "unit": o=>Vars.content.unit(o),
    "effect": Vars.content.statusEffect
  }
  if(Object.keys(basics).includes(k)){
    let ba = basics[k](v)
    if(ba === null){return "[?]"}
    if(ba.minfo.mod !== null){return "[!]"}
    return ba.emoji().length ? ba.emoji() : "[.]"
  }
  teams = {"sharded": Team.sharded, "crux":Team.crux,
  "malis":Team.malis, "derelict":Team.derelict}
  if(!Object.keys(teams).includes(v)){return "[?]"}
  return teams[v].emoji
}

const reg = (t) => {
  return emo("item","copper")
}

Events.on(ContentInitEvent, ()=>{
  print(reg("test [item:copper] [unit:atrax] [item:copper]"))
})
