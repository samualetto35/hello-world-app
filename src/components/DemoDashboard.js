import React, { useState } from 'react';
import './DemoDashboard.css';

const DemoDashboard = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  // Demo data
  const candidates = [
    {
      id: 1,
      name: 'Ayşe Demir',
      position: 'Frontend Developer',
      score: 92,
      status: 'Interview Completed',
      date: '2024-01-15',
      skills: ['React', 'JavaScript', 'CSS'],
      experience: '3 years',
      transcript: 'Candidate showed excellent technical knowledge and communication skills. Strong understanding of React ecosystem and modern development practices.',
      evaluation: {
        technical: 95,
        communication: 88,
        problemSolving: 90,
        cultural: 94
      }
    },
    {
      id: 2,
      name: 'Mehmet Kaya',
      position: 'Backend Developer',
      score: 88,
      status: 'Interview Scheduled',
      date: '2024-01-16',
      skills: ['Node.js', 'Python', 'PostgreSQL'],
      experience: '5 years',
      transcript: 'Pending interview...',
      evaluation: {
        technical: 0,
        communication: 0,
        problemSolving: 0,
        cultural: 0
      }
    },
    {
      id: 3,
      name: 'Zehra Öztürk',
      position: 'Product Manager',
      score: 96,
      status: 'Interview Completed',
      date: '2024-01-14',
      skills: ['Product Strategy', 'Analytics', 'Leadership'],
      experience: '4 years',
      transcript: 'Outstanding candidate with strong product vision and leadership capabilities. Excellent analytical thinking and strategic approach.',
      evaluation: {
        technical: 92,
        communication: 98,
        problemSolving: 96,
        cultural: 98
      }
    },
    {
      id: 4,
      name: 'Can Yılmaz',
      position: 'UX Designer',
      score: 85,
      status: 'Interview Completed',
      date: '2024-01-13',
      skills: ['Figma', 'User Research', 'Prototyping'],
      experience: '2 years',
      transcript: 'Good design thinking and user-centered approach. Strong portfolio with creative solutions.',
      evaluation: {
        technical: 88,
        communication: 82,
        problemSolving: 85,
        cultural: 85
      }
    }
  ];

  const interviews = [
    { id: 1, candidate: 'Ayşe Demir', position: 'Frontend Developer', date: '2024-01-15', time: '14:00', status: 'Completed' },
    { id: 2, candidate: 'Mehmet Kaya', position: 'Backend Developer', date: '2024-01-16', time: '10:00', status: 'Scheduled' },
    { id: 3, candidate: 'Zehra Öztürk', position: 'Product Manager', date: '2024-01-14', time: '16:00', status: 'Completed' },
    { id: 4, candidate: 'Can Yılmaz', position: 'UX Designer', date: '2024-01-13', time: '11:00', status: 'Completed' }
  ];

  const stats = {
    totalCandidates: 127,
    interviewsToday: 8,
    avgScore: 89,
    completionRate: 94
  };

  const renderOverview = () => (
    <div className="overview-content">
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-number">{stats.totalCandidates}</div>
          <div className="stat-label">Total Candidates</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{stats.interviewsToday}</div>
          <div className="stat-label">Interviews Today</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{stats.avgScore}%</div>
          <div className="stat-label">Average Score</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{stats.completionRate}%</div>
          <div className="stat-label">Completion Rate</div>
        </div>
      </div>

      <div className="dashboard-sections">
        <div className="recent-interviews">
          <h3>Recent Interviews</h3>
          <div className="interview-list">
            {interviews.slice(0, 3).map(interview => (
              <div key={interview.id} className="interview-item">
                <div className="interview-info">
                  <div className="interview-candidate">{interview.candidate}</div>
                  <div className="interview-position">{interview.position}</div>
                </div>
                <div className="interview-meta">
                  <span className={`status ${interview.status.toLowerCase()}`}>
                    {interview.status}
                  </span>
                  <span className="interview-date">{interview.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="top-candidates">
          <h3>Top Candidates</h3>
          <div className="candidate-list">
            {candidates.filter(c => c.score >= 90).map(candidate => (
              <div key={candidate.id} className="candidate-item" onClick={() => setSelectedCandidate(candidate)}>
                <div className="candidate-info">
                  <div className="candidate-name">{candidate.name}</div>
                  <div className="candidate-position">{candidate.position}</div>
                </div>
                <div className="candidate-score">{candidate.score}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderCandidates = () => (
    <div className="candidates-content">
      <div className="candidates-header">
        <h3>All Candidates</h3>
        <button className="start-interview-btn">Start New Interview</button>
      </div>
      <div className="candidates-table">
        <div className="table-header">
          <div>Name</div>
          <div>Position</div>
          <div>Score</div>
          <div>Status</div>
          <div>Date</div>
          <div>Actions</div>
        </div>
        {candidates.map(candidate => (
          <div key={candidate.id} className="table-row">
            <div className="candidate-name-cell">
              <div className="candidate-avatar">{candidate.name.charAt(0)}</div>
              <div>
                <div className="name">{candidate.name}</div>
                <div className="experience">{candidate.experience} experience</div>
              </div>
            </div>
            <div>{candidate.position}</div>
            <div className="score-cell">
              <div className="score-bar">
                <div className="score-fill" style={{width: `${candidate.score}%`}}></div>
              </div>
              <span>{candidate.score}%</span>
            </div>
            <div>
              <span className={`status ${candidate.status.toLowerCase().replace(' ', '-')}`}>
                {candidate.status}
              </span>
            </div>
            <div>{candidate.date}</div>
            <div>
              <button 
                className="view-btn"
                onClick={() => setSelectedCandidate(candidate)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderInterviews = () => (
    <div className="interviews-content">
      <div className="interviews-header">
        <h3>Interviews</h3>
        <button className="start-interview-btn">Schedule Interview</button>
      </div>
      <div className="interviews-grid">
        {interviews.map(interview => (
          <div key={interview.id} className="interview-card">
            <div className="interview-card-header">
              <h4>{interview.candidate}</h4>
              <span className={`status ${interview.status.toLowerCase()}`}>
                {interview.status}
              </span>
            </div>
            <div className="interview-card-body">
              <p className="position">{interview.position}</p>
              <div className="interview-time">
                <span>📅 {interview.date}</span>
                <span>🕒 {interview.time}</span>
              </div>
            </div>
            <div className="interview-card-actions">
              {interview.status === 'Scheduled' ? (
                <button className="start-interview-btn">Start Interview</button>
              ) : (
                <button className="view-btn">View Recording</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="settings-content">
      <h3>Settings</h3>
      <div className="settings-sections">
        <div className="settings-section">
          <h4>Interview Configuration</h4>
          <div className="setting-item">
            <label>Default Interview Duration</label>
            <select>
              <option>30 minutes</option>
              <option>45 minutes</option>
              <option>60 minutes</option>
            </select>
          </div>
          <div className="setting-item">
            <label>Auto-start Recording</label>
            <input type="checkbox" defaultChecked />
          </div>
        </div>
        <div className="settings-section">
          <h4>Scoring Weights</h4>
          <div className="setting-item">
            <label>Technical Skills (40%)</label>
            <input type="range" min="0" max="100" defaultValue="40" />
          </div>
          <div className="setting-item">
            <label>Communication (30%)</label>
            <input type="range" min="0" max="100" defaultValue="30" />
          </div>
          <div className="setting-item">
            <label>Problem Solving (20%)</label>
            <input type="range" min="0" max="100" defaultValue="20" />
          </div>
          <div className="setting-item">
            <label>Cultural Fit (10%)</label>
            <input type="range" min="0" max="100" defaultValue="10" />
          </div>
        </div>
      </div>
    </div>
  );

  const renderCandidateModal = () => {
    if (!selectedCandidate) return null;

    return (
      <div className="modal-overlay" onClick={() => setSelectedCandidate(null)}>
        <div className="candidate-modal" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h3>{selectedCandidate.name}</h3>
            <button className="modal-close" onClick={() => setSelectedCandidate(null)}>×</button>
          </div>
          
          <div className="modal-content">
            <div className="candidate-overview">
              <div className="candidate-details">
                <h4>Position: {selectedCandidate.position}</h4>
                <p>Experience: {selectedCandidate.experience}</p>
                <p>Overall Score: <strong>{selectedCandidate.score}%</strong></p>
              </div>
              
              <div className="skills-section">
                <h4>Skills</h4>
                <div className="skills-list">
                  {selectedCandidate.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="evaluation-scores">
              <h4>Detailed Evaluation</h4>
              <div className="score-breakdown">
                <div className="score-item">
                  <span>Technical Skills</span>
                  <div className="score-bar">
                    <div className="score-fill" style={{width: `${selectedCandidate.evaluation.technical}%`}}></div>
                  </div>
                  <span>{selectedCandidate.evaluation.technical}%</span>
                </div>
                <div className="score-item">
                  <span>Communication</span>
                  <div className="score-bar">
                    <div className="score-fill" style={{width: `${selectedCandidate.evaluation.communication}%`}}></div>
                  </div>
                  <span>{selectedCandidate.evaluation.communication}%</span>
                </div>
                <div className="score-item">
                  <span>Problem Solving</span>
                  <div className="score-bar">
                    <div className="score-fill" style={{width: `${selectedCandidate.evaluation.problemSolving}%`}}></div>
                  </div>
                  <span>{selectedCandidate.evaluation.problemSolving}%</span>
                </div>
                <div className="score-item">
                  <span>Cultural Fit</span>
                  <div className="score-bar">
                    <div className="score-fill" style={{width: `${selectedCandidate.evaluation.cultural}%`}}></div>
                  </div>
                  <span>{selectedCandidate.evaluation.cultural}%</span>
                </div>
              </div>
            </div>

            <div className="transcript-section">
              <h4>Interview Transcript</h4>
              <div className="transcript-content">
                {selectedCandidate.transcript}
              </div>
            </div>

            <div className="modal-actions">
              <button className="start-interview-btn">Start Follow-up Interview</button>
              <button className="secondary-btn">Download Report</button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="demo-dashboard">
      <div className="dashboard-header">
        <div className="header-left">
          <h1>Recula Dashboard</h1>
          <p>AI-Powered Recruitment Platform</p>
        </div>
        <div className="header-right">
          <div className="user-info">
            <span>Demo User</span>
            <button className="logout-btn" onClick={onLogout}>Logout</button>
          </div>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="sidebar">
          <nav className="dashboard-nav">
            <button 
              className={`nav-item ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              📊 Overview
            </button>
            <button 
              className={`nav-item ${activeTab === 'candidates' ? 'active' : ''}`}
              onClick={() => setActiveTab('candidates')}
            >
              👥 Candidates
            </button>
            <button 
              className={`nav-item ${activeTab === 'interviews' ? 'active' : ''}`}
              onClick={() => setActiveTab('interviews')}
            >
              🎥 Interviews
            </button>
            <button 
              className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}
              onClick={() => setActiveTab('settings')}
            >
              ⚙️ Settings
            </button>
          </nav>
        </div>

        <div className="main-content">
          {activeTab === 'overview' && renderOverview()}
          {activeTab === 'candidates' && renderCandidates()}
          {activeTab === 'interviews' && renderInterviews()}
          {activeTab === 'settings' && renderSettings()}
        </div>
      </div>

      {renderCandidateModal()}
    </div>
  );
};

export default DemoDashboard; 