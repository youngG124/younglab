import './App.css';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '20vh' }}>
      <h1>Welcome to YoungLab</h1>
      <p>철학과 반복을 사랑하는 영쥐의 YoungLab 입니다 🪷</p>

      <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <a href="/calgal">
          <button>📅 CalGal</button>
        </a>
        <a href="/habitgarden">
          <button>🌱 HabitGarden</button>
        </a>
        <a href="/readmeter">
          <button>📚 ReadMeter</button>
        </a>
      </div>
    </div>
  );
}

export default App;
