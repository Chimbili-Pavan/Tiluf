pragma solidity >=0.5.0 <0.8.0;
pragma experimental ABIEncoderV2;
import "./UserUpgradeFromInterface.sol";
import "./UserUpgradeToInterface.sol";
import "./UserCreateAccountInterface.sol";


contract SysAdminProxy { 
    
   // maps address to the userName of the candidate
   mapping(address => string[]) public users;
   
   //mapping(string => uint) public usernameIndex;
   
   //maps user name to the descryption Contract
   mapping(string => address) public descryptionContractMap; 
   
   // userName to the address
   mapping(string => address) userNameAddress;
   
   // stores all the usernames in the eco-system
   mapping(string => bool) public userNames;
   
   // username => role
   mapping(string => string) public userRoles;
   
   // stores the address's of admins
   mapping(address => bool) public admins;
   
   // version to the contract address for asset 
   mapping(string => address) public curioVerAdd;
   
   // version to the contract address for user
   mapping(string => address) public userVerAdd;
   
   // version to the contract address for asset 
   mapping(address => string) public curioVer;
   
   // version to the contract address for user
   mapping(address => string) public userVer;
   
   // userName to his role
   //mapping(string => string) public role;
   
   //  categories with the descryption
   mapping(string => string) public category; 

   //  Status with descryption
   mapping(string => string) public status;
   
   // curiotype to description
   mapping(string => string) public curioType;
   
   event NewStatus(string  _status, string _description);
   
   event NewRole(string _role, string _description);
   
   event NewCategory(string _category, string _description );
   
   event NewCurioType(string _type, string _description);
   
   event AddressUpdation(string[] _userNames,address oldAddress, address newAddress);
   
   event JoinEvent1(string _userName, string _role, string _name, string _picHash, string _descriptionContactHash, string _contentHash, string  _verName, address _descryptionContractAddress);
  
   event SetUserVer(string  _ver,address _add);
   
   event SetCurioVer(string  _ver,address _add);
   
     //declare the upgradedcontractInterface
    UserUpgradeToInterface upgradedToContract;
    
     //declare the UserCreateAccountInterface
    UserCreateAccountInterface UserCreateAccount;
    
     //declare the upgradedcontractInterface
    UserUpgradeFromInterface upgradedFromContract;
   
   // constructor for this function
   constructor() public {
       //admin = msg.sender;
   }
   
   
    // function to create the user account
    function join(string memory _userName, string memory _role, string memory _name, string memory _picHash, string memory _narrationHash, string memory _verName, string memory _contentHash, address _descryptionContractAddress) public {
        
        require(userNames[_userName] != true, " SysAdmin_Join: The username already exists ");
        
        require (bytes(userRoles[_role]).length != 0, " SysAdmin_Join: The role does not exists");
        
        require (userVerAdd[_verName] == _descryptionContractAddress, " SysAdmin_Join: The descryption Contract does not exists");
        
        require(keccak256(bytes(_userName)) != keccak256(bytes("burn")), " SysAdmin_Join: This userName is reserved, use the other name ");
        
        userNameAddress[_userName] = msg.sender;

        users[msg.sender].push(_userName);

        userNames[_userName] = true;
        
        descryptionContractMap[_userName] = _descryptionContractAddress;
        
        userRoles[_userName] = _role;
        
        UserCreateAccount = UserCreateAccountInterface(_descryptionContractAddress);
        
        UserCreateAccount.join(msg.sender, _userName, _name, _picHash, _narrationHash, _contentHash, _role); 
        
        emit JoinEvent1(_userName, _role, _name, _picHash, _narrationHash, _verName, _contentHash, _descryptionContractAddress);
        
    }
    
    
   
   // checks if the user name already exists
   function isUserNameExists(string memory _userName) view public returns(bool){
       return userNames[_userName];
   }
   

  
   //  returns the usernames associated with the address 
   function getUserName(address _add) public view returns(string[] memory){
       return users[_add];
   }
   
   
   //  returns the address associated to the user name 
   function getUserNameAddr(string memory _userName) view public returns(address){
       return userNameAddress[_userName];
   }
   
   
   
   // check whether the address exists or not
   function isAddressExists(address _add) view public returns(bool){
       if(users[_add].length != 0){
           return true;
       }
       else{
           return false;
       }
   }
   
   
   // **** Address management logic -- only the current owner of the username can change this  -- chimbili
   function updateAddress (string[] memory _usernames, address _add) public returns(bool){
       
       uint len = _usernames.length;
       uint len1 = users[msg.sender].length;
       
       for(uint i=0; i <len; i++){
           
           if( keccak256(bytes(_usernames[i])) == keccak256(bytes("")) ){
               continue;
           }
           
           require(userNames[_usernames[i]] == true, " SysAdmin_UpdateAddress: The username doesn't exist only ");
           require(userNameAddress[_usernames[i]] == msg.sender, " SysAdmin_UpdateAddress: The sender is not the owner of the username ");
           
           // map the new address to the usernme
           userNameAddress[_usernames[i]] = _add;
           
           for(uint j=0; j<len1; j++){
               if( keccak256(bytes(users[msg.sender][j])) == keccak256(bytes(_usernames[i])) ){
                   // delete the old address mapping
                   delete users[msg.sender][j];
                   break;
               }
           }
           
           // map  the username to the new address
           users[_add].push(_usernames[i]);
       }
       
       emit AddressUpdation(_usernames,msg.sender,_add);
   }
   
   
   // set new Asset version 
   function setCurioVersionAddress(string memory _ver,address _add) public returns(bool){
       require(curioVerAdd[_ver] == address(0x0), " SysAdmin_SetCurioVersionAddress: The version is already available ");
       curioVerAdd[_ver] = _add;
       curioVer[_add] = _ver;
       return true;
   }
   
   
   // set new User version 
   function setUserVersionAddress(string memory _ver,address _add) public returns(bool){
       require(userVerAdd[_ver] == address(0x0), " SysAdmin_SetUserVersionAddress: The version is already available  ");
       userVerAdd[_ver] = _add;
       userVer[_add] = _ver;
       return true;
   }
   
   
   // returns the address of the specified version 
   function getCurioVersionAddress(string memory ver) view public returns(address){
      return curioVerAdd[ver];
   }
   
   
   //  returns the address of the specified version 
   function getUserVersionAddress(string memory ver) view public returns(address){
      return userVerAdd[ver];
   }
   
   
    // returns the address of the specified version 
   function getCurioVersion(address _add) view public returns(string memory){
      return curioVer[_add];
   }
   
   
   //  returns the address of the specified version 
   function getUserVersion(address _add) view public returns(string memory){
      return userVer[_add];
   }
 
   
   // to add the new category
    function addCategory(string memory _category,string memory _description) public returns(bool) {
       require(bytes(category[_category]).length == 0, " SysAdmin_AddCategory: The category already exists " ) ;
       category[_category] = _description;
       emit NewCategory(_category, _description);
       return true;
   }
   
   
   // to check whether an category exists in the list
   function isCategoryExists(string memory _category) public view returns(bool) {
       if(bytes(category[_category]).length == 0){
           return false;
       }
       else{
           return true;
       }
   }
   
   
   // get the Category 
   function getCategory(string memory _Category) view public returns(string memory){
       return category[_Category];
   }
   
    // to add the new category
   function addStatus(string memory _status,string memory _description) public returns(bool) {
       require(bytes(status[_status]).length == 0, " SysAdmin_AddStatus: The status already exists " ) ;
       status[_status] = _description;
       emit NewStatus(_status, _description);
       return true;
   }
   
   // to check whether an status exists in the list
   function isStatusExists(string memory _status) public view returns(bool) {
       if(bytes(status[_status]).length == 0){
           return false;
       }
       else{
           return true;
       }
   }
   
   // get the status 
   function getStatus(string memory _status) view public returns(string memory){
       return status[_status];
   }
   
   // add a role
   function addRole(string memory _role,string memory _description) public returns(bool) {
       require(bytes(userRoles[_role]).length == 0, " SysAdmin_AddRole: The role already exists " );
       userRoles[_role] = _description;
       emit NewRole(_role, _description);
       return true;
   }
   
   // to check whether an role exists in the list
   function isRoleExists(string memory _role) public view returns(bool) {
       if(bytes(userRoles[_role]).length == 0){
           return false;
       }
       else{
           return true;
       }
   }
   
   
   // get the user role 
   function getRole(string memory _role) view public returns(string memory){
       return userRoles[_role];
   }
   
   // gets the user role
   function getUserRole(string memory _userName) view public returns(string memory){
       return userRoles[_userName];
   }
   
   // adds the new product type
   function addCurioType(string memory _type, string memory _description) public returns(bool){
       require(bytes(curioType[_type]).length == 0, " SysAdmin_AddCurioType: The CurioType already present ");
       curioType[_type] = _description;
       emit NewCurioType(_type,_description);
       return true;
   }
   
   // checks whether the productType exists or not
   function isCurioTypeExist(string memory _type) view public returns(bool){
       if(bytes(curioType[_type]).length == 0){
           return false;
       }
       else{
           return true;
       }
   }
   
   
   // gets the description of the requested curiotype description
   function getCurioType(string memory _curioType) view public returns(string memory){
       return curioType[_curioType];
   }
    
  
    function upgrade(string memory _userName, address _upgradeTocontractAddress) public {
        
        require(userNameAddress[_userName] == msg.sender, " SysAdmin_Upgrade: The caller is not allowed to upgrade the _username");
        
        UserUpgradeToInterface upgradeToContract = UserUpgradeToInterface(_upgradeTocontractAddress);
        
        UserUpgradeFromInterface upgradeFromContract = UserUpgradeFromInterface(descryptionContractMap[_userName]);
        
        // call the upgradeFromThis function on the current descryptionContract
        upgradeFromContract.UpgradeFromThis(_userName, _upgradeTocontractAddress); 
        
        // calls the UpgradeToThis function on the new upgraded contract 
        upgradeToContract.UpgradeToThis( _userName,"name",msg.sender,"pichash","descrip");
        
        descryptionContractMap[_userName] = _upgradeTocontractAddress;
    }
   
}