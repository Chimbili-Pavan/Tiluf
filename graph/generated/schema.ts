// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Status extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Status entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Status entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Status", id.toString(), this);
  }

  static load(id: string): Status | null {
    return store.get("Status", id) as Status | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get status(): string {
    let value = this.get("status");
    return value.toString();
  }

  set status(value: string) {
    this.set("status", Value.fromString(value));
  }

  get description(): string {
    let value = this.get("description");
    return value.toString();
  }

  set description(value: string) {
    this.set("description", Value.fromString(value));
  }
}

export class Role extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Role entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Role entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Role", id.toString(), this);
  }

  static load(id: string): Role | null {
    return store.get("Role", id) as Role | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get role(): string {
    let value = this.get("role");
    return value.toString();
  }

  set role(value: string) {
    this.set("role", Value.fromString(value));
  }

  get description(): string {
    let value = this.get("description");
    return value.toString();
  }

  set description(value: string) {
    this.set("description", Value.fromString(value));
  }
}

export class Category extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Category entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Category entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Category", id.toString(), this);
  }

  static load(id: string): Category | null {
    return store.get("Category", id) as Category | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get category(): string {
    let value = this.get("category");
    return value.toString();
  }

  set category(value: string) {
    this.set("category", Value.fromString(value));
  }

  get description(): string {
    let value = this.get("description");
    return value.toString();
  }

  set description(value: string) {
    this.set("description", Value.fromString(value));
  }
}

export class Curiotype extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Curiotype entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Curiotype entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Curiotype", id.toString(), this);
  }

  static load(id: string): Curiotype | null {
    return store.get("Curiotype", id) as Curiotype | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get type(): string {
    let value = this.get("type");
    return value.toString();
  }

  set type(value: string) {
    this.set("type", Value.fromString(value));
  }

  get description(): string {
    let value = this.get("description");
    return value.toString();
  }

  set description(value: string) {
    this.set("description", Value.fromString(value));
  }
}

export class Usernametoaddress extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Usernametoaddress entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Usernametoaddress entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Usernametoaddress", id.toString(), this);
  }

  static load(id: string): Usernametoaddress | null {
    return store.get("Usernametoaddress", id) as Usernametoaddress | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get username(): string {
    let value = this.get("username");
    return value.toString();
  }

  set username(value: string) {
    this.set("username", Value.fromString(value));
  }

  get add(): Bytes {
    let value = this.get("add");
    return value.toBytes();
  }

  set add(value: Bytes) {
    this.set("add", Value.fromBytes(value));
  }
}

export class Addresstousername extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Addresstousername entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Addresstousername entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Addresstousername", id.toString(), this);
  }

  static load(id: string): Addresstousername | null {
    return store.get("Addresstousername", id) as Addresstousername | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get add(): Bytes {
    let value = this.get("add");
    return value.toBytes();
  }

  set add(value: Bytes) {
    this.set("add", Value.fromBytes(value));
  }

  get usernames(): Array<string> {
    let value = this.get("usernames");
    return value.toStringArray();
  }

  set usernames(value: Array<string>) {
    this.set("usernames", Value.fromStringArray(value));
  }
}

export class Account extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Account entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Account entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Account", id.toString(), this);
  }

  static load(id: string): Account | null {
    return store.get("Account", id) as Account | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get username(): string {
    let value = this.get("username");
    return value.toString();
  }

  set username(value: string) {
    this.set("username", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get pichash(): string {
    let value = this.get("pichash");
    return value.toString();
  }

  set pichash(value: string) {
    this.set("pichash", Value.fromString(value));
  }

  get descriptioncontacthash(): string {
    let value = this.get("descriptioncontacthash");
    return value.toString();
  }

  set descriptioncontacthash(value: string) {
    this.set("descriptioncontacthash", Value.fromString(value));
  }

  get role(): string {
    let value = this.get("role");
    return value.toString();
  }

  set role(value: string) {
    this.set("role", Value.fromString(value));
  }

  get contenthash(): string {
    let value = this.get("contenthash");
    return value.toString();
  }

  set contenthash(value: string) {
    this.set("contenthash", Value.fromString(value));
  }

  get upgradedcontractAddress(): Bytes {
    let value = this.get("upgradedcontractAddress");
    return value.toBytes();
  }

  set upgradedcontractAddress(value: Bytes) {
    this.set("upgradedcontractAddress", Value.fromBytes(value));
  }

  get addrs(): string {
    let value = this.get("addrs");
    return value.toString();
  }

  set addrs(value: string) {
    this.set("addrs", Value.fromString(value));
  }
}

export class Journey extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Journey entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Journey entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Journey", id.toString(), this);
  }

  static load(id: string): Journey | null {
    return store.get("Journey", id) as Journey | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get currentEmbracer(): string {
    let value = this.get("currentEmbracer");
    return value.toString();
  }

  set currentEmbracer(value: string) {
    this.set("currentEmbracer", Value.fromString(value));
  }

  get blocknumber(): BigInt {
    let value = this.get("blocknumber");
    return value.toBigInt();
  }

  set blocknumber(value: BigInt) {
    this.set("blocknumber", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class CurioHash extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save CurioHash entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save CurioHash entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("CurioHash", id.toString(), this);
  }

  static load(id: string): CurioHash | null {
    return store.get("CurioHash", id) as CurioHash | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _3dhash(): string {
    let value = this.get("_3dhash");
    return value.toString();
  }

  set _3dhash(value: string) {
    this.set("_3dhash", Value.fromString(value));
  }

  get _2dhash(): string {
    let value = this.get("_2dhash");
    return value.toString();
  }

  set _2dhash(value: string) {
    this.set("_2dhash", Value.fromString(value));
  }

  get pichash1(): string {
    let value = this.get("pichash1");
    return value.toString();
  }

  set pichash1(value: string) {
    this.set("pichash1", Value.fromString(value));
  }

  get narrationHash(): string {
    let value = this.get("narrationHash");
    return value.toString();
  }

  set narrationHash(value: string) {
    this.set("narrationHash", Value.fromString(value));
  }
}

export class Curio extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Curio entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Curio entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Curio", id.toString(), this);
  }

  static load(id: string): Curio | null {
    return store.get("Curio", id) as Curio | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get currentEmbracer(): string {
    let value = this.get("currentEmbracer");
    return value.toString();
  }

  set currentEmbracer(value: string) {
    this.set("currentEmbracer", Value.fromString(value));
  }

  get curioid(): string {
    let value = this.get("curioid");
    return value.toString();
  }

  set curioid(value: string) {
    this.set("curioid", Value.fromString(value));
  }

  get curioName(): string {
    let value = this.get("curioName");
    return value.toString();
  }

  set curioName(value: string) {
    this.set("curioName", Value.fromString(value));
  }

  get category(): string {
    let value = this.get("category");
    return value.toString();
  }

  set category(value: string) {
    this.set("category", Value.fromString(value));
  }

  get creatorName(): string {
    let value = this.get("creatorName");
    return value.toString();
  }

  set creatorName(value: string) {
    this.set("creatorName", Value.fromString(value));
  }

  get livehash(): string {
    let value = this.get("livehash");
    return value.toString();
  }

  set livehash(value: string) {
    this.set("livehash", Value.fromString(value));
  }

  get curioType(): string {
    let value = this.get("curioType");
    return value.toString();
  }

  set curioType(value: string) {
    this.set("curioType", Value.fromString(value));
  }

  get status(): string {
    let value = this.get("status");
    return value.toString();
  }

  set status(value: string) {
    this.set("status", Value.fromString(value));
  }

  get price(): BigInt {
    let value = this.get("price");
    return value.toBigInt();
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }

  get numberOfPassOn(): BigInt {
    let value = this.get("numberOfPassOn");
    return value.toBigInt();
  }

  set numberOfPassOn(value: BigInt) {
    this.set("numberOfPassOn", Value.fromBigInt(value));
  }

  get curiHsh(): string {
    let value = this.get("curiHsh");
    return value.toString();
  }

  set curiHsh(value: string) {
    this.set("curiHsh", Value.fromString(value));
  }

  get upgradedcontractAddress(): Bytes {
    let value = this.get("upgradedcontractAddress");
    return value.toBytes();
  }

  set upgradedcontractAddress(value: Bytes) {
    this.set("upgradedcontractAddress", Value.fromBytes(value));
  }

  get jrny(): Array<string> {
    let value = this.get("jrny");
    return value.toStringArray();
  }

  set jrny(value: Array<string>) {
    this.set("jrny", Value.fromStringArray(value));
  }
}

export class Userproduct extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Userproduct entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Userproduct entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Userproduct", id.toString(), this);
  }

  static load(id: string): Userproduct | null {
    return store.get("Userproduct", id) as Userproduct | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get username(): string {
    let value = this.get("username");
    return value.toString();
  }

  set username(value: string) {
    this.set("username", Value.fromString(value));
  }

  get products(): Array<string> {
    let value = this.get("products");
    return value.toStringArray();
  }

  set products(value: Array<string>) {
    this.set("products", Value.fromStringArray(value));
  }
}

export class UsrHash extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save UsrHash entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save UsrHash entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("UsrHash", id.toString(), this);
  }

  static load(id: string): UsrHash | null {
    return store.get("UsrHash", id) as UsrHash | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get username(): string {
    let value = this.get("username");
    return value.toString();
  }

  set username(value: string) {
    this.set("username", Value.fromString(value));
  }

  get HashArr(): Array<string> {
    let value = this.get("HashArr");
    return value.toStringArray();
  }

  set HashArr(value: Array<string>) {
    this.set("HashArr", Value.fromStringArray(value));
  }
}

export class Hashformat extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Hashformat entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Hashformat entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Hashformat", id.toString(), this);
  }

  static load(id: string): Hashformat | null {
    return store.get("Hashformat", id) as Hashformat | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get hashcontent(): string {
    let value = this.get("hashcontent");
    return value.toString();
  }

  set hashcontent(value: string) {
    this.set("hashcontent", Value.fromString(value));
  }

  get username(): string {
    let value = this.get("username");
    return value.toString();
  }

  set username(value: string) {
    this.set("username", Value.fromString(value));
  }

  get time(): BigInt {
    let value = this.get("time");
    return value.toBigInt();
  }

  set time(value: BigInt) {
    this.set("time", Value.fromBigInt(value));
  }
}

export class LivHash extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save LivHash entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save LivHash entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("LivHash", id.toString(), this);
  }

  static load(id: string): LivHash | null {
    return store.get("LivHash", id) as LivHash | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get curioid(): string {
    let value = this.get("curioid");
    return value.toString();
  }

  set curioid(value: string) {
    this.set("curioid", Value.fromString(value));
  }

  get Hash(): Array<string> {
    let value = this.get("Hash");
    return value.toStringArray();
  }

  set Hash(value: Array<string>) {
    this.set("Hash", Value.fromStringArray(value));
  }
}

export class UserVer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save UserVer entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save UserVer entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("UserVer", id.toString(), this);
  }

  static load(id: string): UserVer | null {
    return store.get("UserVer", id) as UserVer | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get ver(): string {
    let value = this.get("ver");
    return value.toString();
  }

  set ver(value: string) {
    this.set("ver", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }
}

export class CurioVer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save CurioVer entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save CurioVer entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("CurioVer", id.toString(), this);
  }

  static load(id: string): CurioVer | null {
    return store.get("CurioVer", id) as CurioVer | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get ver(): string {
    let value = this.get("ver");
    return value.toString();
  }

  set ver(value: string) {
    this.set("ver", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }
}