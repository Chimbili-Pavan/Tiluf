pragma solidity >=0.5.0 <0.8.0;

contract UserCreateAccountInterface { 
    
    function join(address _msgSender, string memory _userName, string memory _name, string memory _picHash, string memory _descriptionContactHash, string memory _contentHash,  string memory _role) public returns(bool){}

}
