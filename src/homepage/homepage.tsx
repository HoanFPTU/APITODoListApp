/* eslint-disable prettier/prettier */
import React, {Component, ReactElement} from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Item} from './components/TaskItem';
import {style} from './style/style';
import {getTask} from '../api/Api';

interface iProps {}
interface iState {
  titleItem: string[];
  input: string;
}
class HomePage extends Component<iProps, iState> {
  // khai báo let thì nó ko chịu
  componentDidMount() {
    getTask().then(res => {
      const data = res.data;
      data.forEach((task: any) => {
        this.Listtext.push(task.title);
      });

      this.setState({titleItem: this.Listtext});
    });
  }

  private Listtext: string[] = [];
  constructor(props: any) {
    super(props);

    this.state = {
      titleItem: [],
      input: '',
    };
  }
  // 15-18 có cũng được ko cũng được mà
  private _onPress = () => {
    this.Listtext.push(this.state.input);

    this.setState({titleItem: this.Listtext, input: ''});
  };
  private _onTextChange = (text: string) => {
    this.setState({input: text});
  };
  private _renderTaskItem = (): Array<ReactElement> => {
    {
      return this.state.titleItem.map((text, index) => (
        <Item
          content={text}
          key={index}
          index={index}
          onDelete={this._onDelete}
        />
      ));
    }
  };
  private _onDelete = (index: number) => {
    this.Listtext.splice(index, 1);
    //  splice là xóa từ vị trí index, bao nhiêu phần tử
    this.setState({titleItem: this.Listtext});
  };
  render() {
    return (
      <View style={style.container}>
        <Text style={style.title}>Today's Tasks</Text>
        <ScrollView>{this._renderTaskItem()}</ScrollView>
        <View style={style.wrapper}>
          <TextInput
            placeholder="Input your task"
            style={[style.input, style.shadow]}
            onChangeText={this._onTextChange}
            value={this.state.input}
          />
          {/* <Button onPress={this._onPress} title="123" /> */}
          <TouchableOpacity
            onPress={this._onPress}
            style={[style.btn, style.shadow]}>
            <Image source={require('../image/add.png')} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default HomePage;
