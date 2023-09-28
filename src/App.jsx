import './App.css';
import { ArrowChart } from './ArrowChart';
import { defaultSettings } from './defaultSettings';
import GrayscaleScale from './GrayscaleScale';

function App({ data = [], settings = {} }) {
  return (
    <div className='chart-container'>
      <div className='legend' style={{ color: 'black' }}>
        <span className='benchmark-legend'></span>
        <span className='description-legend'> MindLode Benchmark </span>
      </div>
      <div className='body'>
        {' '}
        <div className='main-container-all-scales'>
          <div className='range'>
            <div className='circle'>
              <div className='plus-sign'></div>
              <div className='texttext'>
                <svg viewBox='0 0 100 100' width='44' height='44'>
                  <defs>
                    <path
                      id='circle'
                      d='
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0'
                    />
                  </defs>
                  <text fontSize='17'>
                    <textPath href='#circle'>Positive Engagement</textPath>
                  </text>
                </svg>
              </div>

          
            </div>

            <div className='circle'>
              <div className='minus-sign'></div>
              <div className='texttext'>
                <svg viewBox='0 0 100 100' width='44' height='44'>
                  <defs>
                    <path
                      id='circle'
                      d='
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0'
                    />
                  </defs>
                  <text fontSize='17'>
                    <textPath href='#circle'>Negative Engagement</textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>
          <GrayscaleScale />
          {data.map((item, i) => {
            let dS = defaultSettings[item.type] || {};
            let overrideSettings = settings[item.type] || {};
            let combinedSettings = {
              ...dS,
              ...overrideSettings,
            };
            return (
              <ArrowChart
                key={i}
                {...combinedSettings}
                type={item.type}
                score={item.score}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
