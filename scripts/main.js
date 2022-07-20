// scru dis!

var cst = {"[nil]":"•"}

const reg = (t) => {
  let rep = (s, a, b) => {while(s.includes(a)){s = s.replace(a, b)}return s}
  let map = Object.keys(cst)
  for(let i=0;i<map.length;i++){
    t = rep(t, map[i], cst[map[i]])
  }
  return t
}

Events.on(ContentInitEvent, ()=>{

  let moj = (cst, seq, pref) => {
    let arr = []
    seq.each(a=>arr.push(a))
    arr = arr.filter(o=>o.minfo.mod === null)
    arr.forEach(o=>{
      cst["["+pref+":"+o.name+"]"] = o.icon()
    })
  }

  moj(cst, Vars.content.items(), "item")
  moj(cst, Vars.content.units(), "unit")
  moj(cst, Vars.content.liquids(), "liquid")
  moj(cst, Vars.content.blocks(), "block")
  moj(cst, Vars.content.statusEffects(), "effect")
  cst["[team:sharded]"]=Team.sharded.icon
  cst["[team:crux]"]=Team.crux.icon
  cst["[team:malis]"]=Team.malis.icon
  cst["[team:derelict]"]=Team.derelict.icon

  print(reg("test [item:copper] [unit:atrax] [item:copper]"))
})
