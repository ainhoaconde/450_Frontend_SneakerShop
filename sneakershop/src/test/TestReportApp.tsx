import React from 'react';

function TestReportApp() {
  const reportFiles = [
    // Liste der Testberichtsdateien hier
    "report1.html",
    "report2.html",
    // Weitere Dateien...
  ];

  return (
    <div>
      <h1>Cypress Test Reports</h1>
      <ul>
        {reportFiles.map((file, index) => (
          <li key={index}>
            <a href={process.env.PUBLIC_URL + '/' + file} target="_blank" rel="noopener noreferrer">
              {file}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TestReportApp;
