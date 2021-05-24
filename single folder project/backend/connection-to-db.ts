import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectionToDB = () => {
	console.log(process.env.DATABASE_USER);

	return mongoose.connect(
		`mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_CLUSTER}/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: true,
		}
	);
};

export default connectionToDB;
