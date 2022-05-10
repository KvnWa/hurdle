import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react"
import Navbar from "./Navbar";
import Favorites from "./Favorites"
import LetterContainer from "./LetterContainer";
import SixLetters from "./SixLetter"
import SevenLetters from "./SevenLetters";
import EightLetters from "./EightLetter";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isFavorited, setIsFavorited] = useState(false)
  const [unfilteredWord, setUnfilteredWord] = useState([])
  const [gameState, setGameState] = useState(false)
  const [shouldFetch, setShouldFetch] = useState(true)
  const [showWinModal, setShowWinModal] = useState(false)
  const [showLoseModal, setShowLoseModal] = useState(false)
  const [showDictionary, setShowDictionary] = useState(false)
  const [counter, setCounter] = useState(1)
  const [letterLength, setLetterLength] = useState(5)
  const [word, setWord] = useState("")
  const [pronunciation, setPronunciation] = useState("")
  const [english, setEnglish] = useState("")
  const [def, setDef] = useState("")
  const bgColor = isDarkMode ? "black" : "white"
  const textColor = isDarkMode ? "white" : "black"
  const checked = isDarkMode ? true : false

  console.log(process.env);

  // First dictionary API that returns random 5-letter word
  useEffect(() => {
    if (!shouldFetch) return
    fetch(`https://wordsapiv1.p.rapidapi.com/words/?random=true&letters=${letterLength}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_API_KEY
        }
      }
    )
      .then(res => res.json())
      .then(data => setUnfilteredWord(data.word))
  }, [letterLength, word, gameState])

  // Second dictionary API, slightly more accurate information
  useEffect(() => {
    fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${unfilteredWord}?key=c7d47a35-1538-4a8c-a6a6-5d47170ded58`)
      .then(res => res.json())
      .then(data => {

        // No duplicate letters in random words
        // let wordSplit = unfilteredWord.split('')
        // let letterCount = {}
        // wordSplit.forEach(letter => {
        //   if (letterCount[letter]) {
        //     letterCount[letter] += 1
        //   } else {
        //     letterCount[letter] = 1
        //   }
        // })
        // let wordConditional = Object.values(letterCount).every(item => item === 1)

        if (data[0].hwi !== undefined && data[0].fl.indexOf("name") === -1 && unfilteredWord.indexOf(" ") === -1 && unfilteredWord.indexOf("-") === -1 && unfilteredWord.indexOf("'") === -1 && (data[0].shortdef[0]).length <= 150 && data[0].fl !== "abbreviation") {
          setShouldFetch(false)
          setWord(unfilteredWord)
          data[0].hwi.prs ? setPronunciation(data[0].hwi.prs[0].mw) : setPronunciation("")
          setEnglish(data[0].fl)
          setDef(data[0].shortdef[0])
        } else {
          setWord(unfilteredWord)
        }
      })

  }, [unfilteredWord])

  const rendererFunction = (func, val) => {
    func(val)
  }

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Navbar
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
            bgColor={bgColor}
            textColor={textColor}
            checked={checked}
            setShowLoseModal={setShowLoseModal}
            setGameState={setGameState}
            setShowDictionary={setShowDictionary}
          />
          <LetterContainer
            textColor={textColor}
            bgColor={bgColor}
            word={word.toUpperCase()}
            pronunciation={pronunciation}
            english={english}
            def={def}
            isFavorited={isFavorited}
            setIsFavorited={setIsFavorited}
            counter={counter}
            setCounter={setCounter}
            setLetterLength={setLetterLength}
            gameState={gameState}
            setGameState={setGameState}
            setShouldFetch={setShouldFetch}
            showWinModal={showWinModal}
            setShowWinModal={setShowWinModal}
            showLoseModal={showLoseModal}
            setShowLoseModal={setShowLoseModal}
            rendererFunction={rendererFunction}
            showDictionary={showDictionary}
            setShowDictionary={setShowDictionary}
          />
        </Route>
        <Route exact path="/favorites">
          <Favorites
            bgColor={bgColor}
            textColor={textColor}
            isDarkMode={isDarkMode}
          />
        </Route>
        <Route exact path="/six">
          <SixLetters
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
            textColor={textColor}
            bgColor={bgColor}
            word={word}
            pronunciation={pronunciation}
            english={english}
            def={def}
            isFavorited={isFavorited}
            setIsFavorited={setIsFavorited}
            counter={counter}
            setCounter={setCounter}
            setLetterLength={setLetterLength}
            gameState={gameState}
            setGameState={setGameState}
            setShouldFetch={setShouldFetch}
            checked={checked}
            showWinModal={showWinModal}
            setShowWinModal={setShowWinModal}
            showLoseModal={showLoseModal}
            setShowLoseModal={setShowLoseModal}
            rendererFunction={rendererFunction}
          />
        </Route>
        <Route exact path="/seven">
          <SevenLetters
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
            textColor={textColor}
            bgColor={bgColor}
            word={word}
            pronunciation={pronunciation}
            english={english}
            def={def}
            isFavorited={isFavorited}
            setIsFavorited={setIsFavorited}
            counter={counter}
            setCounter={setCounter}
            setLetterLength={setLetterLength}
            gameState={gameState}
            setGameState={setGameState}
            setShouldFetch={setShouldFetch}
            checked={checked}
            showWinModal={showWinModal}
            setShowWinModal={setShowWinModal}
            showLoseModal={showLoseModal}
            setShowLoseModal={setShowLoseModal}
            rendererFunction={rendererFunction}
          />
        </Route>
        <Route exact path="/eight">
          <EightLetters
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
            textColor={textColor}
            bgColor={bgColor}
            word={word}
            pronunciation={pronunciation}
            english={english}
            def={def}
            isFavorited={isFavorited}
            setIsFavorited={setIsFavorited}
            counter={counter}
            setCounter={setCounter}
            setLetterLength={setLetterLength}
            gameState={gameState}
            setGameState={setGameState}
            setShouldFetch={setShouldFetch}
            checked={checked}
            showWinModal={showWinModal}
            setShowWinModal={setShowWinModal}
            showLoseModal={showLoseModal}
            setShowLoseModal={setShowLoseModal}
            rendererFunction={rendererFunction}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
