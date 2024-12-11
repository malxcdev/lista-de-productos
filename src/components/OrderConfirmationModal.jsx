import React from 'react';
import PropTypes from 'prop-types';

function OrderConfirmationModal({ isOpen, onClose, orderNumber, total }) {
  if (!isOpen) return null; // Si no está abierta, no la renderizamos.

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-lg p-8 shadow-lg relative w-11/12 sm:w-96">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
          aria-label="Close"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4 text-rose-900">Order Confirmed</h2>
        <p className="mb-2">Tu pedido se ha realizado con éxito.</p>
        <p className="mb-4">
          Número de Pedido: <span className="font-semibold">{orderNumber}</span>
        </p>
        <p className="mb-8">
          Total: <span className="font-semibold">${total.toFixed(2)}</span>
        </p>
        <button
          onClick={onClose}
          className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition-colors"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}

OrderConfirmationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  orderNumber: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};

export default OrderConfirmationModal;
