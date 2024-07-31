"use client";

import React, { useState } from "react";

const Estimates: React.FC = () => {
  const [selectedDepartureCountry, setSelectedDepartureCountry] = useState<
    "中国" | "日本" | ""
  >("");
  const [selectedDeparturePort, setSelectedDeparturePort] =
    useState<string>("");

  const [selectedArrivalCountry, setSelectedArrivalCountry] = useState<
    "中国" | "日本" | ""
  >("");
  const [selectedArrivalPort, setSelectedArrivalPort] = useState<string>("");

  const countries: Array<"中国" | "日本"> = ["中国", "日本"];
  const ports: { [key in "中国" | "日本"]: string[] } = {
    中国: ["上海", "蛇口"],
    日本: ["東京", "神戸"],
  };

  const handleDepartureCountryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedDepartureCountry(event.target.value as "中国" | "日本" | "");
    setSelectedDeparturePort(""); // Reset port selection when country changes
  };

  const handleDeparturePortChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedDeparturePort(event.target.value);
  };

  const handleArrivalCountryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedArrivalCountry(event.target.value as "中国" | "日本" | "");
    setSelectedArrivalPort(""); // Reset port selection when country changes
  };

  const handleArrivalPortChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedArrivalPort(event.target.value);
  };

  return (
    <div style={{ color: "#fff", backgroundColor: "#000", padding: "20px" }}>
      <h1>見積比較</h1>

      <div>
        <h2>積み地</h2>
        <label style={{ color: "#fff" }}>
          国:
          <select
            value={selectedDepartureCountry}
            onChange={handleDepartureCountryChange}
            style={{ backgroundColor: "#fff", color: "#000" }}
          >
            <option value="">選択してください</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </label>
        {selectedDepartureCountry && (
          <div style={{ marginTop: "10px", color: "#fff" }}>
            <strong>選択された国:</strong> {selectedDepartureCountry}
          </div>
        )}
        <label style={{ color: "#fff" }}>
          港:
          <select
            value={selectedDeparturePort}
            onChange={handleDeparturePortChange}
            disabled={!selectedDepartureCountry}
            style={{ backgroundColor: "#fff", color: "#000" }}
          >
            <option value="">選択してください</option>
            {selectedDepartureCountry &&
              ports[selectedDepartureCountry].map((port) => (
                <option key={port} value={port}>
                  {port}
                </option>
              ))}
          </select>
        </label>
        {selectedDeparturePort && (
          <div style={{ marginTop: "10px", color: "#fff" }}>
            <strong>選択された港:</strong> {selectedDeparturePort}
          </div>
        )}
      </div>

      <div style={{ marginTop: "20px" }}>
        <h2>仕向地</h2>
        <label style={{ color: "#fff" }}>
          国:
          <select
            value={selectedArrivalCountry}
            onChange={handleArrivalCountryChange}
            style={{ backgroundColor: "#fff", color: "#000" }}
          >
            <option value="">選択してください</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </label>
        {selectedArrivalCountry && (
          <div style={{ marginTop: "10px", color: "#fff" }}>
            <strong>選択された国:</strong> {selectedArrivalCountry}
          </div>
        )}
        <label style={{ color: "#fff" }}>
          港:
          <select
            value={selectedArrivalPort}
            onChange={handleArrivalPortChange}
            disabled={!selectedArrivalCountry}
            style={{ backgroundColor: "#fff", color: "#000" }}
          >
            <option value="">選択してください</option>
            {selectedArrivalCountry &&
              ports[selectedArrivalCountry].map((port) => (
                <option key={port} value={port}>
                  {port}
                </option>
              ))}
          </select>
        </label>
        {selectedArrivalPort && (
          <div style={{ marginTop: "10px", color: "#fff" }}>
            <strong>選択された港:</strong> {selectedArrivalPort}
          </div>
        )}
      </div>
    </div>
  );
};

export default Estimates;
