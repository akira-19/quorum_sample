pragma solidity >=0.4.21 <0.6.0;


contract Sample {
    address public owner;
    mapping(uint256 => string) public name;

    constructor() public {
        owner = msg.sender;
    }

    modifier restricted() {
        if (msg.sender == owner) _;
    }

    function setName(uint256 _id, string memory _name) public {
        name[_id] = _name;
    }
}
