import {Text, TouchableOpacity, View} from 'react-native';

import {memo} from 'react';
import {style} from '../style/style';
// import {ReactElement, ReactNode} from 'react';
// kiểu dữ liệu trả về có thể là ReactElement hoặc React Node
interface Itemprops {
  content: string;
  onDelete: Function;
  index: number;
}
// ở đây dùng type cũng được
//type Itemprops {
//     content: string;
//   }
//
// nhưng interface có thể kế thừa nhiều được, còn type thì biến có thể
//  có nhiều kiểu dữ liệu được
export const Item = memo(({content, onDelete, index}: Itemprops) => {
  console.log('check' + content + index);
  return (
    <TouchableOpacity onPress={() => onDelete(index)}>
      <View style={[style.item, style.mt_16]}>
        <View style={style.subItem}>
          <View style={style.square}></View>
          <Text>{content}</Text>
        </View>
        <View style={style.circle}></View>
      </View>
    </TouchableOpacity>
  );
});
