pragma solidity >=0.5.0 <0.8.0;
pragma experimental ABIEncoderV2;

contract SysAdminProxyInterface {
    
   
   // creates the account
   function join(string memory _userName, string memory _role, string memory _name, string memory _picHash, string memory _descriptionContactHash, string memory _verName, string memory _contentHash, address _descryptionContractAddress) public{}
   
   // checks the userNAme exists or not
   function isUserNameExists(string memory _userName) view public returns(bool){}
   
   // 
   function getUserName(address _add) public view returns(string[] memory){}
   
   // fetch the user detials and return
   function getUserNameAddr(string memory _userName) view public  returns(address){}
   
   //
   function isAddressExists(address _add) view public returns(bool){}
   
   //
   function updateAddress (string[] memory _usernames, address _add) public returns(bool){}
   
   //
   function setCurioVersionAddress(string memory _ver,address _add) public returns(bool){}
   
   // 
   function setUserVersionAddress(string memory ver,address _add) public returns(bool){}
   
  
   // 
   function getCurioVersionAddress(string memory ver) view public returns(address){}
   
   //
   //  returns the address of the specified version 
   function getUserVersionAddress(string memory ver) view public returns(address){}
   
   //
   function getCurioVersion(address _add) view public returns(string memory){}
   
   //
   function getUserVersion(address _add) view public returns(string memory){}
   
   // to add the new category
   function addCategory(string memory _category) public returns(bool) {}
   
   
   // to check whether an category exists in the list
   function isCategoryExists(string memory _category) public view returns(bool) {}
   
   
   //
   function getCategory(string memory _Category) view public returns(string memory){}
   
   
   //
   function addStatus(string memory _status,string memory _description) public returns(bool){}
   
   // to check whether an status exists in the list
   function isStatusExists(string memory _status) public view returns(bool){}
   
   // get the status 
   function getStatus(string memory _status) view public returns(string memory){}
   
    // add a role
   function addRole(string memory _role,string memory _description) public returns(bool){}
   
   
   // to check whether an role exists in the list
   function isRoleExists(string memory _role) public view returns(bool){}
   
   // get the role 
   function getRole(string memory _role) view public returns(string memory){}
   
    // gets the user role
   function getUserRole(string memory _userName) view public returns(string memory){}
   
   
   // adds the new product type
   function addCurioType(string memory _type, string memory _description) public returns(bool){}
   
   
   // checks whether the productType exists or not
   function isCurioTypeExist(string memory _type) view public returns(bool){}
   
   //
   function upgrade(string memory _userName, address _upgradeTocontractAddress) public{}
   
   
   
   
}