const moongose = require('moongose');
let Libros

const connectDatabase = async () => {
  try {
    if (!Libros) {
      Libros = mongoose.model("Libros", require("../models/userModel").schema);
    }

    await mongoose
      .connect(
        "mongodb+srv://angelicamhg31:IevENUAk6CTWodsi@mongodb3.wvf0uet.mongodb.net/"
      )
      .then(() => console.log("MongoDB connected"))
      .catch((err) => console.log(err));
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1);
  }
};

module.exports = connectDatabase