validate() {
        let self = this;
        return new Promise((resolve, reject) => {
            try {
                // Save in auxiliary variable the current block hash
                const currentHash = self.hash;
                self.hash = null
                // Recalculate the hash of the Block
                const newHash = SHA256(JSON.stringify(self)).toString();
                self.hash = currentHash
                // Comparing if the hashes changed
                resolve (currentHash === newHash);
            } catch(err) {
                reject(new Error(err));
            }
            // Returning the Block is not valid

            // Returning the Block is valid

        });
    }
