// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract BitShiftingV3 {
	uint256 public storedValue;
	uint256 public bitCount;
	uint8[] public bitsNeeded;

	/* --- HELPER: Compute Bit Length --- */
	function computeBitsNeeded(uint8 _number)
		public
		pure
		returns (uint8 length)
	{
		while (2**length - 1 < _number) {
			length++;
		}
	}

	/* --- FUNCTION: Add to Number --- */
	function addNumber(uint8 _number) external {
		uint8 neededBits = computeBitsNeeded(_number);

		require(
			bitCount + neededBits <= 32,
			"total bits needed > 32 bits"
		);

		bitsNeeded.push(neededBits);

		storedValue |= uint256(_number) << bitCount;
		bitCount += neededBits;
	}

	/* --- FUNCTION: Retreive Numbers --- */
	function getNumbers()
		external
		view
		returns (uint8[] memory numbers)
	{
		uint256 arrLength = bitsNeeded.length;
		numbers = new uint8[](arrLength);

		uint8 index;
		for (uint8 i = 0; i < arrLength; i++) {
			numbers[i] = uint8(
				(storedValue >> index) &
					((0x1 << bitsNeeded[i]) - 1)
			);
			index += bitsNeeded[i];
		}
	}
}
