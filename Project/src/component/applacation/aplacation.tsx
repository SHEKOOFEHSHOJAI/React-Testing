import React from "react";

export default function Application() {
  return (
    <>
      <h1>job applacation</h1>
      <h2>section 1</h2>
      <p>All field nad mandetory</p>
      <img
        src="https://www.tasvirezendegi.com/%d8%b9%da%a9%d8%b3-%d9%87%d8%a7%db%8c-%d8%b9%d8%a7%d8%b4%d9%82%d8%a7%d9%86%d9%87-%d9%88-%d8%b1%d9%85%d8%a7%d9%86%d8%aa%db%8c%da%a9/"
        alt="laptop"
      />
      <span title="close" data-testid="testMe">
        X
      </span>
      <form>
        <div>
          <label htmlFor="name">Name </label>
          <input type="text" name="name" id="name" placeholder="fullName" value="vishwas" onChange={() => {}} />
        </div>
        <div>
          <label htmlFor="bio">Bio </label>
          <textarea name="bio" id="bio" />
        </div>
        <div>
          <label htmlFor="job-location">job-location</label>
        </div>
        <div>
          <select name="" id="job-location">
            <option value="">select country</option>
            <option value="Gb">united state</option>
            <option value="CA">select country</option>
            <option value="IN">select country</option>
            <option value="AU">select country</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" />i ignore to the terms
          </label>
        </div>
        <button>submit</button>
      </form>
    </>
  );
}
