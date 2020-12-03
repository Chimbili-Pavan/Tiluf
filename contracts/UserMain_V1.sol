pragma solidity >=0.5.0 <0.8.0;
pragma experimental ABIEncoderV2;
import "./SysAdminProxyInterface.sol";



contract UserMain_V1{
    
    // user struct data tempolate
    struct Account{
        string userName;
        string name;
        string picHash; 
        string narrationHash; // link to the ipfs // descriptionContactHash    
        string contentHash;
        string role;
        address upgradedcontractAddress;
        
    }
    
    // lists of the username to the user detials
    mapping(string => Account) public accountList;
    
    address public SysAdminProxyAddress;
    
    // declare the sysadmin contract type variable
    SysAdminProxyInterface SysAdmin;

    event UpdateAccount(string _userName, string _name, string _picHash, string _descriptionContactHash);

    event JoinEvent(string _userName, address _add, string _name, string _picHash, string _descriptionContactHash, string _role,string _contentHash);
    
    event UpdateContentHash(string _userName, string _contentHash);
     
    //modifier
    modifier isUserExists(string memory _userName){
        require(bytes(accountList[_userName].userName).length != 0, "  UserMain_isUserExists: User already exists..");
        _;
    }
    
    
    // constructor of the contract
    constructor(address _add) public{
        SysAdminProxyAddress = _add;
        SysAdmin = SysAdminProxyInterface(SysAdminProxyAddress); 
    }
    

    // function to import the already existed account
    function importAccount(address _add)  public view returns(string[] memory){
        
        //SysAdmin = SysAdminProxy(SysAdminContractAddress);
        require(SysAdmin.isAddressExists(_add) == true, " UserMain_ImportAccount: The address is not registered in the eco-system ");
        string[] memory userNames = SysAdmin.getUserName(_add);
        return userNames;
        
    }
    
    
    function join(address _msgSender, string memory _userName,  string memory _name, string memory _picHash, string memory _narrationHash, string memory _contentHash, string memory _role) public returns (bool){
       
        require(SysAdminProxyAddress == msg.sender, " UserMain_Join: The caller is not the admin ");
        
        require (accountList[_userName].upgradedcontractAddress == address(0x0), " UserMain_Join: The user has been upgraded");
        
        require(SysAdmin.isUserNameExists(_userName) == true, " UserMain_Join: The user name does not exists");
        
         accountList[_userName].userName = _userName;
         accountList[_userName].name = _name;
         accountList[_userName].picHash = _picHash;
         accountList[_userName].contentHash = _contentHash;
         accountList[_userName].role = _role;
         accountList[_userName].narrationHash = _narrationHash;
        
        emit JoinEvent(_userName, _msgSender, _name,_picHash, _narrationHash, _role,_contentHash);
        
        return (true); 
    }
    
    // function to update the user
    function updateAccount(string memory _userName, string memory _name, string memory _picHash, string memory _narrationHash) public {
        
        require (accountList[_userName].upgradedcontractAddress == address(0x0), " UserMain_UpdateAccount: The user has been upgraded");
        
        require(SysAdmin.isUserNameExists(_userName) == true, " UserMain_UpdateAccount: The user name does not exists");
        
        require(SysAdmin.getUserNameAddr(_userName) == msg.sender, " UserMain_UpdateAccount: The caller is not the holder of the account" );
        
        
        
        // fetch the asset from the blockchain
        if(bytes(_name).length != 0){
            accountList[_userName].name = _name;
        }
        
        if(bytes(_picHash).length != 0){
            accountList[_userName].picHash = _picHash;
        }
        
        if(bytes(_narrationHash).length != 0){
            accountList[_userName].narrationHash = _narrationHash;
        }
        
        // emit the event with the updated details to store in the graph node
        emit UpdateAccount(_userName, _name,  _picHash, _narrationHash);
    }
    
    
   function upgradeFromThis (string memory _userName,address _upgradeTocontractAddress) public {
       require ( SysAdminProxyAddress == msg.sender, " UserMain_UpgradeFromThis: Caller is not SysAdminProxy" );
       
       accountList[_userName].upgradedcontractAddress = _upgradeTocontractAddress;
       // block all the functionalities for this _userNmae on this contract 
   }
   
   //
   function editContentHash(string memory _userName, string memory _contentHash) public {
       require(SysAdmin.getUserNameAddr(_userName) == msg.sender, " UserMain_EditContentHash: The caller is not the holder of the account" );
       accountList[_userName].contentHash = _contentHash;
       
       emit UpdateContentHash(_userName,_contentHash);
   }
    
}