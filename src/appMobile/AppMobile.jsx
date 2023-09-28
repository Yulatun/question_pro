import './AppMobile.css';
import { ArrowChartMobile } from './ArrowChartMobile';
import { defaultSettings } from '../defaultSettings';
import GrayscaleScaleMobile from './GrayScaleMobile';
import YourScoreIcon from './YourScoreIcon';
import  DirectionScale  from './DirectionScale';



function AppMobile({ data = [], settings = {} }) {

  return (
    <div className='app-mobile-container-mb'>
      <div className='introduction-mb'>
        <p>
          MindLode scores are based on complex influences such as personal
          values, internal motivations, external environment, and workplace
          culture. As opposed to immediate emotional reactions, feelings are
          long-standing, entrenched drivers of everything we think, do, and say.
        </p>
        <p>
          There is no ideal MindLode profile. If your score is above neutral,
          you are more inclined toward the right positive feeling. If your score
          is below neutral, you are more inclined toward the left negative
          feeling. Scores are shown relative to our benchmarks, which is an
          average of thousands of other respondents. We will not share your
          profile with anyone else.
        </p>{' '}
        <p>
          Your profile will not be available after closing this window. Please
          click the download button to save your profile.
        </p>
      </div>
      <div className='legend-mb'>
        <YourScoreIcon
          value='X.X'
          color='black'
          className='circle-your-score-icon-legend-mb'
        />
        <div>Your score</div>
        <span className='benchmark-legend-mb'></span>
        <span className='description-legend-mb'> MindLode Benchmark </span>
      </div>
      <DirectionScale />
      <GrayscaleScaleMobile />
      <div className='chart-container-mb'>
        <div className='main-container-all-scales-mb'>
          {data.map((item, i) => {
            let dS = defaultSettings[item.type] || {};
            let overrideSettings = settings[item.type] || {};
            let combinedSettings = {
              ...dS,
              ...overrideSettings,
            };
            return (
              <ArrowChartMobile
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

export default AppMobile;
