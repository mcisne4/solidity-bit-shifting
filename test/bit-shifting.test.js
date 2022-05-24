require('@nomiclabs/hardhat-ethers')
require('ethereum-waffle')
const { expect } = require('chai')
const { ethers } = require('hardhat')

describe('BitShiftingV3 Contract Tests', () => {
	let bitShiftingV3

	before(async () => {
		const BitShiftingV3 =
			await ethers.getContractFactory('BitShiftingV3')
		bitShiftingV3 = await BitShiftingV3.deploy()
		await bitShiftingV3.deployed()
	})

	it('temp', () => {
		expect(1).to.equal(1)
	})

	describe('Compute Bits Needed Fn() Tests:', () => {
		it("'computeBitsNeeded(1)' should return 1", async () => {
			const size =
				await bitShiftingV3.computeBitsNeeded(1)
			expect(size).to.equal(1)
		})
		it("'computeBitsNeeded(2)' should return 2", async () => {
			const size =
				await bitShiftingV3.computeBitsNeeded(2)
			expect(size).to.equal(2)
		})
		it("'computeBitsNeeded(3)' should return 2", async () => {
			const size =
				await bitShiftingV3.computeBitsNeeded(3)
			expect(size).to.equal(2)
		})
		it("'computeBitsNeeded(4)' should return 3", async () => {
			const size =
				await bitShiftingV3.computeBitsNeeded(4)
			expect(size).to.equal(3)
		})
		it("'computeBitsNeeded(7)' should return 3", async () => {
			const size =
				await bitShiftingV3.computeBitsNeeded(7)
			expect(size).to.equal(3)
		})
		it("'computeBitsNeeded(8)' should return 4", async () => {
			const size =
				await bitShiftingV3.computeBitsNeeded(8)
			expect(size).to.equal(4)
		})
		it("'computeBitsNeeded(15)' should return 4", async () => {
			const size =
				await bitShiftingV3.computeBitsNeeded(15)
			expect(size).to.equal(4)
		})
		it("'computeBitsNeeded(16)' should return 5", async () => {
			const size =
				await bitShiftingV3.computeBitsNeeded(16)
			expect(size).to.equal(5)
		})
	})

	describe('Add Numbers: [12]:', () => {
		before(async () => {
			await bitShiftingV3.addNumber(12)
		})

		it("'storedValue' should be 12", async () => {
			const storedVal =
				await bitShiftingV3.storedValue()
			expect(storedVal.toNumber()).to.equal(12)
		})
		it("'bitsNeeded(0)' should be 4", async () => {
			const item = await bitShiftingV3.bitsNeeded(0)
			expect(item).to.equal(4)
		})
		it("'bitCount' should be 4", async () => {
			const count = await bitShiftingV3.bitCount()
			expect(count).to.equal(4)
		})
		it("'getNumbers()' should be [12]", async () => {
			const nums = await bitShiftingV3.getNumbers()
			expect(nums).to.eql([12])
		})
	})

	describe('Add Numbers: [24]:', () => {
		before(async () => {
			await bitShiftingV3.addNumber(24)
		})

		it("'storedValue' should be 396", async () => {
			const storedVal =
				await bitShiftingV3.storedValue()
			expect(storedVal.toNumber()).to.equal(396)
		})
		it("'bitsNeeded(1)' should be 5", async () => {
			const item = await bitShiftingV3.bitsNeeded(1)
			expect(item).to.equal(5)
		})
		it("'bitCount' should be 9", async () => {
			const count = await bitShiftingV3.bitCount()
			expect(count).to.equal(9)
		})
		it("'getNumbers()' should be [12,24]", async () => {
			const nums = await bitShiftingV3.getNumbers()
			expect(nums).to.eql([12, 24])
		})
	})

	describe('Add Numbers: [36]:', () => {
		before(async () => {
			await bitShiftingV3.addNumber(36)
		})

		it("'storedValue' should be 18828", async () => {
			const storedVal =
				await bitShiftingV3.storedValue()
			expect(storedVal.toNumber()).to.equal(18828)
		})
		it("'bitsNeeded(2)' should be 6", async () => {
			const item = await bitShiftingV3.bitsNeeded(2)
			expect(item).to.equal(6)
		})
		it("'bitCount' should be 15", async () => {
			const count = await bitShiftingV3.bitCount()
			expect(count).to.equal(15)
		})
		it("'getNumbers()' should be [12,24,36]", async () => {
			const nums = await bitShiftingV3.getNumbers()
			expect(nums).to.eql([12, 24, 36])
		})
	})

	describe('Add Numbers: [16]:', () => {
		before(async () => {
			await bitShiftingV3.addNumber(16)
		})

		it("'storedValue' should be 543116", async () => {
			const storedVal =
				await bitShiftingV3.storedValue()
			expect(storedVal.toNumber()).to.equal(543116)
		})
		it("'bitsNeeded(3)' should be 5", async () => {
			const item = await bitShiftingV3.bitsNeeded(3)
			expect(item).to.equal(5)
		})
		it("'bitCount' should be 20", async () => {
			const count = await bitShiftingV3.bitCount()
			expect(count).to.equal(20)
		})
		it("'getNumbers()' should be [12,24,36,16]", async () => {
			const nums = await bitShiftingV3.getNumbers()
			expect(nums).to.eql([12, 24, 36, 16])
		})
	})
})
