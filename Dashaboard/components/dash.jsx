


import React, { useEffect, useState } from "react";
import './Dashboard.css'
// import axios from "axios";


interface Survey {
    name: string;
    status: string;
    questions: number;
    createdOn: Date;
    expirationDate: Date;
}
interface SurveyStats {
    total: number;
    ongoing: number;
    draft: number;
    completed: number;
}
const Dashboard: React.FC = () => {
    const [surveys, setSurveys] = useState < Survey[] > ([]);
    const [stats, setStats] = useState < SurveyStats > ({
        total: 0,
        ongoing: 0,
        draft: 0,
        completed: 0,
    });

    useEffect(() => {
        // This is just sample data for now, replace it with axios call to backend
        const sampleData = {

            surveys: [
                {
                    name: 'Survey 1',
                    status: 'completed',
                    questions: 10,
                    createdOn: new Date('2022-01-01'),
                    expirationDate: new Date('2022-02-01'),
                },
                {
                    name: 'Survey 2',
                    status: 'ongoing',
                    questions: 5,
                    createdOn: new Date('2022-02-01'),
                    expirationDate: new Date('2022-03-01'),
                },
                {
                    name: 'Survey 3',
                    status: 'draft',
                    questions: 7,
                    createdOn: new Date('2022-03-01'),
                    expirationDate: new Date('2022-04-01'),
                },
            ],

            stats: {
                total: 3,
                ongoing: 1,
                draft: 1,
                completed: 1,
            },
        };
        setSurveys(sampleData.surveys);
        setStats(sampleData.stats);
    }, []);

    return (
        <>
            <div>
                <div>
                    <h2>
                        <div className="survey-stats">Total Surveys: {stats.total}</div>
                        <div className="survey-stats">Ongoing Surveys: {stats.ongoing}</div>
                        <div className="survey-stats">Draft Surveys: {stats.draft}</div>
                        <div className="survey-stats">Completed Surveys: {stats.completed}</div>

                    </h2>
                </div>
                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                <div className="head">
                                    <th>Name</th>
                                    <th>Status</th>
                                    <th>Questions</th>
                                    <th>Created On</th>
                                    <th>Expiration Date</th>
                                </div>
                            </tr>

                        </thead>
                        <tbody>
                            {surveys.map((survey) => (
                                <tr key={survey.name}>
                                    <td>{survey.name}</td>
                                    <td>{survey.status}</td>
                                    <td>{survey.questions}</td>
                                    <td>{survey.createdOn.toLocaleDateString()}</td>
                                    <td>{survey.expirationDate.toLocaleDateString()}</td>
                                </tr>))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>

    );
};
export default Dashboard;