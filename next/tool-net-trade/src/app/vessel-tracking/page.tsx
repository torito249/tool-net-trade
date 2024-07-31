"use client";

import React, { useState } from "react";

const Estimates: React.FC = () => {
  const [selectedDepartureCompany, setSelectedDepartureCompany] = useState<
    "WANHAI" | "SITC" | ""
  >("");
  const [selectedDepartureShip, setSelectedDepartureShip] =
    useState<string>("");

  const [selectedArrivalCompany, setSelectedArrivalCompany] = useState<
    "WANHAI" | "SITC" | ""
  >("");
  const [selectedArrivalShip, setSelectedArrivalShip] = useState<string>("");

  const companies: Array<"WANHAI" | "SITC"> = ["WANHAI", "SITC"];
  const ships: { [key in "WANHAI" | "SITC"]: string[] } = {
    WANHAI: ["WANHAI295", "WANHAI342"],
    SITC: ["SITC SHIMIZU", "SITC SUBIC"],
  };

  const handleDepartureCompanyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedDepartureCompany(event.target.value as "WANHAI" | "SITC" | "");
    setSelectedDepartureShip(""); // Reset ship selection when company changes
  };

  const handleDepartureShipChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedDepartureShip(event.target.value);
  };

  const handleArrivalCompanyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedArrivalCompany(event.target.value as "WANHAI" | "SITC" | "");
    setSelectedArrivalShip(""); // Reset ship selection when company changes
  };

  const handleArrivalShipChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedArrivalShip(event.target.value);
  };

  return (
    <div style={{ color: "#fff", backgroundColor: "#000", padding: "20px" }}>
      <h1>船のスケジュールを見る</h1>

      <div>
        <h2>積み地</h2>
        <label style={{ color: "#fff" }}>
          船会社:
          <select
            value={selectedDepartureCompany}
            onChange={handleDepartureCompanyChange}
            style={{ backgroundColor: "#fff", color: "#000" }}
          >
            <option value="">選択してください</option>
            {companies.map((company) => (
              <option key={company} value={company}>
                {company}
              </option>
            ))}
          </select>
        </label>
        {selectedDepartureCompany && (
          <div style={{ marginTop: "10px", color: "#fff" }}>
            <strong>選択された船会社:</strong> {selectedDepartureCompany}
          </div>
        )}
        <label style={{ color: "#fff" }}>
          船:
          <select
            value={selectedDepartureShip}
            onChange={handleDepartureShipChange}
            disabled={!selectedDepartureCompany}
            style={{ backgroundColor: "#fff", color: "#000" }}
          >
            <option value="">選択してください</option>
            {selectedDepartureCompany &&
              ships[selectedDepartureCompany].map((ship) => (
                <option key={ship} value={ship}>
                  {ship}
                </option>
              ))}
          </select>
        </label>
        {selectedDepartureShip && (
          <div style={{ marginTop: "10px", color: "#fff" }}>
            <strong>選択された船:</strong> {selectedDepartureShip}
          </div>
        )}
      </div>
    </div>
  );
};

export default Estimates;
