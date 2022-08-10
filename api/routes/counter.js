const Count = require('../model/contador');

const getCount = async () => {
    try {
        return await Count.find();
    } catch (error) {
        console.log(error.message);
        throw new Error('Error a la hora de obtener el contador');
    }
}

const incrementCount = async () => {
    try {
        const countTotal = await getCount();
        if (countTotal.length === 0) {
            const newCount = new Count({ views: 1 });
            return await newCount.save();
        }
        const count = await Count.findOneAndUpdate({}, { $inc: { views: 1 } });
        const updateCount = await Count.findOne({});
        return updateCount;
    } catch (error) {
        console.log(error.message);
        throw new Error('Error a la hora de incrementar el contador');
    }
}

module.exports = {
    getCount,
    incrementCount,
}