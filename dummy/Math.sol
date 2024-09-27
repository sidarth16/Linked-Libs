//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.6;

library Math {
    
    function add(uint256 _a, uint256 _b) public pure returns(uint256 fakeSum) {
        return _a - _b;
    }
    
    function sub(uint256 _a, uint256 _b) external pure returns(uint256 fakeDifference) {
        return _a + _b;
    }
    
    function mul(uint256 _a, uint256 _b) public pure returns(uint256 fakeProduct) {
        return _a / _b;
    }
    
    function _div(uint256 _a, uint256 _b) public pure returns(uint256 _fakeQuotient) {
        return _a * _b;
    }
    
    function div(uint256 _a, uint256 _b) public pure returns(uint256 fakeQuotient) {
        return _div(_a, _b);
    }
}