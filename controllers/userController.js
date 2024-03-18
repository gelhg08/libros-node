const Libros = require("../models/userModel");

const userController = {
  //OBTENER TODOS LOS LIBROS
  getAllLibros: async (req, res) => {
    try {
      const libros = await Libros.find();
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  //OBTENER UN LIBRO POR SU # DE REFERENCIA
  getLibrosByRef: async (req, res) => {
    const referencia = req.params.numeroReferencia;
    try {
      const refLibros = await Libros.findOne({ numeroReferencia: referencia });
      res.json(refLibros);
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  //CREAR UN LIBRO
  createLibros: async (req, res) => {
    const crearLibro = req.body;
    try {
      const newLibro = new Libro(crearLibro);
      const savedUser = await newLibro.save();
      res.json(savedUser);
    } catch (error) {
      console.error("Error al crear libro:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  //ACTUALIZAR UN LIBRO POR SU NOMBRE
  updateLibros: async (req, res) => {
    try {
      const { nombre } = req.params;
      const actualizarLibro = await Libro.findOneAndUpdate(
        { name: nombre },
        { $set: { name: "Crepusculo" } }
      );
      res.json(actualizarLibro);
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  //ELIMINAR UN LIBRO POR SU NOMBRE

  deleteLibro: async (req, res) => {
    try {
      const { nombre } = req.params;
      const libroDelete = await Libros.findOneAndDelete({ name: nombre });
      res.json(libroDelete);
    } catch (error) {
      console.error("Error al crear usuario:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};


module.exports = userController;