import React, { useState } from 'react';
import './WelcomeScreen.css';

const WelcomeScreen = () => {
  const [activeTab, setActiveTab] = useState('SAAS');

  // Sign-in options for each tab
  const saasOptions = [
    { provider: 'github', label: 'Sign in with Github', icon: 'https://dashboard.codeparrot.ai/api/assets/Z2UJMhEM3nUkN2xr' },
    { provider: 'bitbucket', label: 'Sign in with Bitbucket', icon: 'https://dashboard.codeparrot.ai/api/assets/Z2UJMhEM3nUkN2xs' },
    { provider: 'azure', label: 'Sign in with Azure Devops', icon: 'https://dashboard.codeparrot.ai/api/assets/Z2UJMhEM3nUkN2xt' },
    { provider: 'gitlab', label: 'Sign in with GitLab', icon: 'https://dashboard.codeparrot.ai/api/assets/Z2UJMhEM3nUkN2xu' }
  ];

  const selfHostedOptions = [
    { provider: 'gitlab', label: 'Self Hosted GitLab', icon: 'https://dashboard.codeparrot.ai/api/assets/Z2UJMhEM3nUkN2xu' },
    { provider: 'sso', label: 'Sign in with SSO', icon: 'https://dashboard.codeparrot.ai/api/assets/sso-icon.svg' }
  ];

  const handleSignIn = (provider) => {
    // Handle sign in logic here
    console.log(`Signing in with ${provider}`);
  };

  return (
    <div className="screen-container">
      {/* Left Half - Metrics */}
      <div className="metrics-container">
        <div className="metrics-content">
          <h2 className="metrics-title">AI to Detect & Autofix Bad Code</h2>
          
          <div className="metrics-grid">
            <div className="metric-item">
              <div className="metric-value">30+</div>
              <div className="metric-label">Language Support</div>
            </div>
            <div className="metric-item">
              <div className="metric-value">10K+</div>
              <div className="metric-label">Developers</div>
            </div>
            <div className="metric-item">
              <div className="metric-value">100K+</div>
              <div className="metric-label">Hours Saved</div>
            </div>
          </div>

          <div className="issues-metric">
            <div className="issues-circle">
              <span className="issues-value">500K+</span>
            </div>
            <div className="issues-info">
              <div className="issues-label">Issues Fixed</div>
              <div className="issues-growth">
                <span className="growth-arrow">↑</span>
                <span className="growth-value">14%</span>
                <span className="growth-period">This week</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Half - Login Form */}
      <div className="welcome-container">
        <div className="welcome-card">
          <div className="content-section">
            <div className="logo-section">
              <img src="https://dashboard.codeparrot.ai/api/assets/Z2UJMhEM3nUkN2xq" alt="CodeAnt Logo" className="logo" />
            </div>
            
            <h1 className="welcome-title">Welcome to CodeAnt AI</h1>
            
            <div className="tabs-container">
              <button 
                className={`tab-button ${activeTab === 'SAAS' ? 'active' : ''}`}
                onClick={() => setActiveTab('SAAS')}
              >
                SAAS
              </button>
              <button 
                className={`tab-button ${activeTab === 'Self Hosted' ? 'active' : ''}`}
                onClick={() => setActiveTab('Self Hosted')}
              >
                Self Hosted
              </button>
            </div>
          </div>

          <div className="auth-section">
            {(activeTab === 'SAAS' ? saasOptions : selfHostedOptions).map((option) => (
              <button 
                key={option.provider}
                className="sign-in-button" 
                onClick={() => handleSignIn(option.provider)}
              >
                <img src={option.icon} alt={option.provider} className="provider-icon" />
                <span>{option.label}</span>
              </button>
            ))}
          </div>
        </div>
        
        <p className="privacy-notice">
          By signing up you agree to the <a href="#">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
};

export default WelcomeScreen;
