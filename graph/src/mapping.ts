import { BigInt, Bytes, store, ethereum } from "@graphprotocol/graph-ts"
import { Contract, AddressUpdation, NewCategory, NewCurioType, NewRole, NewStatus, SetUserVer, SetCurioVer, JoinEvent1 } from "../generated/SysAdmin/Contract"
import { Contract1, JoinEvent, UpdateAccount, UpdateContentHash } from "../generated/UserMain/Contract1"
import { Contract2, EmbraceProductEvent, NewCurio, LetItGoEvent, PassOnCurioEvent, UpdateCurio, Burn, UpdateLiveHash } from "../generated/Asset/Contract2"
import { Status, Role, Category, Curiotype, Usernametoaddress, Addresstousername, Account, Journey, Curiohash, Curio, Userproduct, Userhash, Livehash, Hashformat, Userver, Curiover, Hash} from "../generated/schema"



export function handleNewCategory(event: NewCategory): void {
    let _id = event.params._category
    let ctgry = new Category(_id)
    ctgry.category = event.params._category
    ctgry.description = event.params._description
    ctgry.save()
}

export function handleNewRole(event: NewRole): void {
  //let _id = event.params._role
  let rle = new Role(event.params._role)
  rle.role = event.params._role
  rle.description = event.params._description
  rle.save()
}

export function handleNewStatus(event: NewStatus): void {
  let _id = event.params._status
  let sts = new Status(_id)
  sts.status = event.params._status
  sts.description = event.params._description
  sts.save()
}

export function handleNewCurioType(event:NewCurioType): void {
  let _id = event.params._type
  let prdtType = new Curiotype(_id)
  prdtType.type = event.params._type
  prdtType.description = event.params._description
  prdtType.save()
}

export function handleAddressUpdation(event:AddressUpdation): void{
  let users = event.params._userNames
  for(let i=0;i<5;i++){
    if(users[i].length == 0){
      continue
    }

    let _id = users[i]
    let uta = Usernametoaddress.load(_id)
    if(uta == null){
      uta = new Usernametoaddress(_id)
    }
    uta.add = event.params.newAddress
    uta.save()

    let acc = Account.load(users[i])
    if(acc == null){
      acc = new Account(users[i])
    }
    acc.addrs = uta.id;
    acc.save()

    let id_ = event.params.oldAddress
    let atu = Addresstousername.load(id_.toHex())

    if(atu == null){
      atu = new Addresstousername(id_.toHex())
      atu.usernames = []
    }

    let usernameslist = atu.usernames
    let indx = usernameslist.indexOf(users[i])
    usernameslist.splice(indx,1)
    atu.usernames = usernameslist
    atu.save()

    let atu1 = new Addresstousername(event.params.newAddress.toHex())
    atu1.add = event.params.newAddress
    atu1.usernames = []
    let u1 = atu1.usernames
    u1.push(users[i])
    atu1.usernames = u1
    atu1.save()
  }

}

export function handleSetUserVer(event: SetUserVer): void {
  let uservr = new Userver(event.params._ver)
  uservr.ver = event.params._ver
  uservr.address = event.params._add
  uservr.save()
}

export function handleSetCurioVer(event: SetCurioVer): void {
  let curiovr = new Curiover(event.params._ver)
  curiovr.ver = event.params._ver
  curiovr.address = event.params._add
  curiovr.save()
}

export function handleJoinEvent1(event: JoinEvent1): void {

}

export function handleJoinEvent(event: JoinEvent): void{
  let _id = event.params._userName

  let acc = new Account(_id)
  acc.username = event.params._userName
  acc.name = event.params._name
  acc.pichash = event.params._picHash
  acc.descriptioncontacthash = event.params._descriptionContactHash
  acc.contenthash = event.params._contentHash
  acc.role = event.params._role
  //acc.holder = event.params._holder
  acc.upgradedcontractAddress = new Bytes(0x0)


  let uta = new Usernametoaddress(_id)
  uta.username = event.params._userName
  uta.add = event.params._add
  uta.save()

  let atu = Addresstousername.load(event.params._add.toHex())
  if(atu == null){
    atu = new Addresstousername(event.params._add.toHex())
    atu.add = event.params._add
    atu.usernames = []
  }
  let u = atu.usernames
  u.push(event.params._userName)
  atu.usernames = u
  atu.save()
  acc.addrs = uta.id
  acc.save()
}

export function handleUpdateAccount(event: UpdateAccount): void{
  let _id = event.params._userName
  let acc = Account.load(_id)
  if(acc == null){
    acc = new Account(_id)
  }
  if(event.params._name != null){
    acc.name = event.params._name
  }

  if(event.params._picHash != null){
    acc.pichash = event.params._picHash
  }

  if(event.params._descriptionContactHash != null){
    acc.descriptioncontacthash = event.params._descriptionContactHash
  }

  acc.save()
}

export function handleUpdateContentHash(event: UpdateContentHash):void{
  let _id = event.params._userName
  let acc = Account.load(_id)

  if(acc == null){
    return
  }

  acc.contenthash = event.params._contentHash
  acc.save()
}

export function handleNewCurio(event: NewCurio): void{
  let _id = event.params._curioID
  let prdct = new Curio(_id)

  //let id_asst = event.params._3DHash
  let a = new Curiohash(_id)
  a._3dhash = event.params._3DHash
  a._2dhash = event.params._2DHash
  a.pichash1 = event.params._picHash
  a.narrationHash = event.params._narrationHash
  a.save()

  let h = new Journey(event.params._owner)
  h.currentEmbracer = event.params._owner
  h.blocknumber = event.block.number
  h.timestamp = event.block.timestamp
  h.save()

  prdct.currentEmbracer = event.params._owner
  prdct.curioid = event.params._curioID
  prdct.curioName = event.params._curioName
  prdct.category = event.params._category
  prdct.creatorName = event.params._owner
  prdct.livehash = " Null "
  prdct.curioType = event.params._curioType
  prdct.status = event.params._status
  prdct.price = event.params._price
  prdct.numberOfPassOn = new BigInt(0)
  prdct.curiHsh = a.id
  prdct.upgradedcontractAddress = new Bytes(0x0)
  prdct.jrny = []
  let his = prdct.jrny
  his.push(h.id)
  prdct.jrny = his
  prdct.save()
 /*
  let userprdcts = new Userproduct(event.params._owner)
  userprdcts.username = event.params._owner
  userprdcts.products = []

  let p = userprdcts.products
  p.push(event.params._curioID)
  userprdcts.products = p
  userprdcts.save()
*/

}

export function handleUpdateCurio(event: UpdateCurio):void {
    let _id = event.params._curioID
    let prdct = Curio.load(_id)

    if(prdct == null){
      prdct = new Curio(_id)
    }

    //let id_ = event.params._picHash
    let a = Curiohash.load(_id)

    if(a == null){
      a = new Curiohash(_id)
    }


    if(event.params._curioName != null){
      prdct.curioName = event.params._curioName
    }

    if(event.params._category != null){
      prdct.category = event.params._category
    }

    if(event.params._picHash != null){
      a.pichash1 = event.params._picHash
    }

    if(event.params.__3DHash != null){
      a._3dhash = event.params.__3DHash
    }

    if(event.params.__2DHash != null){
      a._2dhash = event.params.__2DHash
    }

    if(event.params._descrip_highlights != null){
      a.narrationHash = event.params._descrip_highlights
    }

    if(event.params._status != null){
      prdct.status = event.params._status
    }

    if(event.params._price != null){
      prdct.price = event.params._price
    }

    if(event.params._curioType != null){
      prdct.curioType = event.params._curioType
    }

    a.save()
    prdct.save()
}


export function handlePassOnCurioEvent(event: PassOnCurioEvent):void{
  let _id = event.params._curioID

  let h = new Journey(event.params._buyer)
  h.currentEmbracer = event.params._buyer
  h.blocknumber = event.block.number
  h.timestamp = event.block.timestamp
  h.save()

  let prdct = Curio.load(_id)
  if(prdct == null){
    prdct = new Curio(_id)
  }
  let oldOwner = event.params._seller
  prdct.currentEmbracer = event.params._buyer
  let ph = prdct.jrny
  ph.push(h.id)
  prdct.jrny = ph
  prdct.numberOfPassOn += new BigInt(1)
  prdct.save()

  let userprdcts = Userproduct.load(oldOwner)
  if(userprdcts == null){
    userprdcts = new Userproduct(oldOwner)
    userprdcts.username = oldOwner
    userprdcts.products = []
  }
  let p = userprdcts.products
  p.push(event.params._curioID)
  userprdcts.products = p
  userprdcts.save()

}

export function handleLetItGoEvent(event: LetItGoEvent):void{
  let _id = event.params._curioID
  let prdct = Curio.load(_id)
  if(prdct == null){
    prdct = new Curio(_id)
  }
  prdct.status = event.params.status
  prdct.price = event.params._price
  prdct.save()
}


export function handleBurn(event: Burn):void{
  let _id = event.params._curioID
  let prdct = Curio.load(_id)
  if(prdct == null){
    return
  }
  prdct.currentEmbracer = "tiluf"
  prdct.save()
}

export function handleUpdateLiveHash(event: UpdateLiveHash):void{

  let _id = event.params._curioID
  let prdct = Curio.load(_id)
  if(prdct == null){
    return
  }
  prdct.livehash = event.params._liveHash
  prdct.save()

  let hsh = new Hash(event.params._liveHash)
  hsh.content = event.params._liveHash
  hsh.curioid = event.params._curioID
  hsh.save()

  let userHash = Userhash.load(event.params._userName)
  if(userHash == null){
    userHash = new Userhash(event.params._userName)
    userHash.username = event.params._userName
    userHash.HashArr = []
  }

  let ar = userHash.HashArr
  ar.push(hsh.id)
  let arlen = i32(ar.length)
  userHash.HashArr = ar
  userHash.save()

  let hashfrmt = new Hashformat(event.params._liveHash)
  hashfrmt.hashcontent = event.params._liveHash
  hashfrmt.username = event.params._userName
  hashfrmt.time = event.block.timestamp  // go with timestamp
  hashfrmt.save()

  let lhash = Livehash.load(event.params._curioID)
  if(lhash == null){
    lhash = new Livehash(event.params._curioID)
    lhash.curioid = event.params._curioID
    lhash.Hash = []
  }
  let a = lhash.Hash
  if(arlen == 1){
     a.push(hashfrmt.id)
  }
  else{
    /*
    let  h = Hashformat.load(ar[ar.length-2])
    a.splice(a.indexOf(h.id),1)
    a.push(hashfrmt.id)
    */
    a.push(hashfrmt.id)
  }

  lhash.Hash = a
  lhash.save()

}
