function solve(sizesArr) {
    function cut(chunkSize, targetSize) {
        let counter = 0
        while (chunkSize / 4 >= targetSize) {
            chunkSize /= 4;
            counter ++;
        }

        if (counter > 0) {
            console.log(`Cut x${counter}`);
            chunkSize = Math.floor(chunkSize);
            console.log(`Transporting and washing`);
        }
        
        return chunkSize;
    }

    function lap(chunkSize, targetSize) {
        let counter = 0
        while (0.8 * chunkSize >= targetSize) {
            chunkSize *= 0.8;
            counter ++;
        }

        if (counter > 0) {
            console.log(`Lap x${counter}`);
            chunkSize = Math.floor(chunkSize);
            console.log(`Transporting and washing`);
        }
        
        return chunkSize;
    }

    function grind(chunkSize, targetSize) {
        let counter = 0
        while (chunkSize - 20 >= targetSize) {
            chunkSize -= 20;
            counter ++;
        }

        if (counter > 0) {
            console.log(`Grind x${counter}`);
            chunkSize = Math.floor(chunkSize);
            console.log(`Transporting and washing`);
        }
        
        return chunkSize;
    }

    function etch(chunkSize, targetSize) {
        let counter = 0
        while (chunkSize - 2 >= targetSize - 1) {
            chunkSize -= 2;
            counter ++;
        }

        if (counter > 0) {
            console.log(`Etch x${counter}`);
            chunkSize = Math.floor(chunkSize);
            console.log(`Transporting and washing`);
        }
        
        return chunkSize;
    }

    function xRay(chunkSize, targetSize) {
        if (chunkSize < targetSize) {
            chunkSize += 1;
            console.log(`X-ray x1`);
        }

        return chunkSize;
    }

    let targetSize = sizesArr.shift();
    for (let chunk of sizesArr) {
        console.log(`Processing chunk ${chunk} microns`)
        chunk = cut(chunk, targetSize);
        chunk = lap(chunk, targetSize);
        chunk = grind(chunk, targetSize);
        chunk = etch(chunk, targetSize);
        chunk = xRay(chunk, targetSize);
        console.log(`Finished crystal ${chunk} microns`);
    }
}

solve([1375, 50000]);
solve([1000, 4000, 8100]);