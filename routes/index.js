const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/api/v1/libros", userController.getAllLibros);
router.get("/api/v1/libro/numeroReferencia/:numeroReferencia", userController.getLibrosByRef);
router.post("/api/v1/libros", userController.createLibros);
router.patch("/api/v1/libro/update/:nombre", userController.updateUser);
router.delete("/api/v1/libro/delete/:nombre", userController.deleteUser);

module.exports = router;
