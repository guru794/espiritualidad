import React, { useState } from "react";

const Formulario = () => {
  const [formData, setFormData] = useState({
    Nombre: "",
    Apellido: "",
    Celular: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación de campos vacíos
    if (!formData.Nombre.trim() || !formData.Apellido.trim() || !formData.Celular.trim()) {
      alert("Por favor, completa todos los campos antes de enviar");
      return;
    }

    // Verificar throttling (10 segundos)
    const currentTime = Date.now();
    const timeSinceLastSubmit = currentTime - lastSubmitTime;
    const cooldownTime = 10000; // 10 segundos en milisegundos

    if (timeSinceLastSubmit < cooldownTime) {
      const remainingSeconds = Math.ceil((cooldownTime - timeSinceLastSubmit) / 1000);
      alert(`Por favor espera ${remainingSeconds} segundos antes de enviar otra solicitud`);
      return;
    }

    setIsSubmitting(true);
    setLastSubmitTime(currentTime);

    try {
      console.log(formData)
      const response = await fetch("https://sheetdb.io/api/v1/5343nd5tq4rjf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(response)
      if (response.ok) {
        alert("Datos enviados correctamente");
        setFormData({ Nombre: "", Apellido: "", Celular: "" });
      } else {
        alert("Error al enviar los datos");
      }
    } catch (error) {
      console.error("Error al enviar los datos", error);
      alert("Hubo un error al enviar el formulario");
    } finally {
      setIsSubmitting(false);
      
      // Iniciar countdown visual
      let remaining = 10;
      setTimeRemaining(remaining);
      const countdown = setInterval(() => {
        remaining--;
        setTimeRemaining(remaining);
        if (remaining <= 0) {
          clearInterval(countdown);
          setTimeRemaining(0);
        }
      }, 1000);
    }
  };

  const isDisabled = isSubmitting || timeRemaining > 0;

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
        disabled={isDisabled}
        className={`w-full py-2 rounded text-white font-bold transition-colors ${
          isDisabled 
            ? 'bg-gray-600 cursor-not-allowed' 
            : 'bg-purple-600 hover:bg-purple-700'
        }`}
      >
        {isSubmitting 
          ? "Enviando..." 
          : timeRemaining > 0 
          ? `Espera ${timeRemaining}s` 
          : "Enviar"
        }
      </button>
    </form>
  );
};

export default Formulario;
