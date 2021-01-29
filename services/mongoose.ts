import mongoose from 'mongoose';
import config from '../config';

class Mongoose {
    public init() {
        mongoose.connect(config.mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

    }
}
export default new Mongoose;