import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { styles } from './stylesheet';
import PickerMenu from './components/PickerMenu';
// import Tomato from './components/Tomato';
import vibrate from './utils/vibrate';
import Buttons from './components/Buttons';
import Timer from './components/Timer';
import HelpInfo from './components/HelpInfo';
import Info from './components/Info';


function leftPadding(n) {
  if (parseInt(n) < 10) {
    return "0" + n.toString();
  } else {
    return n.toString();
  }
}

function getTime(val) {
  return leftPadding(val) + ":00";
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: "25:00",
      workTime: "25:00",
      breakTime: "05:00",
      working: true,
      timer: null,
      paused: false,
      playing: false,
    };
    this.setWorkTimer = this.setWorkTimer.bind(this);
    this.setBreakTimer = this.setBreakTimer.bind(this);
    this.playButton = this.playButton.bind(this);
    this.pauseButton = this.pauseButton.bind(this);
    this.resetButton = this.resetButton.bind(this);
    this.countdown = this.countdown.bind(this);
    this.toggleStatus = this.toggleStatus.bind(this);
  }

  setWorkTimer(val) {
    let newTime = getTime(val);
    this.setState({
      workTime: newTime,
    });
    if (!this.state.timer) {
      this.setState({
        currentTime: newTime,
      });
    }
  }

  setBreakTimer(val) {
    let newTime = getTime(val);
    this.setState({
      breakTime: newTime,
    });
  }

  playButton() {
    if (this.state.paused === true || this.state.playing === false) {
      this.setState({
        timer: setInterval(this.countdown, 1000),
        paused: false,
        playing: true,
      });
    }
  }

  pauseButton () {
    if (this.state.paused === false && this.state.playing === true) {
      clearInterval(this.state.timer);
      this.setState({
        paused: true,
        timer: null,
        playing: false
      });
      console.log(this.state.paused);
    } else if (this.state.paused === true && this.state.playing === false) {
      this.playButton();
    }
  }

  resetButton () {
    this.pauseButton();
    this.setState({
      currentTime: this.state.workTime,
      playing: false,
      paused: false,
      working: true,
    })
  }

  countdown() {
    if (this.state.currentTime === "00:00" && this.state.playing === true) {
      console.log('finished');
      vibrate();
      this.toggleStatus();
    } else {
      let sec = this.state.currentTime.slice(3);
      let min = this.state.currentTime.slice(0, 2);
      if (sec === "00") {
        let newMin = leftPadding(parseInt(min) - 1);
        let newTime = newMin + ":59";
        this.setState({
          currentTime: newTime,
        });
      } else {
        let newSec = leftPadding((parseInt(sec) - 1));
        let newTime = min + ":" + newSec;
        this.setState({
          currentTime: newTime,
        })
      }
    }
  }

  toggleStatus() {
    if (this.state.working) {
      this.setState({
        working: false,
        currentTime: this.state.breakTime,
      })
    } else {
      this.setState({
        working: true,
        currentTime: this.state.workTime,
      })
    }
  }

  render() {
    return (
      <SafeAreaView  style={styles.container}>
        <View style={styles.container}>
          <Info />
          {/*<Tomato />*/}
          <Timer currentTime={this.state.currentTime}/>
          <HelpInfo working={this.state.working} paused={this.state.paused} playing={this.state.playing}/>
          <View style={{flexDirection: 'row'}}>
            <Buttons
              title="Play"
              onPress={this.playButton}
            />
            <Buttons
              title="Pause"
              onPress={this.pauseButton}
            />
            <Buttons
              title="Reset"
              onPress={this.resetButton}
            />
          </View>

          <View style={styles.pickerWrapper}>
            <View style={styles.pickerContainer}>
              <Text>Select work time</Text>
              <Text style={styles.pickerText}>(min):</Text>
              <PickerMenu
                selected={Number(this.state.workTime.slice(0, 2)).toString()}
                onValueChange={this.setWorkTimer}
              />
            </View>
            <View style={styles.pickerContainer}>
              <Text>Select break time</Text>
              <Text style={styles.pickerText}>(min):</Text>
              <PickerMenu
                selected={Number(this.state.breakTime.slice(0, 2)).toString()}
                onValueChange={this.setBreakTimer}
              />
            </View>
          </View>

        </View>
      </SafeAreaView>
    );
  }
}

export default App;

