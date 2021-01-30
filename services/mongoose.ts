import mongoose from 'mongoose';

class Mongoose {
    public init() {
        mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

    }
}
export default new Mongoose;