import { useState } from 'react';

const tabs = [
  {
    id: 'features',
    label: 'Features',
    heading: 'Features',
    description: 'Comprehensive tools designed specifically for SEBI-registered professionals',
    items: ['Client Onboarding Solution', 'Research Delivery Engine', 'Algo Trading Support'],
  },
  {
    id: 'clients',
    label: 'What Our Clients Say',
    heading: 'What Our Clients Say',
    description: 'Real feedback from SEBI-registered professionals who trust Tradebox',
    items: [],
  },
  {
    id: 'integrations',
    label: 'Powerful Integrations',
    heading: 'Powerful Integrations',
    description: 'Connect seamlessly with your existing tools and platforms',
    items: ['Website and App API', 'Telegram Automation', 'E-Signing and Payment Gateway'],
  },
];

function App() {
  const [activeTab, setActiveTab] = useState('features');
  const active = tabs.find((tab) => tab.id === activeTab);

  return (
    <main className="app-shell">
      <section className="hero-card">
        <div>
          <p className="eyebrow">SEBI-ready platform</p>
          <h1>Tradebox for SEBI-registered professionals</h1>
          <p className="hero-text">
            Discover a static single-page experience designed to showcase features, client trust, and integrations.
          </p>
        </div>
      </section>

      <section className="tabs-card">
        <div className="tabs-nav">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <article className="tab-panel">
          <h2>{active.heading}</h2>
          <p>{active.description}</p>
          {active.items.length > 0 ? (
            <ul className="tab-list">
              {active.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="tab-empty">Trusted insights and real feedback are coming soon.</p>
          )}
        </article>
      </section>
    </main>
  );
}

export default App;
