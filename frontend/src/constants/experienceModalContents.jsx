const experienceModalContents = {
    "Goldman Sachs Jun 2022 - Aug 2022": (
        <div>
            <div className="modal-section">
                <h5>What I Did</h5>
                <ul>
                    <li>
                        Risk Division
                    </li>
                </ul>
                <hr></hr>
            </div>
        </div>
    ),

    "Georgia Tech Feb 2021 - Present": (
        <div>
            <div className="modal-section">
                <h5>What I Did</h5>
                <ul>
                    <li>
                        Building machine learning models to predict if a conversation on Reddit is civil 
                        or incivil (Python, Scikit-learn, TFIDF, BERT).
                    </li>
                    <li>
                        Investigating how different linguistic features (aspersion, provocation, vulgarity, 
                        stereotypes, etc.) correlate with civility and affect conversations.
                    </li>
                    <li>
                        Leading and facilitating team meetings, delegating research tasks, writing research 
                        paper to submit to conferences (CSCW, ICWSM). 
                    </li>
                </ul>
                <hr></hr>
            </div>
            <div className="modal-section">
                <h5>Technologies and Tools</h5>
                <p>
                    Languages: Python
                    <br></br>
                    Frameworks: BERT, Scikit-learn, Pandas, NumPy, Matplotlib
                </p>
            </div>
        </div>
    ),

    "Capital One Jun 2021 - Aug 2021": (
        <div>
            <div className="modal-section">
                <h5>What I Did</h5>
                <ul>
                    <li>
                        Developed Neo, a web-based machine learning banking chatbot assistant that can 
                        perform intents such as validating accounts and retrieving transactions.  
                    </li>
                    <li>
                        Built natural language processing (NLP) models with Rasa to recognize intents and entities
                        in user messages and determine what the chatbot should do next (dialogue management).
                    </li>
                    <li>
                        Wrote Rasa actions that retrieve account data from data orchestrator via GraphQL 
                        and formulate responses when the user message indicates a banking-related intent.  
                    </li>
                    <li>
                        Created chatbot UI with React.js, react-chatbot-kit, and Bootstrap and displayed 
                        customer profiles from AWS DynamoDB database.
                    </li>
                    <li>
                        Deployed application on Jenkins CICD pipeline with Docker container.
                    </li>
                    <li>
                        Presented and demoed chatbot to senior leaders. Leveraged Agile workflow.
                    </li>
                </ul>
                <hr></hr>
            </div>
            <div className="modal-section">
                <h5>How Does It All Work? What was the Process?</h5>
                <div><strong>The Chatbot:</strong></div>
                <p>
                    Rasa is the package we used to train our NLP models and determine how the chatbot should 
                    respond to a user. The first thing we needed to do was figure out what intents our chatbot 
                    should be able to perform. We used Splunk to determine the 30 most used intents on Capital 
                    One's chatbot, Eno. These were the 30 intents that we prioritized, but by the end of the internship,
                    we had 80+ intents completed. Once we had a list of intents to work on, we put training data from 
                    Eno into a spreadsheet and wrote a script to generate the nlu.yml file, which stores training data 
                    for Rasa to train on. It's cool to note that in nlu.yml, not only do you show examples of user 
                    comments that match with each intent, but you also can tell Rasa what the entities, if any, are in 
                    each comment. 
                </p>
                <p>
                    Before I go on, I should probably explain what intent and entity recognition are. The intent 
                    is the goal the user is trying to achieve by asking the chatbot something, and entities are
                    details in the user message that are necessary to come up with an answer. Let's say a user 
                    asks the chatbot "What are my last 5 transactions?" The intent here is to Retrieve Transactions. 
                    The only entity here is 5, which is the number of transactions to retrieve. Note that you can also 
                    add other entities such as date of the transaction. 
                </p>
                <p>
                    We trained intent recognition models and tested them to make sure they work as expected. We configured 
                    a pipeline to help improve performance. Afterwards, we determined which of our intents were one-shot 
                    answers and worked on matching these answers with their corresponding intents. A one-shot answer is a 
                    pre-defined response that does not have any follow-up. For example, if a user says "Bye!", the
                    chatbot may simply respond with "Bye!". This response is defined in domain.yml and there's no
                    follow-up question.
                </p>
                <p>
                    For more complex intents, we wrote Rasa actions in the backend. Actions that require the retrieval 
                    of financial data retrieve the data from Capital One's data orchestrator with GraphQL. That data is 
                    then processed and formulated into a response that is sent back to the frontend for the chatbot to 
                    respond to the user. We also can do entity recognition in these actions. For instance, if you were 
                    looking to retrieve payments on a certain day, an action can use an entity extractor like Duckling to 
                    recognize that day as a date entity and then insert that date into the request for the data orchestrator. 
                    Some actions also make use of something in Rasa called slot values. Suppose a user has multiple accounts.
                    When a user asks for a banking-related intent the first time, the chatbot will ask the user to select 
                    which of their accounts to use. We wrote our actions such that Rasa will then store that account in a slot. 
                    So, the next time the user asks for a banking-related intent, Rasa will default to the account in the slot.
                </p>
                <p>
                    Rasa also adds enhanced dialogue management, something Eno currently isn't as good at. For example, 
                    suppose a user asks Neo to list their last 5 transactions. The chatbot will respond with those 
                    transactions and then ask if the user wants to see more transactions. From here, there are differnet 
                    routes for the conversation. The user could say yes, no, or straight up ask a different intent. Rasa 
                    allows you to show how each of these scenarios would look in stories.yml. A story is simple one 
                    possible "path" of a conversation. So, Rasa shines in dialogue management because of its ability to 
                    handle various stories.
                </p>
                <div><strong>The Web App:</strong></div>
                <p>
                    React was used to create the entire frontend of the web app. The chat window to communicate with 
                    the chatbot was made with react-chatbot-kit. When a user sends a message to the chatbot, a POST 
                    request in the chatbot's ActionProvider is made to the Rasa backend to get back a response for the 
                    chatbot. In the backend, we created a DynamoDB database to store customer profiles. When you select 
                    another customer profile from the dropdown on the frontend, the chat window is reloaded, and the 
                    details of the current customer profile is pulled from the database and sent to the frontend.
                </p>
                <p>
                    Docker was used to containerize the entire application. We setup Docker images for each part of the 
                    codebase (frontend, Rasa, and backend) and used docker-compose to be able to run the web app on a 
                    development server.
                </p>
                <hr></hr>
            </div>
            <div className="modal-section">
                <h5>Results</h5>
                <ul>
                    <li>
                        We presented our web app to senior leaders at Capital One. They were very impressed with the 
                        project - while they asked every other group 1-2 questions, they ended up asking us 8 questions!
                    </li>
                    <li>
                        We also presented our project to our manager's boss who said that they plan to use aspects of 
                        our project in Eno in the future.
                    </li>
                    <li>
                        Our chatbot supports more than 80 different intents!
                    </li>
                    <li>
                        We successfully made a machine-learning based chatbot. This is important because Eno is currently 
                        rule-based. ML will allow more engaging, dynamic conversations. 
                    </li>
                </ul>
            </div>
            <div className="modal-section">
                <h5>Technologies and Tools</h5>
                <p>
                    Languages: Python, JavaScript, HTML, CSS
                    <br></br>
                    Frameworks: Rasa, React.js, React-chatbot-kit, Bootstrap, GraphQL, jQuery
                    <br></br>
                    Other: Docker, AWS (DynamoDB & S3 Bucket)
                </p>
            </div>
        </div>
    ),

    "Bits of Good Aug 2020 - Dec 2020": (
        <div>
            <div className="modal-section">
                <h5>What I Did</h5>
                <ul>
                    <li>
                        Developed home page of General Solution, a platform that connects volunteers and 
                        donors to nonprofits that work with Bits of Good.
                    </li>
                </ul>
                <hr></hr>
            </div>
            <div className="modal-section">
                <h5>Technologies and Tools</h5>
                <p>
                    Languages: JavaScript
                    <br></br>
                    Frameworks: React.js, Material UI
                </p>
            </div>
        </div>
    ),

    "Georgia Tech Jun 2020 - Apr 2021": (
        <div>
            <div className="modal-section">
                <h5>What I Did</h5>
                <ul>
                    <li>
                        Developed website that aggregates, displays and evaluates COVID-19 forecasts from 
                        official forecasters and users, using React.js and Bootstrap, data visualization 
                        (including drawable chart) with D3.js.
                    </li>
                    <li>
                        Wrote RESTful COVID-19 Aggregator API, automated data collection, data processing, 
                        and storage of COVID-19 forecast data with Python, Pandas, Flask, MongoDB and Github API. Researched loss functions, created scheme for evaluating forecast models.
                    </li>
                    <li>
                        Managed and delegated tasks to team of volunteers from the Coronavirus Visualization 
                        Team (CVT).
                    </li>
                </ul>
                <hr></hr>
            </div>
            <div className="modal-section">
                <h5>How Does It All Work? What was the Process?</h5>
                <div><strong>Data Processing and Visualization:</strong></div>
                <p>
                    The first thing that had to be done was to figure out what kinds of forecast data we wanted 
                    to work with. We found that the Reich Lab from the University of Massachusetts was keeping 
                    track of forecast data from a large variety of sources, particularly with data focused on 
                    cumulative and daily deaths, cases, and hospitalizations. So, I wrote some scripts to fetch the 
                    data. Eventually, I also created an additional Github repo and wrote an automation script to 
                    store all the forecast data in case the Reich lab repo stopped storing the data for whatever reason.
                </p>
                <p>
                    Next, we created the website. We first focused on creating our chart components and making sure 
                    the data was displayed properly. Initially, we used Chart.js but switched to D3.js since D3 allows 
                    for more customized functionality. We also saw that our charts were very jaggedy - this was because 
                    some days tended to see more cases/deaths than others in general. To deal with this, we did two things. 
                    First, we applied a Gaussian transformation to the data. Second, we also used weekly data. Some models 
                    reported weekly forecasts in which only the Gaussian transformation was necessary. For other models that 
                    reported daily predictions, we used the average daily statistic as the value for the weekly forecast. The 
                    same principle was used for confirmed data if the data was daily.
                </p>
                <p>
                    I primarily focused on the Top Forecasts part of the web app. This page ranks all the users scores for their 
                    predictions. You can select the type of forecast (cases, deaths, hospitalizations) as well as the time interval 
                    for evaluating forecasts. When you click on a user in the table, you can see all the predictions that user made 
                    on a chart. As you hover left and right over the chart, you will see different predictions from the user.
                </p>
                <div><strong>Scoring Scheme:</strong></div>
                <p>
                    Initially, to simply test the functionality of the web app, we defaulted to MSE as the loss function for 
                    measuring how well a forecast did. However, we quickly realized we need to come up with our own loss function 
                    since there are several nuances with evaluating time series data:
                    <ul>
                        <li>
                            Short-term predictions are easier to make than long-term predictions. Suppose you make predictions 
                            on three consecutive days. Chances are, you may not have predicted well for the long-term, but you 
                            predicted better in the short-term. There are two problems. First, your predictions are overlapping. 
                            Second, the better short-term predictions will accumulate in the final error score. These two things 
                            can result in a score that is better than what the "actual" score should be.
                        </li>
                        <li>
                            Users make different numbers of forecasts. With MSE, users that make more forecasts will tend to have 
                            larger errors. Loss should be accounted for in the scoring scheme, but consistency is also important.
                        </li>
                    </ul>
                    Here's how we dealt with these problems:
                    <ul>
                        <li>
                            If several of your predictions make a prediction for a certain date, only the most recent prediction 
                            for that date will be used.
                        </li>
                        <li>
                            Separate scores are given for different time-intervals. For instance, a time-interval of 1 week means 
                            the score measures how well your forecast predicts one week ahead of time. The intervals we have are 
                            1 week, 2 weeks, 4 weeks, 8 weeks, and overall. Overall is simply a score calculated by directly lining 
                            up each prediction for a day with the confirmed value for that day. Note that the scoring scheme evaluates 
                            on weekly data. To calculate the scores for the intervals that are not overall, we find the date in the weekly
                            data that is closest to the time-interval.
                        </li>
                        <li>
                            The scoring scheme adds bias against users who make very few predictions. What this means is that based 
                            on the number of predictions you make, a certain value will be added to your score. This value gets 
                            larger the fewer predictions you make.
                        </li>
                    </ul>
                    Once we get a score, we divide the score by a large constant 
                    to decrease the size of the number to make it easier to read on the frontend.
                </p>
            </div>
            <div className="modal-section">
                <h5>Technologies and Tools</h5>
                <p>
                    Languages: Python, JavaScript, HTML, CSS
                    <br></br>
                    Frameworks: Flask, React.js, Pandas, NumPy, Bootstrap, D3.js, Github API, jQuery
                    <br></br>
                    Other: MongoDB, Heroku
                </p>
            </div>
        </div>
    ),

    "Zenabi Data Aug 2018 - Aug 2019": (
        <div>
            <div className="modal-section">
                <h5>What I Did</h5>
                <ul>
                    <li>
                        Analyzed Miami Dolphins game data using Python. Came up with offensive strategies. 
                        Presented to Miami Dolphins coaching staff in Miami, Florida.
                    </li>
                    <li>
                        Built machine learning model and web dashboard to predict attendance of an International
                        Champions Cup (ICC) match. Model predicted about 5700 seats closer to actual attendance
                        than the ICC’s expectations - this could help increase revenue. Data analyzed in Excel and R.
                    </li>
                    <li>
                        Wrote web scraping scripts to collect data for use by other employees at Zenabi.
                    </li>
                </ul>
                <hr></hr>
            </div>
            <div className="modal-section">
                <h5>How Does It All Work? What was the Process?</h5>
                <div><strong>Miami Dolphins Project:</strong></div>
                <p>
                    The project I was assigned was to try to come up with some offensive strategies against the New 
                    England Patriots. I used data I found online about the latest game between the Patrios and the Dolphins.
                    However, offensive and defensive formation data was not available, so I watched the entire game and took 
                    notes of the formations of both teams for each play. From there, I used the dataset I created to generate 
                    insights. I looked at the following:
                    <ul>
                        <li>
                            Pass and run plays
                        </li>
                        <li>
                            Pass and run plays per down
                        </li>
                        <li>
                            Average yardage of each offensive formation and how often each formation was used in the overall 
                            game as well as in each down
                        </li>
                        <li>
                            Patriots defensive strategy
                        </li>
                        <li>
                            Suggestions for what offensive formations to use and when to use them
                        </li>
                        <li>
                            Penalties
                        </li>
                    </ul>
                    I wrote up a two page report and created a brief presentation to share my insights.  
                </p>
                <div><strong>International Champions Cup Project:</strong></div>
                <p>
                    For this project, the International Champions Cup (ICC) organization asked Zenabi to build a model 
                    that could be used to predict attendance at an ICC match. We were given a dataset with 30 previous 
                    ICC matches with data on the two teams that competed, the stadium the match took place, the date of 
                    the match, and the attendance at the match. With very little data, it was quite difficult to try to 
                    build a model that could be used to predict attendance. So, we realized that we would need a lot more 
                    data and test out the use of many different variables to see which variables correlated with attendance. 
                    Variables we tested include Instagram following of the team(s), Instagram followings of the players,
                    Team FIFA ratings, the region and metro populations, the teams market value, match relevancy, and 
                    expected performance score. Match relevancy and expected performance score were metrics we came up with 
                    ourselves. We scrapped the data from various online sources to form our dataset.
                </p>
                <p>
                    Once we had all our data, we calculated the correlations of each variable with attendance. Match 
                    relevancy, market value, Instagram following had the strongest correlations. Player followings 
                    showed higher correlations than the teams' followings. Next, we created a bunch of machine learning 
                    models in Scikit-learn for regression to see which models performed the best. We also did multivariate 
                    regression for various combinations of variables in R. It turns out that the multivariate regression 
                    models performed the best! In fact, one model even managed to achieve R^2 = 0.79, R = 0.89.
                </p>
                <p>
                    We then built a simple web app where you can input two teams and the stadium they play at and get 
                    a prediction on the attendance of the match. The web app was built with basic HTML/CSS/JavaScript 
                    and hosted on an AWS S3 bucket.
                </p>
                <hr></hr>
            </div>
            <div className="modal-section">
                <h5>Results</h5>
                <ul>
                    <li>
                        I got the chance to fly to Miami and talk to various coaching stuff at the Miami Dolphins' training 
                        facility! Even more exciting, the Dolphins ended up beating the Patriots the next game they matched up! 
                        Of course, I don't know if my insights really helped at all, but I certainly learned a good amount about 
                        analytics in sports.
                    </li>
                    <li>
                        Our model for predicted attendance at an ICC match predicted about 5700 seats closer to the actual 
                        attendance compared to the ICC's expectations! Zenabi informed me that the model was sent to the ICC, 
                        so hopefully it's helping them save some potential revenue!
                    </li>
                </ul>
                
                <hr></hr>
            </div>
            <div className="modal-section">
                <h5>Technologies and Tools</h5>
                <p>
                    Languages: Python, R, JavaScript, HTML, CSS
                    <br></br>
                    Frameworks: Scikit-learn, Pandas, BeautifulSoup, jQuery
                    <br></br>
                    Other: Microsoft Excel
                </p>
            </div>
        </div>
    ),

    "Yale University School of Medicine May 2019 - Jun 2019": (
        <div>
            <div className="modal-section">
                <h5>What I Did</h5>
                <ul>
                    <li>
                        Research group studied the role of mitochondria and energy efficiency in 
                        neurodegenerative disease states, in learning, and in memory formation in healthy 
                        brains. We also studied how inhibiting opening of the leak channel in the mitochondria
                        may ameliorate stroke, neurodegenerative and developmental brain diseases. I analyzed
                        images of activity between neurons to collect data for this research project.
                    </li>
                </ul>
                <hr></hr>
            </div>
        </div>
    ),
};

export default experienceModalContents;