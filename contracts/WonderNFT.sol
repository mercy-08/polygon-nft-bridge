// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "erc721a/contracts/ERC721A.sol";

contract WonderNFT is ERC721A {
    uint8 public maxSupply = 5;

    constructor() ERC721A("WonderNFT", "WNFT") {}

    function safeMint(uint8 _quantity) external payable {
        _safeMint(msg.sender, _quantity);
    }

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://QmVutBdJdKoMJBokPSourG7VLvEhWpcfFqwvs3JRP7cxhS/";
    }

    function promptDescription() external pure returns (string memory) {
        return
            "Generate a series of unique artworks inspired by surrealism, featuring elements such as dreamlike landscapes, impossible architectures, and fantastical creatures. The artworks should evoke a sense of wonder and intrigue, incorporating vibrant colors and intricate details. Each piece should tell its own story and invite viewers to explore the depths of their imagination. Consider blending organic forms with mechanical elements to create a visually stunning and thought-provoking collection.";
    }

    function balanceOf(address owner) public view override returns (uint256) {
        return super.balanceOf(owner);
    }
}
