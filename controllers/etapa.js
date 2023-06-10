const Etapa = require("../models/etapa");
const { request, response } = require("express");

// Crear
const createEtapa = async (req = request, res = response) => {
  try {
    const nombre = req.body.nombre
     ? req.body.nombre.toUpperCase() : "";
    const anteproyecto = req.body.anteproyecto
      ? req.body.anteproyecto.toUpperCase()
      : "";
    const entregaParcial = req.body.entregaParcial
      ? req.body.entregaParcial.toUpperCase()
      : "";
    const entregaParcial2 = req.body.entregaParcial2
      ? req.body.entregaParcial2.toUpperCase()
      : "";
    const entregaFinal = req.body.entregaFinal
      ? req.body.entregaFinal.toUpperCase()
      : "";

    const etapaDB = await Etapa.findOne({
      nombre,
      anteproyecto,
      entregaParcial,
      entregaParcial2,
      entregaFinal,
    });

    if (etapaDB) {
      return res.status(400).json({ msg: "ya esxiste" });
    }
    const data = {
      nombre, // nombre: nombre
      anteproyecto,
      entregaParcial,
      entregaParcial2,
      entregaFinal,
    };
    const etapa = new Etapa(data);
    console.log(etapa);
    await etapa.save();
    return res.status(201).json(etapa);
  } catch (e) {
    return res.status(500).json({
      msg: "error general" + e, 
    });
  }
};

// obtener
const getEtapa = async (req = request, res = response) => {
  try {
    const etapa = await Etapa.find(); //select * from tipoEquipo where estado=?
    return res.json(etapa);
  } catch (e) {
    return res.status(500).json({
      msg: "Error general " + e,
    });
  }
};

const updateEtapaByID = async (req = request, res = response) => {
  try {
    console.log(req.body);
    console.log(req.params);
    const data = req.body;
    const id = req.params.id;
    data.fechaActualizacion = new Date();
    console.log(data);
    const etapa = await Etapa.findByIdAndUpdate(id, data, { new: true });
    return res.json(etapa);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ msg: e });
  }
};
module.exports = {
  createEtapa,
  getEtapa,
  updateEtapaByID,
};
