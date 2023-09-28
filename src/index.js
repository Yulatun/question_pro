import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppMobile from './appMobile/AppMobile';
import { useMediaQuery } from 'react-responsive';

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const MainComponent = ({chartData, settingsOverrides}) => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });

return (
  <>
  {isDesktopOrLaptop &&  <App data={chartData} settings={settingsOverrides} /> }
  {isTabletOrMobile &&  <AppMobile data={chartData} settings={settingsOverrides} /> }
  </>
)
}

window.InitSatisfactionChart = function(elementId, chartData, settingsOverrides = {}) {
  const root = ReactDOM.createRoot(document.getElementById(elementId));
  root.render(
    <React.StrictMode>
      <MainComponent chartData={chartData} settingsOverrides={settingsOverrides} />
    </React.StrictMode>
  );
}

if (window.SatisfactionChartScriptOnLoad) {
  window.SatisfactionChartScriptOnLoad();
}
