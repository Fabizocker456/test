// scru dis!

var cst = {"key":"value"}

const emo = (k,v) => {
  let basics = {
    "item": o=>Vars.content.item(o),
    "liquid": o=>Vars.content.liquid(o),
    "block": o=>Vars.content.block(o),
    "unit": o=>Vars.content.unit(o),
    "effect": o=>Vars.content.statusEffect(o)
  }
  if(Object.keys(basics).includes(k)){
    let ba = basics[k](v)
    if(ba === null){return "[?]"}
    if(ba.minfo.mod !== null){return "[!]"}
    return ba.emoji().length ? ba.emoji() : "[.]"
  }
  teams = {"sharded": Team.sharded.emoji, "crux":Team.crux.emoji,
  "malis":Team.malis.emoji, "derelict":Team.derelict.emoji}
  if(!Object.keys(teams).includes(v)){return "[?]"}
  return teams[v]
}

const reg = (t) => {
  let re = new RegExp("\\[(item|liquid|block|unit|effect|team):(a-z\\-)\\]")
  return emo("item","copper")
}

Events.on(ContentInitEvent, ()=>{
  print(reg("test [item:copper] [unit:atrax] [item:copper]"))
})
