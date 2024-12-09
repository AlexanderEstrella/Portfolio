import React from "react";
function Skills() {

    return (
        <section className="skills-section">
            <h2 className="skills-title">Skills</h2>
            <div className="skills-container"> {/* Container for the skill cards */}
                <div className="skill-card">
                    <h3>System Administration</h3>
                    <ul className="no-bullets">
                        <li>Server configuration and maintenance</li>
                        <li>Network setup and management</li>
                        <li>Disaster recovery and backup solutions</li>
                        <li>Security patching and system updates</li>
                        <li>Virtualization and containerization (e.g., VMware, Docker)</li>
                        <li>Automation using PowerShell and Bash</li>
                    </ul>
                </div>
                <div className="skill-card">
                    <h3>Database Management</h3>
                    <ul className="no-bullets">
                        <li>Database design and normalization</li>
                        <li>Query optimization and indexing</li>
                        <li>Database backups and recovery</li>
                        <li>Monitoring and performance tuning</li>
                        <li>SQL Server, MongoDB, and NoSQL databases</li>
                        <li>Cloud database management with Azure SQL</li>
                    </ul>
                </div>
                <div className="skill-card">
                    <h3>Languages & Frameworks</h3>
                    <ul className="no-bullets">
                    <li><strong>Languages:</strong> JavaScript, Python, C#</li>
            <li><strong>JavaScript Frameworks:</strong> React, EJS, Bootstrap</li>
            <li><strong>Python Frameworks:</strong> Django, Flask</li>
            <br>
            </br>
            <li><strong>Libraries:</strong> Jquery</li>
                    </ul>
                </div>
                <div className="skill-card">
                    <h3>Certifications</h3>
                    <ul className="no-bullets">
                        <li>CompTIA A+</li>
                        <li>CompTIA Network+</li>
                        <li>CompTIA Security+</li>
                        <li>CompTIA PenTest+</li>
                        <li>CompTIA CASP+</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Skills;
