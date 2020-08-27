getBData() {

        let self = this;
        return new Promise((resolve, reject) => {

            // Getting the encoded data saved in the Block
            const encodedData = self.body;
            // Decoding the data to retrieve the JSON representation of the object
            let decodedData = hex2ascii(encodedData);
            // Parse the data to an object to be retrieve.
            let object = JSON.parse(decodedData);
            // Resolve with the data if the object isn't the Genesis block
            if (object != 'genesis block'){
                resolve(object);
            } else{ reject(new Error('Error, this is the Genesis Block'));
            }
        });


    }
