import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [progress, setProgress] = useState(0);
  const [scanText, setScanText] = useState('Iniciando análisis...');
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const scanMessages = [
      'Iniciando análisis...',
      'Escaneando datos biométricos...',
      'Analizando patrones de comportamiento...',
      'Detectando preferencias...',
      'Procesando información...',
      'Calculando porcentaje...',
      'Análisis completado'
    ];

    let currentStage = 0;

    // Simular progreso de carga
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setShowResult(true), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    // Cambiar mensajes durante el escaneo
    const messageInterval = setInterval(() => {
      currentStage += 1;
      if (currentStage < scanMessages.length) {
        setScanText(scanMessages[currentStage]);
      } else {
        clearInterval(messageInterval);
      }
    }, 500);

    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
    };
  }, []);

  return (
    <div className="App">
      <div className="scanner-container">
        {!showResult ? (
          <>
            <div className="scanner-header">
              <div className="logo">
                <div className="logo-icon">🔍</div>
                <h1>SISTEMA DE ANÁLISIS DE IDENTIDAD</h1>
              </div>
            </div>

            <div className="scanning-area">
              <div className="scan-circle">
                <div className="scan-ring"></div>
                <div className="scan-ring-2"></div>
                <div className="scan-pulse"></div>
                <div className="scan-inner">
                  <span className="percentage">{progress}%</span>
                </div>
              </div>

              <div className="scan-lines"></div>
            </div>

            <div className="scan-info">
              <p className="scan-text">{scanText}</p>
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </>
        ) : (
          <div className="result-container">
            <div className="result-badge">
              <div className="badge-glow"></div>
              <h2 className="result-title">ANÁLISIS COMPLETADO</h2>
            </div>

            <div className="data-card">
              <div className="data-row">
                <span className="data-label">NOMBRE COMPLETO:</span>
                <span className="data-value">SERGI SÁNCHEZ DOMÍNGUEZ</span>
              </div>
              <div className="data-row">
                <span className="data-label">DNH:</span>
                <span className="data-value">49185435G</span>
              </div>
              <div className="separator"></div>
              <div className="result-percentage">
                <div className="percentage-label">PORCENTAJE DE HOMOSEXUALIDAD</div>
                <div className="percentage-value-container">
                  <div className="rainbow-bg"></div>
                  <div className="percentage-value">100%</div>
                  <div className="sparkles">✨</div>
                </div>
                <div className="result-status">
                  🏳️‍🌈 CONFIRMADO AL 100% 🏳️‍🌈
                </div>
              </div>
            </div>

            <div className="footer-text">
              <p>Sistema certificado por la Asociación Internacional de Análisis Científico</p>
              <p className="disclaimer">* Este análisis es 100% preciso e irrefutable *</p>
            </div>

            <div className="confetti">
              {[...Array(50)].map((_, i) => (
                <div 
                  key={i} 
                  className="confetti-piece" 
                  style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    backgroundColor: ['#ff0080', '#ff8c00', '#ffd700', '#00ff00', '#0080ff', '#8000ff'][Math.floor(Math.random() * 6)]
                  }}
                ></div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

