_addBlock(block) {
        let self = this;
        return new Promise(async (resolve, reject) => {
            //setting block to a new block with the data in the body
            block = new Block(block.getBData());
            // assigning current height
            let currentHeight = getChainHeight();
            //finding the previous block by current chain height
            const previousBlock = getBlockByHeight(currentHeight);
            //assigning hash of previous block to current block
            block.previousBlockHash = previousBlock.hash;
            //assign current height
            block.height = currentHeight + 1;
            //assinging time to block
            block.time = new Date().getTime();
            //hashing the block using SHA256
            block.hash = SHA256(JSON.stringify(block)).toString();
            //checking if the block is valid and resolving by pushing
            if (block.validate()) {
                self.height = block.height;
                self.chain.push(block);
                resolve(block);
            } else {
                reject(new Error(err));
            }
        });
    }
