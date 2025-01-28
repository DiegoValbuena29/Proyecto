import React, { useState } from "react";

export default function ImageUploadForm() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image) {
      alert("Por favor, sube una imagen antes de enviar.");
      return;
    }

    // Aquí puedes manejar el envío, como enviarlo a un servidor
    alert("Imagen subida con éxito");
    console.log("Archivo a subir:", image);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Subir Imagen
        </h2>

        <div className="mb-4">
          <label
            htmlFor="imageInput"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Selecciona una imagen
          </label>
          <input
            type="file"
            id="imageInput"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none"
          />
        </div>

        {preview && (
          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-2">Vista previa:</p>
            <img
              src={preview}
              alt="Preview"
              className="w-full h-40 object-cover rounded-lg shadow-md"
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Subir Imagen
        </button>
      </form>
    </div>
  );
}
