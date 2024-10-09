import React from 'react';

const Prospects = () => {
    return (
      <div>
        <div className="flex justify-between items-center px-9">
          <p>since 0 days</p>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Prospect Stage</span>
            </div>
            <select className="select select-bordered">
              <option disabled selected>
                Pick one
              </option>
              <option>New Prospects</option>
              <option>Couldn't reach</option>
              <option>initial contact</option>
              <option>On followup</option>
              <option>visited</option>
              <option>show demo</option>
              <option>Convinced</option>
              <option>visited</option>
              <option>lead created</option>
              <option>Already client</option>
              <option>Recycle bin</option>
            </select>
          </label>
        </div>
        <div className="statusBar text-center mt-9">
          <ul className="steps steps-vertical lg:steps-horizontal">
            <li className="step">New Prospects</li>
            <li className="step">Couldn't reach</li>
            <li className="step">initial contact</li>
            <li className="step">On followup</li>
            <li className="step">visited</li>
            <li className="step">show demo</li>
            <li className="step">Convinced</li>
            <li className="step">lead created</li>
            <li className="step">Already client</li>
            <li className="step">Recycle bin</li>
          </ul>
        </div>
      </div>
    );
};

export default Prospects;