import React from 'react';
import './AIMetricsCard.css';

const AIMetricsCard = ({ 
  languageSupport = "30+",
  developers = "10K+",
  hoursSaved = "100K+",
  issuesFixed = "500K+",
  weeklyGrowth = "14%"
}) => {
  return (
    <div className="metrics-container">
      <div className="metrics-card">
        <div className="header">
          <div className="logo">
            <img src="https://dashboard.codeparrot.ai/api/assets/Z2ULZY6CYQNjI8CP" alt="AI Logo" />
            <h2>AI to Detect & Autofix Bad Code</h2>
          </div>
          <img src="https://dashboard.codeparrot.ai/api/assets/Z2ULZY6CYQNjI8CQ" alt="Divider" className="divider" />
          <div className="stats-row">
            <div className="stat-item">
              <span className="stat-value">{languageSupport}</span>
              <span className="stat-label">Language Support</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{developers}</span>
              <span className="stat-label">Developers</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{hoursSaved}</span>
              <span className="stat-label">Hours Saved</span>
            </div>
          </div>
        </div>
        
        <div className="issues-card">
          <div className="issues-content">
            <div className="chart-icon">
              <img src="https://dashboard.codeparrot.ai/api/assets/Z2ULZo6CYQNjI8CR" alt="Chart" />
            </div>
            <div className="issues-stats">
              <div className="issues-label">Issues Fixed</div>
              <div className="issues-value">{issuesFixed}</div>
            </div>
            <div className="growth-indicator">
              <img src="https://dashboard.codeparrot.ai/api/assets/Z2ULZo6CYQNjI8CS" alt="Growth" />
              <span className="growth-value">{weeklyGrowth}</span>
              <span className="growth-period">This week</span>
            </div>
          </div>
          <div className="issues-background"></div>
        </div>
      </div>
    </div>
  );
};

export default AIMetricsCard;

