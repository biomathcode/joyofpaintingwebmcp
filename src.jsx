import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx?v=7';
import './style.css';
import './caption.css';

// Safeguard React against third-party DOM mutation by the YouTube IFrame API
if (typeof Node !== 'undefined' && Node.prototype) {
  const origRemoveChild = Node.prototype.removeChild;
  Node.prototype.removeChild = function (child) {
    if (child && child.parentNode !== this) {
      if (child.parentNode) {
        return child.parentNode.removeChild(child);
      }
      return child;
    }
    return origRemoveChild.apply(this, arguments);
  };
  const origInsertBefore = Node.prototype.insertBefore;
  Node.prototype.insertBefore = function (newNode, referenceNode) {
    if (referenceNode && referenceNode.parentNode !== this) {
      if (referenceNode.parentNode) {
        return referenceNode.parentNode.insertBefore(newNode, referenceNode);
      }
      return this.appendChild(newNode);
    }
    return origInsertBefore.apply(this, arguments);
  };
}

createRoot(document.querySelector('#app')).render(<App />);
