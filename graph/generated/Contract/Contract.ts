// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AddressUpdation extends ethereum.Event {
  get params(): AddressUpdation__Params {
    return new AddressUpdation__Params(this);
  }
}

export class AddressUpdation__Params {
  _event: AddressUpdation;

  constructor(event: AddressUpdation) {
    this._event = event;
  }

  get _userName(): string {
    return this._event.parameters[0].value.toString();
  }

  get oldAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get newAddress(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class NewCategory extends ethereum.Event {
  get params(): NewCategory__Params {
    return new NewCategory__Params(this);
  }
}

export class NewCategory__Params {
  _event: NewCategory;

  constructor(event: NewCategory) {
    this._event = event;
  }

  get _category(): string {
    return this._event.parameters[0].value.toString();
  }

  get _description(): string {
    return this._event.parameters[1].value.toString();
  }
}

export class NewProductType extends ethereum.Event {
  get params(): NewProductType__Params {
    return new NewProductType__Params(this);
  }
}

export class NewProductType__Params {
  _event: NewProductType;

  constructor(event: NewProductType) {
    this._event = event;
  }

  get _type(): string {
    return this._event.parameters[0].value.toString();
  }
}

export class NewRole extends ethereum.Event {
  get params(): NewRole__Params {
    return new NewRole__Params(this);
  }
}

export class NewRole__Params {
  _event: NewRole;

  constructor(event: NewRole) {
    this._event = event;
  }

  get _role(): string {
    return this._event.parameters[0].value.toString();
  }

  get _description(): string {
    return this._event.parameters[1].value.toString();
  }
}

export class NewStatus extends ethereum.Event {
  get params(): NewStatus__Params {
    return new NewStatus__Params(this);
  }
}

export class NewStatus__Params {
  _event: NewStatus;

  constructor(event: NewStatus) {
    this._event = event;
  }

  get _status(): string {
    return this._event.parameters[0].value.toString();
  }

  get _description(): string {
    return this._event.parameters[1].value.toString();
  }
}

export class Contract extends ethereum.SmartContract {
  static bind(address: Address): Contract {
    return new Contract("Contract", address);
  }

  addAdmin(_add: Address): boolean {
    let result = super.call("addAdmin", "addAdmin(address):(bool)", [
      ethereum.Value.fromAddress(_add)
    ]);

    return result[0].toBoolean();
  }

  try_addAdmin(_add: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("addAdmin", "addAdmin(address):(bool)", [
      ethereum.Value.fromAddress(_add)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  addCategory(_category: string, _description: string): boolean {
    let result = super.call(
      "addCategory",
      "addCategory(string,string):(bool)",
      [
        ethereum.Value.fromString(_category),
        ethereum.Value.fromString(_description)
      ]
    );

    return result[0].toBoolean();
  }

  try_addCategory(
    _category: string,
    _description: string
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "addCategory",
      "addCategory(string,string):(bool)",
      [
        ethereum.Value.fromString(_category),
        ethereum.Value.fromString(_description)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  addProductType(_type: string): boolean {
    let result = super.call("addProductType", "addProductType(string):(bool)", [
      ethereum.Value.fromString(_type)
    ]);

    return result[0].toBoolean();
  }

  try_addProductType(_type: string): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "addProductType",
      "addProductType(string):(bool)",
      [ethereum.Value.fromString(_type)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  addRole(_role: string, _description: string): boolean {
    let result = super.call("addRole", "addRole(string,string):(bool)", [
      ethereum.Value.fromString(_role),
      ethereum.Value.fromString(_description)
    ]);

    return result[0].toBoolean();
  }

  try_addRole(
    _role: string,
    _description: string
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall("addRole", "addRole(string,string):(bool)", [
      ethereum.Value.fromString(_role),
      ethereum.Value.fromString(_description)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  addStatus(_status: string, _description: string): boolean {
    let result = super.call("addStatus", "addStatus(string,string):(bool)", [
      ethereum.Value.fromString(_status),
      ethereum.Value.fromString(_description)
    ]);

    return result[0].toBoolean();
  }

  try_addStatus(
    _status: string,
    _description: string
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall("addStatus", "addStatus(string,string):(bool)", [
      ethereum.Value.fromString(_status),
      ethereum.Value.fromString(_description)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  setAssetVersionAddress(_ver: string, _add: Address): boolean {
    let result = super.call(
      "setAssetVersionAddress",
      "setAssetVersionAddress(string,address):(bool)",
      [ethereum.Value.fromString(_ver), ethereum.Value.fromAddress(_add)]
    );

    return result[0].toBoolean();
  }

  try_setAssetVersionAddress(
    _ver: string,
    _add: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "setAssetVersionAddress",
      "setAssetVersionAddress(string,address):(bool)",
      [ethereum.Value.fromString(_ver), ethereum.Value.fromAddress(_add)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  setUserVersionAddress(_ver: string, _add: Address): boolean {
    let result = super.call(
      "setUserVersionAddress",
      "setUserVersionAddress(string,address):(bool)",
      [ethereum.Value.fromString(_ver), ethereum.Value.fromAddress(_add)]
    );

    return result[0].toBoolean();
  }

  try_setUserVersionAddress(
    _ver: string,
    _add: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "setUserVersionAddress",
      "setUserVersionAddress(string,address):(bool)",
      [ethereum.Value.fromString(_ver), ethereum.Value.fromAddress(_add)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  updateAddress(_username: string, _add: Address): boolean {
    let result = super.call(
      "updateAddress",
      "updateAddress(string,address):(bool)",
      [ethereum.Value.fromString(_username), ethereum.Value.fromAddress(_add)]
    );

    return result[0].toBoolean();
  }

  try_updateAddress(
    _username: string,
    _add: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "updateAddress",
      "updateAddress(string,address):(bool)",
      [ethereum.Value.fromString(_username), ethereum.Value.fromAddress(_add)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  admins(param0: Address): boolean {
    let result = super.call("admins", "admins(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_admins(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("admins", "admins(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  assetVer(param0: string): Address {
    let result = super.call("assetVer", "assetVer(string):(address)", [
      ethereum.Value.fromString(param0)
    ]);

    return result[0].toAddress();
  }

  try_assetVer(param0: string): ethereum.CallResult<Address> {
    let result = super.tryCall("assetVer", "assetVer(string):(address)", [
      ethereum.Value.fromString(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  category(param0: string): string {
    let result = super.call("category", "category(string):(string)", [
      ethereum.Value.fromString(param0)
    ]);

    return result[0].toString();
  }

  try_category(param0: string): ethereum.CallResult<string> {
    let result = super.tryCall("category", "category(string):(string)", [
      ethereum.Value.fromString(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  descryptionContractMap(param0: string): Address {
    let result = super.call(
      "descryptionContractMap",
      "descryptionContractMap(string):(address)",
      [ethereum.Value.fromString(param0)]
    );

    return result[0].toAddress();
  }

  try_descryptionContractMap(param0: string): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "descryptionContractMap",
      "descryptionContractMap(string):(address)",
      [ethereum.Value.fromString(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getAssetVersionAddress(ver: string): Address {
    let result = super.call(
      "getAssetVersionAddress",
      "getAssetVersionAddress(string):(address)",
      [ethereum.Value.fromString(ver)]
    );

    return result[0].toAddress();
  }

  try_getAssetVersionAddress(ver: string): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getAssetVersionAddress",
      "getAssetVersionAddress(string):(address)",
      [ethereum.Value.fromString(ver)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getCategory(_Category: string): string {
    let result = super.call("getCategory", "getCategory(string):(string)", [
      ethereum.Value.fromString(_Category)
    ]);

    return result[0].toString();
  }

  try_getCategory(_Category: string): ethereum.CallResult<string> {
    let result = super.tryCall("getCategory", "getCategory(string):(string)", [
      ethereum.Value.fromString(_Category)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  getRole(_role: string): string {
    let result = super.call("getRole", "getRole(string):(string)", [
      ethereum.Value.fromString(_role)
    ]);

    return result[0].toString();
  }

  try_getRole(_role: string): ethereum.CallResult<string> {
    let result = super.tryCall("getRole", "getRole(string):(string)", [
      ethereum.Value.fromString(_role)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  getStatus(_status: string): string {
    let result = super.call("getStatus", "getStatus(string):(string)", [
      ethereum.Value.fromString(_status)
    ]);

    return result[0].toString();
  }

  try_getStatus(_status: string): ethereum.CallResult<string> {
    let result = super.tryCall("getStatus", "getStatus(string):(string)", [
      ethereum.Value.fromString(_status)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  getUserName(_add: Address): Array<string> {
    let result = super.call("getUserName", "getUserName(address):(string[])", [
      ethereum.Value.fromAddress(_add)
    ]);

    return result[0].toStringArray();
  }

  try_getUserName(_add: Address): ethereum.CallResult<Array<string>> {
    let result = super.tryCall(
      "getUserName",
      "getUserName(address):(string[])",
      [ethereum.Value.fromAddress(_add)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toStringArray());
  }

  getUserNameAddr(_userName: string): Address {
    let result = super.call(
      "getUserNameAddr",
      "getUserNameAddr(string):(address)",
      [ethereum.Value.fromString(_userName)]
    );

    return result[0].toAddress();
  }

  try_getUserNameAddr(_userName: string): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getUserNameAddr",
      "getUserNameAddr(string):(address)",
      [ethereum.Value.fromString(_userName)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getUserRole(_userName: string): string {
    let result = super.call("getUserRole", "getUserRole(string):(string)", [
      ethereum.Value.fromString(_userName)
    ]);

    return result[0].toString();
  }

  try_getUserRole(_userName: string): ethereum.CallResult<string> {
    let result = super.tryCall("getUserRole", "getUserRole(string):(string)", [
      ethereum.Value.fromString(_userName)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  getUserVersionAddress(ver: string): Address {
    let result = super.call(
      "getUserVersionAddress",
      "getUserVersionAddress(string):(address)",
      [ethereum.Value.fromString(ver)]
    );

    return result[0].toAddress();
  }

  try_getUserVersionAddress(ver: string): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getUserVersionAddress",
      "getUserVersionAddress(string):(address)",
      [ethereum.Value.fromString(ver)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isAddressExists(_add: Address): boolean {
    let result = super.call(
      "isAddressExists",
      "isAddressExists(address):(bool)",
      [ethereum.Value.fromAddress(_add)]
    );

    return result[0].toBoolean();
  }

  try_isAddressExists(_add: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isAddressExists",
      "isAddressExists(address):(bool)",
      [ethereum.Value.fromAddress(_add)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isCategoryExists(_category: string): boolean {
    let result = super.call(
      "isCategoryExists",
      "isCategoryExists(string):(bool)",
      [ethereum.Value.fromString(_category)]
    );

    return result[0].toBoolean();
  }

  try_isCategoryExists(_category: string): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isCategoryExists",
      "isCategoryExists(string):(bool)",
      [ethereum.Value.fromString(_category)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isRoleExists(_role: string): boolean {
    let result = super.call("isRoleExists", "isRoleExists(string):(bool)", [
      ethereum.Value.fromString(_role)
    ]);

    return result[0].toBoolean();
  }

  try_isRoleExists(_role: string): ethereum.CallResult<boolean> {
    let result = super.tryCall("isRoleExists", "isRoleExists(string):(bool)", [
      ethereum.Value.fromString(_role)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isStatusExists(_status: string): boolean {
    let result = super.call("isStatusExists", "isStatusExists(string):(bool)", [
      ethereum.Value.fromString(_status)
    ]);

    return result[0].toBoolean();
  }

  try_isStatusExists(_status: string): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isStatusExists",
      "isStatusExists(string):(bool)",
      [ethereum.Value.fromString(_status)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isTypeExist(_type: string): boolean {
    let result = super.call("isTypeExist", "isTypeExist(string):(bool)", [
      ethereum.Value.fromString(_type)
    ]);

    return result[0].toBoolean();
  }

  try_isTypeExist(_type: string): ethereum.CallResult<boolean> {
    let result = super.tryCall("isTypeExist", "isTypeExist(string):(bool)", [
      ethereum.Value.fromString(_type)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isUserNameExists(_userName: string): boolean {
    let result = super.call(
      "isUserNameExists",
      "isUserNameExists(string):(bool)",
      [ethereum.Value.fromString(_userName)]
    );

    return result[0].toBoolean();
  }

  try_isUserNameExists(_userName: string): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isUserNameExists",
      "isUserNameExists(string):(bool)",
      [ethereum.Value.fromString(_userName)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  productType(param0: string): boolean {
    let result = super.call("productType", "productType(string):(bool)", [
      ethereum.Value.fromString(param0)
    ]);

    return result[0].toBoolean();
  }

  try_productType(param0: string): ethereum.CallResult<boolean> {
    let result = super.tryCall("productType", "productType(string):(bool)", [
      ethereum.Value.fromString(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  role(param0: string): string {
    let result = super.call("role", "role(string):(string)", [
      ethereum.Value.fromString(param0)
    ]);

    return result[0].toString();
  }

  try_role(param0: string): ethereum.CallResult<string> {
    let result = super.tryCall("role", "role(string):(string)", [
      ethereum.Value.fromString(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  status(param0: string): string {
    let result = super.call("status", "status(string):(string)", [
      ethereum.Value.fromString(param0)
    ]);

    return result[0].toString();
  }

  try_status(param0: string): ethereum.CallResult<string> {
    let result = super.tryCall("status", "status(string):(string)", [
      ethereum.Value.fromString(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  userNames(param0: string): boolean {
    let result = super.call("userNames", "userNames(string):(bool)", [
      ethereum.Value.fromString(param0)
    ]);

    return result[0].toBoolean();
  }

  try_userNames(param0: string): ethereum.CallResult<boolean> {
    let result = super.tryCall("userNames", "userNames(string):(bool)", [
      ethereum.Value.fromString(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  userRoles(param0: string): string {
    let result = super.call("userRoles", "userRoles(string):(string)", [
      ethereum.Value.fromString(param0)
    ]);

    return result[0].toString();
  }

  try_userRoles(param0: string): ethereum.CallResult<string> {
    let result = super.tryCall("userRoles", "userRoles(string):(string)", [
      ethereum.Value.fromString(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  users(param0: Address, param1: BigInt): string {
    let result = super.call("users", "users(address,uint256):(string)", [
      ethereum.Value.fromAddress(param0),
      ethereum.Value.fromUnsignedBigInt(param1)
    ]);

    return result[0].toString();
  }

  try_users(param0: Address, param1: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("users", "users(address,uint256):(string)", [
      ethereum.Value.fromAddress(param0),
      ethereum.Value.fromUnsignedBigInt(param1)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  userVer(param0: string): Address {
    let result = super.call("userVer", "userVer(string):(address)", [
      ethereum.Value.fromString(param0)
    ]);

    return result[0].toAddress();
  }

  try_userVer(param0: string): ethereum.CallResult<Address> {
    let result = super.tryCall("userVer", "userVer(string):(address)", [
      ethereum.Value.fromString(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class AddAdminCall extends ethereum.Call {
  get inputs(): AddAdminCall__Inputs {
    return new AddAdminCall__Inputs(this);
  }

  get outputs(): AddAdminCall__Outputs {
    return new AddAdminCall__Outputs(this);
  }
}

export class AddAdminCall__Inputs {
  _call: AddAdminCall;

  constructor(call: AddAdminCall) {
    this._call = call;
  }

  get _add(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddAdminCall__Outputs {
  _call: AddAdminCall;

  constructor(call: AddAdminCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class AddCategoryCall extends ethereum.Call {
  get inputs(): AddCategoryCall__Inputs {
    return new AddCategoryCall__Inputs(this);
  }

  get outputs(): AddCategoryCall__Outputs {
    return new AddCategoryCall__Outputs(this);
  }
}

export class AddCategoryCall__Inputs {
  _call: AddCategoryCall;

  constructor(call: AddCategoryCall) {
    this._call = call;
  }

  get _category(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _description(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class AddCategoryCall__Outputs {
  _call: AddCategoryCall;

  constructor(call: AddCategoryCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class AddProductTypeCall extends ethereum.Call {
  get inputs(): AddProductTypeCall__Inputs {
    return new AddProductTypeCall__Inputs(this);
  }

  get outputs(): AddProductTypeCall__Outputs {
    return new AddProductTypeCall__Outputs(this);
  }
}

export class AddProductTypeCall__Inputs {
  _call: AddProductTypeCall;

  constructor(call: AddProductTypeCall) {
    this._call = call;
  }

  get _type(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class AddProductTypeCall__Outputs {
  _call: AddProductTypeCall;

  constructor(call: AddProductTypeCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class CreateAccountCall extends ethereum.Call {
  get inputs(): CreateAccountCall__Inputs {
    return new CreateAccountCall__Inputs(this);
  }

  get outputs(): CreateAccountCall__Outputs {
    return new CreateAccountCall__Outputs(this);
  }
}

export class CreateAccountCall__Inputs {
  _call: CreateAccountCall;

  constructor(call: CreateAccountCall) {
    this._call = call;
  }

  get _userName(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _role(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _name(): string {
    return this._call.inputValues[2].value.toString();
  }

  get _picHash(): string {
    return this._call.inputValues[3].value.toString();
  }

  get _descriptionContactHash(): string {
    return this._call.inputValues[4].value.toString();
  }

  get _verName(): string {
    return this._call.inputValues[5].value.toString();
  }

  get _descryptionContractAddress(): Address {
    return this._call.inputValues[6].value.toAddress();
  }
}

export class CreateAccountCall__Outputs {
  _call: CreateAccountCall;

  constructor(call: CreateAccountCall) {
    this._call = call;
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddRoleCall extends ethereum.Call {
  get inputs(): AddRoleCall__Inputs {
    return new AddRoleCall__Inputs(this);
  }

  get outputs(): AddRoleCall__Outputs {
    return new AddRoleCall__Outputs(this);
  }
}

export class AddRoleCall__Inputs {
  _call: AddRoleCall;

  constructor(call: AddRoleCall) {
    this._call = call;
  }

  get _role(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _description(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class AddRoleCall__Outputs {
  _call: AddRoleCall;

  constructor(call: AddRoleCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class AddStatusCall extends ethereum.Call {
  get inputs(): AddStatusCall__Inputs {
    return new AddStatusCall__Inputs(this);
  }

  get outputs(): AddStatusCall__Outputs {
    return new AddStatusCall__Outputs(this);
  }
}

export class AddStatusCall__Inputs {
  _call: AddStatusCall;

  constructor(call: AddStatusCall) {
    this._call = call;
  }

  get _status(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _description(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class AddStatusCall__Outputs {
  _call: AddStatusCall;

  constructor(call: AddStatusCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class SetAssetVersionAddressCall extends ethereum.Call {
  get inputs(): SetAssetVersionAddressCall__Inputs {
    return new SetAssetVersionAddressCall__Inputs(this);
  }

  get outputs(): SetAssetVersionAddressCall__Outputs {
    return new SetAssetVersionAddressCall__Outputs(this);
  }
}

export class SetAssetVersionAddressCall__Inputs {
  _call: SetAssetVersionAddressCall;

  constructor(call: SetAssetVersionAddressCall) {
    this._call = call;
  }

  get _ver(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _add(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class SetAssetVersionAddressCall__Outputs {
  _call: SetAssetVersionAddressCall;

  constructor(call: SetAssetVersionAddressCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class SetUserVersionAddressCall extends ethereum.Call {
  get inputs(): SetUserVersionAddressCall__Inputs {
    return new SetUserVersionAddressCall__Inputs(this);
  }

  get outputs(): SetUserVersionAddressCall__Outputs {
    return new SetUserVersionAddressCall__Outputs(this);
  }
}

export class SetUserVersionAddressCall__Inputs {
  _call: SetUserVersionAddressCall;

  constructor(call: SetUserVersionAddressCall) {
    this._call = call;
  }

  get _ver(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _add(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class SetUserVersionAddressCall__Outputs {
  _call: SetUserVersionAddressCall;

  constructor(call: SetUserVersionAddressCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class UpdateAddressCall extends ethereum.Call {
  get inputs(): UpdateAddressCall__Inputs {
    return new UpdateAddressCall__Inputs(this);
  }

  get outputs(): UpdateAddressCall__Outputs {
    return new UpdateAddressCall__Outputs(this);
  }
}

export class UpdateAddressCall__Inputs {
  _call: UpdateAddressCall;

  constructor(call: UpdateAddressCall) {
    this._call = call;
  }

  get _username(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _add(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class UpdateAddressCall__Outputs {
  _call: UpdateAddressCall;

  constructor(call: UpdateAddressCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class UpgradeCall extends ethereum.Call {
  get inputs(): UpgradeCall__Inputs {
    return new UpgradeCall__Inputs(this);
  }

  get outputs(): UpgradeCall__Outputs {
    return new UpgradeCall__Outputs(this);
  }
}

export class UpgradeCall__Inputs {
  _call: UpgradeCall;

  constructor(call: UpgradeCall) {
    this._call = call;
  }

  get _userName(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _upgradeTocontractAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class UpgradeCall__Outputs {
  _call: UpgradeCall;

  constructor(call: UpgradeCall) {
    this._call = call;
  }
}
