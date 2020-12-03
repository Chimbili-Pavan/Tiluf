pragma solidity >=0.5.0 <0.8.0;
pragma experimental ABIEncoderV2;
import "./SysAdminProxyInterface.sol";
import "./AssetUpgradeToInterface.sol";

contract AssetLogic{
    
    // struct for the History
    struct Journey{
        string owner;   // userName
        uint blockNumber;
        uint timestamp; //  timestamp at which this is owned by the above user
    }
    
    struct CuriosHash {
        string _3DHash;
        string _2DHash;
        string picHash;
        string narrationHash; // descripHighlightsHash
    }
    
    
    
    // asset data struct
    struct Curio{
        string owner;  // should be the username
        string curioID;
        string curioName;
        string category;
        string creatorName;  //brand Username
        string liveHash;
        string curioType;
        string status;                 // checks the status of the free, forsale, notForSale 
        uint price;  
        CuriosHash curiosHash;
        uint numberOfPassOn;
        address upgradedcontractAddress;
        mapping(uint => Journey) journey;
    }
    
    
    address public SysAdminProxyAddress;
    
    
    // declare the sysadmin contract type variable
    SysAdminProxyInterface public SysAdmin;
    
    //declare upgraded contract 
    AssetUpgradeToInterface upgradedToContract;
    
    // stores the lists of all the assets with their id as key and asset as value
    mapping(string => Curio) public curios;
    
    event NewCurio(string _owner, string _curioID, string _curioName, string _category, string _picHash,string _3DHash, string _2DHash,string _curioType, string _narrationHash, uint32 _price, string  _status);
    event UpdateCurio(string _owner,string _curioID, string _curioName, string _category, string _picHash, string __3DHash, string __2DHash, string _curioType,string _descrip_highlights,string _status,uint _price);
    event PassOnCurioEvent(string _seller, string _curioID, string _buyer);
    event LetItGoEvent(string _curioID, string status, uint _price);
    event EmbraceProductEvent(string _seller, string _curioID, string _buyer);
    event Burn(string _userName, string _curioID);
    event UpdateLiveHash(string _userName, string _curioID, string _liveHash);
   
    // constructor of the contract
    constructor(address _add) public  {
        SysAdminProxyAddress = _add;
        SysAdmin = SysAdminProxyInterface(SysAdminProxyAddress);
    }
    
    
    // creates the asset   
    function createCurio(string memory _userName, string memory _curioID, string memory _curioName, string memory _category, string memory _picHash, string memory _curioType, string memory __3DHash, string memory __2DHash,  string memory _narrationHash, uint32 _price, string memory _status) public returns(bool){
        
        
        require(SysAdmin.getUserNameAddr(_userName) == msg.sender, " Asset_CreateCurio: The caller doesnot holds the username ");
        
        require(keccak256(bytes(SysAdmin.getUserRole(_userName))) == keccak256(bytes("designer")), " Asset_CreateCurio: Only designers are allowed to create the asset ");
        
        require(bytes(curios[_curioID].curioID).length == 0, " Asset_CreateCurio: The product ID already exists ");
        
        require(SysAdmin.isCategoryExists(_category) == false, " Asset_CreateCurio: Category does not exist ");
        
        require(SysAdmin.isStatusExists(_status) == false, " Asset_CreateCurio: Status does not exist ");
        
        if (keccak256(bytes(_status)) == keccak256(bytes("forSale")) )
        {
            require ( _price > 0, " Asset_CreateCurio: Open for sale but price not mentioned");
        }
        
        Journey memory _journey = Journey (_userName, block.number, block.timestamp);
        
        Curio memory newCurio;
        
        newCurio.owner = _userName;
        newCurio.curioID = _curioID;
        newCurio.curioName = _curioName;
        newCurio.category = _category;
        newCurio.curiosHash.picHash = _picHash;
        newCurio.creatorName = _userName;
        newCurio.curiosHash._3DHash = __3DHash;
        newCurio.curiosHash._2DHash = __2DHash;
        newCurio.curiosHash.narrationHash = _narrationHash;
        newCurio.liveHash= "null";
        newCurio.price = _price;
        newCurio.status = _status;
        newCurio.curioType = _curioType;
        
        newCurio.numberOfPassOn = 0;

        curios[_curioID] = newCurio;
        
        Curio storage p = curios[_curioID];
        
        p.journey[0] = _journey;
        
        
        // emit the event to store it in graph
        emit NewCurio(_userName, _curioID,_curioName,_category,_picHash, __3DHash,__2DHash,  newCurio.curioType, _narrationHash, _price, _status);
        
    }
    
    
    // updates the asset details
    function updateCurio( string memory _curioID, string memory _curioName, string memory _category, string memory _picHash, string memory __3DHash, string memory __2DHash, string memory _curioType, string memory _narrationHash, string memory _Status, uint _price ) public {
        
        string memory _userName = curios[_curioID].owner;
        require(curios[_curioID].numberOfPassOn == 0, " Asset_UpdateCurio: The product cannot be updated, it's already sold at least once ");

        require(curios[_curioID].upgradedcontractAddress == address(0x0), " Asset_UpdateCurio: The product is already upgraded to another version");

        require(SysAdmin.getUserNameAddr(_userName) == msg.sender, " Asset_UpdateCurio: The address is not the holder of the username");
        
        require(keccak256(bytes(curios[_curioID].owner)) != keccak256(bytes("burn")), " Asset_UpdateCurio: The product is already burned ");
       
        
        // fetch the asset from the blockchain
        if(bytes(_curioName).length != 0){
            curios[_curioID].curioName = _curioName;
        }
        
        if(bytes(_category).length != 0){
            curios[_curioID].category = _category;
        }
        
        if(bytes(_picHash).length != 0){
            curios[_curioID].curiosHash.picHash = _picHash;
        }
        
        if(bytes(__3DHash).length != 0){
            curios[_curioID].curiosHash._3DHash = __3DHash;
        }
        
        if(bytes(__2DHash).length != 0){
            curios[_curioID].curiosHash._2DHash = __2DHash;
        }
        
        
        if(bytes(_narrationHash).length != 0){
            curios[_curioID].curiosHash.narrationHash = _narrationHash;
        }
        
        if(bytes(_Status).length != 0){
            curios[_curioID].status = _Status;
        }
        
         if(_price != curios[_curioID].price ){
            curios[_curioID].price = _price;
        }
        
        if(bytes(_curioType).length != 0){
            curios[_curioID].curioType = _curioType;
        }

        // emit the event for the updation in the graph
        emit UpdateCurio(curios[_curioID].owner,_curioID,_curioName,_category,_picHash,__3DHash,__2DHash,_curioType,_narrationHash,_Status,_price);
    }
    
    
    
    
    
    // transfers the asset to the specified user
    function passOnCurio(string memory _userName, string memory _curioID, string memory _receiver) public {
        
        require(curios[_curioID].upgradedcontractAddress == address(0x0), " Asset_PassOnCurio: the product is upgraded to another version");

        require(SysAdmin.getUserNameAddr(_userName) == msg.sender, " Asset_PassOnCurio: The address is not the holder of the username");
        
        require(keccak256(bytes(curios[_curioID].owner)) == keccak256(bytes(_userName)), " Asset_PassOnCurio: The user is not the owner of the product");
        
        require(SysAdmin.isUserNameExists(_receiver) == true, " Asset_PassOnCurio: The buyer is not registered in the eco-system");
        
        require(keccak256(bytes(curios[_curioID].owner)) != keccak256(bytes("burn")), " Asset_PassOnCurio: The product is already burned ");
        
        // change the owner detials of that asset
        curios[_curioID].owner = _receiver;
        
        Journey memory _journey = Journey(_receiver, block.number, block.timestamp);
        
        curios[_curioID].liveHash = "";
        
        curios[_curioID].numberOfPassOn += 1;  
        
        curios[_curioID].journey[curios[_curioID].numberOfPassOn] = _journey;
        
        // emit the event 
        emit PassOnCurioEvent(_userName,_curioID, _receiver);
        
    }
    
    
    
    
    // transfers the asset details by calling the updateAsset func of the Storage.sol contract
    function letItGo(string memory _curioID, string memory _userName, uint _price, string memory _status) public  {
        
        require(SysAdmin.getUserNameAddr(_userName) == msg.sender, " Asset_LetItGo: The username and address are not matching ");
       
        require(keccak256(bytes(curios[_curioID].owner)) == keccak256(bytes(_userName)), " Asset_LetItGo: The user is not the owner of the product.. ");
        
        require(curios[_curioID].upgradedcontractAddress == address(0x0), " Asset_LetItGo: The product is upgraded to another version");

        require(keccak256(bytes(curios[_curioID].owner)) != keccak256(bytes("burn")), " Asset_LetItGo: The product is already burned ");
        
        if(keccak256(bytes(_status)) == keccak256(bytes("letItGo"))){
            
            require(_price > 0, " Asset_LetItGo: The price is not mentioned  " );
          
            curios[_curioID].status = _status;
            curios[_curioID].price = _price;
        }
        
        
        // emit the event when asset got called
        emit LetItGoEvent(_curioID,curios[_curioID].status, _price);
    }
    
   
    
    
    // buy the product
    function embrace(string memory _buyerName, string memory _curioID) public payable  {
        
        require(SysAdmin.getUserNameAddr(_buyerName) == msg.sender, " Asset_Embrace: The address is not the holder of the username");
        
        require(msg.value >= curios[_curioID].price," Asset_Embrace: Not enough funds");
        
        require(keccak256(bytes(curios[_curioID].status)) == keccak256(bytes("letItGo")), " Asset_Embrace: The product is not for sale ");
        
        require(curios[_curioID].upgradedcontractAddress == address(0x0), " Asset_Embrace: The product is upgraded to another version");
        
        require(keccak256(bytes(curios[_curioID].owner)) != keccak256(bytes("burn")), " Asset_Embrace: The product is already burned ");
        
        // transfer the ether to the seller
        string memory sellerUsername = curios[_curioID].owner;
        
        address payable sellerAddr = address(uint160(SysAdmin.getUserNameAddr(sellerUsername)));
        
        sellerAddr.transfer(msg.value);
        
        // update the asset owner details in the blockchain
        curios[_curioID].owner = _buyerName;
        
        
        curios[_curioID].numberOfPassOn += 1;  
        
        
        curios[_curioID].liveHash = "";
        
        Journey memory _journey = Journey(_buyerName, block.number, block.timestamp);
        
        //products[_productID].history[products[_productID].numberOfTransfers] = _history;
        
        
        // add history of the newly bought user to the product history
        curios[_curioID].journey[curios[_curioID].numberOfPassOn] = _journey;
        
        // make the product as not for sale
        curios[_curioID].status = "keep";
        
        // emit the event when asset is bought by sender
        emit EmbraceProductEvent(sellerUsername,_curioID, _buyerName);
        
    }
    
    
    function burn(string memory _userName, string memory _curioID) public {
        require(SysAdmin.getUserNameAddr(_userName) == msg.sender, " Asset_Burn: The address is not the holder of the username");
        require(keccak256(bytes(curios[_curioID].owner)) == keccak256(bytes(_userName)), " Asset_Burn: The user is not the owner of the product.. ");
        require(keccak256(bytes(curios[_curioID].owner)) != keccak256(bytes("burn")), " Asset_Burn: The product is already burned ");
        curios[_curioID].owner = "burn";
        emit Burn(_userName,_curioID);
        
    }
    
    function upgrade(string memory _curioID, string memory _userName, address _upgradedcontractAddress) public {
        
        require(SysAdmin.getUserNameAddr(_userName) == msg.sender, " Asset_Upgrade: the caller is not allowed to upgrade the product");
        
        require(curios[_curioID].upgradedcontractAddress == address(0x0), " Asset_Upgrade: The product is already upgraded to another version");
        
        AssetUpgradeToInterface upgradedContract = AssetUpgradeToInterface(_upgradedcontractAddress);
        
        // calls the UpgradeToThis contract on the upgraded contract 
        upgradedContract.UpgradeToThis( _curioID,SysAdmin.getUserNameAddr(_userName) ,curios[_curioID].curiosHash.picHash,curios[_curioID].curioName);
        
        curios[_curioID].upgradedcontractAddress = _upgradedcontractAddress;
        
        // history logic 
        
        // **** event 
    }
    
    
    //
    function updateLiveHash(string memory _userName, string memory _curioID, string memory _liveHash) public {
        require(keccak256(bytes(curios[_curioID].owner)) == keccak256(bytes(_userName)), " Asset_UpdateLiveHash: The user is not the owner of the product.. ");
        require(SysAdmin.getUserNameAddr(_userName) == msg.sender, " Asset_UpdateLiveHash: the caller is not allowed to update the livehash");
        curios[_curioID].liveHash = _liveHash;
        
        emit UpdateLiveHash(_userName, _curioID, _liveHash);
        
    }
    
}