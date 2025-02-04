import React, { useState } from "react";

const Formulario = () => {
  const [formData, setFormData] = useState({
    Nombre: "",
    Apellido: "",
    Celular: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://sheetdb.io/api/v1/5343nd5tq4rjf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: formData }),
      });

      if (response.ok) {
        alert("Datos enviados correctamente");
        setFormData({ Nombre: "", Apellido: "", Celular: "" });
      } else {
        alert("Error al enviar los datos");
      }
    } catch (error) {
      console.error("Error al enviar los datos", error);
      alert("Hubo un error al enviar el formulario");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 bg-gray-800 text-white rounded-lg"
    >
      <label className="block mb-2">Nombre:</label>
      <input
        type="text"
        name="Nombre"
        placeholder="Ejemplo: Ana"
        value={formData.Nombre}
        onChange={handleChange}
        className="w-full p-2 mb-4 rounded bg-gray-700"
        required
      />

      <label className="block mb-2">Apellido:</label>
      <input
        type="text"
        name="Apellido"
        value={formData.Apellido}
        placeholder="Ejemplo: Suarez"
        onChange={handleChange}
        className="w-full p-2 mb-4 rounded bg-gray-700"
        required
      />

      <label className="block mb-2">Whatsapp:</label>
      <input
        type="tel"
        name="Celular"
        value={formData.Celular}
        placeholder="Ejemplo: +52 123 456"
        onChange={handleChange}
        className="w-full p-2 mb-4 rounded bg-gray-700"
        required
      />

      <button
        type="submit"
        className="w-full bg-purple-600 hover:bg-purple-700 py-2 rounded text-white font-bold"
      >
        Enviar
      </button>
    </form>
  );
};

export default Formulario;
