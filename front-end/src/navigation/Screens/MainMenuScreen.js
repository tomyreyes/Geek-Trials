import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'
import { Button, Picker } from 'native-base'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectCategory, selectDifficulty } from '../../actions'
import categories from '../../Categories.json'

class MainMenuScreen extends Component {
  start = () => {
    const {
      navigation: { navigate },
      category,
      difficulty,
    } = this.props
    if (category && difficulty) {
      navigate('GameScreen')
    }
  }

  render() {
    const { selectCategory, selectDifficulty } = this.props
    const categoryOptions = categories.types.map(cat => (
      <Picker.Item key={cat.id} label={cat.name} value={cat.id} />
    ))
    return (
      <View>
        <Text>Geek Trials</Text>
        <Text>Choose a Category</Text>
        <Picker
          selectedValue="python"
          style={{ height: 50, width: 100 }}
          onValueChange={itemValue => selectCategory(itemValue)}
        >
          {categoryOptions}
        </Picker>
        <Text>Choose your Difficulty</Text>
        <Picker
          selectedValue="python"
          style={{ height: 50, width: 100 }}
          onValueChange={difficulty => selectDifficulty(difficulty)}
        >
          <Picker.Item label="Easy" value="easy" />
          <Picker.Item label="Medium" value="medium" />
          <Picker.Item label="Hard" value="hard" />
        </Picker>
        <Button success>
          <Text> Start Game </Text>
        </Button>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  category: state.categoryReducer.id,
  difficulty: state.difficultyReducer.difficulty,
})

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    selectCategory,
    selectDifficulty,
  },
  dispatch,
)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainMenuScreen)

MainMenuScreen.propTypes = {
  navigation: PropTypes.shape.isRequired,
  category: PropTypes.number,
  difficulty: PropTypes.string,
  selectCategory: PropTypes.func.isRequired,
  selectDifficulty: PropTypes.func.isRequired,
}

MainMenuScreen.defaultProps = {
  category: null,
  difficulty: null,
}
