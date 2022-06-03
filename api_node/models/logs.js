exports = module.exports = function (app, mongoose) {
  var logSchema = new mongoose.Schema({
    id: { type: Number },
    fecha: { type: Date },
    mensaje: { type: String },
    prioridad: { type: String, enum: ["Alta", "Baja"] },
    usuario: { type: String },
    subsistema: {
      type: Number,
    },
  });
  mongoose.model("Logs", logSchema);
};
