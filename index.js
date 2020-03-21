
// question and answer database
const STORE = 
[
                     {
                    question: 'Question 1: Which of the following franchises has won the most games all-time?',
                    answers: [ 
                                    `<li class="option">The New York Yankees
                                        <input type= "image" class="wrong teamLogo" id ="yanks" alt="NY Yankees" src ="http://www.stickpng.com/assets/images/584d4b740a44bd1070d5d494.png"></li>`,
                                    `<li class="option">The Los Angeles Lakers
                                        <input type='image'class="wrong teamLogo" id ="lakers" alt="LA Lakers" src ="https://seeklogo.com/images/L/los-angeles-lakers-logo-805BBEB14F-seeklogo.com.png">`,
                                    `<li class="option">The Dallas Cowboys
                                        <input type='image' class="wrong teamLogo" id ="dal" alt="Dallas Cowboys" src="https://i.pinimg.com/originals/6e/01/97/6e0197b33d0ba5f2ef3d1503e9bc5b45.png"></li>`,
                                    `<li class="option">The San Francisco Giants
                                        <input type='image' class="right teamLogo" id ="sfg" alt="SF Giants" src="http://i.imgur.com/Jve0IoB.png"></li>`,
                                    `<li class="option">The Boston Celtics
                                        <input type='image' class="wrong teamLogo" id ="celts" alt="Boston Celtics" src ="http://www.stickpng.com/assets/images/58419c6aa6515b1e0ad75a61.png"></li>`,
                                    `<li class="option">The Los Angeles Dodgers
                                        <input type='image' class="wrong teamLogo" id ="dodgers" alt="LA Dodgers" src ="http://clipart-library.com/image_gallery/12597.png"></li>`,
                                    `<li class="option">The New England Patriots
                                        <input type='image' class="wrong teamLogo" id ="pats" alt="New England Patroits" src ="http://assets.stickpng.com/thumbs/580b585b2edbce24c47b2b3b.png"></li>  `
                            ],
                    correctAnswer: 'San Francisco Giants'
                      },
                      {
                    question: 'Question 2: Which of the following is the oldest team in Pro Football History?',
                    answers: [
                                  ` <li class="option">The Green Bay Packers
                                         <input type='image' class="wrong teamLogo" id ="Pack" alt="Packers" src ="http://www.stickpng.com/assets/images/580b585b2edbce24c47b2b25.png"></li>`,
                                  ` <li class="option">The New York Giants
                                         <input type='image'class="wrong teamLogo" id ="NYG" alt="NY Giants" src ="http://clipartmag.com/images/football-clear-background-29.png"></li>`,
                                  ` <li class="option">The Arizona Cardinals
                                         <input type='image' class="right teamLogo" id ="cards" alt="Az Cardinals" src="http://assets.stickpng.com/thumbs/580b585b2edbce24c47b2aff.png"></li>`,
                                  ` <li class="option">The Pittsburgh Steelers
                                         <input type='image' class="wrong teamLogo" id ="steel" alt="Steelers" src="http://www.stickpng.com/assets/images/580b585b2edbce24c47b2b4e.png"></li>`,
                                  ` <li class="option">The Cleveland Browns
                                         <input type='image' class="wrong teamLogo" id ="cle" alt="Browns" src ="http://www.pngall.com/wp-content/uploads/2017/05/Cleveland-Browns-Free-Download-PNG.png"></li>`,
                                  ` <li class="option">The Denver Broncos
                                         <input type='image'class="wrong teamLogo" id ="den" alt="Broncos" src ="http://www.stickpng.com/assets/images/580b585b2edbce24c47b2b21.png"></li>`,
                                  ` <li class="option">The Detroit Lions
                                         <input type='image' class="wrong teamLogo" id ="det" alt="Detroit Lions" src ="http://www.stickpng.com/assets/images/580b585b2edbce24c47b2b20.png"></li>  `
                             ],
                    correctAnswer: 'Arizona Cardinals'

                      },
                      {
                    question:   'Question 3: Which of the following was the first NBA team to break the color barrier?',
                    answers: [
                                  `<li class="option">The New York Knicks
                                         <input type="image" class="right teamLogo" id ="nyk" alt="Knicks" src ="http://www.sportsgamblingpodcast.com/sgpod/wp-content/uploads/2017/05/Knicks_Logo.png"></li>`,
                                  `<li class="option">The Golden State Warriors
                                         <input type="image" class="wrong teamLogo" id ="gsw" alt="Warriors" src ="http://www.stickpng.com/assets/images/58419ce2a6515b1e0ad75a69.png"></li>`,
                                  `<li class="option">The Utah Jazz
                                         <input type= "image" class="wrong teamLogo" id ="utah" alt="Jazz" src="https://s3.amazonaws.com/freebiesupply/thumbs/2x/utah-jazz-logo.png"> </li>`,
                                  `<li class="option">The Chicago Bulls
                                         <input type="image" class="wrong teamLogo" id ="chi" alt="Bulls" src=" https://bullsbrasil.files.wordpress.com/2012/11/chicago_bulls-sem-fundo2.png"></li>`,
                                  `<li class="option">The Los Angeles Clippers
                                         <input type="image" class="wrong teamLogo" id ="lac" alt="Clippers" src ="https://retohercules.com/images/clippers-logo-png-4.png"></li>`,
                                  `<li class="option">The Houston Rockets
                                         <input type="image" class="wrong teamLogo" id ="hou" alt="Rockets" src ="http://t01.deviantart.net/1VbOgtAsAIIv1vabKNlKlevValY=/300x200/filters:fixed_height(100,100):origin()/pre13/2dca/th/pre/f/2010/309/5/e/houston_rockets_3d_logo_by_rico560-d328xy1.png"></li>`,
                                  `<li class="option">The Philadelphia 76ers
                                         <input type="image" class="wrong teamLogo" id ="phi" alt="Sixers" src ="https://retohercules.com/images/76ers-logo-png-1.png"></li>`
                            ],
                    correctAnswer: 'New York Knicks'
                      },
                      {
                    question: 'Question 4: Which of the following NHL teams recieved a future star player in a trade in which they only had to give up $1?',
                    answers: [
                                  `<li class="option">The Toronto Maple Leafs
                                         <input type="image" class="wrong teamLogo" id ="leafs" alt="Maple Leafs" src ="http://www.userlogos.org/files/logos/Dopey5150/Toronto%20Maple%20Leafs%202%20copy.png "></li>`,
                                  `<li class="option">The Edmonton Oilers
                                         <input type="image" class="wrong teamLogo" id ="edm" alt="Oilers" src ="https://www.stickpng.com/assets/images/5a4fbb49da2b4f099b95da0f.png">`,
                                  `<li class="option">The San Jose Sharks 
                                         <input type="image" class="wrong teamLogo" id ="sj" alt="Sharks" src="http://logos-download.com/wp-content/uploads/2016/04/San_Jose_Sharks_logo_logotype_emblem.png"></li>`,
                                  `<li class="option">The Pittsburgh Penguins
                                         <input type="image" class="wrong teamLogo" id ="pens" alt="Penguins" src="https://worldsportlogos.com/wp-content/uploads/2018/01/Pittsburgh-Penguins-symbol-600x338.png"></li>`,
                                  `<li class="option">The New York Rangers
                                        <input type="image" class="wrong teamLogo" id ="nyr" alt="Rangers" src ="https://cdn.freebiesupply.com/logos/large/2x/new-york-rangers-3-logo-png-transparent.png"></li>`,
                                  `<li class="option">The Detroit Red Wings
                                        <input type="image" class="right teamLogo" id ="wings" alt="Red Wings" src =" https://logos-download.com/wp-content/uploads/2016/04/Detroit_Red_Wings_logo_emblem_logotype_symbol.png"></li>`,
                                  `<li class="option">The Washington Capitals
                                        <input type="image" class="wrong teamLogo" id ="caps" alt="Capitals" src ="https://enterpriseengineeringnetwork.org/images/washington-logo-png-17.png"></li>`              
                             ],
                    correctAnswer: 'Detroit Red Wings'
                      },
                      {
                    question: 'Question 5: Which of the following MLB teams, has posted the lowest home attendance for a game in the history of baseball?',
                    answers: [
                                  `<li class="option">The Florida Marlins
                                         <input type="image" class="right teamLogo" id ="flr" alt="Marlins" src ="https://sulimanalomran.com/images/marlin-fish-clipart-19.png"></li>`,
                                  `<li class="option">The Montreal Expos 
                                         <input type="image" class="wrong teamLogo" id ="exp" alt="Expos" src ="https://i.pinimg.com/originals/89/82/03/89820315b883420a01b8462f8f45a20e.png"></li>`,
                                  `<li class="option">The Toronto Blue Jays
                                         <input type="image" class="wrong teamLogo" id ="jays" alt="Blue Jays" src="http://logos-download.com/wp-content/uploads/2016/04/Toronto_Blue_Jays_logo_logotype_emblem.png"></li>`,
                                  `<li class="option">The Oakland A's
                                         <input type="image" class="wrong teamLogo" id ="oak" alt="Athletics" src="http://logos-download.com/wp-content/uploads/2016/04/Oakland_Athletics_logo_logotype.png"></li>`,
                                  `<li class="option">The Baltimore Orioles
                                         <input type="image" class="wrong teamLogo" id ="bal" alt="Orioles" src ="https://logos-download.com/wp-content/uploads/2016/04/Baltimore_Orioles_logo_emblem_transparent.png"></li>`,
                                  `<li class="option">The Detroit Tigers
                                         <input type="image" class="wrong teamLogo" id ="tig" alt="Tigers" src ="https://rfathead-res.cloudinary.com/image/upload/h_300,w_300/logos/lgo_mlb_detroit_tigers.png"></li>`,
                                  `<li class="option">The Chicago White Sox
                                         <input type="image" class="wrong teamLogo" id ="chisox" alt="White Sox" src ="http://assets.stickpng.com/thumbs/584d4aff0a44bd1070d5d48d.png"></li> `    
                             ],
                    correctAnswer: 'Florida Marlins'

                      }

];

let score = 0;
let questionNumber = 0;

// START QUIZ --- Function that when we click on the startquiz app, the
// div containing the welcome text and start button are hidden
// also displaying the question bubbles and counter bubbles and answer key 
//  that will display text inside
function startQuiz(){
    $('.start').on('click', function(){
        $('.welcome').hide();
        buildBody();
        renderQuestion();
        displayCounters();
        displayOptions();
    })
};

// BUILD BODY --- Function that adds four divs to the body that will be the building blocks
// for the presentation of the app visually. 
function buildBody(){
    $('body').html('<div class ="legend"></div><div class = "questionBubble"></div><form  class ="answerKey"></form>');
}

// RENDER QUESTIONS --- Function will display the question to the user 
function renderQuestion(){
    let i = 0
    let quizQuestion = STORE[i].question;
    $('.questionBubble').html(`<p class="question">${quizQuestion}</p>`);
}

// DISPLAY COUNTERS --- Function will display both counters initailly when quiz starts 
function displayCounters(){
    let answeredCorrectly = 0;
    let currentQuestion = 1;
     $('.legend').html(`<div class = "counter" id="correctCounter"> <p class="correctText">Answered Correct: ${answeredCorrectly} of 5 </p></div><div class = "counter"> <p class="questionCounter">Question ${currentQuestion} out of 5</p></div>`);
     
};

function displayOptions(){
    let teamAnswers = STORE[0].answers
    $('.answerKey').html("<div class = 'answers'><ul class ='teams'></ul></div>")
     $('.teams').html(`${teamAnswers}`)
     testClicks();
     
}

function testClicks(){
       $('.option').on('click',function(event){
              event.preventDefault();
              alert('this works');
       })
}


function handleQuizApp(){
    startQuiz();
    
}


$(handleQuizApp);
