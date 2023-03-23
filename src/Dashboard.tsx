import { useCallback } from "react";
import { useState } from "react";
import "./Dashboard.css";
import axios from "axios";

// import Survey from "./survey.json";

const Task1 = () => {
    const onFrameIcon1Click = useCallback(() => {
        // Please sync "Task 2" to the project
    }, []);

    const [total, setTotal] = useState({
        "totalSurvey": 0,
        "totalOngoingSurvey": 0,
        "totaldraftSurvey": 0,
        "totalCompletedSurvey": 0,
        "survey": []
    });

    const [arrayOfSurvey, setArrayOfSurvey] = useState([]);
    const [searchSurvey, setSearchSurvey] = useState();


    const searchSurveyByName = (e) => {
        var lowercase = e.target.value.toLowerCase();
        setSearchSurvey(lowercase);
        console.log(searchSurvey);

        const filterData = total.survey.filter((el) => {
            // if no input the data return the original
            if (lowercase === '') {
                return el;
            } else {//return the item which contains the user input
                return el.survey_title.toLowerCase().includes(lowercase);
            }
        })
        setArrayOfSurvey(filterData);
        console.log(arrayOfSurvey);
    };

    const Headers = {
        'x-tenant-id': "63f72bbaf9dfbe6751b8878c",
        'Content-Type': "application/json"
    }

    // total Suvery list
    async function totalSurvey() {
        await axios
            .get("http://localhost:8000/survey/getAllSurveyByEmail/akash@gmail.com", {
                headers: Headers
            })
            .then((res) => {
                setTotal(res.data);
                setArrayOfSurvey(res.data.survey);
            }).catch(error => {
                console.log(error);
            });
    }

    // async function totalSurvey(){
    //   await axios
    //   .get("http://localhost:8000/survey/getAllSurveyByEmail/akash@gmail.com",{
    //     headers : Headers
    //   }).then((res) =>{
    //     setTotal(res.data);
    //   }).catch(error => {
    //     console.log(error);
    //   })
    // }

    // totalSurvey();

    async function ongoingSurvey() {
        await axios
            .get("http://localhost:8000/survey/surveyOngoing/akash@gmail.com", {
                headers: Headers
            })
            .then((res) => {
                setTotal(res.data);
                console.log(res.data);
                setArrayOfSurvey(res.data.survey);
            }).catch(error => {
                console.log(error);
            });
    }

    async function draftSurvey() {
        await axios
            .get("http://localhost:8000/survey/surveyDraft/akash@gmail.com", {
                headers: Headers
            })
            .then((res) => {
                setTotal(res.data);
                setArrayOfSurvey(res.data.survey);
            }).catch(error => {
                console.log(error);
            });
    }

    async function completeSurvey() {
        await axios
            .get("http://localhost:8000/survey/surveyCompleted/akash@gmail.com", {
                headers: Headers
            })
            .then((res) => {
                setTotal(res.data);
                setArrayOfSurvey(res.data.survey);
            }).catch(error => {
                console.log(error);
            });
    }

    function addSurvey() {
        alert("Add survey here...");
    }

    function filterSurvey() {
        alert("filter Survey..");

    }

    return (
        <div className="task-1">
            <div className="sidenavigation">
                <div className="navoption">
                    <img className="task-icon" alt="" src="/task.svg" />
                </div>
                <div className="navoption1">
                    <img className="dashboard-icon" alt="" src="/dashboard.svg" />
                </div>
            </div>
            <div className="survey-table">
                <div className="frame-parent">
                    <div className="welcome-back-anna-parent">
                        <b className="welcome-back-anna">{total.totalSurvey}</b>
                        <div className="youve-learned-80">Total Surveys</div>
                        <div className="youve-learned-801">View All</div>
                        <div className="iconsfact-check-black-24dp-wrapper">
                            <img
                                className="iconsfact-check-black-24dp"
                                alt=""
                                src="/iconsfact-check-black-24dp.svg"
                                onClick={totalSurvey}
                            />
                        </div>
                    </div>
                    <div className="welcome-back-anna-group">
                        <b className="welcome-back-anna">{total.totalOngoingSurvey}</b>
                        <div className="youve-learned-802">Ongoing Surveys</div>
                        <div className="youve-learned-803" onClick={ongoingSurvey}>
                            View All
                        </div>
                        <div className="timely-access-to-care-wrapper">
                            <img
                                className="iconsfact-check-black-24dp"
                                alt=""
                                src="/timely-access-to-care.svg"
                            />
                        </div>
                    </div>
                    <div className="welcome-back-anna-parent">
                        <b className="welcome-back-anna">{total.totaldraftSurvey}</b>
                        <div className="youve-learned-80">Draft Surveys</div>
                        <div className="youve-learned-803" onClick={draftSurvey}>
                            View All
                        </div>
                        <div className="iconsfact-check-black-24dp-wrapper">
                            <img
                                className="iconsfact-check-black-24dp"
                                alt=""
                                src="/reschedule.svg"
                            />
                        </div>
                    </div>
                    <div className="welcome-back-anna-parent">
                        <b className="welcome-back-anna">{total.totalCompletedSurvey}</b>
                        <div className="youve-learned-80">Completed Surveys</div>
                        <div className="youve-learned-803" onClick={completeSurvey}>
                            View All
                        </div>
                        <div className="iconsfact-check-black-24dp-wrapper">
                            <img
                                className="iconsfact-check-black-24dp"
                                alt=""
                                src="/iconscheck-circle-black-24dp.svg"
                            />
                        </div>
                    </div>
                </div>
                <div className="frame-group">
                    <div className="frame-container">
                        <div className="welcome-back-anna-parent1">
                            <b className="welcome-back-anna4">Surveys ({total.survey.length})</b>
                            <div className="frame-parent1">
                                <div className="frame-wrapper">
                                    <div className="iconssearch-black-24dp-1-parent">
                                        <img
                                            className="iconsfact-check-black-24dp"
                                            alt=""
                                            src="/iconssearch-black-24dp-1.svg"
                                        />
                                        <input
                                            style={{
                                                border: "none",
                                                font: "18px",
                                                outline: "none",
                                                background: "none",
                                            }}
                                            onChange={searchSurveyByName}
                                            className="input"
                                            placeholder="Search by Survey Name"
                                        />
                                    </div>
                                </div>
                                <div className="frame-parent2">
                                    <img className="frame-child" alt="" src="/frame-27323.svg" />
                                    <img
                                        className="frame-item"
                                        alt=""
                                        src="/frame-27329.svg"
                                        onClick={addSurvey}
                                    />
                                    <img
                                        onClick={filterSurvey}
                                        className="frame-inner"
                                        alt=""
                                        src="/frame-27330.svg"
                                    />
                                </div>
                            </div>
                        </div>


                        <div className="block-parent">
                            <div className="block">
                                <div className="header">
                                    <div className="cellheadermaster">
                                        <div className="container">
                                            <div className="content">
                                                <div className="label1">Survey Name</div>
                                                <div className="iconssort-wrapper">
                                                    <img
                                                        className="iconsfact-check-black-24dp"
                                                        alt=""
                                                        src="/iconssort.svg"
                                                    />
                                                </div>
                                            </div>
                                            <div className="container-child" />
                                        </div>
                                        <div className="cellheadermaster-child" />
                                    </div>
                                </div>
                            </div>

                            <div className="block1">
                                <div className="header1">
                                    <div className="cellheadermaster">
                                        <div className="container">
                                            <div className="content">
                                                <div className="label1">Created By</div>
                                                <div className="iconssort-wrapper">
                                                    <img
                                                        className="iconsfact-check-black-24dp"
                                                        alt=""
                                                        src="/iconssort1.svg"
                                                    />
                                                </div>
                                            </div>
                                            <div className="container-child" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="block2">
                                <div className="header1">
                                    <div className="cellheadermaster">
                                        <div className="container">
                                            <div className="content">
                                                <div className="label1">Status</div>
                                                <div className="iconssort-wrapper">
                                                    <img
                                                        className="iconsfact-check-black-24dp"
                                                        alt=""
                                                        src="/iconssort2.svg"
                                                    />
                                                </div>
                                            </div>
                                            <div className="container-child" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="block3">
                                <div className="header">
                                    <div className="cellheadermaster">
                                        <div className="container">
                                            <div className="content">
                                                <div className="label1">No of Questions</div>
                                                <div className="iconssort-wrapper">
                                                    <img
                                                        className="iconsfact-check-black-24dp"
                                                        alt=""
                                                        src="/iconssort3.svg"
                                                    />
                                                </div>
                                            </div>
                                            <div className="container-child" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="block3">
                                <div className="header">
                                    <div className="cellheadermaster">
                                        <div className="container">
                                            <div className="content">
                                                <div className="label1">Created On</div>
                                                <div className="iconssort-wrapper">
                                                    <img
                                                        className="iconsfact-check-black-24dp"
                                                        alt=""
                                                        src="/iconssort4.svg"
                                                    />
                                                </div>
                                            </div>
                                            <div className="container-child" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="block3">
                                <div className="header">
                                    <div className="cellheadermaster">
                                        <div className="container">
                                            <div className="content">
                                                <div className="label1">Expiry On</div>
                                                <div className="iconssort-wrapper">
                                                    <img
                                                        className="iconsfact-check-black-24dp"
                                                        alt=""
                                                        src="/iconssort5.svg"
                                                    />
                                                </div>
                                            </div>
                                            <div className="container-child" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Start */}

                        {arrayOfSurvey.map((survey) => {
                            return (
                                <div className="block-parent">
                                    <div className="block">
                                        <div className="table-row-cells">
                                            <div className="contentbox">
                                                <div className="container1">
                                                    <div className="input">{survey.survey_title}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="block1">
                                        <div className="table-row-cells1">
                                            <div className="contentbox1">
                                                <div className="container14">
                                                    <div className="profilecircleinitial">
                                                        {
                                                            (() => {
                                                                const first = survey.created_by.split(" ");
                                                                return (
                                                                    <div className="aa">{first[0][0] + first[1][0]}</div>
                                                                )
                                                            })()
                                                        }

                                                    </div>
                                                    <div className="data">
                                                        <div className="input">{survey.created_by}</div>
                                                        <div className="sublabel-wrapper">
                                                            <div className="sublabel">{survey._id}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="block2">
                                        {(() => {
                                            if (survey.status === "Completed") {
                                                return (
                                                    <div className="table-row-cells24">
                                                        <div className="contentbox">
                                                            <div className="container1">
                                                                <div className="tags1">
                                                                    <div className="label">Completed</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            } else if (survey.status === "Draft") {
                                                return (
                                                    <div className="table-row-cells1">
                                                        <div className="contentbox">
                                                            <div className="container1">
                                                                <div className="tags2">
                                                                    <div className="label">Draft</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            } else {
                                                return (
                                                    <div className="table-row-cells30">
                                                        <div className="contentbox">
                                                            <div className="container1">
                                                                <div className="tags7">
                                                                    <div className="label">Ongoing</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            }
                                        })()}
                                    </div>

                                    <div className="block3">
                                        <div className="table-row-cells1">
                                            <div className="contentbox">
                                                <div className="container1">
                                                    <div className="input">{survey.form.length}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="block3">
                                        <div className="table-row-cells1">
                                            <div className="contentbox">
                                                <div className="container1">
                                                    <div className="input">{survey.createdAt}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block3">
                                        <div className="table-row-cells1">
                                            <div className="contentbox1">
                                                <div className="container14">
                                                    <div className="input">{survey.expiry_date}</div>
                                                    <img className="accountcircle-icon" alt="" />
                                                    <img className="accountcircle-icon" alt="" />
                                                    <img
                                                        className="task-icon"
                                                        alt=""
                                                        src="/iconsmore-vert-black-24dp.svg"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="task-1-child" />
            <div className="topnavigation">
                <div className="lhs">
                    <img className="logo-icon" alt="" src="/logo.svg" />
                    <div className="breadcrumb">
                        <div className="label">Dashboard</div>
                        <img
                            className="iconsfact-check-black-24dp"
                            alt=""
                            src="/iconschevron-right-black-24dp.svg"
                        />
                        <div className="div5">...</div>
                        <img
                            className="iconschevron-right-black-24dp1"
                            alt=""
                            src="/iconschevron-right-black-24dp1.svg"
                        />
                        <div className="item-3">View Details</div>
                    </div>
                </div>
                <div className="rhs">
                    <div className="notification">
                        <img
                            className="iconsnotification-24dp"
                            alt=""
                            src="/iconsnotification-24dp.svg"
                        />
                        <div className="dotinitial">
                            <div className="div6">1</div>
                        </div>
                    </div>
                    <div className="profilecircleinitial12">
                        <div className="aa">AA</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Task1;